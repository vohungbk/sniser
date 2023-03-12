import { Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import LoginImage from "../../../assets/login-img1.png"

import "./styles.scss"

const LoginModal = ({ open, close, openModalSignUp }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  }
  return (
    <Modal show={open} onHide={close}>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={close}
      >
        <span aria-hidden="true">
          <span class="back">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            &nbsp;Back
          </span>
          <span class="x">x</span>
        </span>
      </button>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="modal-left-col">
              <div className="sniser">
                <img src="https://sniser.com/images/sniser-text.png" alt="" />
              </div>

              <div className="owl-height">
                <Slider {...settings}>
                  <div className="slider-item sniser-slider-item ">
                    <img src={LoginImage} alt="" />
                    <p>
                      Control your content and its distribution to your audience.
                    </p>
                  </div>
                  <div className="slider-item sniser-slider-item ">
                    <img src={LoginImage} alt="" />
                    <p>
                      Control your content and its distribution to your audience.
                    </p>
                  </div>
                  <div className="slider-item sniser-slider-item ">
                    <img src={LoginImage} alt="" />
                    <p>
                      Control your content and its distribution to your audience.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="modal-right-col">
              <div className="sniser-logo">
                <img src="https://sniser.com/images/sniser-logo.png" alt="" />
              </div>

              <h2>Welcome Back!</h2>
              <p>Connect with your audience through NFTs!</p>

              <form action="" method="post" className="login-form">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required=""
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    required=""
                  />
                </div>

                <div className="form-group">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LcL4qcgAAAAANKTMZTAkjCqJdnGR8YPu27U69gW"
                    data-callback="capcha_filled"
                    data-expired-callback="capcha_expired"
                  >
                    <div style={{ width: "304px", height: "78px" }}>
                      <div>
                        <iframe
                          title="reCAPTCHA"
                          src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LcL4qcgAAAAANKTMZTAkjCqJdnGR8YPu27U69gW&amp;co=aHR0cHM6Ly9zbmlzZXIuY29tOjQ0Mw..&amp;hl=en&amp;v=8G7OPK94bhCRbT0VqyEVpQNj&amp;size=normal&amp;cb=wxkm5wp3373s"
                          width="304"
                          height="78"
                          role="presentation"
                          name="a-ds6gemuppobn"
                          frameborder="0"
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                        ></iframe>
                      </div>
                      <textarea
                        id="g-recaptcha-response-1"
                        name="g-recaptcha-response"
                        className="g-recaptcha-response"
                        style={{
                          width: "250px",
                          height: "40px",
                          border: "1px solid rgb(193, 193, 193)",
                          margin: "10px 25px",
                          padding: "0px",
                          resize: "none",
                          display: "none",
                        }}
                      ></textarea>
                    </div>
                    <iframe style={{ display: "none" }}></iframe>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    className="login-btn"
                    name="loginsubmit"
                    value="Login"
                  />
                </div>

                <div className="form-group forget">
                  <p>
                    <Link to={"/forgot-password"} onClick={close}>
                      Forget your Password ?
                    </Link>
                  </p>
                </div>

                <div className="form-group">
                  <p>
                    Don't have an account? <br />
                    <button
                      className="btnShowsSignUp"
                      onClick={() => {
                        openModalSignUp()
                        close()
                      }}
                    >
                      Sign Up Now!
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal
