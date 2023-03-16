import "./styles.scss"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"

const schema = yup.object().shape({
  email: yup.string().email().required(),
})

const ForgotPassword = () => {
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmitHandler = (data) => {
    const formdata = new FormData()
    formdata.append("secure_token", "BLK-lGin834iN")
    formdata.append("email_address", data.email)
    axios({
      method: "post",
      url: `https://sniser.com/API/forgot-password.php`,
      data: formdata,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      if (response.data.error) {
        toast.error(response.data.error || "Error")
        return
      }
      setSuccess(true)
    })
  }

  return (
    <>
      <div className="bredcrump-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Forget password
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="forget-pass">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-sm-12">
              <h3 className="title">Forgot Password </h3>
              <span>Enter your email address to continue </span>
              <div className="wrapper">
                {success && (
                  <div class="alert alert-danger">
                    <span>A Link Has Been Sent to {getValues("email")}.</span>
                    <br /> Please Check Your Email
                  </div>
                )}

                <form
                  name="forgotfrm"
                  className="forget-form login-form"
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      class={`form-control ${errors?.email && "invalid"}`}
                      placeholder="Email Address"
                      {...register("email")}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className=" login-btn"
                      name="forgotfrm"
                      value="Forgot my Password"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
