import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Dr. 2 Feet logo" />
          <div>
            <strong>Dr. 2 Feet</strong>
            <p>Restore &middot; Regenerate &middot; Renew</p>
          </div>
        </div>

        <div className="footer__col">
          <h4>Practice</h4>
          <NavLink to="/about">About Dr. Khan</NavLink>
          <NavLink to="/services">Treatments</NavLink>
          <NavLink to="/contact">Book a Consult</NavLink>
        </div>

        <div className="footer__col">
          <h4>Visit</h4>
          <p>412 Madison Avenue, Suite 9B<br />New York, NY 10017</p>
          <a href="tel:+12125550172">(212) 555-0172</a>
        </div>

        <div className="footer__col">
          <h4>Hours</h4>
          <p>Mon &ndash; Fri: 8:00am &ndash; 6:00pm<br />Saturday: 9:00am &ndash; 1:00pm<br />Sunday: Closed</p>
        </div>
      </div>

      <div className="shell footer__bottom">
        <span>&copy; {new Date().getFullYear()} Dr. 2 Feet Regenerative Podiatry. All rights reserved.</span>
        <span>Bilal Khan, DPM &mdash; Board-Eligible Podiatric Physician &amp; Surgeon</span>
      </div>
    </footer>
  );
}
