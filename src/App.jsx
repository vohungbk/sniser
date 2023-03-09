import { Route, Routes } from "react-router-dom"
import CopyRight from "./components/Layout/Copyright"
import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header"
import Home from "./components/pages/Home"
import ArtistService from "./components/pages/ArtistService"
import Faq from "./components/pages/Faq"
import AboutUs from "./components/pages/AboutUs"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist-service" element={<ArtistService />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
      <CopyRight />
    </>
  )
}

export default App
