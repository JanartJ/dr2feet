import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Accordion.css';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`accordion__item ${isOpen ? 'is-open' : ''}`} key={item.q}>
            <button className="accordion__trigger" onClick={() => setOpenIndex(isOpen ? -1 : i)}>
              <span>{item.q}</span>
              <span className="accordion__icon">{isOpen ? '\u2212' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="accordion__panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
