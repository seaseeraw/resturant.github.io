
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Contact from './pages/Contact/Contact';

import{ BrowserRouter, Routes,Route} from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Practice from './pages/Practice/Practice';
import {ThemeProvider} from './Context/ThemeContext';
function App() {
  return (
    <>
    <ThemeProvider>
    <BrowserRouter>
    <div><Navbar/></div>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}/>
        <Route path="/practice" element={<Practice/>} />
      </Routes>
    </BrowserRouter>
    
   
  </ThemeProvider>
    </>
  );
}

export default App;
