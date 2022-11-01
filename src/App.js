import './Sizing.scss'
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Resized from './components/Sidebar/Resized';
import Contact from './components/Contact';

function App() {
  return (
    <div className='main-body'>
    <Resized />
    <Sidebar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
