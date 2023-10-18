export default function CTA() {
  return (
    <div className="flex gap-6 justify-center mt-[2.5rem]">
      <a
        href={"./CV"}
        download
        id="secondary"
        className="btn 
        text-[var(--color-primary)] cursor-pointer py-3 px-5 rounded-lg border border-solid border-[var(--color-primary)] transition-[var(--transition)]
        hover:bg-[var(--color-white)] hover:text-[var(--color-bg)] hover:border-[transparent]"
      >
        Download CV
      </a>
      <a
        href="#contact"
        id="primary"
        className="btn 
         cursor-pointer py-3 px-5 rounded-lg border border-solid border-[var(--color-primary)] transition-[var(--transition)] 
         hover:bg-[var(--color-white)] hover:text-[var(--color-bg)] hover:border-[transparent]
         bg-[var(--color-primary)] text-[var(--color-bg)]
         "
      >
        Let&rsquo;s Talk
      </a>
    </div>
  );
}
