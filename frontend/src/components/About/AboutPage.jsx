import { motion } from "framer-motion"
import DecorativeElements from "../Decoration/Decorative"
import ChipTabs from "../DropDown/DropDown"
import { useNavigate } from "react-router-dom";  
import WavyElements from "../Decoration/Wavy";
import CoffeeSVG from '../../assets/coffee.svg'


const AboutPage = () => {

    const navigate = useNavigate(); 

      const handleLanguageClick = (tab) => {
        if (tab === "About") {
          navigate("/aboot");
        }
        if (tab === "Home") {
            navigate("/");
          }
          if (tab === "Pricing") {
            navigate("/pay");
          }
      };
    
  return (
    <div className="min-h-screen w-full bg-[#FFCC80] flex justify-center items-center p-8 relative overflow-hidden">
      {/* Grid Background */}
      {/* <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-20">
        {[...Array(100)].map((_, i) => (
          <div key={i} className="border border-[#86370e]"></div>
        ))}
      </div> */}

      <WavyElements />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x:700,y: 20 }}
        animate={{ opacity: 8,x: 500, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#FFCC80] p-8 rounded-lg shadow-lg max-w-2xl z-10 border-2 border-[#86370e]"
      >
        <h1 className="text-4xl font-bold mb-6 text-[#86370e]">About Ohm</h1>
        <p className="text-lg mb-4 text-gray-700">
        Ohm is like a friend who’s always there for you, offering emotional support whenever you need it. 
         and get some comforting advice.
        </p>
        <p className="text-lg mb-4 text-gray-700">
        Whether you're feeling stressed, anxious, 
        or just want to talk, Ohm is here to listen, understand, and help you feel better.
         With knowledge about mental health and emotional well-being, Ohm provides a safe, no-judgment zone to share your thoughts 
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-[#86370e]">Key Features:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Available anytime, day or night, to chat and support you</li>
          <li>Conversations that feel personal and are tailored just for you</li>
          <li>Suggests breathing exercises and calming songs to help you relax</li>
          <li>Nothing shared here goes beyond the conversation.</li>
          <li>Ohm keeps learning so it can always be there when you need it most</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x : -80 }}
        animate={{ opacity: 1, scale: 2.6, x : -300, y:0}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <img src={CoffeeSVG || "/placeholder.svg"} alt="Logo" className="w-64 h-64" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x : 210, y : -600}}
        animate={{ opacity: 1, scale: 1.3, x : 310, y : -450}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
          <ChipTabs onTabChange={handleLanguageClick} />
      </motion.div>
    </div>
  )
}

export default AboutPage

