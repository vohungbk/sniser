import { useState } from "react"
import "./styles.scss"

import Pdf from "../../../assets/pdf.png"
import BullSniser from "../../../assets/bull-sniser.png"
import Download from "../../../assets/download.png"
import Revenue1 from "../../../assets/revenue1.png"
import Revenue2 from "../../../assets/revenue2.png"
import Revenue3 from "../../../assets/revenue3.png"

import WhitepaperBg from "../../../assets/whitepaper-bg.webp"

const Whitepaper = () => {
  const [showHowTokenWork, setShowHowTokenWork] = useState(false)
  const [showRevenue, setShowRevenue] = useState(false)

  return (
    <>
      <div
        className="page-banner-area banner-whitepaper"
        style={{ backgroundImage: `url(${WhitepaperBg})` }}
      >
        <div className="blur">
          <h2>
            <span>
              <span style={{ color: "#6FDA44" }}>Sniser&nbsp;</span>White Paper – Our
              raison d'être
            </span>
          </h2>
        </div>
      </div>
      <div className="benefits">
        <button
          className={`accordion accordion-inverse ${
            showHowTokenWork ? "active" : ""
          }`}
          onClick={() => setShowHowTokenWork(!showHowTokenWork)}
        >
          What are the benefits of using our service?
        </button>
        <div
          className="panel"
          style={{ display: showHowTokenWork ? "block" : "none" }}
        >
          <div className="row white-content">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6 flex-center"
                  style={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    flexDirection: "column",
                  }}
                >
                  <h2 className="title">White Paper</h2>
                  <p className="desc">
                    Our white paper intends to set out the key issues that we believe
                    makes the Sniser ecosystem not only viable; it is indeed
                    necessary for the independent arts movement.
                  </p>
                  <button className="btn-download">Download the White Paper</button>
                </div>
                <div
                  className="col-md-6 flex-center m-t-20"
                  style={{
                    paddingLeft: "50px",
                    paddingRight: "50px",
                  }}
                >
                  <img
                    className="steps-image"
                    src={Pdf}
                    style={{ maxWidth: "400px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row bull-content">
            <div className="container">
              <div className="row reverse-mob">
                <div
                  className="col-md-6 flex-center m-t-20"
                  style={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                >
                  <img
                    className="steps-image"
                    src={BullSniser}
                    style={{ maxWidth: "400px" }}
                    alt=""
                  />
                </div>
                <div
                  className="col-md-6 flex-center"
                  style={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    flexDirection: "column",
                  }}
                >
                  <h2 className="title">The Sniser token</h2>
                  <p className="desc">
                    In exchange for USDT, we will provide you with sniser tokens. Our
                    tokens are used to invest in independent artwork that we protect
                    behind an NFT wall.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row white-content">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6 flex-center"
                  style={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    flexDirection: "column",
                  }}
                >
                  <h2 className="title">Purchase from exchanges</h2>
                  <p className="desc">
                    Our token is available from the following exchanges. In order to
                    be part of our tokenomics, once a token is purchased please
                    provide a wallet that dividends will be transferred. For your
                    safety, we recommend a "new" wallet that does not hold any other
                    crypto assets.
                  </p>
                </div>
                <div
                  className="col-md-6 flex-center m-t-20"
                  style={{
                    paddingLeft: "50px",
                    paddingRight: "50px",
                  }}
                >
                  <img
                    className="steps-image"
                    src={Download}
                    style={{ maxWidth: "400px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="revenue">
        <button
          className={`accordion ${showRevenue ? "active" : ""}`}
          onClick={() => setShowRevenue(!showRevenue)}
        >
          Revenue for artists
        </button>
        <div className="panel" style={{ display: showRevenue ? "block" : "none" }}>
          <div className="row white-content">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6 flex-center"
                  style={{
                    paddingLeft: "50px",
                    paddingRight: "50px",
                  }}
                >
                  <img
                    className="steps-image"
                    src={Revenue1}
                    style={{ maxWidth: "400px" }}
                    alt=""
                  />
                </div>
                <div
                  className="col-md-6 flex-center m-t-20"
                  style={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    flexDirection: "column",
                  }}
                >
                  <h2 className="title">Increased revenue for artists</h2>
                  <p className="desc">
                    Aside from the minority of artists the internet has not increased
                    opportunities and incomes for independent artists. Rather,
                    artists have drastic decrease in their earnings.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row bull-content">
            <div className="container">
              <div className="row reverse-mob">
                <div
                  className="col-md-6 flex-center m-t-20"
                  style={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    flexDirection: "column",
                  }}
                >
                  <h2 className="title">NFT protection</h2>
                  <p className="desc">
                    Sniser seeks to create an income stream for artists through the
                    use of NFT protected “walls” and content.
                  </p>
                </div>
                <div
                  className="col-md-6 flex-center"
                  style={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                >
                  <img
                    className="steps-image"
                    src={Revenue2}
                    style={{ maxWidth: "400px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row white-content">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-6 flex-center"
                  style={{
                    paddingLeft: "50px",
                    paddingRight: "50px",
                  }}
                >
                  <img
                    className="steps-image"
                    src={Revenue3}
                    style={{ maxWidth: "400px" }}
                    alt=""
                  />
                </div>
                <div
                  className="col-md-6 flex-center m-t-20"
                  style={{
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    flexDirection: "column",
                  }}
                >
                  <h2 className="title">Dividends paid to token owners</h2>
                  <p className="desc">
                    Sniser will offer a dividend token to early-stage investors. In
                    exchange for their participation in Sniser coin, they will share
                    in the revenue generated by our ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Whitepaper
