import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import theWorld from "../../../public/projects/theWorld.png";
import tailwind from "../../../public/projects/tailwind.png";
import game from "../../../public/projects/game.png";
import quiz from "../../../public/projects/quiz.png";
import javascript from "../../../public/projects/javascript.png";
import bootstrap from "../../../public/projects/bootstrap.png";
import github from "../../../public/github.png";

const items = [
  {
    id: 1,
    title: "Around The World",
    img: theWorld,
    desc: "A React-based web application that presents demographic data of countries around the world. Seamlessly integrates with an API to fetch real-time population statistics and capital information.",
    url: "https://around-the-world-five.vercel.app/",
    code: "https://github.com/HusamettinDONUS/Around-the-world",
  },
  {
    id: 2,
    title: "React Landing Page",
    img: tailwind,
    desc: "A landing page template built on top of TailwindCSS and fully coded in React. It’s designed to provide all the initial components a developer needs to create a landing page for SaaS products, online services, and more",
    url: "https://react-tailwind-landing-page.vercel.app/",
    code: "https://github.com/HusamettinDONUS/React-Tailwind-LandingPage",
  },
  {
    id: 3,
    title: "React Game",
    img: game,
    desc: "This interactive tic-tac-toe game was built using React. It allows two players to take turns marking X and O on a 3x3 grid. it keeps track of the game’s history, allowing players to review previous moves.",
    url: "https://react-game-nine.vercel.app/",
    code: "https://github.com/HusamettinDONUS/React-Game",
  },
  {
    id: 4,
    title: "React Quiz App",
    img: quiz,
    desc: "A dynamic, timed quiz built with React.js.",
    url: "https://react-quiz-app-jet.vercel.app/",
    code: "https://github.com/HusamettinDONUS/React-Quiz-App",
  },
  {
    id: 5,
    title: "JavaScript Project",
    img: javascript,
    desc: "This single page website was created using vanilla JavaScript. Overall this site demonstrates proficiency with HTML, CSS, and JavaScript for building a fully responsive multi-section website without the use of additional frameworks or libraries.",
    url: "https://vanilla-javascript-project-zeta.vercel.app/",
    code: "https://github.com/HusamettinDONUS/JavaScript-Project",
  },
  {
    id: 6,
    title: "Bootstrap Project",
    img: bootstrap,
    desc: "The website is built using Bootstrap and features a responsive design with a clean and modern layout.",
    url: "https://bootstrap-project-azure.vercel.app/",
    code: "https://github.com/HusamettinDONUS/Bootstrap-SCSS-Project",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a target="_blank" href={item.url}>
              Live Preview
            </a>
            <a target="_blank" href={item.code}>
              Code
              <img src={github} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
