import { useState } from "react"
import "./styles.scss"

import FapBanner from "../../../assets/faqs.jpeg"

const Faq = () => {
  const [showHeading1, setShowHeading1] = useState(false)
  const [showHeading2, setShowHeading2] = useState(false)
  const [showHeading3, setShowHeading3] = useState(false)
  const [showHeading4, setShowHeading4] = useState(false)
  const [showHeading5, setShowHeading5] = useState(false)
  const [showHeading6, setShowHeading6] = useState(false)
  const [showHeading7, setShowHeading7] = useState(false)
  const [showHeading8, setShowHeading8] = useState(false)
  const [showHeading9, setShowHeading9] = useState(false)
  const [showHeading10, setShowHeading10] = useState(false)
  const [showHeading11, setShowHeading11] = useState(false)

  return (
    <>
      <div
        className="page-banner-area banner-fap"
        style={{
          backgroundImage: `url(${FapBanner})`,
        }}
      >
        <h2>
          <i className="fa fa-quote-left lfts pr-3"></i>
          <span>Are nfts like crypto currencies?</span> What are the returns of
          investing in them? <br />
          Are they a scam?<i className="fa fa-quote-right lfts pl-3"></i>
        </h2>
      </div>
      <section className="faq-wrapper pt-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 faq-tabs">
              <div className="row">
                <div className="col-sm-12">
                  <div
                    className="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div
                        className="panel-heading active"
                        role="tab"
                        id="heading1"
                        onClick={() => setShowHeading1(!showHeading1)}
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            aria-expanded="false"
                            aria-controls="collapse1"
                            className="collapsed"
                          >
                            What is SNISER?
                          </a>
                        </h4>
                      </div>

                      <div
                        className={`panel-collapse collapse ${
                          showHeading1 ? "show" : ""
                        }`}
                      >
                        <div className="panel-body">
                          <i className="fa fa-quote-left lfts pr-3"></i>Sniser is
                          made up of two functions in relation to the crypto space.
                          The first is our NFT section and the second is our trading
                          section. Our NFT section is where you can access exclusive
                          resources that are linked to NFT that you have bought. Our
                          trading section allows you to use our trading algorithm to
                          make trades between bitcoin and altcoins.
                          <i className="fa fa-quote-right lfts pl-3"></i>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div
                        className="panel-heading "
                        role="tab"
                        id="heading2"
                        onClick={() => setShowHeading2(!showHeading2)}
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            aria-expanded="false"
                            aria-controls="collapse1"
                            role="button"
                          >
                            I am an artist and would like to use your service to show
                            my content. How do I do this?
                          </a>
                        </h4>
                      </div>

                      <div
                        id="collapse2"
                        className={`panel-collapse collapse ${
                          showHeading2 ? "show" : ""
                        }`}
                      >
                        <div className="panel-body">
                          <i className="fa fa-quote-left lfts pr-3"></i>To upload
                          your content to our site please follow this{" "}
                          <a
                            href="https://www.sniser.com/artist-service/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            link
                          </a>
                          . Once you have signed up, we can assist you with the
                          process of linking your NFT to your content.
                          <i className="fa fa-quote-right lfts pl-3"></i>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div
                        className="panel-heading "
                        role="tab"
                        id="heading3"
                        onClick={() => setShowHeading3(!showHeading3)}
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            aria-expanded="false"
                            aria-controls="collapse3"
                            className="collapsed"
                          >
                            How to view content.
                          </a>
                        </h4>
                      </div>

                      <div
                        id="collapse3"
                        aria-labelledby="heading3"
                        aria-expanded="true"
                        className={`panel-collapse collapse ${
                          showHeading3 ? "show" : ""
                        }`}
                      >
                        <div className="panel-body">
                          <i className="fa fa-quote-left lfts pr-3"></i>In order to
                          view content, please ensure that you have installed
                          Metamask chrome extension, if you intend to view content
                          from a desktop. If you would like to view content from a
                          mobile device then please ensure that you have installed
                          the app on your mobile. If attempting to view content via
                          mobile, you will not be able to use Safari, Chrome or any
                          other browser. You will have to use the metamask browser.
                          <i className="fa fa-quote-right lfts pl-3"></i>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div
                        className="panel-heading "
                        role="tab"
                        id="heading4"
                        onClick={() => setShowHeading4(!showHeading4)}
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            aria-expanded="false"
                            aria-controls="collapse4"
                            className="collapsed"
                          >
                            The NFT is not showing in my wallet
                          </a>
                        </h4>
                      </div>

                      <div
                        id="collapse4"
                        className={`panel-collapse collapse ${
                          showHeading4 ? "show" : ""
                        }`}
                      >
                        <div className="panel-body">
                          <i className="fa fa-quote-left lfts pr-3"></i>When a NFT
                          token is purchased, it may not always appear visible in
                          your Metamask wallet. If this is the case, please follow
                          these steps: Open metamask and ensure that you are in the
                          right network type - ethereum or polygon. Next select
                          import NFT link. Enter in the contract ID address and
                          collectible number.&nbsp; For further information on this
                          process, please watch this{" "}
                          <a
                            href="https://youtu.be/lWbiYBeS7lM"
                            target="_blank"
                            rel="noreferrer"
                          >
                            video
                          </a>
                          <i className="fa fa-quote-right lfts pl-3"></i>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div
                        className="panel-heading "
                        role="tab"
                        id="heading5"
                        onClick={() => setShowHeading5(!showHeading5)}
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            aria-expanded="false"
                            aria-controls="collapse5"
                            className="collapsed"
                          >
                            Can I resell my NFT?
                          </a>
                        </h4>
                      </div>

                      <div
                        id="collapse5"
                        className={`panel-collapse collapse ${
                          showHeading5 ? "show" : ""
                        }`}
                      >
                        <div className="panel-body">
                          <i className="fa fa-quote-left lfts pr-3"></i>Yes you can.
                          We anticipate that a number of people will purchase and NFT
                          due to resale value. To do this you will need to sell the
                          NFT personally on an NFT marketplace. We do not currently
                          provide an NFT sale or resale marketplace.&nbsp;
                          <i className="fa fa-quote-right lfts pl-3"></i>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div
                        className="panel-heading "
                        role="tab"
                        id="heading6"
                        onClick={() => setShowHeading6(!showHeading6)}
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            aria-expanded="false"
                            aria-controls="collapse6"
                            className="collapsed"
                          >
                            How will you promote our services?
                          </a>
                        </h4>
                      </div>

                      <div
                        id="collapse6"
                        className={`panel-collapse collapse ${
                          showHeading6 ? "show" : ""
                        }`}
                      >
                        <div className="panel-body">
                          <i className="fa fa-quote-left lfts pr-3"></i>We will use
                          social media and a range of other means to promote our
                          services and your NFT related content. We also encourage
                          artists to make their audience aware of the NFTs that they
                          are selling and how its content is viewed.
                          <i className="fa fa-quote-right lfts pl-3"></i>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div
                        className="panel-heading "
                        role="tab"
                        id="heading7"
                        onClick={() => setShowHeading7(!showHeading7)}
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            aria-expanded="false"
                            aria-controls="collapse7"
                            className="collapsed"
                          >
                            When can I have access to my funds?
                          </a>
                        </h4>
                      </div>

                      <div
                        id="collapse7"
                        className={`panel-collapse collapse ${
                          showHeading7 ? "show" : ""
                        }`}
                      >
                        <div className="panel-body">
                          <i className="fa fa-quote-left lfts pr-3"></i>You are free
                          to remove your funds from your crypto account any time that
                          is suitable for you as we do not control your assets.
                          <i className="fa fa-quote-right lfts pl-3"></i>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div
                        className="panel-heading "
                        role="tab"
                        id="heading8"
                        onClick={() => setShowHeading8(!showHeading8)}
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            aria-expanded="false"
                            aria-controls="collapse8"
                            className="collapsed"
                          >
                            Are there any costs involved with using your system?
                          </a>
                        </h4>
                      </div>

                      <div
                        id="collapse8"
                        className={`panel-collapse collapse ${
                          showHeading8 ? "show" : ""
                        }`}
                      >
                        <div className="panel-body">
                          <i className="fa fa-quote-left lfts pr-3"></i>We charge a
                          flat rate fee for using our system. We do not share in your
                          profits or your potential losses. We believe that this
                          structure provides the best value for you.&nbsp;
                          <i className="fa fa-quote-right lfts pl-3"></i>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div
                        className="panel-heading "
                        role="tab"
                        id="heading9"
                        onClick={() => setShowHeading9(!showHeading9)}
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            aria-expanded="false"
                            aria-controls="collapse9"
                            className="collapsed"
                          >
                            Do I have to pay tax on any profits that I make from
                            crypto trading?
                          </a>
                        </h4>
                      </div>

                      <div
                        id="collapse9"
                        className={`panel-collapse collapse ${
                          showHeading9 ? "show" : ""
                        }`}
                      >
                        <div className="panel-body">
                          <i className="fa fa-quote-left lfts pr-3"></i>Seek
                          independent advice on the tax implications of investing in
                          crypto assets.
                          <i className="fa fa-quote-right lfts pl-3"></i>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div
                        className="panel-heading "
                        role="tab"
                        id="heading10"
                        onClick={() => setShowHeading10(!showHeading10)}
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            aria-expanded="false"
                            aria-controls="collapse10"
                            className="collapsed"
                          >
                            How can I get in contact with you?
                          </a>
                        </h4>
                      </div>

                      <div
                        id="collapse10"
                        className={`panel-collapse collapse ${
                          showHeading10 ? "show" : ""
                        }`}
                      >
                        <div className="panel-body">
                          <i className="fa fa-quote-left lfts pr-3"></i>Please visit
                          our contact us page for the most appropriate way to contact
                          us.
                          <i className="fa fa-quote-right lfts pl-3"></i>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div
                        className="panel-heading "
                        role="tab"
                        id="heading11"
                        onClick={() => setShowHeading11(!showHeading11)}
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            aria-expanded="false"
                            aria-controls="collapse11"
                            className="collapsed"
                          >
                            How do I get NFT to view your content?
                          </a>
                        </h4>
                      </div>

                      <div
                        id="collapse11"
                        className={`panel-collapse collapse ${
                          showHeading11 ? "show" : ""
                        }`}
                      >
                        <div className="panel-body">
                          <i className="fa fa-quote-left lfts pr-3"></i>Our partners
                          use Opensea to mint and sell their NFTs. Once purchased,
                          you can use the NFT to view content exclusive to them. At
                          the moment, we do not sell the NFTs; we allow you to view
                          exclusive content from NFT creators.
                          <i className="fa fa-quote-right lfts pl-3"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq
