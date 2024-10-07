import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Main from './components/main';
import HowThingsWork from './components/how things work'; // Make sure this file name is correct
import OurWork from './components/our work'; // Ensure this file exists
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="dark:bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/how things work" element={<HowThingsWork />} />
          <Route path="/our work" element={<OurWork />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
