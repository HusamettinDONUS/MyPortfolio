import "./skills.scss";
import { motion } from "framer-motion";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import js from "../../../public/js.png";
import sass from "../../../public/sass.png";
import bootstrap from "../../../public/bootstrap.png";
import tailwind from "../../../public/tailwind.png";
import react from "../../../public/react.png";
import framer from "../../../public/framer-motion.png";
import firebase from "../../../public/firebase.png";
import csharp from "../../../public/csharp.png";
import api from "../../../public/api.png";

const items = [
  { txt: "HTML", img: html },
  { txt: "CSS", img: css },
  { txt: "JavaSript", img: js },
  { txt: "SASS/SCSS", img: sass },
  { txt: "Bootstrap", img: bootstrap },
  { txt: "Tailwind CSS", img: tailwind },
  { txt: "React", img: react },
  { txt: "Framer Motion", img: framer },
  { txt: "Firebase", img: firebase },
  { txt: "C# & WinForms", img: csharp },
  { txt: "API Integration", img: api },
  // { txt: "AI Chatbots", img: "/public/chatbot.png" },
];

const Skills = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
    },
    animate: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.07,
      },
    }),
  };

  return (
    <div className="skills">
      <h1>Skills</h1>
      <motion.ul>
        {items.map((item, i) => (
          <motion.li
            className="skill"
            key={i}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={i}
          >
            <img src={item.img} alt={item.txt} />
            <span>{item.txt}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
export default Skills;
