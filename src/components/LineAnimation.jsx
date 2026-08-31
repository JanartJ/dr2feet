import { motion } from 'framer-motion';
import * as animations from '../utils/animations';
import './LineAnimation.css';

/**
 * Animated line component with multiple styles
 * @param {object} props - Component props
 * @param {string} props.type - Line type: 'horizontal', 'vertical', 'diagonal', 'underline'
 * @param {string} props.direction - Direction of reveal: 'left', 'right', 'center', 'top', 'bottom'
 * @param {string} props.color - Line color (CSS color value)
 * @param {string} props.thickness - Line thickness (CSS size value)
 * @param {number} props.delay - Animation delay in seconds
 * @param {number} props.duration - Animation duration in seconds
 * @param {number} props.width - Width of line
 * @param {number} props.height - Height of line
 */
export function LineAnimation({
  type = 'horizontal',
  direction = 'left',
  color = 'var(--bio-blue)',
  thickness = '2px',
  delay = 0,
  duration = 0.8,
  width = '100%',
  height = 'auto',
}) {
  const lineClasses = `line-animation line-animation--${type} line-animation--${direction}`;

  let animationVariant;
  if (direction === 'center') {
    animationVariant = animations.lineRevealCenter(delay, duration);
  } else if (direction === 'right') {
    animationVariant = animations.lineRevealRight(delay, duration);
  } else {
    animationVariant = animations.lineReveal(delay, duration);
  }

  return (
    <motion.div
      className={lineClasses}
      initial="hidden"
      animate="show"
      variants={animationVariant}
      style={{
        backgroundColor: color,
        width: type === 'vertical' ? thickness : width,
        height: type === 'vertical' ? height : thickness,
      }}
    />
  );
}

/**
 * Animated underline that reveals on hover or scroll
 */
export function AnimatedUnderline({
  color = 'var(--bio-blue)',
  thickness = '3px',
  duration = 0.6,
  delay = 0,
}) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={animations.underlineReveal(delay, duration)}
      style={{
        backgroundColor: color,
        height: thickness,
        width: '100%',
      }}
    />
  );
}

/**
 * Decorative animated line separator
 */
export function LineSeparator({ 
  color = 'var(--line-bright)', 
  margin = '24px 0',
  animate = true,
  delay = 0,
}) {
  const lineVariant = animate ? animations.lineReveal(delay, 0.8) : {};

  return (
    <motion.div
      initial={animate ? 'hidden' : undefined}
      animate={animate ? 'show' : undefined}
      variants={animate ? lineVariant : undefined}
      style={{
        height: '1px',
        backgroundColor: color,
        width: '100%',
        margin,
      }}
    />
  );
}

/**
 * Horizontal line with gradient
 */
export function GradientLine({
  fromColor = 'var(--bio-blue)',
  toColor = 'var(--bio-teal)',
  duration = 0.8,
  delay = 0,
  height = '2px',
}) {
  return (
    <motion.div
      initial={{ scaleX: 0, transformOrigin: 'left' }}
      animate={{ scaleX: 1 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        height,
        width: '100%',
        background: `linear-gradient(90deg, ${fromColor}, ${toColor})`,
      }}
    />
  );
}

export default LineAnimation;
