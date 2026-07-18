
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import PlaceDetail from "./pages/PlaceDetail/PlaceDetail";
import PlaceList from "./pages/PlacesList/PlacesList";
import About from "./pages/About/About";


function App() {
  return (
    <>  
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/:id" element={<PlaceDetail />} />
            <Route path="/pages/list" element={<PlaceList />} />
            <Route path="/pages/About" element={<About />} />

          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;