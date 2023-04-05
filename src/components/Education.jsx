import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Education = () => {
  return (
    <>
      <motion.div>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        McMaster University - B.Sc Computer Science (2022)
      </motion.p>
    </>
  );
};

export default SectionWrapper(Education, "education");
