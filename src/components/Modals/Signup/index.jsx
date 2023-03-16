import { Modal } from "react-bootstrap"
import Slider from "react-slick"
import "./styles.scss"
import LoginImage from "../../../assets/login-img1.png"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useModal } from "../../../modal-context"
import axios from "axios"
import { toast } from "react-toastify"
import { useState } from "react"

const schema = yup.object().shape({
  f_name: yup.string().required(),
  l_name: yup.string().required(),
  business_name: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string().min(10).max(10).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  cnfrmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
})

const SignUpModal = ({ open, close }) => {
  const { setModalLogin, setModalSignUp } = useModal()
  const [isLoading, setIsLoading] = useState(false)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitHandler = (data) => {
    setIsLoading(true)
    const formdata = new FormData()
    formdata.append("f_name", data.f_name)
    formdata.append("l_name", data.l_name)
    formdata.append("email", data.email)
    formdata.append("phone", data?.phone)
    formdata.append("address", data?.address)
    formdata.append("password", data?.password)
    formdata.append("business_name", data?.business_name)
    formdata.append("secure_token", "BLK-lGin834iN")

    axios({
      method: "post",
      url: `https://sniser.com/API/signup.php`,
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      setIsLoading(false)
      if (response.data.error) {
        toast.error(response.data.error || "Error")
        return
      }
      toast.success("Registration Successfully !!")
      setModalSignUp(false)
      setModalLogin(true)
    })

    // reset()
  }

  return (
    <Modal show={open} onHide={close} centered>
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
              <h2 className="title">Welcome Back!</h2>
              <p>Connect with your audience throw NFTs!</p>
              <form
                className="login-form signup-form"
                onSubmit={handleSubmit(onSubmitHandler)}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="f_name"
                        id="f_name"
                        {...register("f_name", { required: true })}
                        className={`form-control ${errors?.f_name && "invalid"}`}
                        placeholder="First Name*"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="l_name"
                        id="l_name"
                        {...register("l_name")}
                        className={`form-control ${errors?.l_name && "invalid"}`}
                        placeholder="Last Name*"
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="business_name"
                        id="business_name"
                        {...register("business_name")}
                        className={`form-control ${
                          errors?.business_name && "invalid"
                        }`}
                        placeholder="Business Name*"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        {...register("email")}
                        className={`form-control ${errors?.email && "invalid"}`}
                        placeholder="Email*"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        {...register("phone")}
                        className={`form-control ${errors?.phone && "invalid"}`}
                        placeholder="Phone*"
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 ">
                    <div className="form-group">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address*"
                        {...register("address")}
                        className={`form-control ${errors?.address && "invalid"}`}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password*"
                        {...register("password")}
                        className={`form-control ${errors?.password && "invalid"}`}
                      />
                    </div>
                  </div>

                  <input type="hidden" name="user_type" value="free" />

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="password"
                        name="cnfrmpassword"
                        id="cnfrmpassword"
                        placeholder="Confirm Password*"
                        {...register("cnfrmpassword")}
                        className={`form-control ${
                          errors?.cnfrmpassword && "invalid"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    name="submit"
                    className="login-btn"
                    value="Join us"
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <p>
                    Already have an account? <br />
                    <button
                      className="btnShowsSignUp"
                      onClick={() => {
                        setModalLogin(true)
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
