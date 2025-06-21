import React from "react";
import { motion } from "framer-motion";

const SplitText = ({ text, type = "words", className = "" }) => {
  const splitItems = type === "chars" ? text.split("") : text.split(" ");

  return (
    <span className="inline-block">
      {splitItems.map((item, index) => (
        <motion.span
          key={index}
          className={className}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
        >
          {item}{" "}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitText;
