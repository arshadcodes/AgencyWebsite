import { div } from "framer-motion/client"
import Footer from "./components/footer"
import HowThingsWork from "./components/how things work"
import Main from "./components/main"
import Navbar from "./components/Navbar"
import OurWork from "./components/our work"
import Testimonial from "./components/Testimonial"

function App() {

  return (
    <div className="dark:bg-black">
      <Navbar />
      <Main />
      <HowThingsWork />
      <OurWork />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
