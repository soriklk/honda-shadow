import { useEffect, useRef } from "react";

export default function ScrollTrack() {
  const progressRef = useRef();

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      if (progressRef.current) {
        progressRef.current.style.height = pct + "%";
        progressRef.current.style.top = "0";
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <aside className="scroll-track">
      <div className="scroll-track__line">
        <div className="scroll-track__progress" ref={progressRef} />
      </div>
      <span className="scroll-track__label">Scroll</span>
    </aside>
  );
}
