import { motion } from "framer-motion"
import WavyElements from "../Decoration/Wavy"
import ChipTabs from "../DropDown/DropDown"
import { useNavigate } from "react-router-dom";  



const PricingCard = ({ title, price, features, isPopular }) => (
    
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={`bg-[#FFCC80] p-8 rounded-lg shadow-xl max-w-sm w-full ${isPopular ? "border-4 border-[#86370e]" : ""}`}
  >
    {isPopular && (
      <div className="bg-[#86370e] text-white text-center py-1 px-4 rounded-full text-sm font-semibold mb-4">
        Most Popular
      </div>
    )}
    <h2 className="text-2xl font-bold mb-4 text-[#86370e]">{title}</h2>
    <p className="text-4xl font-bold mb-6">
      ${price}
      <span className="text-xl font-normal">/month</span>
    </p>
    <ul className="space-y-2 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full bg-[#86370e] text-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300">
      Choose Plan
    </button>
  </motion.div>
)

const PricingPage = () => {
    const navigate = useNavigate(); 

    const handleLanguageClick = (tab) => {
        if (tab === "About") {
          console.log("Language tab clicked!");
          navigate("/aboot");
        }
        if (tab === "Pricing") {
          navigate("/pay");
        }
        if (tab === "Home") {
          navigate("/");
        }
      };
  const plans = [
    {
      title: "Basic",
      price: 1,
      features: ["24/7 chat support", "Personalized conversations", "Mood tracking","Guided Breathing excercises"],
    },
    {
      title: "Pro",
      price: 19.99,
      features: [
        "All Basic features",
        "Advanced mood analysis",
        "Guided meditation sessions",
        "Weekly progress reports",
      ],
      isPopular: true,
    },
    {
      title: "Premium",
      price: 29.99,
      features: [
        "All Pro features",
        "Priority support",
        "Customized wellness plans",
        "Monthly consultation with therapist",
      ],
    },
  ]

  return (
    <div className="min-h-screen w-full bg-[#FFCC80] flex justify-center items-center p-8 relative overflow-hidden">
    
      <WavyElements />
      <div className="z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center text-[#86370e]"
        >
          Choose Your Plan
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>

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

export default PricingPage

