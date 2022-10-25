import React from 'react';
import Header from './componenets/Header';
import Main from './componenets/Main';
import "./index.css";
import HomePage from './pages/HomePage';
import NoteFound from './pages/NoteFound';
import Details from './pages/Details';
import {Routes, Route} from "react-router-dom";


function App() {

  return (
    <>
    <Header />
    <Main>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/country/:name" element={<Details/>}/>
        <Route element={<NoteFound />}/>
      </Routes>
    </Main>
    </>
  );
}

export default App;
