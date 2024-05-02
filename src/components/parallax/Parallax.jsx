import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: -3,
      y: -3,
    },
    animate: {
      x: "3%",
      y: "3%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3,
      },
    },
  };

  const planetsVariants = {
    initial: {
      x: 3,
      y: 3,
    },
    animate: {
      x: "-3%",
      y: "-3%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3,
      },
    },
  };

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #111132, #0c0c1d)",
      }}
    >
      <div className="middle">
        <motion.h1 style={{ y: yText }}>
          Pixel Perfectionist<span>Crafting Seamless Web Experiences</span>
        </motion.h1>
        <motion.img
          variants={textVariants}
          animate="scrollButton"
          src="/scroll.png"
        />
      </div>

      <motion.div className="mountains"></motion.div>
      <motion.div
        variants={planetsVariants}
        initial="initial"
        animate="animate"
        className="planets"
        style={{
          backgroundImage: `url(${"/planets.png"})`,
        }}
      ></motion.div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="stars"
      ></motion.div>
    </div>
  );
};

export default Parallax;
