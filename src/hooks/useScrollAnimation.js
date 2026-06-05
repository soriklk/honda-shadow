import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(groupRef, camera) {
  useEffect(() => {
    if (!groupRef.current || !camera) return;

    const group = groupRef.current;

    // Mantener cámara mirando al centro
    const lookAtCenter = () => {
      camera.lookAt(0, 0, 0);
    };
    gsap.ticker.add(lookAtCenter);

    const smooth = 0.8;

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: smooth,
      },
    });

    // ─────────────────────────────────────────
    // FASE 0 (0.00): Estado inicial - MacBook cerrado, vista frontal centrada
    // ─────────────────────────────────────────
    tl.set(camera.position, { x: 0, y: 0, z: 5.0 }, 0);
    tl.set(group.rotation, { x: 0, y: 0, z: 0 }, 0);
    tl.set(group.position, { y: -0.3 }, 0);

    // ─────────────────────────────────────────
    // FASE 0.5 (0.00 → 0.08): Entrada suave del hero centrado
    // Transición elegante sin jitter, manteniendo centro
    // ─────────────────────────────────────────
    tl.to(
      camera.position,
      { z: 4.6, y: 0, ease: "sine.inOut", duration: 0.08 },
      0.0,
    );
    tl.to(group.rotation, { y: 0.05, ease: "sine.inOut", duration: 0.08 }, 0.0);

    // ─────────────────────────────────────────
    // FASE 1 (0.08 → 0.18): Hero - zoom elegante
    // Introducción profesional del producto, centrado
    // ─────────────────────────────────────────
    tl.to(
      camera.position,
      { z: 4.2, y: 0, ease: "expo.inOut", duration: 0.1 },
      0.08,
    );
    tl.to(group.rotation, { y: 0.06, ease: "expo.inOut", duration: 0.1 }, 0.08);

    // ─────────────────────────────────────────
    // FASE 2 (0.18 → 0.32): Chip M4 - acercamiento dinámico
    // Vista superior para mostrar el teclado y pantalla
    // ─────────────────────────────────────────
    tl.to(
      camera.position,
      { z: 2.8, y: 0.4, x: 0.4, ease: "cubic.inOut", duration: 0.14 },
      0.18,
    );
    tl.to(
      group.rotation,
      { x: -0.2, y: 0.22, ease: "cubic.inOut", duration: 0.14 },
      0.18,
    );

    // ─────────────────────────────────────────
    // FASE 2.5 (0.32 → 0.40): Transición suave a puertos
    // Preparación para mostrar lado izquierdo
    // ─────────────────────────────────────────
    tl.to(
      camera.position,
      { z: 2.5, y: 0, x: 0.5, ease: "sine.inOut", duration: 0.08 },
      0.32,
    );
    tl.to(
      group.rotation,
      { x: -0.1, y: 0.35, ease: "sine.inOut", duration: 0.08 },
      0.32,
    );

    // ─────────────────────────────────────────
    // FASE 3 (0.40 → 0.52): Puertos izquierda
    // Giro suave para mostrar el lado izquierdo del Mac
    // ─────────────────────────────────────────
    tl.to(
      camera.position,
      { z: 2.3, y: -0.2, x: -2.0, ease: "cubic.inOut", duration: 0.12 },
      0.4,
    );
    tl.to(
      group.rotation,
      { x: -0.08, y: 0.82, ease: "cubic.inOut", duration: 0.12 },
      0.4,
    );

    // ─────────────────────────────────────────
    // FASE 3.5 (0.52 → 0.58): Transición a Display
    // Vuelta suave a la vista frontal centrada
    // ─────────────────────────────────────────
    tl.to(
      camera.position,
      { z: 2.15, y: 0, x: -0.3, ease: "sine.inOut", duration: 0.06 },
      0.52,
    );
    tl.to(
      group.rotation,
      { x: 0.0, y: 0.15, ease: "sine.inOut", duration: 0.06 },
      0.52,
    );

    // ─────────────────────────────────────────
    // FASE 4 (0.58 → 0.68): Display Liquid Retina XDR
    // Vista frontal perfecta de la pantalla, centrada
    // ─────────────────────────────────────────
    tl.to(
      camera.position,
      { z: 1.95, y: 0, x: 0, ease: "expo.inOut", duration: 0.1 },
      0.58,
    );
    tl.to(
      group.rotation,
      { x: 0.08, y: 0, ease: "expo.inOut", duration: 0.1 },
      0.58,
    );

    // ─────────────────────────────────────────
    // FASE 4.5 (0.68 → 0.75): Transición a puertos derechos
    // Preparación para mostrar lado derecho
    // ─────────────────────────────────────────
    tl.to(
      camera.position,
      { z: 2.3, y: -0.15, x: 0.5, ease: "sine.inOut", duration: 0.07 },
      0.68,
    );
    tl.to(
      group.rotation,
      { x: -0.08, y: -0.3, ease: "sine.inOut", duration: 0.07 },
      0.68,
    );

    // ─────────────────────────────────────────
    // FASE 5 (0.75 → 0.87): Puertos derecha
    // Giro elegante para mostrar lado derecho
    // ─────────────────────────────────────────
    tl.to(
      camera.position,
      { z: 2.3, y: -0.2, x: 2.0, ease: "cubic.inOut", duration: 0.12 },
      0.75,
    );
    tl.to(
      group.rotation,
      { x: -0.08, y: -0.82, ease: "cubic.inOut", duration: 0.12 },
      0.75,
    );

    // ─────────────────────────────────────────
    // FASE 5.5 (0.87 → 0.93): Transición a CTA final
    // Preparación para hero shot épico centrado
    // ─────────────────────────────────────────
    tl.to(
      camera.position,
      { z: 3.0, y: 0.3, x: -0.5, ease: "sine.inOut", duration: 0.06 },
      0.87,
    );
    tl.to(
      group.rotation,
      { x: -0.12, y: 0.25, ease: "sine.inOut", duration: 0.06 },
      0.87,
    );

    // ─────────────────────────────────────────
    // FASE 6 (0.93 → 1.00): CTA Final - hero shot épico
    // Vista de tres cuartos perfecta y dramatizada, centrado
    // ─────────────────────────────────────────
    tl.to(
      camera.position,
      { z: 3.8, y: 0.6, x: -1.0, ease: "power3.inOut", duration: 0.07 },
      0.93,
    );
    tl.to(
      group.rotation,
      { x: -0.18, y: 0.45, ease: "power3.inOut", duration: 0.07 },
      0.93,
    );
    tl.to(
      group.position,
      { y: -0.2, ease: "power3.inOut", duration: 0.07 },
      0.93,
    );

    // ─────────────────────────────────────────
    // Animación de entrada del texto en cada sección
    // Transiciones suaves y profesionales
    // ─────────────────────────────────────────
    const panels = document.querySelectorAll(".panel-content");
    panels.forEach((panel) => {
      gsap.fromTo(
        panel,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: "expo.out",
          scrollTrigger: {
            trigger: panel.closest(".panel"),
            start: "top 65%",
            end: "top 25%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // ─────────────────────────────────────────
    // Animaciones de los stats y especificaciones
    // Efecto de conteo y escala profesional
    // ─────────────────────────────────────────
    const stats = document.querySelectorAll(".stat-num, .dspec-val");
    stats.forEach((stat, i) => {
      gsap.fromTo(
        stat,
        { opacity: 0, y: 30, scale: 0.75 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: i * 0.12,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: stat,
            start: "top 75%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // ─────────────────────────────────────────
    // Animación port-items con stagger profesional
    // Entrada suave y elegante de elementos
    // ─────────────────────────────────────────
    const portItems = document.querySelectorAll(".port-item");
    portItems.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -30, rotateZ: -5 },
        {
          opacity: 1,
          x: 0,
          rotateZ: 0,
          duration: 0.6,
          delay: i * 0.15,
          ease: "cubic.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // ─────────────────────────────────────────
    // NEW: Animación de METRICS - Letter Reveal
    // Letras que aparecen una por una
    // ─────────────────────────────────────────
    const letters = document.querySelectorAll(".metrics-title .letter");
    letters.forEach((letter) => {
      gsap.fromTo(
        letter,
        { opacity: 0, y: 30, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          delay: Math.random() * 0.5,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: ".metrics-title",
            start: "top 70%",
            end: "top 40%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // ─────────────────────────────────────────
    // NEW: Animación de METRICS - Metric Cards
    // Cards que escalan y aparecen con stagger
    // ─────────────────────────────────────────
    const metricCards = document.querySelectorAll(".metric-card");
    metricCards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.8, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: "cubic.out",
          scrollTrigger: {
            trigger: ".metrics-grid",
            start: "top 65%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // ─────────────────────────────────────────
    // NEW: Animación de METRICS - Number Counters
    // Números que cuentan desde 0 hasta valor final
    // ─────────────────────────────────────────
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      const targetValue = parseInt(counter.textContent);
      gsap.fromTo(
        counter,
        { innerHTML: 0 },
        {
          innerHTML: targetValue,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 75%",
            end: "top 45%",
            toggleActions: "play none none reverse",
          },
          onUpdate() {
            counter.textContent = Math.ceil(
              parseFloat(this.targets()[0].innerHTML),
            );
          },
        },
      );
    });

    // ─────────────────────────────────────────
    // NEW: Animación de METRICS - Progress Bars
    // Barras que se llenan al hacer scroll
    // ─────────────────────────────────────────
    const metricBars = document.querySelectorAll(".metric-bar");
    metricBars.forEach((bar, i) => {
      const targetWidth = [100, 100, 98, 100][i] || 100;
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: targetWidth + "%",
          duration: 1.2,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar.closest(".metric-card"),
            start: "top 70%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    return () => {
      gsap.ticker.remove(lookAtCenter);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [groupRef, camera]);
}
