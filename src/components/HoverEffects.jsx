import { motion } from 'framer-motion';
import * as animations from '../utils/animations';

/**
 * Wrapper component that adds hover effects to children
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Content to add hover effects to
 * @param {string} props.effect - Hover effect type: 'lift', 'scale', 'glow', 'tilt', 'brightness'
 * @param {string} props.className - Additional CSS classes
 */
export function HoverEffect({ 
  children, 
  effect = 'lift', 
  className = '',
  ...props 
}) {
  const effectVariants = {
    lift: animations.hoverLift,
    scale: animations.hoverScale,
    glow: animations.hoverGlow,
    tilt: {
      rest: { 
        rotateX: 0, 
        rotateY: 0,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      },
      hover: { 
        rotateX: 5, 
        rotateY: 5,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      },
    },
    brightness: {
      rest: {
        filter: 'brightness(1)',
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      },
      hover: {
        filter: 'brightness(1.1)',
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      },
    },
  };

  const selectedEffect = effectVariants[effect] || effectVariants.lift;

  return (
    <motion.div
      className={`hover-effect hover-effect--${effect} ${className}`}
      initial="rest"
      whileHover="hover"
      variants={selectedEffect}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Card component with hover effects
 */
export function HoverCard({ 
  children, 
  className = '',
  onHoverStart,
  onHoverEnd,
}) {
  return (
    <motion.div
      className={`hover-card ${className}`}
      initial={{ y: 0 }}
      whileHover={{ y: -8 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderRadius: 'inherit',
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Button with hover and press animations
 */
export function AnimatedButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  ...props
}) {
  return (
    <motion.button
      className={`animated-button animated-button--${variant} ${className}`}
      initial={{ opacity: 1 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 8px 24px rgba(27, 108, 219, 0.3)',
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/**
 * Image with zoom on hover
 */
export function HoverImageZoom({ 
  src, 
  alt = '',
  className = '',
}) {
  return (
    <motion.div 
      className={`hover-image-zoom ${className}`}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ overflow: 'hidden', borderRadius: 'inherit' }}
    >
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </motion.div>
  );
}

/**
 * Link with animated underline on hover
 */
export function HoverUnderlineLink({
  href,
  children,
  className = '',
  ...props
}) {
  return (
    <motion.a
      href={href}
      className={`hover-underline-link ${className}`}
      {...props}
    >
      {children}
      <motion.span
        className="underline"
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: 'block',
          height: '2px',
          backgroundColor: 'currentColor',
          marginTop: '4px',
        }}
      />
    </motion.a>
  );
}

/**
 * Icon with rotation on hover
 */
export function HoverRotateIcon({
  children,
  degree = 45,
  className = '',
}) {
  return (
    <motion.div
      className={`hover-rotate-icon ${className}`}
      initial={{ rotate: 0 }}
      whileHover={{ rotate: degree }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Text highlight on hover
 */
export function HoverHighlight({
  children,
  color = 'var(--bio-blue-soft)',
  className = '',
}) {
  return (
    <motion.span
      className={`hover-highlight ${className}`}
      initial={{ backgroundColor: 'transparent' }}
      whileHover={{ backgroundColor: color }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ padding: '2px 4px', borderRadius: '4px' }}
    >
      {children}
    </motion.span>
  );
}

/**
 * Border animation on hover
 */
export function HoverBorderAnimation({
  children,
  className = '',
  borderColor = 'var(--bio-blue)',
}) {
  return (
    <motion.div
      className={`hover-border-animation ${className}`}
      initial={{
        borderTop: `2px solid transparent`,
        borderRight: `2px solid transparent`,
        borderBottom: `2px solid transparent`,
        borderLeft: `2px solid transparent`,
      }}
      whileHover={{
        borderTop: `2px solid ${borderColor}`,
        borderRight: `2px solid ${borderColor}`,
        borderBottom: `2px solid ${borderColor}`,
        borderLeft: `2px solid ${borderColor}`,
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ padding: '16px' }}
    >
      {children}
    </motion.div>
  );
}

export default {
  HoverEffect,
  HoverCard,
  AnimatedButton,
  HoverImageZoom,
  HoverUnderlineLink,
  HoverRotateIcon,
  HoverHighlight,
  HoverBorderAnimation,
};
