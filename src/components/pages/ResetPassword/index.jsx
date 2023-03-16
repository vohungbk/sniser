import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import "./styles.scss"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useLocation } from "react-router-dom"

const schema = yup.object().shape({
  password: yup.string().min(8).max(32).required(),
})

const ResetPassword = () => {
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const urlParams = new URLSearchParams(useLocation().search)

  const onSubmitHandler = (data) => {
    const formdata = new FormData()
    formdata.append("secure_token", "BLK-lGin834iN")
    formdata.append("password", data.password)
    formdata.append("confirm_password", data.password)
    formdata.append("token", urlParams.get("token"))
    formdata.append("linkid", urlParams.get("linkid"))

    axios({
      method: "post",
      url: `https://sniser.com/API/resetpassword.php`,
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
      <br />
      <br />
      <div className="container">
        <div className="content-section" id="about-content">
          <div className="kid-header">
            <h3>Reset Password</h3>
          </div>

          <div id="wrapping" className="clearfix">
            <section id="aligned">
              {!!success && (
                <div className="alert alert-danger text-center">
                  Password Changed Sucessfully
                </div>
              )}

              <form name="changepassfrm" onSubmit={handleSubmit(onSubmitHandler)}>
                <p style={{ marginBottom: "20px" }}>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter New password"
                    {...register("password")}
                    className={`form-control ${errors?.password && "invalid"}`}
                  />
                </p>

                <button
                  id="button"
                  className="btn theme-btn"
                  type="submit"
                  name="changepassfrm"
                >
                  Change Password
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default ResetPassword
