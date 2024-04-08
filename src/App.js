import Navbar from "./Components/Navbar";

import Home from "./Components/Home";
import SocialLinks from "./Components/SocialLinks";
import About from "./Components/About";
import Protfolio from "./Components/Protfolio";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
    <Navbar />
    <Home />
    <SocialLinks />
    <About />
    <Protfolio />
    <Experience />
    <Contact />
</div>
  );
}

export default App;
