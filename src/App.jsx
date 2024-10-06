import { div } from "framer-motion/client"
import Footer from "./components/footer"
import HowThingsWork from "./components/how things work"
import Main from "./components/main"
import Navbar from "./components/navbar"
import OurWork from "./components/our work"

function App() {

  return (
    <div className="dark:bg-black">
      <Navbar />
      <Main />
      <HowThingsWork />
      <OurWork />
      <Footer />
    </div>
  )
}

export default App
