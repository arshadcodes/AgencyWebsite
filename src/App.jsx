import Footer from "./components/Footer";
import HowThingsWork from "./components/HowThingsWork";
import Main from "./components/main";
import Navbar from "./components/Navbar";
import OurWork from "./components/Work";

function App() {
  return (
    <div className="dark:bg-black">
      <Navbar />
      <Main />
      <HowThingsWork />
      <OurWork />
      <Footer />
    </div>
  );
}

export default App;
