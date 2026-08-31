import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="shell not-found__inner">
        <span className="eyebrow">Page not found</span>
        <h1>This path didn&rsquo;t lead anywhere.</h1>
        <p>The page you&rsquo;re looking for may have moved. Let&rsquo;s get you back on track.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
