export function SantaHat({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Gorro rojo curvo */}
      <path
        d="M10 44C15 28 32 10 48 12C54 13 58 18 56 24C54 30 48 32 44 33C37 35 32 35 28 39C24 43 18 45 10 44Z"
        fill="#C1121F"
      />
      {/* Sombra / pliegue de terciopelo */}
      <path
        d="M18 41C24 30 35 18 47 14C45 22 39 30 28 36C24 38 21 40 18 41Z"
        fill="#7F0913"
        opacity="0.35"
      />
      {/* Pom-pom blanco */}
      <circle cx="56" cy="27" r="6.5" fill="#FFFFFF" />
      <circle cx="56" cy="27" r="6.5" stroke="#E2E8F0" strokeWidth="1" />
      {/* Ribete blanco de felpa */}
      <rect
        x="6"
        y="40"
        width="38"
        height="12"
        rx="6"
        transform="rotate(-6 6 40)"
        fill="#FFFFFF"
      />
      <rect
        x="6"
        y="40"
        width="38"
        height="12"
        rx="6"
        transform="rotate(-6 6 40)"
        stroke="#E2E8F0"
        strokeWidth="1"
      />
    </svg>
  );
}

