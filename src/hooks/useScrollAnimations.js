import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Hook for parallax scrolling effect
 * @param {number} offset - Parallax offset amount
 * @returns {object} - Motion values for parallax effect
 */
export function useParallax(offset = 50) {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const y = useTransform(scrollY, [0, 500], [0, offset]);
  return { ref, y };
}

/**
 * Hook for scroll-based opacity changes
 * @returns {object} - Motion values for fade in/out on scroll
 */
export function useScrollOpacity() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  return { ref, opacity };
}

/**
 * Hook for scroll-based scale animation
 * @returns {object} - Motion values for scale on scroll
 */
export function useScrollScale() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  return { ref, scale };
}

/**
 * Hook for progress-based color animation
 * @param {string[]} colors - Array of colors to transition between
 * @returns {object} - Motion values for color transition
 */
export function useScrollColor(colors = ["#1b6cdb", "#0d9488"]) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const backgroundColor = useTransform(scrollYProgress, [0, 1], colors);

  return { ref, backgroundColor };
}

/**
 * Hook for sticky scroll tracking
 * @returns {object} - Scroll progress for custom calculations
 */
export function useStickyScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  return { ref, scrollYProgress };
}

/**
 * Hook for scroll-triggered animations with intersection observer
 * @param {object} options - Configuration options
 * @returns {object} - isInView state and ref
 */
export function useInViewAnimation(options = {}) {
  const ref = useRef(null);
  const {
    threshold = 0.2,
    rootMargin = "0px 0px -100px 0px",
    triggerOnce = true,
  } = options;

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}

export default {
  useParallax,
  useScrollOpacity,
  useScrollScale,
  useScrollColor,
  useStickyScroll,
  useInViewAnimation,
};
