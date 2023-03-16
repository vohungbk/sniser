import { Route, Routes } from "react-router-dom"
import CopyRight from "./components/Layout/Copyright"
import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header"
import Home from "./components/pages/Home"
import ArtistService from "./components/pages/ArtistService"
import Faq from "./components/pages/Faq"
import AboutUs from "./components/pages/AboutUs"
import ContactUs from "./components/pages/ContactUs"
import Private from "./components/pages/Private"
import Finance from "./components/pages/Finance"
import Whitepaper from "./components/pages/Whitepaper"
import ForgotPassword from "./components/pages/ForgotPassword"
import ResetPassword from "./components/pages/ResetPassword"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist-service" element={<ArtistService />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/private-file/mr-1" element={<Private />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
      <Footer />
      <CopyRight />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
