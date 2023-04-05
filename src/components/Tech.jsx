import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { styles } from "../styles";

<h3 className={styles.sectionHeadText}>Technologies</h3>;

const Tech = () => {
  return (
    <>
      <motion.div>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technical Skills
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
