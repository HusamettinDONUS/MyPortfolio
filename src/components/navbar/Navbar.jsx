import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import linkedin from "../../../public/linkedin.png";
import github from "../../../public/github.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/husamettin-donus/"
          >
            <img src={linkedin} alt="" />
          </a>
          <a
            target="_blank"
            href="https://github.com/HusamettinDONUS?tab=repositories"
          >
            <img src={github} alt="" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
