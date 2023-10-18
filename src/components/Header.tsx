import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header className="h-screen pt-20 overflow-hidden ">
      <div className="text-center h-full relative w-[var(--container-width-lg)] my-0 mx-auto">
        <h5>Hello I&rsquo;m</h5>
        <h1>Manohar</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div
          className="left-1/2 translate-x-[-11rem] 
        rounded-t-[12rem] rounded-b-[12rem] rounded-r-[0] rounded-l-[0] 
        p-6 pt-20 mt-16 
        absolute w-[22rem] h-[30rem] 
        bg-gradient-to-r from-[var(--color-primary)] to-transparent"
        >
          <img src={"./me.png"} alt="me" />
        </div>

        <a
          href="#contact"
          className="absolute right-[-2.3rem] bottom-20 rotate-90 font-light text-sm"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
}
