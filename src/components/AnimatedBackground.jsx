// A subtle animated SVG background component for modern portfolios
// You can adjust the SVG, opacity, and animation as desired

const AnimatedBackground = () => (
  <svg
    className="fixed inset-0 w-full h-full -z-10 animate-gradient-move"
    style={{ pointerEvents: 'none', opacity: 0.25 }}
    width="100%"
    height="100%"
    viewBox="0 0 1440 900"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="50%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
      <radialGradient id="radial1" cx="50%" cy="50%" r="80%">
        <stop offset="0%" stopColor="#f472b6" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse
      cx="720"
      cy="400"
      rx="700"
      ry="350"
      fill="url(#grad1)"
      opacity="0.4"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 720 400"
        to="360 720 400"
        dur="60s"
        repeatCount="indefinite"
      />
    </ellipse>
    <ellipse
      cx="400"
      cy="700"
      rx="400"
      ry="180"
      fill="url(#radial1)"
      opacity="0.6"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 400 700"
        to="360 400 700"
        dur="80s"
        repeatCount="indefinite"
      />
    </ellipse>
  </svg>
);

export default AnimatedBackground;
