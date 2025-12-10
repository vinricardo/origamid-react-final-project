import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Components/Shared/Footer/Footer"
import Header from "./Components/Shared/Header/Header"
import Home from "./Components/Home/Home"

function App() {
  return <div>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>
}

export default App
