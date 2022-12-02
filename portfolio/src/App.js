//Components
import Footer from './components/Footer.js'
import Header from './components/Header';
import Projects from './components/Projects';

//Page Routes
import AboutMe from './PageRoutes/AboutMe.js';
import Contact from './PageRoutes/Contact.js';

//Dependencies
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Skills from './PageRoutes/Skills.js';

function App() {
  return (
    <div>
      <Router>
      < Header/>
          <div>
        <Routes>
            <Route path ='/' element ={<AboutMe/>}/>
            <Route path='/projects' element={< Projects/>}/>
            <Route path='/contact' element={<Contact/>} />
            <Route path='/skills' element={<Skills/>}/>
        </Routes>
            < Footer/>
          </div>
      </Router>
    </div>
  );
}

export default App;
