import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/*
 * ─────────────────────────────────────────────────────────────────
 *  FLUID SPATIAL ANIMATION  —  Honda Shadow
 *
 *  Filosofía:
 *   • La moto NO está anclada al centro — viaja libremente por
 *     el espacio: entra, sale, cruza la pantalla, se aleja.
 *   • El scrub es alto (4.5) — sensación de masa y fluidez física.
 *   • La cámara hace movimientos amplios, no micro-órbitas.
 *   • FOV varía entre 22 (telefoto comprimido) y 55 (ultra-wide).
 *   • La moto se inclina (lean) en Z al "girar" — como si rodara.
 *   • lookAt nunca se queda quieto — sigue el movimiento real.
 *   • Idle: float generoso + swing lateral lento.
 *
 *  Keyframes de posición de la MOTO (group.position):
 *   0.00  centro  (0, 0, 0)
 *   0.12  se aleja hacia la derecha fuera de frame  (4, -0.5, -2)
 *   0.25  entra desde abajo-izquierda              (-3, -2, 0)
 *   0.40  primer plano centrado — llena pantalla   (0, 0.4, 2)
 *   0.55  barre hacia la derecha — perfil limpio   (2.5, 0, 0)
 *   0.68  sube y se aleja — plano aéreo            (-1, 2, -1)
 *   0.80  regresa agresivo desde abajo             (0.5, -1.5, 1.5)
 *   1.00  finale — vuelve al centro con presencia  (0, 0, 0)
 * ─────────────────────────────────────────────────────────────────
 */

export function useScrollAnimation(groupRef, camera) {
  const lookTarget = useRef({ x: 0, y: 0, z: 0 });
  const fovTarget = useRef(40);
  const lerpSpeed = useRef(0.055); // controla la fluidez del lookAt

  useEffect(() => {
    if (!groupRef.current || !camera) return;

    const group = groupRef.current;
    const lt = lookTarget.current;

    /* ── Frame loop: lookAt fluido + FOV ───────────────────────── */
    const frameTick = () => {
      camera.lookAt(lt.x, lt.y, lt.z);
      camera.fov += (fovTarget.current - camera.fov) * 0.045;
      camera.updateProjectionMatrix();
    };
    gsap.ticker.add(frameTick);

    /* ── Estado inicial ─────────────────────────────────────────── */
    gsap.set(camera.position, { x: 0, y: 1.0, z: 10 });
    gsap.set(group.rotation, { x: 0, y: 0.1, z: 0 });
    gsap.set(group.position, { x: 0, y: 0, z: 0 });
    gsap.set(group.scale, { x: 1, y: 1, z: 1 });
    lt.x = 0;
    lt.y = 0;
    lt.z = 0;
    fovTarget.current = 40;

    /* ── Timeline principal ─────────────────────────────────────── */
    const tl = gsap.timeline({
      defaults: { ease: "none" }, // ease POR SEGMENTO, no global
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 4.5, // masa física máxima — muy fluido
        onUpdate: ({ progress: p }) => {
          /* FOV journey — cambia la "lente" a lo largo del scroll */
          if (p < 0.08) {
            fovTarget.current = gsap.utils.interpolate(40, 32, p / 0.08);
          } else if (p < 0.2) {
            fovTarget.current = gsap.utils.interpolate(
              32,
              22,
              (p - 0.08) / 0.12,
            );
          } // telefoto máximo
          else if (p < 0.35) {
            fovTarget.current = gsap.utils.interpolate(
              22,
              50,
              (p - 0.2) / 0.15,
            );
          } // abre a ultra-wide
          else if (p < 0.5) {
            fovTarget.current = gsap.utils.interpolate(
              50,
              28,
              (p - 0.35) / 0.15,
            );
          } // comprime al entrar
          else if (p < 0.65) {
            fovTarget.current = gsap.utils.interpolate(
              28,
              38,
              (p - 0.5) / 0.15,
            );
          } else if (p < 0.78) {
            fovTarget.current = gsap.utils.interpolate(
              38,
              55,
              (p - 0.65) / 0.13,
            );
          } // crane wide
          else if (p < 0.9) {
            fovTarget.current = gsap.utils.interpolate(
              55,
              30,
              (p - 0.78) / 0.12,
            );
          } // ground comprime
          else {
            fovTarget.current = gsap.utils.interpolate(30, 36, (p - 0.9) / 0.1);
          }

          /* lookAt sigue la posición real de la moto con suavidad */
          const gp = group.position;
          gsap.to(lt, {
            x: gp.x * 0.35,
            y: gp.y * 0.25,
            z: 0,
            duration: 1.8,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      },
    });

    /* ════════════════════════════════════════════════════════════
       FASE 0→0.12  —  HERO: dolly-in, moto se acerca desde lejos
       Cámara: empuja hacia adelante
       Moto:   crece, ligera rotación de bienvenida
    ════════════════════════════════════════════════════════════ */
    tl.to(camera.position, { x: 0.5, y: 0.8, z: 6.5, ease: "power2.out" }, 0);
    tl.to(group.rotation, { y: 0.3, z: 0, ease: "power1.inOut" }, 0);
    tl.to(group.position, { x: 0, y: 0, z: 0, ease: "power1.out" }, 0);
    tl.to(group.scale, { x: 1.1, y: 1.1, z: 1.1, ease: "power2.out" }, 0);

    /* ════════════════════════════════════════════════════════════
       FASE 0.12→0.25  —  EXIT RIGHT: la moto sale por la derecha
       Cámara: se queda atrás, la moto "escapa"
       Sensación: la moto tiene vida propia, no está anclada
    ════════════════════════════════════════════════════════════ */
    tl.to(group.position, { x: 5, y: -0.6, z: -1.5, ease: "power3.in" }, 0.12);
    tl.to(
      group.rotation,
      { y: -Math.PI * 0.35, z: -0.06, ease: "power2.in" },
      0.12,
    );
    tl.to(group.scale, { x: 0.75, y: 0.75, z: 0.75, ease: "power3.in" }, 0.12);
    /* Cámara intenta seguirla pero llega tarde */
    tl.to(
      camera.position,
      { x: 2.5, y: 0.5, z: 8, ease: "power1.inOut" },
      0.12,
    );

    /* ════════════════════════════════════════════════════════════
       FASE 0.25→0.40  —  ENTRY LEFT: entra desde izquierda y abajo
       La moto aparece grande desde fuera de frame
       Cámara: se desplaza izquierda para recibirla
    ════════════════════════════════════════════════════════════ */
    tl.to(group.position, { x: -4, y: -2.5, z: 0, ease: "expo.out" }, 0.25);
    tl.to(
      group.rotation,
      { y: Math.PI * 0.15, z: 0.05, ease: "expo.out" },
      0.25,
    );
    tl.to(group.scale, { x: 1.3, y: 1.3, z: 1.3, ease: "expo.out" }, 0.25);
    tl.to(
      camera.position,
      { x: -2, y: -0.5, z: 5, ease: "power2.inOut" },
      0.25,
    );

    /* ════════════════════════════════════════════════════════════
       FASE 0.40→0.55  —  CLOSE FILL: moto llena el frame
       Se centra y agranda — plano americano muy cerrado
       Cámara: empuja agresivo, FOV comprimido = telefoto aplastado
    ════════════════════════════════════════════════════════════ */
    tl.to(
      group.position,
      { x: 0.3, y: 0.5, z: 1.5, ease: "power4.inOut" },
      0.4,
    );
    tl.to(
      group.rotation,
      { y: Math.PI * 0.22, z: -0.02, ease: "power3.inOut" },
      0.4,
    );
    tl.to(
      group.scale,
      { x: 1.45, y: 1.45, z: 1.45, ease: "power4.inOut" },
      0.4,
    );
    tl.to(
      camera.position,
      { x: 1.2, y: 0.2, z: 5.2, ease: "power3.inOut" },
      0.4,
    );

    /* ════════════════════════════════════════════════════════════
       FASE 0.55→0.68  —  PROFILE SWEEP: barre a la derecha
       Perfil puro de silueta — la moto sale pero se mantiene visible
       Cámara: sigue el movimiento lateral
    ════════════════════════════════════════════════════════════ */
    tl.to(group.position, { x: 3, y: 0, z: 0, ease: "power2.inOut" }, 0.55);
    tl.to(
      group.rotation,
      { y: Math.PI * 0.5, z: 0, ease: "power2.inOut" },
      0.55,
    );
    tl.to(
      group.scale,
      { x: 1.15, y: 1.15, z: 1.15, ease: "power1.inOut" },
      0.55,
    );
    tl.to(camera.position, { x: 4, y: 0.6, z: 6, ease: "power2.inOut" }, 0.55);

    /* ════════════════════════════════════════════════════════════
       FASE 0.68→0.80  —  AERIAL DRIFT: sube y se aleja
       La moto se eleva en el espacio — plano grúa abierto
       Cámara: sube dramáticamente, FOV ultra-wide
    ════════════════════════════════════════════════════════════ */
    tl.to(
      group.position,
      { x: -1.5, y: 2.8, z: -1, ease: "power2.inOut" },
      0.68,
    );
    tl.to(
      group.rotation,
      { y: Math.PI * 0.72, x: 0.06, z: 0.03, ease: "power2.inOut" },
      0.68,
    );
    tl.to(group.scale, { x: 1.0, y: 1.0, z: 1.0, ease: "power1.inOut" }, 0.68);
    tl.to(
      camera.position,
      { x: -0.5, y: 4.5, z: 7, ease: "power3.inOut" },
      0.68,
    );

    /* ════════════════════════════════════════════════════════════
       FASE 0.80→0.92  —  GROUND ATTACK: rasante desde abajo
       La moto cae y se acerca agresiva desde el suelo
       Cámara: se aplasta contra el suelo, mirando arriba
    ════════════════════════════════════════════════════════════ */
    tl.to(group.position, { x: 0.8, y: -2, z: 2, ease: "expo.inOut" }, 0.8);
    tl.to(
      group.rotation,
      { y: Math.PI * 0.88, x: -0.08, z: -0.04, ease: "expo.inOut" },
      0.8,
    );
    tl.to(group.scale, { x: 1.35, y: 1.35, z: 1.35, ease: "expo.inOut" }, 0.8);
    tl.to(
      camera.position,
      { x: 0.5, y: -0.8, z: 5.5, ease: "expo.inOut" },
      0.8,
    );

    /* ════════════════════════════════════════════════════════════
       FASE 0.92→1.00  —  FINALE: regresa al centro con poder
       La moto vuelve, completa la rotación, se asienta
       Cámara: retrocede a distancia de presentación
    ════════════════════════════════════════════════════════════ */
    tl.to(group.position, { x: 0, y: 0, z: 0, ease: "power4.out" }, 0.92);
    tl.to(
      group.rotation,
      { y: Math.PI * 2, x: 0, z: 0, ease: "power4.out" },
      0.92,
    );
    tl.to(group.scale, { x: 1.12, y: 1.12, z: 1.12, ease: "power3.out" }, 0.92);
    tl.to(camera.position, { x: 0, y: 1.2, z: 7, ease: "power4.out" }, 0.92);

    /* ── Idle: float generoso + swing lateral ──────────────────── */
    const floatTween = gsap.to(group.position, {
      y: "+= 0.12",
      duration: 2.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    const swingTween = gsap.to(group.rotation, {
      z: 0.018,
      duration: 3.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      gsap.ticker.remove(frameTick);
      floatTween.kill();
      swingTween.kill();
      gsap.killTweensOf(lt);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [groupRef, camera]);
}
