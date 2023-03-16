import { Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import LoginImage from "../../../assets/login-img1.png"
import { useModal } from "../../../modal-context"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import ReCAPTCHA from "react-google-recaptcha"
import { toast } from "react-toastify"

import "./styles.scss"
import axios from "axios"

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
})

const LoginModal = ({ open, close }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  }
  const { setModalSignUp, setModalLogin, setUserInfo } = useModal()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitHandler = (data) => {
    const formdata = new FormData()
    formdata.append("secure_token", "BLK-lGin834iN")
    formdata.append("email_address", data.email)
    formdata.append("password", data.password)
    axios({
      method: "post",
      url: `https://sniser.com/API/login.php`,
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      if (response.data.error) {
        toast.error(response.data.error || "Error")
        return
      }
      setUserInfo(response.data.data)
      setModalLogin(false)
    })
  }

  return (
    <Modal show={open} onHide={close}>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={close}
      >
        <span aria-hidden="true">
          <span className="back">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            &nbsp;Back
          </span>
          <span className="x">x</span>
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

              <form onSubmit={handleSubmit(onSubmitHandler)} className="login-form">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors?.email && "invalid"}`}
                    placeholder="Email"
                    {...register("email")}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${errors?.password && "invalid"}`}
                    placeholder="Password"
                    {...register("password")}
                  />
                </div>

                <div className="form-group">
                  <div className="g-recaptcha">
                    <div style={{ width: "304px", height: "78px" }}>
                      <div>
                        <ReCAPTCHA
                          sitekey={"6LdfLysUAAAAAIVunEmrVZGErd_74d1r7deXdksg"}
                          // onChange={handleChange}
                        />
                      </div>
                    </div>
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
                        setModalSignUp(true)
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
