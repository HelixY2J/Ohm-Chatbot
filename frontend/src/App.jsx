import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./components/Hero/HeroPage";
import ChatPage from "./components/ChatPage/ChatPage";
import AboutPage from "./components/About/AboutPage";
import PricingPage from "./components/Pricing/PricingPage";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/aboot" element={<AboutPage />} />
      <Route path="/pay" element={<PricingPage />} />
    </Routes>
  </Router>
  );
}

export default App;
