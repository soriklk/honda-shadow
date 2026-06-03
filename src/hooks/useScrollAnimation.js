import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(groupRef, camera) {
  useEffect(() => {
    if (!groupRef.current || !camera) return;

    const group = groupRef.current;

    /* ── Keep camera aimed at the bike's visual center ── */
    const lookAtCenter = () => camera.lookAt(0, -0.2, 0);
    gsap.ticker.add(lookAtCenter);

    /* ── Master timeline ──────────────────────────────── */
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 2.2, // higher = more fluid / cinematic lag
      },
    });

    /* ─────────────────────────────────────────────────────
       PHASE 0 → 0.00  Initial state (hero reveal)
       Camera: wide establishing shot, slight elevation
       Bike:   neutral
    ───────────────────────────────────────────────────── */
    tl.set(camera.position, { x: 0, y: 1.2, z: 9 }, 0);
    tl.set(group.rotation, { y: 0 }, 0);
    tl.set(group.position, { y: 0 }, 0);

    /* ─────────────────────────────────────────────────────
       PHASE 1 → 0.0–0.18  Elegant push-in
       Camera drifts forward, slight Y rise
    ───────────────────────────────────────────────────── */
    tl.to(
      camera.position,
      { z: 6.5, y: 1.0, x: 0.4, ease: "power2.out" },
      0.02,
    );

    /* ─────────────────────────────────────────────────────
       PHASE 2 → 0.18–0.38  3/4 front presentation
       Bike rotates to present left-front quarter
    ───────────────────────────────────────────────────── */
    tl.to(
      camera.position,
      { z: 5.0, y: 1.2, x: -0.6, ease: "power2.inOut" },
      0.18,
    );
    tl.to(group.rotation, { y: -Math.PI * 0.15, ease: "power2.inOut" }, 0.18);

    /* ─────────────────────────────────────────────────────
       PHASE 3 → 0.38–0.55  Close engine study
       Camera presses in tight, reveals engine detail
    ───────────────────────────────────────────────────── */
    tl.to(camera.position, { z: 3.4, y: 0.6, x: 1.2, ease: "power2.in" }, 0.38);
    tl.to(group.rotation, { y: Math.PI * 0.2, ease: "power2.in" }, 0.38);

    /* ─────────────────────────────────────────────────────
       PHASE 4 → 0.55–0.70  Full profile sweep
       Classic motorcycle side-on silhouette
    ───────────────────────────────────────────────────── */
    tl.to(
      camera.position,
      { z: 5.2, y: 0.9, x: 0, ease: "power2.inOut" },
      0.55,
    );
    tl.to(group.rotation, { y: Math.PI * 0.5, ease: "power2.inOut" }, 0.55);

    /* ─────────────────────────────────────────────────────
       PHASE 5 → 0.70–0.85  Rear 3/4 glamour shot
       High camera angle, rear quarter reveal
    ───────────────────────────────────────────────────── */
    tl.to(
      camera.position,
      { z: 4.2, y: 2.0, x: -1.5, ease: "power2.inOut" },
      0.7,
    );
    tl.to(group.rotation, { y: Math.PI * 0.75, ease: "power2.inOut" }, 0.7);

    /* ─────────────────────────────────────────────────────
       PHASE 6 → 0.85–1.00  Hero finale
       Camera pulls back to dramatic distance, bike completes
       a slow, proud full-rotation reveal
    ───────────────────────────────────────────────────── */
    tl.to(camera.position, { z: 6.0, y: 1.5, x: 0, ease: "power3.out" }, 0.85);
    tl.to(group.rotation, { y: Math.PI * 1.0, ease: "power3.out" }, 0.85);

    /* Optional subtle float on the group */
    gsap.to(group.position, {
      y: 0.08,
      duration: 3.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      gsap.ticker.remove(lookAtCenter);
      gsap.killTweensOf(group.position);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [groupRef, camera]);
}
