# Animation System Guide

## Overview

The Dr. 2 Feet website now includes a comprehensive, professional animation system with smooth scroll-triggered animations, hover effects, and elegant transitions throughout all pages.

## Components & Features

### 1. **Animation Utilities** (`src/utils/animations.js`)

Pre-built animation variants for Framer Motion:

- **Fade Animations**: `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`, `fadeIn`
- **Scale Animations**: `scaleIn`, `scaleInSmall`
- **Rotate Animations**: `rotateIn`
- **Line Animations**: `lineReveal`, `lineRevealCenter`, `lineRevealRight`, `underlineReveal`
- **Stagger Animations**: `staggerContainer`, `staggerItem`
- **Hover Effects**: `hoverLift`, `hoverScale`, `hoverGlow`, `hoverUnderline`
- **Special Effects**: `pulse`, `floating`, `bounceIn`, `flipIn`, `blurIn`, `parallax`

### 2. **Scroll Animation Hooks** (`src/hooks/useScrollAnimations.js`)

React hooks for scroll-based animations:

- `useParallax(offset)` - Parallax scrolling effect
- `useScrollOpacity()` - Fade in/out based on scroll
- `useScrollScale()` - Scale based on scroll progress
- `useScrollColor(colors)` - Color transition on scroll
- `useStickyScroll()` - Track scroll progress
- `useInViewAnimation(options)` - Intersection Observer-based animations

### 3. **Enhanced ScrollReveal Component** (`src/components/EnhancedScrollReveal.jsx`)

Improved scroll reveal with multiple animation types:

```jsx
<EnhancedScrollReveal
  type="fadeUp" // Animation type
  delay={0} // Delay in seconds
  duration={0.6} // Duration in seconds
  stagger={true} // Stagger child elements
  staggerDelay={0.1} // Delay between children
  threshold={0.2} // Intersection threshold
  rootMargin="0px 0px -50px 0px" // Trigger offset
>
  Content here
</EnhancedScrollReveal>
```

**Available types**: `fadeUp`, `fadeDown`, `fadeIn`, `fadeLeft`, `fadeRight`, `scaleIn`, `scaleInSmall`, `slideInLeft`, `slideInRight`, `rotateIn`, `blurIn`, `bounceIn`, `flipIn`

### 4. **Line Animation Components** (`src/components/LineAnimation.jsx`)

Animated line elements for visual interest:

```jsx
// Basic line
<LineAnimation
  type="horizontal"
  direction="left"
  color="var(--bio-blue)"
  thickness="2px"
  duration={0.8}
/>

// Line separator
<LineSeparator
  color="var(--line-bright)"
  margin="24px 0"
  animate={true}
  delay={0}
/>

// Gradient line
<GradientLine
  fromColor="var(--bio-blue)"
  toColor="var(--bio-teal)"
  duration={0.8}
  height="2px"
/>

// Animated underline
<AnimatedUnderline
  color="var(--bio-blue)"
  thickness="3px"
  duration={0.6}
/>
```

### 5. **Hover Effects Components** (`src/components/HoverEffects.jsx`)

Reusable hover animation wrappers:

```jsx
// Generic hover effect
<HoverEffect effect="lift">
  Content here
</HoverEffect>

// Hover card
<HoverCard>
  Card content
</HoverCard>

// Animated button
<AnimatedButton variant="primary" onClick={handleClick}>
  Click me
</AnimatedButton>

// Image zoom
<HoverImageZoom src="image.jpg" alt="description" />

// Underline link
<HoverUnderlineLink href="/page">Link text</HoverUnderlineLink>

// Rotate icon
<HoverRotateIcon degree={45}>
  <Icon />
</HoverRotateIcon>

// Text highlight
<HoverHighlight color="var(--bio-blue-soft)">
  Highlighted text
</HoverHighlight>

// Border animation
<HoverBorderAnimation borderColor="var(--bio-blue)">
  Bordered content
</HoverBorderAnimation>
```

**Available effects**: `lift`, `scale`, `glow`, `tilt`, `brightness`

## CSS Animation Utilities

### Global Classes (in `index.css`)

- `.fade-in-on-scroll` - Fade in when scrolled to
- `.scale-in-on-scroll` - Scale in when scrolled to
- `.slide-left-on-scroll` - Slide from left when scrolled to
- `.slide-right-on-scroll` - Slide from right when scrolled to
- `.bounce-in-on-scroll` - Bounce in when scrolled to
- `.rotate-in-on-scroll` - Rotate in when scrolled to
- `.blur-fade-in-on-scroll` - Blur fade when scrolled to
- `.stagger-container` - Stagger child animations
- `.animated-gradient-bg` - Animated gradient background
- `.loading-spinner` - Loading animation
- `.shimmer` - Shimmer loading effect
- `.interactive-element` - Smooth transitions

### Hover Classes (in `HoverEffects.css`)

- `.hover-effect` - Generic hover effect
- `.hover-card` - Card hover animation
- `.hover-image-zoom` - Image zoom on hover
- `.hover-underline-link` - Underline on hover
- `.hover-color-transition` - Color transition
- `.hover-list-item` - List item with left border accent
- `.hover-icon-glow` - Icon with glow effect
- `.hover-shimmer` - Shimmer text effect
- `.hover-sliding-bg` - Sliding background on hover

## Usage Examples

### 1. Basic Scroll Animation

```jsx
<EnhancedScrollReveal type="fadeUp">
  <h2>Section Title</h2>
</EnhancedScrollReveal>
```

### 2. Staggered Item List

```jsx
<EnhancedScrollReveal type="fadeUp" stagger staggerDelay={0.1}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</EnhancedScrollReveal>
```

### 3. Card with Hover and Scroll Animation

```jsx
<HoverEffect effect="lift">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h3>Card Title</h3>
    <p>Card content</p>
  </motion.div>
</HoverEffect>
```

### 4. Animated Line with Text

```jsx
<div>
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{
      height: "2px",
      background: "var(--bio-blue)",
      marginBottom: "12px",
    }}
  />
  <h3>Heading</h3>
</div>
```

### 5. Using Animation Variants

```jsx
import * as animations from "../utils/animations";

<motion.div
  initial="hidden"
  animate="show"
  variants={animations.fadeInUp(0.2, 0.8)}
>
  Animated content
</motion.div>;
```

## Page-Specific Animations

### Home Page

- Hero section with line reveal text
- Staggered pillar cards with hover effects
- Service rows with slide and line animations
- Process cards with scale and lift effects
- Testimonials section with scale-in
- CTA banner with gradient line

### About Page

- Philosophy values cards with hover lift
- Journey timeline with staggered animations
- Quote with animated underline

### Services Page

- Service items with hover effects and line animations
- Service group indexes with scale animation
- FAQ section with smooth transitions

### Contact Page

- Form inputs with smooth focus transitions
- Contact information with fade-in animations

## Animation Best Practices

1. **Use `whileInView` with `once: true`** for scroll animations that should only trigger once
2. **Set appropriate `rootMargin`** to trigger animations before elements fully enter viewport
3. **Use `will-change`** in CSS for animated elements
4. **Respect `prefers-reduced-motion`** for accessibility
5. **Keep animations under 1 second** for better UX
6. **Use consistent easing** - `[0.22, 1, 0.36, 1]` is used throughout
7. **Combine animations** for complex effects (fade + slide + scale)

## Accessibility

All animations respect the `prefers-reduced-motion` media query. Users who prefer reduced motion will see no animations.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Performance Tips

- Use `will-change` sparingly, only on animated elements
- Avoid animating layout properties (use transform/opacity instead)
- Keep stagger delays reasonable (0.1s is a good default)
- Use `transition.delay` instead of `transition.when` for complex sequences
- Consider using `viewport.once: true` to avoid repeated calculations

## Browser Support

All animations work in modern browsers (Chrome, Firefox, Safari, Edge).

Framer Motion polyfills where needed for older browsers.

## Customization

### Modify Global Easing

All animations use `[0.22, 1, 0.36, 1]` as the default easing. To change globally, update `--ease` CSS variable in `index.css`.

### Adjust Animation Durations

Modify the `duration` parameter when creating animation variants.

### Change Colors

Update `--bio-blue` and `--bio-teal` CSS variables in `:root` selector.

## Troubleshooting

### Animations not triggering on scroll

- Check `threshold` value (default 0.2)
- Adjust `rootMargin` (default "0px 0px -50px 0px")
- Ensure element is within viewport

### Animations too fast/slow

- Adjust `duration` parameter
- Check animation variant configuration

### Hover effects not working

- Ensure `HoverEffect` wraps the element
- Check CSS specificity conflicts
- Verify Framer Motion is properly imported

## Future Enhancements

- Scroll velocity-based animations
- Mouse following animations
- Gesture-based animations for mobile
- More complex 3D transforms
- Particle effects
