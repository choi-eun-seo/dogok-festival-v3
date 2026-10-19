import { useId } from "react";

type BookButtonProps = {
  color: string;
  name: string;
};

export default function BookButton({ color, name }: BookButtonProps) {
  const uid = useId().replace(/:/g, "");
  const clipId = `book-clip-${uid}`;
  const maskId = `book-mask-${uid}`;
  const letters = name.split("");
  const gap = letters.length >= 7 ? 24 : letters.length >= 6 ? 28 : 32;
  const startY = 162 - ((letters.length - 1) * gap) / 2;

  return (
    <button type="button" aria-label={name} className="shrink-0">
      <svg
        viewBox="0 0 129 368"
        fill="none"
        aria-hidden
        className="h-auto w-[calc(129*var(--px))]"
      >
        <g clipPath={`url(#${clipId})`}>
          <path
            d="M127.231 358.86C127.231 368.435 1.73323 368.435 1.72461 358.86V7.49863C1.72461 -0.198111 127.231 -0.198111 127.231 7.49863V358.86Z"
            fill={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#754223"
          />
          <text
            x="64.5"
            y={startY}
            fill="#734933"
            textAnchor="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="20"
            fontWeight="600"
          >
            {letters.map((letter, index) => (
              <tspan key={`${letter}-${index}`} x="64.5" dy={index === 0 ? 0 : gap}>
                {letter}
              </tspan>
            ))}
          </text>
          <rect x="46.3701" y="300.697" width="36" height="36" rx="18" fill="#734933" />
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x="54"
            y="306"
            width="25"
            height="25"
          >
            <rect x="54.3701" y="306.697" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask={`url(#${maskId})`}>
            <path d="M66.9701 318.697L62.3701 314.097L63.7701 312.697L69.7701 318.697L63.7701 324.697L62.3701 323.297L66.9701 318.697Z" fill="white" />
          </g>
          <path d="M118.37 38.6973V30.4456C118.37 28.1145 9.37012 28.1145 9.37012 30.4456V38.6973C29.9776 37.4521 97.7627 37.4521 118.37 38.6973Z" fill={color} />
          <path d="M118.37 30.6973V25.7463C118.37 24.3476 9.37012 24.3476 9.37012 25.7463V30.6973C29.9776 29.9502 97.7627 29.9502 118.37 30.6973Z" fill="#734933" />
          <path d="M118.37 42.6973V37.7463C118.37 36.3476 9.37012 36.3476 9.37012 37.7463V42.6973C29.9776 41.9502 97.7627 41.9502 118.37 42.6973Z" fill="#734933" />
        </g>
        <defs>
          <clipPath id={clipId}>
            <rect width="128.957" height="367.771" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
