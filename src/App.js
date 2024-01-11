import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/Nav';
import HeroSection from './components/hero-section/HeroSection';
import Shape from './components/hero-section/Shape';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Section5 from './components/section5/Section5';
import Section6 from './components/section6/Section6';

function App() {
  return (
    < >
      <div className="font-poppins">
        <Nav />
        <HeroSection/>
       <Shape/>
       <Section1/>
       <Section2/>
       <Section3/>
       <Section4/>
       <Section5/>
       <Section6/>

      </div>
    </>
  );
}

export default App;
