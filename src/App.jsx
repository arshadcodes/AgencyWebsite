import { div } from "framer-motion/client"
import Footer from "./components/Footer"
import HowThingsWork from "./components/HowThingsWork"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import OurWork from "./components/OurWork"

function App() {

  return (
    <div className="dark:bg-black">
      <Navbar />
      <Home />
      <HowThingsWork />
      <OurWork />
      <Footer />
    </div>
  )
}

export default App
