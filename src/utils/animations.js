// Comprehensive animation variants for Framer Motion

// FADE ANIMATIONS
export const fadeInUp = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const fadeInDown = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const fadeInLeft = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const fadeInRight = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const fadeIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

// SCALE ANIMATIONS
export const scaleIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const scaleInSmall = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

// ROTATE ANIMATIONS
export const rotateIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, rotate: -10 },
  show: {
    opacity: 1,
    rotate: 0,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

// STAGGER CONTAINER
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

// STAGGER ITEM
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// LINE REVEAL ANIMATIONS
export const lineReveal = (delay = 0, duration = 0.8) => ({
  hidden: { scaleX: 0, transformOrigin: "left" },
  show: {
    scaleX: 1,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const lineRevealCenter = (delay = 0, duration = 0.8) => ({
  hidden: { scaleX: 0, transformOrigin: "center" },
  show: {
    scaleX: 1,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const lineRevealRight = (delay = 0, duration = 0.8) => ({
  hidden: { scaleX: 0, transformOrigin: "right" },
  show: {
    scaleX: 1,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

// UNDERLINE ANIMATION
export const underlineReveal = (delay = 0, duration = 0.6) => ({
  hidden: { width: 0 },
  show: {
    width: "100%",
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

// TEXT REVEAL - Character by character
export const textReveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

// BLUR IN
export const blurIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, filter: "blur(8px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

// PARALLAX
export const parallax = (value = 50) => ({
  y: [value, -value],
  transition: { duration: 0.3 },
});

// HOVER LIFT
export const hoverLift = {
  rest: {
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// HOVER SCALE
export const hoverScale = {
  rest: {
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// HOVER GLOW
export const hoverGlow = {
  rest: {
    boxShadow: "0 0 0px rgba(27, 108, 219, 0)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    boxShadow: "0 10px 40px rgba(27, 108, 219, 0.2)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// HOVER UNDERLINE
export const hoverUnderline = {
  rest: {
    width: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    width: "100%",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// PULSING ANIMATION
export const pulse = {
  opacity: [1, 0.8, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// FLOATING ANIMATION
export const floating = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// SLIDE IN FROM SIDES
export const slideInLeft = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export const slideInRight = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

// BOUNCE IN
export const bounceIn = (delay = 0, duration = 0.8) => ({
  hidden: { opacity: 0, scale: 0.3 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
});

// FLIP
export const flipIn = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, rotateY: 90 },
  show: {
    opacity: 1,
    rotateY: 0,
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

// REVEAL TOP TO BOTTOM (Hero line mask style)
export const revealMask = (delay = 0, duration = 0.9) => ({
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
  },
});
