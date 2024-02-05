import React from 'react';
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Blogs from './Blogs'
import About from './About'


//Notice: I followed multiple tutorials, this taking place the most
//https://www.youtube.com/watch?v=I2UBjN5ER4s&t=3482s
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact Component={Home}></Route>
            <Route path='/blogs' exact Component={Blogs}></Route>
            <Route path='/about-me' exact Component={About}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
