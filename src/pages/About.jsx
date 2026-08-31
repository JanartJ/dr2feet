import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
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

      <ScrollReveal>
        <section className="philosophy">
          <div className="shell philosophy__grid">
            <blockquote>
              &ldquo;Most foot pain isn't a mystery &mdash; it's a mechanical or
              cellular problem that hasn't been treated as one. My job is to
              find which, and fix it at that level.&rdquo;
              <footer>Dr. Bilal Khan</footer>
            </blockquote>

            <div className="philosophy__values">
              {VALUES.map((v) => (
                <div key={v.title} className="philosophy__value">
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="journey">
          <div className="shell">
            <h2>A path built around one specialty.</h2>

            <div className="journey__track">
              <div className="journey__item">
                <span>Podiatric Medical School</span>
                <p>Trained in surgical and biomechanical foundations of foot &amp; ankle care.</p>
              </div>
              <div className="journey__item">
                <span>Surgical Residency</span>
                <p>Focused on reconstructive and minimally invasive procedures.</p>
              </div>
              <div className="journey__item">
                <span>Regenerative Fellowship</span>
                <p>Specialized in PRP, cellular therapy, and sports medicine protocols.</p>
              </div>
              <div className="journey__item">
                <span>Dr. 2 Feet, Founded</span>
                <p>Built a practice around restoring tissue, not just managing symptoms.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
