import About from '../src/Components/aboutMe/About';
import './App.css';
import Banner from '../src/Components/BannerSection/Banner';
import Contact from '../src/Components/Contact/Contact';
import Footer from '../src/Components/Footer/Footer';
import Navbar from '../src/Components/Navbar/Navbar';
import Project from '../src/Components/Projects/Project';
import Skill from "../src/Components/Skills/Skill";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Banner /></div>
      <div id="works"><Project /></div>
      <div id="skills"><Skill /></div>
      <div id="about-me"><About /></div>
      <div id="contacts"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
