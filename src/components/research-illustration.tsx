export function ResearchIllustration() {
  return <figure className="research-illustration">
    <div className="illustration-label"><span className="live-dot" />Molecular photophysics<span>01 — 03</span></div>
    <svg viewBox="0 0 500 300" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="surface-a" x1="40" y1="40" x2="400" y2="250" gradientUnits="userSpaceOnUse"><stop stopColor="#8DC1C8" stopOpacity=".5" /><stop offset="1" stopColor="#8DC1C8" stopOpacity=".03" /></linearGradient>
        <linearGradient id="surface-b" x1="100" y1="210" x2="400" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#CBAA78" stopOpacity=".04" /><stop offset="1" stopColor="#CBAA78" stopOpacity=".5" /></linearGradient>
      </defs>
      <g stroke="#9CB4C6" opacity=".1" strokeWidth=".7">
        {[40, 90, 140, 190, 240].map((y) => <path key={y} d={`M35 ${y}H465`} />)}
        {[50, 100, 150, 200, 250, 300, 350, 400, 450].map((x) => <path key={x} d={`M${x} 30V270`} />)}
      </g>
      <path d="M45 50C140 45 160 220 255 220S375 55 455 55L455 100C375 100 350 265 255 265S140 90 45 95Z" fill="url(#surface-a)" />
      <path d="M45 235C130 240 175 75 265 75S360 235 455 230L455 185C360 190 355 30 265 30S130 195 45 190Z" fill="url(#surface-b)" />
      <g stroke="#87B9C3" strokeWidth="1.2">
        {[0, 11, 22, 33, 44].map((shift) => <path key={shift} d={`M45 ${50 + shift}C140 ${45 + shift} 160 ${220 + shift} 255 ${220 + shift}S375 ${55 + shift} 455 ${55 + shift}`} opacity={1 - shift / 65} />)}
      </g>
      <g stroke="#CDB287" strokeWidth="1.2">
        {[0, 11, 22, 33, 44].map((shift) => <path key={shift} d={`M45 ${235 - shift}C130 ${240 - shift} 175 ${75 - shift} 265 ${75 - shift}S360 ${235 - shift} 455 ${230 - shift}`} opacity={1 - shift / 65} />)}
      </g>
      <path d="M83 62C125 85 153 173 207 192" stroke="#E6EDE9" strokeWidth="1.3" strokeDasharray="3 6" />
      <circle cx="208" cy="191" r="6" fill="#E2ECE7" /><circle cx="208" cy="191" r="13" stroke="#E2ECE7" strokeOpacity=".25" />
      <g fill="#B9CCD5" fontFamily="monospace" fontSize="10"><text x="35" y="288">electronic states / nuclear motion</text><text x="430" y="35">ψ(t)</text></g>
    </svg>
    <div className="illustration-bottom"><p>Small molecules.<br /><em>Remarkable dynamics.</em></p><span aria-hidden="true">↗</span></div>
    <figcaption>Conceptual illustration · not simulation data</figcaption>
  </figure>;
}
