import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';
import ScrollReveal from '../components/ScrollReveal';
import EnhancedScrollReveal from '../components/EnhancedScrollReveal';
import { HoverEffect } from '../components/HoverEffects';
import { LineSeparator, GradientLine } from '../components/LineAnimation';
import * as animations from '../utils/animations';
import './Services.css';

const GROUPS = [
  {
    label: 'Regenerative Treatments',
    intro: 'Therapies that direct your body\u2019s own biology to repair damaged tissue, rather than just quieting symptoms.',
    items: [
      { name: 'Platelet-Rich Plasma (PRP) Therapy', text: 'Concentrated platelets drawn from your own blood, injected to accelerate healing in tendons, ligaments, and the plantar fascia.' },
      { name: 'Cellular Matrix Therapy', text: 'Regenerative scaffolding used for chronic wounds and degenerative joint conditions that haven\u2019t responded to conservative care.' },
      { name: 'Extracorporeal Shockwave Therapy', text: 'Focused sound-wave pulses that stimulate blood flow and collagen repair in stubborn plantar fasciitis and Achilles tendinopathy.' },
      { name: 'Prolotherapy', text: 'Injections that trigger the body\u2019s natural repair response in unstable or chronically lax joints.' },
    ],
  },
  {
    label: 'Surgical & Structural Care',
    intro: 'For conditions that need correction rather than repair \u2014 handled with the most minimally invasive method available.',
    items: [
      { name: 'Bunion & Hammertoe Correction', text: 'Minimally invasive realignment with meaningfully faster recovery than traditional open surgery.' },
      { name: 'Reconstructive Foot & Ankle Surgery', text: 'Complex correction for deformity, trauma, arthritis, or a prior surgery that didn\u2019t fully resolve.' },
      { name: 'Sports Injury Repair', text: 'Ligament, tendon, and fracture care built around a realistic return-to-play timeline.' },
    ],
  },
  {
    label: 'Everyday & Preventive Care',
    intro: 'The ongoing care that keeps small issues from becoming surgical ones.',
    items: [
      { name: 'Diabetic Foot & Wound Care', text: 'Circulation-focused monitoring and advanced wound management to prevent complications before they start.' },
      { name: 'Custom Orthotics & Gait Analysis', text: 'Biomechanical assessment translated into orthotics built for how you actually move.' },
      { name: 'Nail & Skin Conditions', text: 'Treatment for fungal infections, ingrown nails, warts, and other recurring skin and nail issues.' },
    ],
  },
];

const FAQS = [
  { q: 'Is PRP or cellular therapy covered by insurance?', a: 'Coverage varies by plan and diagnosis. Our care coordinators verify your benefits before your first procedure so there are no surprises.' },
  { q: 'How many regenerative sessions will I need?', a: 'Most tendon and fascia conditions respond within one to three sessions, spaced four to six weeks apart. Dr. Khan sets exact expectations at your consult.' },
  { q: 'Do I need surgery, or will regenerative treatment be enough?', a: 'It depends on imaging and how long the condition has been present. Many cases that look surgical respond fully to regenerative care \u2014 we\u2019ll tell you honestly which route fits.' },
  { q: 'How soon can I be seen?', a: 'Most new patients are seen within the week. Urgent cases are typically accommodated within 48 hours.' },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function Services() {
  return (
    <>
      <section className="svc-hero">
        <div className="shell">
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
            <span className="eyebrow">Treatments</span>
            <h1>Podiatric care organized around outcomes, not procedures.</h1>
            <p className="svc-hero__lead">
              From same-day relief to reconstructive surgery, every treatment
              plan starts with a diagnosis of what\u2019s actually damaged &mdash;
              then works backward to the least invasive way to repair it.
            </p>
          </motion.div>
        </div>
      </section>

      {GROUPS.map((group, gi) => (
        <EnhancedScrollReveal key={group.label} type="fadeUp">
          <section className="svc-group">
            <div className="shell svc-group__grid">
              <motion.div
                className="svc-group__intro"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  className="svc-group__index"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  0{gi + 1}
                </motion.span>
                <h2>{group.label}</h2>
                <p>{group.intro}</p>
                <GradientLine delay={0.3} />
              </motion.div>

              <div className="svc-group__list">
                {group.items.map((item, index) => (
                  <HoverEffect key={item.name} effect="lift">
                    <motion.div
                      className="svc-item"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                    >
                      <motion.div
                        initial={{ scaleX: 0, transformOrigin: 'left' }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.08 }}
                        style={{
                          height: '2px',
                          background: 'var(--bio-blue)',
                          marginBottom: '12px',
                          borderRadius: '1px',
                        }}
                      />
                      <h3>{item.name}</h3>
                      <p>{item.text}</p>
                    </motion.div>
                  </HoverEffect>
                ))}
              </div>
            </div>
          </section>
        </EnhancedScrollReveal>
      ))}

      <EnhancedScrollReveal type="fadeUp">
        <motion.section layout className="svc-faq">
          <div className="shell svc-faq__grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <h2>Common questions before your first visit.</h2>
              <GradientLine delay={0.2} />
              <p className="svc-faq__note">Have something else on your mind?</p>
              <Link to="/contact" className="btn btn-ghost">Ask us directly</Link>
            </motion.div>
            <Accordion items={FAQS} />
          </div>
        </motion.section>
      </EnhancedScrollReveal>

      <EnhancedScrollReveal type="fadeUp">
        <motion.section layout className="cta-banner">
          <div className="shell cta-banner__inner">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <h2>Start with a diagnostic consult.</h2>
              <p>Bring your imaging or history if you have it — Dr. Khan will map next steps at your first visit.</p>
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
        </motion.section>
      </EnhancedScrollReveal>
    </>
  );
}
