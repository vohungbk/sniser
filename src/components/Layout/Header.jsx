import { useEffect, useState } from "react"
import "./Layout.scss"
import NavDescription from "./NavDescription"
import LogoMobile from "../../assets/logo.png"

import { useModal } from "../../modal-context"

const Header = () => {
  const [fixed, setFixed] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const { setModalLogin, userInfo } = useModal()

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

  console.log(userInfo)

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

                {userInfo ? (
                  <div class="header-btn login-btn">
                    <div class="image-box d-block">
                      <a class="menu-toggle">
                        <img
                          src="https://sniser.com/images/account.png"
                          alt=""
                          style={{ width: "20px" }}
                        />
                        <span>{userInfo?.business_name}</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <li className="header-btn login-btn">
                    <button
                      className="nav-link h-btn"
                      onClick={() => setModalLogin(true)}
                    >
                      Upload Content
                    </button>
                  </li>
                )}

                <li className="header-btn login-btn">
                  <button className="nav-link h-btn connect-btn">
                    Purchase NFT
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
                    {userInfo ? (
                      <div class="image-box d-block">
                        <a class="menu-toggle">
                          <img
                            src="https://sniser.com/images/account.png"
                            alt=""
                            style={{ width: "20px" }}
                          />
                          <span>{userInfo?.business_name}</span>
                        </a>
                      </div>
                    ) : (
                      <button
                        className="nav-link h-btn h-btn-mobile"
                        onClick={() => setModalLogin(true)}
                      >
                        Upload Content
                      </button>
                    )}
                  </li>
                  <li className="header-btn login-btn header-btn-mobile">
                    <button className="nav-link h-btn h-btn-mobile">
                      Purchase NFT
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
    </header>
  )
}

export default Header
