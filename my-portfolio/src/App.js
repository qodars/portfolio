import logo from './logo.svg';
import './App.css';
import Sidebar from './Home/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homes from './Home/Isi';
import About from './Home/Isi/aboutme'


function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path='/'  element={<Homes />} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
