import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BioGraphic from '../components/BioGraphic';
import TestimonialRotator from '../components/TestimonialRotator';
import ScrollReveal from '../components/ScrollReveal';
import EnhancedScrollReveal from '../components/EnhancedScrollReveal';
import Counter from '../components/Counter';
import { HoverEffect, HoverCard, HoverImageZoom } from '../components/HoverEffects';
import { LineAnimation, LineSeparator, GradientLine } from '../components/LineAnimation';
import * as animations from '../utils/animations';
import './Home.css';

const heroLine = {
  hidden: { y: '110%' },
  show: (i) => ({
    y: '0%',
    transition: { duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeUp = (delay = 0,duration = 0.7) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } },
});

const PILLARS = [
  {
    title: 'Restore',
    text: 'We treat the source of chronic pain — plantar fasciitis, neuromas, joint degeneration — instead of cycling you through short-term relief.',
  },
  {
    title: 'Regenerate',
    text: 'PRP, cellular therapies, and shockwave protocols direct your own biology to rebuild damaged tendon, ligament, and cartilage tissue.',
  },
  {
    title: 'Renew',
    text: 'A recovery plan built around your gait, your footwear, and your life, so healing holds instead of reversing in six months.',
  },
];

const SERVICES = [
  { name: 'Regenerative Therapies', text: 'PRP injections, cellular matrix therapy, and shockwave for tendons, plantar fascia, and cartilage.' },
  { name: 'Sports & Biomechanics', text: 'Gait analysis, custom orthotics, and return-to-play protocols for runners and athletes.' },
  { name: 'Surgical Podiatry', text: 'Minimally invasive correction for bunions, hammertoes, and reconstructive cases.' },
  { name: 'Diabetic & Wound Care', text: 'Advanced wound management and circulation-focused care to prevent complications.' },
];

const PROCESS = [
  { step: '01', title: 'Diagnostic Consult', text: 'In-office imaging and a full biomechanical exam to identify what is actually driving your pain.' },
  { step: '02', title: 'Regenerative Plan', text: 'Dr. Khan builds a treatment sequence around your tissue, your timeline, and your goals.' },
  { step: '03', title: 'In-Office Procedure', text: 'Precision-guided injections or minor procedures, most completed in a single visit.' },
  { step: '04', title: 'Guided Recovery', text: 'Structured follow-up and movement retraining so the repair holds long term.' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero__grid">
          <div className="hero__copy">
            <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              Regenerative Podiatric Medicine, New York
            </motion.span>

            <h1 className="hero__title">
              <span className="hero__line-mask"><motion.span custom={0} variants={heroLine} initial="hidden" animate="show">Feet weren't built</motion.span></span>
              <span className="hero__line-mask"><motion.span custom={1} variants={heroLine} initial="hidden" animate="show">to just get by.</motion.span></span>
              <span className="hero__line-mask"><motion.span custom={2} variants={heroLine} initial="hidden" animate="show">We help them heal.</motion.span></span>
            </h1>

            <motion.p className="hero__sub" variants={fadeUp(0.55)} initial="hidden" animate="show">
              Dr. Bilal Khan combines advanced podiatric surgery with regenerative
              medicine &mdash; PRP, cellular therapy, and precision biomechanics &mdash;
              to treat foot and ankle conditions at the source.
            </motion.p>

            <motion.div className="hero__actions" variants={fadeUp(0.7)} initial="hidden" animate="show">
              <Link to="/contact" className="btn btn-primary">Book a Consult</Link>
              <Link to="/services" className="btn btn-ghost">Explore Treatments</Link>
            </motion.div>

            <motion.div className="hero__stats" variants={fadeUp(0.85,1.5)} initial="hidden" animate="show">
              <div>
                <strong>
                  <Counter end={12} suffix="+" />
                </strong>
                <span>Years in practice</span>
              </div>
              <div>
                <strong>
                  <Counter end={3400} suffix="+" />
                </strong>
                <span>Patients treated</span>
              </div>
              <div>
                <strong>
                  <Counter end={4.9} decimals={1} suffix="/5" />
                </strong>
                <span>Patient rating</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero__art"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <BioGraphic />
          </motion.div>
        </div>
      </section>

      <EnhancedScrollReveal type="fadeUp" stagger staggerDelay={0.15}>
        <section className="pillars">
          <div className="shell">
            <EnhancedScrollReveal type="fadeDown">
              <div className="section-head">
                <h2>Three principles behind every treatment plan.</h2>
                <LineSeparator delay={0.3} />
              </div>
            </EnhancedScrollReveal>
            

            <div className="pillars__grid">
              {PILLARS.map((p, index) => (
                <HoverEffect key={p.title} effect="lift" className="pillar-card">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="pillar-card-inner"
                  >
                    <span className="pillar-card__index">{p.title[0]}</span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      style={{ height: '2px', background: 'var(--bio-blue)', borderRadius: '1px', marginBottom: '12px' }}
                    />
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </motion.div>
                </HoverEffect>
              ))}
            </div>
          </div>
        </section>
      </EnhancedScrollReveal>

      <EnhancedScrollReveal type="fadeUp">
        <section className="services-teaser">
          <div className="shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="section-head section-head--split"
            >
              <div>
                <h2>Care that spans everyday relief to complex reconstruction.</h2>
                <GradientLine delay={0.2} />
              </div>
              <Link to="/services" className="btn btn-ghost">View all treatments</Link>
            </motion.div>

            <div className="services-teaser__grid">
              {SERVICES.map((s, index) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to="/services" className="service-row hover-color-transition">
                    <motion.div
                      initial={{ scaleX: 0, transformOrigin: 'left' }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      style={{
                        height: '2px',
                        background: 'var(--bio-blue)',
                        marginBottom: '12px',
                        borderRadius: '1px',
                      }}
                    />
                    <h3>{s.name}</h3>
                    <p>{s.text}</p>
                    <span className="service-row__arrow">&#8594;</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </EnhancedScrollReveal>

      <EnhancedScrollReveal type="fadeUp">
        <section className="process">
          <div className="shell">
            <EnhancedScrollReveal type="fadeDown">
              <div className="section-head">
                <h2>From first consult to lasting recovery.</h2>
                <LineSeparator delay={0.3} />
              </div>
            </EnhancedScrollReveal>

            <div className="process__grid">
              {PROCESS.map((s, index) => (
                <HoverEffect key={s.step} effect="lift">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="process-card"
                  >
                    <motion.span
                      className="process-card__step"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                      {s.step}
                    </motion.span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </motion.div>
                </HoverEffect>
              ))}
            </div>
          </div>
        </section>
      </EnhancedScrollReveal>

      <EnhancedScrollReveal type="scaleIn">
        <section className="testimonials">
          <div className="shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <h2>Real recoveries, in patients&rsquo; own words.</h2>
              <LineSeparator delay={0.3} margin="16px 0 24px 0" />
            </motion.div>
            <TestimonialRotator />
          </div>
        </section>
      </EnhancedScrollReveal>

      <EnhancedScrollReveal type="fadeUp">
        <section className="cta-banner">
          <div className="shell cta-banner__inner">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <h2>Ready to treat the cause, not just the symptom?</h2>
              <p>Start with a diagnostic consult with Dr. Khan &mdash; most new patients are seen within the week.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link to="/contact" className="btn btn-primary">Book a Consult</Link>
            </motion.div>
          </div>
        </section>
      </EnhancedScrollReveal>
    </>
  );
}
