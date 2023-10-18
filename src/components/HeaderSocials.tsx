import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

export default function HeaderSocials() {
  return (
    <div className="absolute left-0 bottom-[3rem] flex gap-[0.8rem] flex-col items-center ">
      <a href="https://www.linkedin.com/in/manohar19" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/manohar-19" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
}
