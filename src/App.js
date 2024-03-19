import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AboutTiwariClassesHome from './Components/AboutTiwariClassesHome/AboutTiwariClassesHome';
import AboutTiwariClasses from './Components/AboutTiwariClasses/AboutTiwariClasses';
import Contact from './Components/Contact/Contact';
import Testimonial from './Components/Testimonial/Testimonial';
import PhysicsExperiments from './Components/physics-experiments-and-activities/PhysicsExperiments';
import DoubtResolution from './Components/doubt-resolution/DoubtResolution';
import PracticeTest from './Components/Test/PracticeTest';
import StudyMaterial from './Components/StudyMaterial/StudyMaterial';
import OfflineCourse from './Components/OfflineCourse/OfflineCourse';
import OnlineCourse from './Components/OnlineCourse/OnlineCourse';
import Neet from './Components/neet/Neet';
import Physics from './Components/physics/Physics';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-tiwari-sir' element={<AboutTiwariClasses />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/physics-experiments-activities' element={<PhysicsExperiments />} />
          <Route path='/doubt-resolution' element={<DoubtResolution />} />
          <Route path='/test' element={<PracticeTest />} />
          <Route path='/study-material' element={<StudyMaterial />} />
          <Route path='/offline-courses' element={<OfflineCourse />} />
          <Route path='/online-courses' element={<OnlineCourse />} />
          <Route path='/neet' element={<Neet />} />
          <Route path='/physics' element={<Physics />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
