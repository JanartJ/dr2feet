import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './TestimonialRotator.css';

const QUOTES = [
  {
    text: 'After two years of plantar fasciitis, the PRP series with Dr. Khan is the first thing that actually changed how my foot feels day to day.',
    name: 'Renata O.',
    detail: 'Plantar Fasciitis Patient',
  },
  {
    text: 'I run half-marathons again. Dr. Khan rebuilt my treatment plan around my gait instead of just prescribing rest.',
    name: 'Marcus D.',
    detail: 'Achilles Tendinopathy Patient',
  },
  {
    text: 'The bunion correction healed faster than I expected, and the recovery plan was mapped out from day one.',
    name: 'Priya S.',
    detail: 'Surgical Podiatry Patient',
  },
];

export default function TestimonialRotator() {
  const [index, setIndex] = useState(0);

  const go = (dir) => {
    setIndex((prev) => (prev + dir + QUOTES.length) % QUOTES.length);
  };

  const active = QUOTES[index];

  return (
    <div className="rotator">
      <div className="rotator__viewport">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>&ldquo;{active.text}&rdquo;</p>
            <footer>
              <strong>{active.name}</strong>
              <span>{active.detail}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="rotator__controls">
        <button onClick={() => go(-1)} aria-label="Previous testimonial">&#8592;</button>
        <div className="rotator__dots">
          {QUOTES.map((q, i) => (
            <span key={q.name} className={i === index ? 'is-active' : ''} onClick={() => setIndex(i)} />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next testimonial">&#8594;</button>
      </div>
    </div>
  );
}
