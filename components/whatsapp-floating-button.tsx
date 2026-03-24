"use client";

export default function WhatsappFloatingButton() {
  return (
    <a
      href="https://wa.me/919333794182?text=Hi%2C%20I%27m%20interested%20in%20your%20property"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_30px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#1ebe5d]"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M12 2a10 10 0 0 0-8.72 14.89L2 22l5.29-1.39A10 10 0 1 0 12 2Zm5.59 14.36c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.14.11-1.84-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.82-4.37-4.97-4.58-.15-.2-1.19-1.58-1.19-3.02 0-1.44.75-2.15 1.02-2.44.27-.29.58-.36.77-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.57.82 1.98.89 2.12.07.14.12.3.02.49-.1.2-.15.31-.3.48-.14.17-.3.38-.43.51-.14.14-.28.3-.12.58.16.29.71 1.17 1.53 1.89 1.05.93 1.94 1.22 2.22 1.36.28.14.45.12.62-.07.17-.2.71-.83.9-1.11.2-.29.39-.24.66-.14.27.1 1.69.8 1.98.94.29.14.48.21.55.33.07.12.07.69-.18 1.37Z" />
      </svg>
    </a>
  );
}
