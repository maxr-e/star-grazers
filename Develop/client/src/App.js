import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import MoonPhases from './pages/MoonPhases';
import StarCharts from './pages/StarCharts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<Homepage />} 
          />
          <Route 
            path='/search' 
            element={<SearchBooks />} 
          />
          <Route 
            path='/moonphases' 
            element={<MoonPhases />} 
          />
          <Route 
            path='/starcharts' 
            element={<StarCharts />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
      </>
      <Footer />
    </Router>
  );
}

export default App;
