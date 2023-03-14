import "./styles.scss"

import service from "../../../assets/artist-service.jpeg"
import SignUpModal from "../../Modals/Signup"
import { useState } from "react"
import LoginModal from "../../Modals/Login"

const ArtistService = () => {
  const [showModalSignUp, setShowSignUp] = useState(false)
  const [showModalLogin, setShowModalLogin] = useState(false)
  return (
    <>
      <div
        className="page-banner-artist-area"
        style={{
          backgroundImage: `url(${service})`,
        }}
      >
        <h2>
          <i className="fa fa-quote-left lfts pr-3"></i>Upload your content to our
          catalogue. Choose a subscription package that suits your requirements.
          <i className="fa fa-quote-right lfts pl-3"></i>
        </h2>
      </div>
      <div className="price-sect pb-60">
        <div className="container">
          <div className="contact-title prce text-center">
            <h2>
              <i className="fa fa-quote-left lfts pr-3"></i>A plan{" "}
              <span>for content creators and professional artists</span>
              <i className="fa fa-quote-right lfts pl-3"></i>
            </h2>

            <p>Connect with a new audience connected to web3.</p>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="price-holder">
                <h2>For artists with limited portfolio.</h2>

                <ul>
                  <li>Artist account</li>

                  <li>Upload maximum of 10 media files.</li>

                  <li>Time limited uploads.</li>

                  <li>Limited NFT support</li>
                  <li>$0 per month</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="price-holder">
                <h2>For record labels to showcase artist material</h2>
                <ul>
                  <li>Label account</li>

                  <li>Upload maximum of 100 media files.</li>

                  <li>Time limited uploads</li>

                  <li>NFT support</li>
                  <li>$200 per month</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-holder">
                <h2>For major labels with significant portfolio.</h2>
                <ul>
                  <li>Major label</li>
                  <li>Upload maximum of 200 media files.</li>
                  <li>Time limited uploads. </li>
                  <li>Full NFT support</li>
                  <li>Call for prices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="investing-sect ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="investor-wrapper">
                <div className="contact-title text-center">
                  <h2>
                    <i className="fa fa-quote-left lfts pr-3"></i>
                    <span>Start uploading content and minting NFTs.</span>
                    <i className="fa fa-quote-right lfts pl-3"></i>
                  </h2>
                </div>

                <p>
                  Sniser offers a unique way for you to generate revenue from your
                  artform. Take advantage of our unique infrastructure to better
                  protect and monetize your online content.
                </p>

                <a onClick={() => setShowSignUp(true)} className="signin-btn">
                  Sign up with Sniser to start uploading your content.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!!showModalSignUp && (
        <SignUpModal
          open={showModalSignUp}
          close={() => setShowSignUp(!showModalSignUp)}
          openModalLogin={() => setShowModalLogin(true)}
        />
      )}
      {!!showModalLogin && (
        <LoginModal
          open={showModalLogin}
          close={() => setShowModalLogin(!showModalLogin)}
          openModalSignUp={() => setShowSignUp(true)}
        />
      )}
    </>
  )
}

export default ArtistService
