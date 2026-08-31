import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import * as animations from '../utils/animations';

/**
 * Enhanced ScrollReveal component with multiple animation options
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.type - Animation type: 'fadeUp', 'fadeDown', 'scaleIn', 'slideInLeft', 'slideInRight', 'blurIn', 'rotateIn'
 * @param {number} props.delay - Animation delay in seconds
 * @param {number} props.duration - Animation duration in seconds
 * @param {boolean} props.stagger - Whether to stagger child elements
 * @param {number} props.staggerDelay - Delay between staggered children
 * @param {string} props.threshold - IntersectionObserver threshold (0-1)
 * @param {string} props.rootMargin - IntersectionObserver root margin
 */
export default function ScrollReveal({
  children,
  type = 'fadeUp',
  delay = 0,
  duration = 0.6,
  stagger = false,
  staggerDelay = 0.1,
  threshold = 0.2,
  rootMargin = '0px 0px -50px 0px',
  className = '',
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: parseFloat(threshold),
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  // Select animation variant based on type
  const getAnimationVariant = () => {
    const animationMap = {
      fadeUp: animations.fadeInUp(delay, duration),
      fadeDown: animations.fadeInDown(delay, duration),
      fadeIn: animations.fadeIn(delay, duration),
      fadeLeft: animations.fadeInLeft(delay, duration),
      fadeRight: animations.fadeInRight(delay, duration),
      scaleIn: animations.scaleIn(delay, duration),
      scaleInSmall: animations.scaleInSmall(delay, duration),
      slideInLeft: animations.slideInLeft(delay, duration),
      slideInRight: animations.slideInRight(delay, duration),
      rotateIn: animations.rotateIn(delay, duration),
      blurIn: animations.blurIn(delay, duration),
      bounceIn: animations.bounceIn(delay, duration),
      flipIn: animations.flipIn(delay, duration),
    };

    return animationMap[type] || animationMap.fadeUp;
  };

  const animationVariant = getAnimationVariant();

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={isVisible ? 'show' : 'hidden'}
        variants={animations.staggerContainer(staggerDelay, delay)}
      >
        {Array.isArray(children)
          ? children.map((child, index) => (
              <motion.div key={index} variants={animations.staggerItem}>
                {child}
              </motion.div>
            ))
          : children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? 'show' : 'hidden'}
      variants={animationVariant}
    >
      {children}
    </motion.div>
  );
}
