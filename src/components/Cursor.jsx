import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef();
  const ringRef = useRef();

  useEffect(() => {
    let raf;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx,
      ry = my;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const loop = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => dotRef.current?.classList.add("cursor--hover");
    const onLeave = () => dotRef.current?.classList.remove("cursor--hover");

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
