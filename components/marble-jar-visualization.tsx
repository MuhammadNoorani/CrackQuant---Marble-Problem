export function MarbleJarVisualization() {
  return (
    <div className="my-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 450"
        className="w-full h-auto max-w-2xl mx-auto drop-shadow-lg"
      >
        <defs>
          <linearGradient id="jar-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
          </filter>
          <pattern id="white-marble-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="4" fill="white" fillOpacity="0.7" />
          </pattern>
          <pattern id="black-marble-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="4" fill="black" fillOpacity="0.7" />
          </pattern>
        </defs>

        <g transform="translate(100, 50)">
          {/* Maximize Probability Jar */}
          <g className="jar-group">
            <rect
              x="0"
              y="0"
              width="240"
              height="300"
              fill="url(#jar-gradient)"
              stroke="#374151"
              strokeWidth="3"
              rx="20"
              filter="url(#shadow)"
            />
            <circle
              cx="120"
              cy="80"
              r="40"
              fill="white"
              stroke="#374151"
              strokeWidth="2"
              filter="url(#shadow)"
            />
            <text x="120" y="85" textAnchor="middle" fontSize="16" fill="#374151" fontWeight="bold">
              1 White
            </text>
            <rect
              x="20"
              y="140"
              width="200"
              height="140"
              fill="url(#black-marble-pattern)"
              fillOpacity="0.7"
            />
            <rect
              x="20"
              y="140"
              width="200"
              height="140"
              fill="url(#white-marble-pattern)"
              fillOpacity="0.4"
            />
            <text x="120" y="210" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">
              99 Mixed Marbles
            </text>
          </g>

          {/* Minimize Probability Jar */}
          <g className="jar-group" transform="translate(360, 0)">
            <rect
              x="0"
              y="0"
              width="240"
              height="300"
              fill="url(#jar-gradient)"
              stroke="#374151"
              strokeWidth="3"
              rx="20"
              filter="url(#shadow)"
            />
            <rect
              x="20"
              y="40"
              width="200"
              height="240"
              fill="url(#black-marble-pattern)"
              fillOpacity="0.5"
            />
            <rect
              x="20"
              y="40"
              width="200"
              height="120"
              fill="url(#white-marble-pattern)"
              fillOpacity="0.5"
            />
            <text x="120" y="170" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">
              50 White / 50 Black
            </text>
          </g>
        </g>

        <g transform="translate(400, 400)">
          <text x="0" y="0" fontSize="16" fill="#374151" fontWeight="bold" textAnchor="middle">
            Maximize Probability: 50%
          </text>
          <text x="0" y="30" fontSize="16" fill="#374151" fontWeight="bold" textAnchor="middle">
            Minimize Probability: 25%
          </text>
        </g>
      </svg>
    </div>
  )
}

