import { useEffect, useState } from "react"
import "./Layout.scss"
import NavDescription from "./NavDescription"
import LogoMobile from "../../assets/logo.png"
import LoginModal from "../Modals/Login"
import SignUpModal from "../Modals/Signup"

const Header = () => {
  const [fixed, setFixed] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [showModalLogin, setShowModalLogin] = useState(false)
  const [showModalSignUp, setShowSignUp] = useState(false)

  useEffect(() => {
    const onScroll = async (event) => {
      const { scrollTop } = event.target.scrollingElement
      if (scrollTop > 160) {
        setFixed(true)
      } else {
        setFixed(false)
      }
    }

    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <header className={`navbar-area ${fixed && "is-sticky"}`}>
      <div className="main-navbar">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="https://sniser-home.netlify.app/">
              <img src="https://sniser.com/uploads/logo/1671700553logo.png" alt="" />
            </a>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="http://shop.sniser.com/" className="nav-link ">
                    Content
                  </a>
                </li>

                {/* <li className="nav-item">
                  <a href="https://sniser.com/faq/" className="nav-link ">
                    FAQ
                  </a>
                </li>

                <li className="nav-item">
                  <a href="https://sniser.com/about-us/" className="nav-link ">
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a href="https://sniser.com/contact-us/" className="nav-link ">
                    Contact Us
                  </a>
                </li> */}

                <li className="header-btn login-btn">
                  <button
                    className="nav-link h-btn"
                    onClick={() => setShowModalLogin(true)}
                  >
                    Login
                  </button>
                </li>
                <li className="header-btn login-btn">
                  <button className="nav-link h-btn connect-btn">
                    CONNECT WALLET
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header-btn login-btn"></div>
        </div>
      </div>
      <div className="main-responsive-nav">
        <div className="container">
          <div className="main-responsive-menu mean-container">
            <div className="mean-bar">
              {openMenu ? (
                <button
                  className="meanmenu-reveal meanclose"
                  style={{
                    right: "0px",
                    left: "auto",
                    textAlign: "center",
                    textIndent: "0px",
                    fontSize: "18px",
                    zIndex: 10,
                  }}
                  onClick={() => setOpenMenu(false)}
                >
                  X
                </button>
              ) : (
                <button
                  className="meanmenu-reveal"
                  style={{
                    right: 0,
                    left: "auto",
                    zIndex: 10,
                  }}
                  onClick={() => setOpenMenu(true)}
                >
                  <span>
                    <span>
                      <span></span>
                    </span>
                  </span>
                </button>
              )}

              <nav className="mean-nav">
                <ul className={`navbar-nav ${openMenu ? "d-flex" : "d-none"}`}>
                  <li className="nav-item">
                    <a href="/" className="nav-link ">
                      Content
                    </a>
                  </li>

                  <li className="header-btn login-btn header-btn-mobile">
                    <button
                      className="nav-link h-btn h-btn-mobile"
                      onClick={() => setShowModalLogin(true)}
                    >
                      Login
                    </button>
                  </li>
                  <li className="header-btn login-btn header-btn-mobile">
                    <button className="nav-link h-btn h-btn-mobile">
                      Connect Wallet
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="logo" style={{ zIndex: 1000, width: "92%" }}>
              <a href="https://sniser-home.netlify.app/">
                <img
                  style={{ width: "150px", height: "46px", zIndex: 100 }}
                  src={LogoMobile}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <NavDescription />
      {!!showModalLogin && (
        <LoginModal
          open={showModalLogin}
          close={() => setShowModalLogin(!showModalLogin)}
          openModalSignUp={() => setShowSignUp(true)}
        />
      )}
      {!!showModalSignUp && (
        <SignUpModal
          open={showModalSignUp}
          close={() => setShowSignUp(!showModalSignUp)}
          openModalLogin={() => setShowModalLogin(true)}
        />
      )}
    </header>
  )
}

export default Header
