import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './components/About';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils"/>
      <div className="container">
      <Routes>
       <Route path="/" element={<TextForm heading="Enter your text to analyze below" />}></Route>
      <Route path="/about" element={<About/>}></Route>
</Routes>
</div>/</BrowserRouter>
    </>
  );
}

export default App;
