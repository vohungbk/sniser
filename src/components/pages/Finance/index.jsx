import "./styles.scss"

import Browser from "../../../assets/browser.png"
import Article from "../../../assets/article.png"
import number1 from "../../../assets/numbers-1.png"
import number2 from "../../../assets/numbers-2.png"
import number3 from "../../../assets/numbers-3.png"
import Layer from "../../../assets/layer.png"
import SubmissionForm from "../../Forms/SubmissionForm"

const Finance = () => {
  return (
    <>
      <div className="page-banner-area banner-finance">
        <h2>
          <span>
            Submit <span style={{ color: "#6FDA44" }}>Your ArtWork</span>!
          </span>
          <br />
          <p className="text-center">
            Where possible we work with various artists to provide financial and
            non-financial
            <br /> support towards their artwork. If you would like to be considered
            for assistance, <br />
            please see below regarding how we work.
          </p>
        </h2>
      </div>
      <section className="how-it-work">
        <h2>How it work</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="content">
                <h3>
                  <span style={{ color: "#6FDA44" }}>FIRST</span> STEP
                </h3>
                <img src={Browser} alt="" className="center-img" />
                <p>
                  Complete the submission fields on this page outlining key
                  information about you, your artwork and your intentions.
                </p>
                <img className="number" src={number1} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="content">
                <h3>
                  <span style={{ color: "#6FDA44" }}>SECOND</span> STEP
                </h3>
                <img src={Layer} alt="" className="center-img" />
                <p>
                  Send us the link to the material that you would like us to review.
                  It can be either a completed piece or most likely a synopsis.
                </p>
                <img className="number" src={number2} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="content">
                <h3>
                  <span style={{ color: "#6FDA44" }}>LAST</span> STEP
                </h3>
                <img src={Article} alt="" className="center-img" />
                <p>
                  One of our creative directors will review your work and where
                  possible will get in contact with you.
                </p>
                <img className="number" src={number3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubmissionForm />
      <section className="contact">
        <div className="container">
          <h2 className="question">Want to sign up? Or have a question for us?</h2>
          <div className="row">
            <div className="col-md-5 mt-4">
              <div className="contact-address text-center">
                <h3 className="sub-title">Contact Details</h3>
                <p className="text-reach">
                  Reach out to us via email and our team will get back to you.
                </p>
                <div className="icon-contact icon-contact-extra">
                  <i className="fa fa-envelope"></i>
                </div>
                <div className="">
                  <p className="info">contact@sniser.com</p>
                </div>
                <div className="icon-contact icon-contact-extra">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="">
                  <p className="info">
                    SNISER LTD 3rd Floor, 86-90 Paul Street, London, EC2A 4NE
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-7 mt-4">
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.322305862662!2d-0.0858416846908805!3d51.52564801719048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca560dcf15d%3A0x39083589e5b2bf3f!2sThe%20Hoxton%20Mix!5e0!3m2!1sen!2sin!4v1614065904422!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="responsive-iframe"
                  title=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Finance
