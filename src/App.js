import logo from './logo.svg';
import './App.css';
import SideBarSection from './components/sideBar';
import HeaderSection from './components/HeaderSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import ContactMe from './components/ContactMe';
import Expertise from './components/Expertise';
function App() {
  return (
    <div className="wrapper">
   <SideBarSection/>
    <div className="content"> 
   <HeaderSection/>
     <AboutSection/>
       <Education/>
     
      <Experience/>
      
    <Expertise/>
    <Services/>
       
       <Portfolio/>
      
      <Reviews/>
     <ContactMe/>
     
     <Footer/>
       
    </div>
</div>
  );
}

export default App;
