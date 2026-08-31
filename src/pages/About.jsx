import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import EnhancedScrollReveal from '../components/EnhancedScrollReveal';
import { HoverEffect, HoverCard } from '../components/HoverEffects';
import { LineSeparator, GradientLine } from '../components/LineAnimation';
import * as animations from '../utils/animations';
import './About.css';

const CREDENTIALS = [
  'Doctor of Podiatric Medicine (DPM)',
  'Fellowship, Regenerative & Sports Medicine',
  'Board-Eligible, Foot & Ankle Surgery',
  'Certified, Platelet-Rich Plasma Therapy',
  'Member, American Podiatric Medical Association',
];

const VALUES = [
  { title: 'Evidence before intervention', text: 'Every plan starts with imaging and biomechanical data, not assumption.' },
  { title: 'Biology, not just correction', text: 'We favor regenerative approaches that direct your own tissue to repair itself.' },
  { title: 'One relationship, not one visit', text: 'Recovery is tracked and adjusted over months, not left to a single prescription.' },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="shell about-hero__grid">
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
            <span className="eyebrow">About the practice</span>
            <h1>
              Trained in surgery.<br />
              Focused on regeneration.
            </h1>
            <p className="about-hero__lead">
              Dr. Bilal Khan founded Dr. 2 Feet to close a gap he saw across
              podiatry: patients were being handed short-term fixes for
              conditions that needed biological repair. His practice treats
              the foot and ankle as a system worth restoring, not just managing.
            </p>
            <div className="about-hero__actions">
              <Link to="/contact" className="btn btn-primary">Book a Consult</Link>
              <Link to="/services" className="btn btn-ghost">See Treatments</Link>
            </div>
          </motion.div>

          <motion.div className="about-hero__card" variants={fadeUp(0.2)} initial="hidden" animate="show">
            <span className="about-hero__card-eyebrow">Bilal Khan, DPM</span>
            <p>Regenerative Podiatric Medicine</p>
            <ul>
              {CREDENTIALS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <EnhancedScrollReveal type="fadeUp">
        <section className="philosophy">
          <div className="shell philosophy__grid">
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
            >
              &ldquo;Most foot pain isn't a mystery &mdash; it's a mechanical or
              cellular problem that hasn't been treated as one. My job is to
              find which, and fix it at that level.&rdquo;
              <footer>Dr. Bilal Khan</footer>
              <motion.div
                initial={{ scaleX: 0, transformOrigin: 'left' }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, var(--bio-blue), var(--bio-teal))',
                  marginTop: '16px',
                  borderRadius: '2px',
                }}
              />
            </motion.blockquote>

            <div className="philosophy__values">
              {VALUES.map((v, index) => (
                <HoverEffect key={v.title} effect="lift">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="philosophy__value"
                  >
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                      style={{
                        height: '2px',
                        background: 'var(--bio-teal)',
                        marginBottom: '12px',
                        borderRadius: '1px',
                      }}
                    />
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </motion.div>
                </HoverEffect>
              ))}
            </div>
          </div>
        </section>
      </EnhancedScrollReveal>

      <EnhancedScrollReveal type="fadeUp">
        <section className="journey">
          <div className="shell">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <h2>A path built around one specialty.</h2>
              {/* <GradientLine delay={0.2} /> */}
            </motion.div>

            <div className="journey__track">
              {[
                { span: 'Podiatric Medical School', p: 'Trained in surgical and biomechanical foundations of foot & ankle care.' },
                { span: 'Surgical Residency', p: 'Focused on reconstructive and minimally invasive procedures.' },
                { span: 'Regenerative Fellowship', p: 'Specialized in PRP, cellular therapy, and sports medicine protocols.' },
                { span: 'Dr. 2 Feet, Founded', p: 'Built a practice around restoring tissue, not just managing symptoms.' },
              ].map((item, index) => (
                <motion.div
                  key={item.span}
                  className="journey__item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <span>{item.span}</span>
                  <p>{item.p}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </EnhancedScrollReveal>
    </>
  );
}
