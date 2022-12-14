//Components
import Footer from './components/Footer.js'
import Header from './components/Header';
import Projects from './PageRoutes/Projects';

//Page Routes
import AboutMe from './PageRoutes/AboutMe.js';
import Contact from './PageRoutes/Contact.js';

//Dependencies
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SkillsPage from './PageRoutes/SkillsPage.js';

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
            <Route path='/skills' element={<SkillsPage/>}/>
        </Routes>
            < Footer/>
          </div>
      </Router>
    </div>
  );
}

export default App;
