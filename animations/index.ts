import { Variants } from "framer-motion";

// export const scrolGridListVarints: Variants = {
//   initial: {
//     x: 0,
//     transition: {
//       bounce: 0,
//       duration: 0.7,
//       type: "spring",
//       delayChildren: 0.3,
//       staggerChildren: 0.05,
//     },
//   },
//   animate: {
//     x: -110 * 4,
//     transition: {
//       delay: 0.5,
//       duration: 8,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "loop",
//     },
//   },
// };

export const scrolGridListVarints: Variants = {
  animate: {
    x: `-${86 * 3}px`, // Scroll entire width
    transition: {
      duration: 5, // Adjust the speed of the scroll
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
