import { Modal } from "react-bootstrap"
import Slider from "react-slick"
import "./styles.scss"
import LoginImage from "../../../assets/login-img1.png"

const SignUpModal = ({ open, close, openModalLogin }) => {
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
    <Modal show={open} onHide={close} centered>
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
          <div class="col-lg-6 col-12">
            <div class="modal-right-col">
              <div class="sniser-logo">
                <img src="https://sniser.com/images/sniser-logo.png" alt="" />
              </div>

              <h2 className="title">Welcome Back!</h2>

              <p>Connect with your audience throuw NFTs!</p>

              <form
                action=""
                method="post"
                id="signupfrm"
                class="login-form signup-form"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="f_name"
                        id="f_name"
                        value=""
                        class="form-control"
                        placeholder="First Name*"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="l_name"
                        id="l_name"
                        value=""
                        class="form-control"
                        placeholder="Last Name*"
                      />
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="form-group">
                      <input
                        type="text"
                        name="bussiness_name"
                        id="bussiness_name"
                        value=""
                        class="form-control"
                        placeholder="Business Name*"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value=""
                        class="form-control"
                        placeholder="Email*"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        value=""
                        class="form-control"
                        placeholder="Phone*"
                      />
                    </div>
                  </div>

                  <div class="col-sm-12 ">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="address"
                        id="address"
                        value=""
                        placeholder="Address*"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        placeholder="Password*"
                      />
                    </div>
                  </div>

                  <input type="hidden" name="user_type" value="free" />

                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        name="cnfrmpassword"
                        id="cnfrmpassword"
                        placeholder="Confirm Password*"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="submit"
                    name="submit"
                    class=" login-btn"
                    value="Join us"
                  />
                </div>

                <div class="form-group">
                  <p>
                    Already have an account? <br />
                    <button
                      className="btnShowsSignUp"
                      onClick={() => {
                        openModalLogin()
                        close()
                      }}
                    >
                      Log in
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

export default SignUpModal
