import { useEffect } from "react";

// Native page geometry, cleaned up whenever React changes the route.
export default function usePageMotion(pathname) {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((element, i) => {
      element.style.setProperty("--stagger", `${(i % 3) * 65}ms`);
      observer.observe(element);
    });
    let frame = 0,
      target = window.scrollY,
      last = 0,
      paint = 0;
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      target = window.scrollY;
    };
    const onWheel = (event) => {
      if (
        reduced ||
        event.ctrlKey ||
        event.metaKey ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
      )
        return;
      for (
        let el = event.target instanceof Element ? event.target : null;
        el && el !== document.body;
        el = el.parentElement
      ) {
        if (
          /auto|scroll/.test(getComputedStyle(el).overflowY) &&
          el.scrollHeight > el.clientHeight + 1
        )
          return;
      }
      if (!frame) target = window.scrollY;
      target = Math.max(
        0,
        Math.min(
          document.documentElement.scrollHeight - innerHeight,
          target +
            event.deltaY *
              (event.deltaMode === 1
                ? 18
                : event.deltaMode === 2
                  ? innerHeight
                  : 1) *
              0.85,
        ),
      );
      event.preventDefault();
      if (frame) return;
      last = performance.now();
      function glide(now) {
        const dt = Math.min(40, now - last);
        last = now;
        const distance = target - window.scrollY;
        if (Math.abs(distance) < 0.8) {
          window.scrollTo({ top: target, behavior: "instant" });
          frame = 0;
          return;
        }
        window.scrollTo({
          top: window.scrollY + distance * (1 - Math.exp(-dt / 150)),
          behavior: "instant",
        });
        frame = requestAnimationFrame(glide);
      }
      frame = requestAnimationFrame(glide);
    };
    const onScroll = () => {
      if (!frame) target = window.scrollY;
      if (paint) return;
      paint = requestAnimationFrame(() => {
        paint = 0;
        const hero = document.querySelector(".hero");
        if (hero)
          hero.style.visibility =
            window.scrollY > innerHeight + 100 ? "hidden" : "visible";
        const progress = document.querySelector(".scroll-progress");
        if (progress)
          progress.style.transform = `scaleX(${window.scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)})`;
      });
    };
    const onAnchor = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href"),
        element =
          hash === "#" ? document.body : document.getElementById(hash.slice(1));
      if (element) {
        event.preventDefault();
        stop();
        element.scrollIntoView({
          behavior: reduced ? "instant" : "smooth",
          block: "start",
        });
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onAnchor);
    ["pointerdown", "touchstart", "keydown"].forEach((type) =>
      window.addEventListener(type, stop, { passive: true }),
    );
    onScroll();
    return () => {
      observer.disconnect();
      stop();
      cancelAnimationFrame(paint);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onAnchor);
      ["pointerdown", "touchstart", "keydown"].forEach((type) =>
        window.removeEventListener(type, stop),
      );
    };
  }, [pathname]);
}
