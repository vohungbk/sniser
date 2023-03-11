import { useState } from "react"
import "./styles.scss"

const Private = () => {
  const [showMeta, setShowMeta] = useState(false)

  return (
    <>
      <div className="page-banner-area page_banner_new">
        <h2>
          <span>Private File</span>
        </h2>
      </div>
      <div className="private_file_section ptb-100 bg2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top_file_title">
                <h2>To view this file, ensure that your have:</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="prvt_file_wrapper">
                <div className="pvt_count_box">
                  <img src="https://sniser.com/images/count1.png" alt="" />
                </div>
                <h3>
                  <strong>Installed</strong> Metamask browser extension
                </h3>
                <a
                  href="https://metamask.io/"
                  target="_blank"
                  className="nft_btn1"
                  rel="noreferrer"
                >
                  Get Extension
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="prvt_file_wrapper">
                <div className="pvt_count_box">
                  <img src="https://sniser.com/images/count2.png" alt="" />
                </div>
                <h3>
                  <strong>Purchased</strong> NFT and put it in your Metamask Wallet
                </h3>
                <a
                  href="https://sniser.com/shop"
                  target="_blank"
                  className="nft_btn1"
                  rel="noreferrer"
                >
                  View Content
                </a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="prvt_file_wrapper">
                <div className="pvt_count_box">
                  <img src="https://sniser.com/images/count3.png" alt="" />
                </div>
                <h3>Connected your wallet to access</h3>

                <a className="nft_btn1" onClick={() => setShowMeta(true)}>
                  Access Now
                </a>
                {showMeta && (
                  <div id="metaErrorMsg">
                    <span class="errormsgmetaMAsk">
                      To view content, please use MetaMask extension or App.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Private
