import { motion } from "framer-motion"

const FloatingElements = () => {
  const elements = [
    { type: "circle", size: "w-16 h-16", position: "top-10 left-10", delay: 0 },
    { type: "square", size: "w-12 h-12", position: "top-1/4 right-20", delay: 0.5 },
    { type: "triangle", size: "w-14 h-14", position: "bottom-1/4 left-1/4", delay: 1 },
    { type: "circle", size: "w-20 h-20", position: "bottom-10 right-10", delay: 1.5 },
    { type: "square", size: "w-10 h-10", position: "top-1/2 left-20", delay: 2 },
  ]

  return (
    <>
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className={`absolute ${el.position} ${el.size} bg-[#86370e] opacity-20`}
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: el.delay,
          }}
          style={{
            borderRadius: el.type === "circle" ? "50%" : el.type === "triangle" ? "0 50% 50% 50%" : "0%",
            transform: el.type === "triangle" ? "rotate(45deg)" : "none",
          }}
        />
      ))}
    </>
  )
}

const WavyBackground = () => {
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      <motion.path
        d="M0,0 Q250,50 500,0 T1000,0 V100 H0 Z"
        fill="#86370e"
        fillOpacity="0.1"
        animate={{
          d: [
            "M0,0 Q250,50 500,0 T1000,0 V100 H0 Z",
            "M0,0 Q250,25 500,50 T1000,0 V100 H0 Z",
            "M0,0 Q250,50 500,0 T1000,0 V100 H0 Z",
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

const WavyElements = () => {
  return (
    <>
      <FloatingElements />
      <WavyBackground />
    </>
  )
}

export default WavyElements

