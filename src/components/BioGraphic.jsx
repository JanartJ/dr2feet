import { motion } from 'framer-motion';
import './BioGraphic.css';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.4, delay: i * 0.15 } },
  }),
};

export default function BioGraphic() {
  return (
    <div className="bio-graphic" aria-hidden="true">
      <svg viewBox="0 0 520 620" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bioLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6fe0cf" />
            <stop offset="100%" stopColor="#2e9bff" />
          </linearGradient>
          <radialGradient id="bioGlow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#2e9bff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2e9bff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="270" cy="300" r="230" fill="url(#bioGlow)" />

        {/* orbit ring, echoes the logo's outer arc */}
        <motion.circle
          cx="260" cy="300" r="220"
          stroke="url(#bioLine)" strokeWidth="1.4" strokeOpacity="0.5"
          strokeDasharray="6 10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '260px 300px' }}
        />

        {/* DNA helix, left side */}
        <motion.path
          custom={0} variants={draw} initial="hidden" animate="show"
          d="M120 60 C 200 130, 60 200, 140 270 C 220 340, 80 400, 150 470 C 200 520, 120 560, 150 600"
          stroke="url(#bioLine)" strokeWidth="2" strokeLinecap="round"
        />
        <motion.path
          custom={0.2} variants={draw} initial="hidden" animate="show"
          d="M60 90 C 140 150, 20 220, 100 290 C 180 360, 40 420, 110 490 C 160 540, 80 570, 100 610"
          stroke="url(#bioLine)" strokeWidth="1.4" strokeOpacity="0.5" strokeLinecap="round"
        />
        {[95, 150, 205, 260, 315, 370, 425, 480].map((y, idx) => (
          <motion.line
            key={y}
            custom={0.3 + idx * 0.05} variants={draw} initial="hidden" animate="show"
            x1={70 + (idx % 2) * 10} y1={y} x2={140 - (idx % 2) * 10} y2={y - 10}
            stroke="#6fe0cf" strokeOpacity="0.45" strokeWidth="1"
          />
        ))}

        {/* Foot / ankle silhouette, right side — simplified anatomical line art */}
        <motion.path
          custom={0.4} variants={draw} initial="hidden" animate="show"
          d="M300 60
             C 300 60, 260 90, 262 150
             C 264 200, 300 220, 300 260
             C 300 300, 260 320, 250 360
             C 236 410, 260 440, 320 452
             C 390 466, 440 456, 460 430
             C 476 408, 462 388, 420 384
             C 380 380, 350 388, 330 372
             C 312 358, 320 330, 300 300"
          stroke="url(#bioLine)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
        />

        {/* joint nodes */}
        {[
          [300, 150], [300, 260], [300, 300], [330, 372], [380, 380], [420, 384], [460, 430],
        ].map(([cx, cy], idx) => (
          <motion.circle
            key={`${cx}-${cy}`}
            custom={0.9 + idx * 0.08} variants={draw} initial="hidden" animate="show"
            cx={cx} cy={cy} r={idx === 6 ? 5 : 3.5}
            fill="#2e9bff"
          />
        ))}

        {/* toe bones */}
        {[[460, 430, 490, 418], [455, 448, 486, 444], [445, 462, 472, 466]].map(([x1, y1, x2, y2], idx) => (
          <motion.line
            key={idx}
            custom={1.2 + idx * 0.08} variants={draw} initial="hidden" animate="show"
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#dbe3ec" strokeOpacity="0.7" strokeWidth="1.6" strokeLinecap="round"
          />
        ))}
      </svg>

      <motion.div
        className="bio-graphic__pulse"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
