// import { motion } from "framer-motion"

// const DecorativeElements = () => {
//   return (
//     <>
//       <motion.div
//         className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#86370e] opacity-30"
//         animate={{
//           scale: [1, 1.2, 1],
//           rotate: [0, 180, 0],
//         }}
//         transition={{
//           duration: 5,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//       />
//       <motion.div
//         className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#86370e] opacity-30"
//         animate={{
//           y: [0, -20, 0],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//       />
//       <motion.div
//         className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-[#86370e] opacity-20"
//         animate={{
//           x: [0, 30, 0],
//           y: [0, -30, 0],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//       />
//       <motion.div
//         className="absolute bottom-1/4 left-1/4 w-14 h-14 rounded-full bg-[#86370e] opacity-25"
//         animate={{
//           scale: [1, 1.3, 1],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Number.POSITIVE_INFINITY,
//           repeatType: "reverse",
//         }}
//       />
//       <motion.div
//         className="absolute top-1/2 left-10 w-10 h-10 rounded-full bg-[#86370e] opacity-15"
//         animate={{
//           rotate: [0, 360],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Number.POSITIVE_INFINITY,
//           ease: "linear",
//         }}
//       />
//     </>
//   )
// }

// export default DecorativeElements

import { motion } from "framer-motion"

const FloatingCircles = () => {
  return (
    <>
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#86370e] opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-[#86370e] opacity-30"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-[#86370e] opacity-20"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-14 h-14 rounded-full bg-[#86370e] opacity-25"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-10 h-10 rounded-full bg-[#86370e] opacity-15"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </>
  )
}

const WavyLine = () => {
  return (
    <svg className="absolute left-0 right-0 bottom-0 h-24 w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
      <motion.path
        d="M0 50 Q 25 60, 50 50 T 100 50 L100 100 L0 100 Z"
        fill="#86370e"
        fillOpacity="0.2"
        animate={{
          d: [
            "M0 50 Q 25 60, 50 50 T 100 50 L100 100 L0 100 Z",
            "M0 50 Q 25 40, 50 50 T 100 50 L100 100 L0 100 Z",
            "M0 50 Q 25 60, 50 50 T 100 50 L100 100 L0 100 Z",
          ],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
        }}
      />
    </svg>
  )
}

const FloatingShapes = () => {
  return (
    <>
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-[#86370e] opacity-20 rotate-45"
        animate={{
          rotate: [45, 90, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-20 h-20 border-4 border-[#86370e] opacity-20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          borderRadius: ["50%", "25%", "50%"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-12 h-12 border-b-4 border-r-4 border-[#86370e] opacity-20"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </>
  )
}

const DecorativeElements = () => {
  return (
    <>
      <FloatingCircles />
      <WavyLine />
      <FloatingShapes />
    </>
  )
}

export default DecorativeElements



