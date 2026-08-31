import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpeg';
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Treatments' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner shell">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Dr. 2 Feet — Regenerative Podiatry" />
          <span className="nav__brand-text">
            <strong>Dr. 2 Feet</strong>
            <em>Regenerative Podiatry</em>
          </span>
        </NavLink>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="btn btn-primary nav__cta">
          Book a Consult
        </NavLink>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `nav__mobile-link ${isActive ? 'is-active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
              Book a Consult
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
