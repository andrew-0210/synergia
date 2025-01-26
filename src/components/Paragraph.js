// Scroll based opacity
// "use client";

// import { useRef } from "react";
// import { useScroll, motion } from "motion/react";

// const Paragraph = ({ value, children }: any) => {
//   const element = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: element,
//     offset: ["start 0.9", "start 0.25"],
//   });

//   return (
//     <motion.h2 ref={element} style={{ opacity: scrollYProgress }}>
//       {value || children}
//     </motion.h2>
//   );
// };

// export default Paragraph;

"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";

const Paragraph = ({ value }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <motion.h2
      ref={element}
      className="flex flex-wrap justify-center leading-[1]"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </motion.h2>
  );
};

export default Paragraph;

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-[8px] mt-[8px] md:mr-[12px]">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
