import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/Create'
import Table from './Component/Tabel'
import Read from './Component/Read';
import Update from './Component/Update'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/read' element={<Read/>}/>
      <Route exact path='/update' element={<Update/>}/>
      </Routes>
      {/* <Table/> */}
      </BrowserRouter>
    </>
  )
}

export default App
