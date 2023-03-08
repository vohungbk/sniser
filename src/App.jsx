import { Route, Routes } from "react-router-dom"
import CopyRight from "./components/Layout/Copyright"
import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header"
import Home from "./components/pages/Home"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <CopyRight />
    </>
  )
}

export default App
