import { useEffect } from "react";

export function usePanelReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".panel__eyebrow, .panel__title, .panel__subtitle, .panel__rule, .specs-grid",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.25 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
