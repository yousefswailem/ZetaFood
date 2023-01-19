import logo from './logo.svg';
import './App.css';
import Login from './HalaComponents/Login';

import {
  Routes,
  Route,
  Link
} from "react-router-dom";//hala

import Navbar from './HalaComponents/Navbar';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
