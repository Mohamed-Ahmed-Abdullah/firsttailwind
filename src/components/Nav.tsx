"use client";
import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="flex gap-4 bg-zinc-900 px-7 py-3 z-10 fixed left-1/2 translate-x-[-50%] bottom-8 rounded-[3rem] backdrop-blur-lg">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={
          "flex p-3.5 rounded-[50%] text-lg " +
          (activeNav === "#"
            ? " text-[var(--color-bg)] bg-[var(--color-primary)] "
            : " bg-transparent text-[var(--color-light)] hover:bg-gray-950 ")
        }
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={
          "flex p-3.5 rounded-[50%] text-lg " +
          (activeNav === "#about"
            ? " text-[var(--color-bg)] bg-[var(--color-primary)] "
            : " bg-transparent text-[var(--color-light)] hover:bg-gray-950 ")
        }
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={
          "flex p-3.5 rounded-[50%] text-lg " +
          (activeNav === "#experience"
            ? " text-[var(--color-bg)] bg-[var(--color-primary)] "
            : " bg-transparent text-[var(--color-light)] hover:bg-gray-950 ")
        }
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={
          "flex p-3.5 rounded-[50%] text-lg " +
          (activeNav === "#services"
            ? " text-[var(--color-bg)] bg-[var(--color-primary)] "
            : " bg-transparent text-[var(--color-light)] hover:bg-gray-950 ")
        }
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={
          "flex p-3.5 rounded-[50%] text-lg " +
          (activeNav === "#contact"
            ? " text-[var(--color-bg)] bg-[var(--color-primary)] "
            : " bg-transparent text-[var(--color-light)] hover:bg-gray-950 ")
        }
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
