import { div } from "framer-motion/client"
import Footer from "./components/Footer"
import HowThingsWork from "./components/HowThingsWork"
import Main from "./components/main"
import Navbar from "./components/Navbar"
import OurWork from "./components/Work"
import MeetTheTeam from "./components/MeetTheTeam"

function App() {

  return (
    <div className="dark:bg-black">
      <Navbar />
      <Main />
      <HowThingsWork />
      <OurWork />
      <MeetTheTeam />
      <Footer />
    </div>
  )
}

export default App
