import "./styles.scss"

const ForgotPassword = () => {
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
                <form
                  name="forgotfrm"
                  method="post"
                  action=""
                  className="forget-form login-form"
                >
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
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
