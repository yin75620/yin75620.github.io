import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects'
import Navibar from './Components/Navibar';
import ProjectPreview from './Pages/ProjectPreview';
import Experience from './Pages/Experience';
import Footers from './Components/Footers'
function App() {
  return (
    <div className="App">
      <Router>
      <Navibar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/:id" element={<ProjectPreview/>}/>
        <Route path="/experience" element={<Experience/>}/>
        </Routes>
        <Footers />
      </Router>
    </div>
  );
}

export default App;
