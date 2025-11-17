export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Camera body */}
        <path
          d="M8 10C6.89543 10 6 10.8954 6 12V28C6 29.1046 6.89543 30 8 30H32C33.1046 30 34 29.1046 34 28V12C34 10.8954 33.1046 10 32 10H26L24 6H16L14 10H8Z"
          fill="#8A7F66"
        />

        {/* Lens circle background */}
        <circle cx="20" cy="20" r="8.5" fill="#110C0A" />

        {/* Lens outer ring */}
        <circle
          cx="20"
          cy="20"
          r="8.5"
          fill="none"
          stroke="#8A7F66"
          strokeWidth="2"
        />

        {/* Lens inner circle */}
        <circle
          cx="20"
          cy="20"
          r="6"
          fill="none"
          stroke="#8A7F66"
          strokeWidth="1.5"
        />

        {/* Shutter aperture */}
        <path
          d="M20 14C16.686 14 14 16.686 14 20C14 23.314 16.686 26 20 26C23.314 26 26 23.314 26 20C26 16.686 23.314 14 20 14Z"
          fill="none"
          stroke="#8A7F66"
          strokeWidth="1"
        />
      </svg>
      <p
        className="text-xs font-semibold tracking-widest"
        style={{ color: "#8A7F66" }}
      >
        SHOTS BY OZEE
      </p>
    </div>
  );
}
