import Login from './Components/Login';
import Home from './Components/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    
  );
}

export default App;
