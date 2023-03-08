import React, { useState } from "react"
import Slider from "react-slick"

import number1 from "../../../assets/numbers-1.png"
import monetise1 from "../../../assets/monetise-1.png"
import number2 from "../../../assets/numbers-2.png"
import monetise2 from "../../../assets/monetise-2.png"
import number3 from "../../../assets/numbers-3.png"
import monetise3 from "../../../assets/monetise-3.png"

import "./styles.scss"

const Home = () => {
  const [isShowHowSniserWork, setShowHowSniserWork] = useState(false)
  const [isShowBenefit, setShowBenefit] = useState(false)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  }

  return (
    <>
      <section className="home-slides">
        <div className="owl-height">
          <Slider {...settings}>
            <div className="slider-item page-hero-section slider-item-1">
              <h2>
                Are you seeking to <strong>better monetise</strong>
                <br />
                your online content?
              </h2>
            </div>
            <div
              className="slider-item page-hero-section slider-item-2"
              style={{
                backgroundImage:
                  "url(" +
                  "https://sniser.com/uploads/slider/1675802680pexels-alesia-kozik-6770610.jpg" +
                  ")",
              }}
            >
              <h2>
                <strong>Turn your content</strong> into an asset
                <br />
                on blockchain technology.
              </h2>
            </div>
            <div
              className="slider-item page-hero-section slider-item-3"
              style={{
                backgroundImage: `url(
                  "https://sniser.com/uploads/slider/1676468442pexels-cottonbro-studio-5648357.jpg"
                )`,
              }}
            >
              <h2>
                Stream your content to a <strong>new audience</strong> with Sniser.
              </h2>
            </div>
          </Slider>
        </div>
      </section>
      <div className="how-sniser-works">
        <button
          className={`accordion ${isShowHowSniserWork ? "active" : ""}`}
          onClick={() => setShowHowSniserWork(!isShowHowSniserWork)}
        >
          How Sniser Works
        </button>
        <div
          className="panel"
          style={{ display: isShowHowSniserWork ? "block" : "none" }}
        >
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
                <img className="steps-number-image" src={number1} alt="" />
                <p className="steps-text">
                  Upload your content on to our server. This can be anything from a
                  <strong>book</strong>, <strong>song</strong>, or
                  <strong>film</strong>.
                </p>
              </div>
              <div
                className="col-md-6 flex-center"
                style={{
                  paddingLeft: "50px",
                  paddingRight: "50px",
                }}
              >
                <img
                  className="steps-image"
                  src={monetise1}
                  style={{ maxWidth: "400px" }}
                  alt=""
                />
              </div>
            </div>
            <div className="row reverse-mob">
              <div
                className="col-md-6 flex-center"
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
              >
                <img
                  className="steps-image"
                  src={monetise2}
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
                <img className="steps-number-image" src={number2} title="" alt="" />
                <p className="steps-text">
                  We link your content to a <strong>NFT file</strong>. This means
                  that the <strong>only way</strong> that someone can view your
                  content is by having a <strong>NFT linked</strong> to your content.{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 flex-center"
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  flexDirection: "column",
                }}
              >
                <img className="steps-number-image" src={number3} alt="" />
                <p className="steps-text">
                  <strong>Fans</strong> or <strong>investors</strong> buy the{" "}
                  <strong>NFTs</strong>. As an artist you get the majority share of
                  any NFTs sold. Not only that but as the creator of the NFT, you
                  will <strong>gain</strong> revenue whenever your{" "}
                  <strong>NFT is resold</strong>.
                </p>
              </div>
              <div
                className="col-md-6 flex-center"
                style={{
                  paddingLeft: "50px",
                  paddingRight: "50px",
                }}
              >
                <img
                  className="steps-image"
                  src={monetise3}
                  style={{ maxWidth: "400px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="benefits">
        <button
          className={`accordion accordion-inverse ${isShowBenefit ? "active" : ""}`}
          onClick={() => setShowBenefit(!isShowBenefit)}
        >
          What are the benefits of using our service?
        </button>
        <div className="panel" style={{ display: isShowBenefit ? "block" : "none" }}>
          <div className="container">
            <table
              style={{
                width: "100%",
                background: "#2a353b",
                color: "#fff",
              }}
              className="table-monetise"
            >
              <tbody>
                <tr>
                  <th></th>
                  <th>Traditional methods</th>
                  <th>Using our service</th>
                </tr>
                <tr>
                  <th>Streaming</th>
                  <td>
                    Unless you are a multi-platinum artist, you will only make a
                    small income from using streaming services.
                  </td>
                  <td>
                    You make money from each NFT that you sell, not money from
                    advertising or streams. The price that you charge for each NFT is
                    up to you.
                  </td>
                </tr>
                <tr>
                  <th>Revenues</th>
                  <td>
                    Working with a middle entity like a record label or publisher,
                    you receive a small percentage of total revenues generated.
                  </td>
                  <td>
                    By selling an NFT (linked to your content) you get all the
                    revenues.
                  </td>
                </tr>
                <tr>
                  <th>Illegal downloads or copying</th>
                  <td>
                    Your content is easily replicable and can be distributed without
                    your content.
                  </td>
                  <td>
                    All of your content is protected behind a NFT “wall” and cannot
                    be downloaded or replicated.
                  </td>
                </tr>
                <tr>
                  <th>Royalties</th>
                  <td>You receive royalties via a middle entity.</td>
                  <td>
                    Your royalty payments are coded into the source of your NFT. Each
                    time that it is resold a percentage is paid to your digital
                    wallet.
                  </td>
                </tr>
                <tr>
                  <th>Customers</th>
                  <td>Only fans will buy your content.</td>
                  <td>
                    Fans and investors will buy your content. Where your popularity
                    increases, investors who have bought your NFT will resell them
                    for a higher value.
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                width: "100%",
                background: "#2a353b",
                color: "#fff",
              }}
              class="table-monetise table-mob"
            >
              <thead>
                <tr>
                  <th colspan="2">Streaming</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Traditional methods</th>
                  <td>
                    Unless you are a multi-platinum artist, you will only make a
                    small income from using streaming services.
                  </td>
                </tr>

                <tr>
                  <th>Using our service</th>
                  <td>
                    You make money from each NFT that you sell, not money from
                    advertising or streams. The price that you charge for each NFT is
                    up to you.
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                width: "100%",
                background: "#2a353b",
                color: "#fff",
              }}
              class="table-monetise table-mob"
            >
              <thead>
                <tr>
                  <th colspan="2">Revenues</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Traditional methods</th>
                  <td>
                    Working with a middle entity like a record label or publisher,
                    you receive a small percentage of total revenues generated.
                  </td>
                </tr>

                <tr>
                  <th>Using our service</th>
                  <td>
                    By selling an NFT (linked to your content) you get all the
                    revenues.
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                width: "100%",
                background: "#2a353b",
                color: "#fff",
              }}
              class="table-monetise table-mob"
            >
              <thead>
                <tr>
                  <th colspan="2">Illegal downloads or copying</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Traditional methods</th>
                  <td>
                    Your content is easily replicable and can be distributed without
                    your consent.
                  </td>
                </tr>

                <tr>
                  <th>Using our service</th>
                  <td>
                    All of your content is protected behind a NFT “wall” and cannot
                    be downloaded or replicated.
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                width: "100%",
                background: "#2a353b",
                color: "#fff",
              }}
              class="table-monetise table-mob"
            >
              <thead>
                <tr>
                  <th colspan="2">Royalties</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Traditional methods</th>
                  <td>You receive royalties via a middle entity.</td>
                </tr>

                <tr>
                  <th>Using our service</th>
                  <td>
                    Your royalty payments are coded into the source of your NFT. Each
                    time that it is resold a percentage is paid to your digital
                    wallet.
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                width: "100%",
                background: "#2a353b",
                color: "#fff",
              }}
              class="table-monetise table-mob"
            >
              <thead>
                <tr>
                  <th colspan="2">Customers</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Traditional methods</th>
                  <td>Only fans will buy your content.</td>
                </tr>

                <tr>
                  <th>Using our service</th>
                  <td>
                    Fans and investors will buy your content. Where your popularity
                    increases, investors who have bought your NFT will resell them
                    for a higher value.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <section className="chat-now-section">
        <p>Sign up with us</p>
        <div className="btn_div">
          <a
            href="https://sniser.com/artist-service/"
            className="chat-btn"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            Upload content
          </a>
          <a
            href="https://sniser.com/shop"
            className="chat-btn"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            View content
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
