import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(groupRef, camera) {
  useEffect(() => {
    if (!groupRef.current || !camera) return;

    const group = groupRef.current;

    // SIEMPRE mirar al centro (evita “miradas rotas”)
    const lookAtCenter = () => {
      camera.lookAt(0, 0, 0);
    };

    gsap.ticker.add(lookAtCenter);

    // suavizado global extra
    const smooth = 1.2;

    const tl = gsap.timeline({
      defaults: {
        ease: "power2.out",
      },
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: smooth,
      },
    });

    // -------------------------
    // 🔹 FASE 1: Vista general
    // -------------------------
    tl.to(
      camera.position,
      {
        x: 0,
        y: 1,
        z: 7,
      },
      0,
    );

    // rotación ligera
    tl.to(
      group.rotation,
      {
        y: 0,
      },
      0,
    );

    // -------------------------
    // 🔹 FASE 2: acercamiento suave
    // -------------------------
    tl.to(
      camera.position,
      {
        z: 5.2,
        y: 1.1,
      },
      0.25,
    );

    // -------------------------
    // 🔹 FASE 3: giro controlado
    // -------------------------
    tl.to(
      group.rotation,
      {
        y: Math.PI * 0.35,
      },
      0.3,
    );

    // -------------------------
    // 🔹 FASE 4: zoom fuerte pero suave
    // -------------------------
    tl.to(
      camera.position,
      {
        z: 3.2,
        x: 1.2,
        y: 1.4,
      },
      0.55,
    );

    // -------------------------
    // 🔹 FASE 5: hero final (impacto)
    // -------------------------
    tl.to(
      camera.position,
      {
        z: 4.5,
        x: 0,
        y: 1.6,
      },
      0.85,
    );

    tl.to(
      group.rotation,
      {
        y: Math.PI * 0.6,
      },
      0.85,
    );

    return () => {
      gsap.ticker.remove(lookAtCenter);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [groupRef, camera]);
}
