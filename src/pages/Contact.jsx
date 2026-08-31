import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

const REASONS = ['General consult', 'Regenerative treatment', 'Surgical consult', 'Second opinion'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: REASONS[0], message: '' });
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="contact-hero">
        <div className="shell">
          <span className="eyebrow">Get in touch</span>
          <h1>Let&rsquo;s start with a diagnosis, not a guess.</h1>
          <p className="contact-hero__lead">
            Tell us what&rsquo;s going on and Dr. Khan&rsquo;s office will follow
            up within one business day to schedule your consult.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="contact-body">
          <div className="shell contact-grid">
            <div className="contact-info">
              <div className="contact-info__block">
                <h3>Visit</h3>
                <p>412 Madison Avenue, Suite 9B<br />New York, NY 10017</p>
              </div>
              <div className="contact-info__block">
                <h3>Contact</h3>
                <p><a href="tel:+12125550172">(212) 555-0172</a></p>
                <p><a href="mailto:care@dr2feet.com">care@dr2feet.com</a></p>
              </div>
              <div className="contact-info__block">
                <h3>Hours</h3>
                <p>Mon &ndash; Fri: 8:00am &ndash; 6:00pm</p>
                <p>Saturday: 9:00am &ndash; 1:00pm</p>
                <p>Sunday: Closed</p>
              </div>

              <div className="contact-map">
                <iframe
                  title="Practice location"
                  src="https://www.google.com/maps?q=Madison%20Avenue%2C%20New%20York%2C%20NY&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="contact-form-panel">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="contact-success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="contact-success__mark" />
                    <h3>Request received.</h3>
                    <p>
                      Thank you, {form.name.split(' ')[0] || 'there'}. Our care
                      coordinators will reach out within one business day to confirm
                      your consult time.
                    </p>
                    <button className="btn btn-ghost" onClick={() => setSubmitted(false)}>
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="field-row">
                      <label>
                        Full name
                        <input required value={form.name} onChange={update('name')} placeholder="Jane Rivera" />
                      </label>
                      <label>
                        Phone
                        <input required value={form.phone} onChange={update('phone')} placeholder="(555) 123-4567" />
                      </label>
                    </div>

                    <label>
                      Email
                      <input required type="email" value={form.email} onChange={update('email')} placeholder="jane@email.com" />
                    </label>

                    <label>
                      Reason for visit
                      <select value={form.reason} onChange={update('reason')}>
                        {REASONS.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </label>

                    <label>
                      Tell us what&rsquo;s going on
                      <textarea rows="4" value={form.message} onChange={update('message')} placeholder="Where's the pain, and how long has it been going on?" />
                    </label>

                    <button type="submit" className="btn btn-primary">Request a Consult</button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
