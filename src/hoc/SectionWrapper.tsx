import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

interface SectionWrapperProps {
  Component: React.ReactNode;
  idName: string;
}
const SectionWrapper = (Component: React.FC<{}>, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7x1 mx-auto relative z-0`}
        id={idName}
      >
        <span className="hash-pan" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
