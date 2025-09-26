import { useEffect, useRef, useState } from 'react';

// Time-based smoothing: higher = snappier, lower = smoother. Units: 1/second
const FOLLOW_GAIN_PER_SEC = 9.5;
const LAG_DISTANCE_PX = 38; // ~1cm at 96 DPI

const CustomCursor = () => {
  // Hover state only (rare updates). Position updates are handled outside React.
  const [isHovering, setIsHovering] = useState(false);

  // DOM refs for direct style mutation
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  // Position refs (avoid re-render)
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const prevMouseXRef = useRef(0);
  const prevMouseYRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const cursorXRef = useRef(0);
  const cursorYRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const isInteractive = (el: EventTarget | null): boolean => {
      if (!(el instanceof Element)) return false;
      return Boolean(
        el.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer')
      );
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;

      // Update hover state sparingly
      const hovering = isInteractive(e.target);
      setIsHovering(prev => (prev !== hovering ? hovering : prev));
    };

    // Use passive listeners for better scroll/move perf
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const animate = () => {
      const now = performance.now();
      const last = lastTimeRef.current ?? now;
      const dt = Math.max(0.000001, (now - last) / 1000);
      lastTimeRef.current = now;

      // Determine movement direction from mouse delta
      const deltaMouseX = mouseXRef.current - prevMouseXRef.current;
      const deltaMouseY = mouseYRef.current - prevMouseYRef.current;
      const deltaLen = Math.hypot(deltaMouseX, deltaMouseY);

      // Consider moving if pointer moved more than ~0.5px this frame
      const isMoving = deltaLen > 0.5;

      // Compute target position: either behind the mouse along motion vector, or exactly at mouse
      let targetX = mouseXRef.current;
      let targetY = mouseYRef.current;
      if (isMoving) {
        const dirX = deltaMouseX / deltaLen;
        const dirY = deltaMouseY / deltaLen;
        targetX = mouseXRef.current - dirX * LAG_DISTANCE_PX;
        targetY = mouseYRef.current - dirY * LAG_DISTANCE_PX;
      }

      // Exponential smoothing towards target for consistent feel across FPS
      const alpha = 1 - Math.exp(-FOLLOW_GAIN_PER_SEC * dt);
      const followDx = targetX - cursorXRef.current;
      const followDy = targetY - cursorYRef.current;
      cursorXRef.current += followDx * alpha;
      cursorYRef.current += followDy * alpha;

      // Apply transforms (GPU-accelerated) instead of left/top
      const cursorEl = cursorRef.current;
      const dotEl = dotRef.current;
      if (cursorEl) {
        cursorEl.style.transform = `translate3d(${cursorXRef.current - 10}px, ${cursorYRef.current - 10}px, 0)`;
      }
      if (dotEl) {
        dotEl.style.transform = `translate3d(${mouseXRef.current - 2}px, ${mouseYRef.current - 2}px, 0)`;
      }

      // Save current mouse as previous for next frame
      prevMouseXRef.current = mouseXRef.current;
      prevMouseYRef.current = mouseYRef.current;

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'scale-150' : 'scale-100'}`}
        style={{
          willChange: 'transform',
          transition: 'none',
          transform: 'translate3d(-9999px, -9999px, 0)',
        }}
      />
      {/* Cursor dot */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          willChange: 'transform',
          transition: 'none',
          transform: 'translate3d(-9999px, -9999px, 0)'
        }}
      />
    </>
  );
};

export default CustomCursor;