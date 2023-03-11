import "./styles.scss"
import CreativeContentIndustry from "../../../assets/creative_content_industry.png"
import UsingWeb from "../../../assets/using_web.png"
import Working from "../../../assets/working-with-the-best-talent.png"

const AboutUs = () => {
  return (
    <>
      <div className="page-banner-about-area">
        <h2>
          <i className="fa fa-quote-left lfts pr-3"></i>A professional team that provides
          expert
          <br /> knowledge and
          <span>
            &nbsp;customer service in equal <br />
            measure
          </span>
          <i className="fa fa-quote-right lfts pl-3"></i>
        </h2>
      </div>
      <section className="teacher-registration-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12  bt-tabs">
              <div role="tabpanel">
                <ul className="nav nav-tabs" role="tablist" style={{ width: "206px" }}>
                  <li role="presentation">
                    <a
                      className="active"
                      href="#home"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                      aria-expanded="true"
                    >
                      Our Vision
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane fade active in" id="home">
                    <div className="sniser-offers ptb-50">
                      <div className="container">
                        <div
                          className="row"
                          style={{ justifyContent: "center", alignItems: "center" }}
                        >
                          <div className="col-md-6">
                            <div className="sinser-box">
                              <h2>
                                <span>
                                  <i className="fa fa-quote-left lfts pr-3"></i>
                                  Empowering the creative content industry
                                </span>
                                <i className="fa fa-quote-right pl-3"></i>
                              </h2>

                              <p>
                                Sniser has set out to come to grips with the reality
                                of art and internet. Whist appreciating the value
                                that the internet has brought to the spread of
                                information and media, it has also reduced the
                                control that artists have over their content. We seek
                                to provide a means for owners of intellectual
                                property to be able to better protect and limit
                                content. In doing so, they will be better able to
                                monetise their content and provide unique offerings
                                to those given access.
                              </p>

                              <p>
                                Whether it is the artist who created the content, the
                                publisher owning the creative media or any other
                                entity that was involved in the process of bring
                                passions to life, Sniser seeks to be a force to
                                assist in protecting this space by providing an
                                innovative service
                              </p>
                            </div>
                          </div>

                          <div className="col-md-6">
                            {/* <div className="layer_image">
                              <img
                                src={CreativeContentIndustry}
                                className="img-responsive"
                                alt=""
                              />
                            </div> */}

                            <div className="sniser-image">
                              <img
                                src={CreativeContentIndustry}
                                className="img-responsive"
                                alt=""
                                title=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="sniser-offers ptb-50">
                      <div className="container">
                        <div className="row reversed-order">
                          <div
                            className="col-md-6"
                            style={{
                              display: "flex",
                              justifyContent: "center !important",
                              alignitems: "center !important",
                            }}
                          >
                            {/* <div className="layer_image lft">
                              <img
                                src="http://alltoit.org/development/sniser/images/layer2.jpg"
                                className="img-responsive"
                                alt=""
                              />
                            </div> */}

                            <div className="sniser-image visible-lg">
                              <img
                                src={UsingWeb}
                                className="img-responsive"
                                alt=""
                                title=""
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="sinser-box">
                              {/* <div className="sniser-image mobile visible-sm">
                                <img
                                  src="/uploads/about_us/Sniser - Using web 3.0.png"
                                  className="img-responsive"
                                  alt=""
                                />
                              </div> */}

                              <h2>
                                <span>
                                  <i className="fa fa-quote-left lfts pr-3"></i>Using web
                                  3.0 to support artists, consumers, and investors
                                </span>
                                <i className="fa fa-quote-right pl-3"></i>
                              </h2>

                              <p>
                                Most reference to blockchain technology centres on
                                cryptocurrencies such as bitcoin. However, this is
                                only a small area of web 3.0. We believe that the
                                true strength of new technologies in this space is to
                                provide an open and verifiable ledger of ownership.
                                Ethereum and several other protocols have created non
                                fungible tokens that can be used to give limited
                                ownership of content to specified users. It is within
                                this space that Sniser seeks to be at the forefront
                                of advances in non-fungible tokens.{" "}
                              </p>

                              <p>
                                As an artist, feel content in the knowledge that you
                                are in total control of your own content. Fans by
                                using our service will be able gain exclusive
                                content. And even if you are not a fan of a specific
                                genre of media, it can make great financial sense to
                                purchase an NFT and then sell it on to people who
                                have a passion for a particular artist.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sniser-offers ptb-50">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="sinser-box">
                              <h2>
                                <span>
                                  <i className="fa fa-quote-left lfts pr-3"></i>Working
                                  with the best talent
                                </span>
                                <i className="fa fa-quote-right pl-3"></i>
                              </h2>

                              <p>
                                Our journey starts with artists and providing a
                                unique offering – namely that content can be created
                                and properly monetised. Whilst we have respect for
                                the current methods of streaming and displaying
                                content, we are aware that for many artists current
                                methods of media distribution is not able to cover
                                the financial and non-financial commitments that they
                                make in their pursuit of artistic perfection.{" "}
                              </p>

                              <p>
                                Many artists want to remain artists and not have to
                                rely on creating an online presence that will create
                                followers to monetise. There exists a group of
                                creatives, who want their art to be their vocal
                                piece. Therefore, Sniser allows artists to remain
                                artists who can earn a living purely off their
                                creative content.
                              </p>
                            </div>
                          </div>

                          <div
                            className="col-md-6"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {/* <div className="layer_image">
                              <img
                                src="http://alltoit.org/development/sniser/images/LAYER1.jpg"
                                className="img-responsive"
                                alt=""
                              />
                            </div> */}

                            <div className="sniser-image">
                              <img
                                src={Working}
                                className="img-responsive"
                                alt=""
                                title=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div role="tabpanel" className="tab-pane fade" id="tab2">
                    <section className="leaders">
                      <div className="container">
                        <div className="row leader-block mt-3">
                          <div className="col-md-12">
                            <div className="team-lderss">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="leader-single">
                                    <figure className="large-image">
                                      <img
                                        src="https://sniser.com/uploads/team/1619809780mascot.PNG"
                                        alt=""
                                        className="img-responsive"
                                      />
                                    </figure>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="leader-single leader-holder">
                                    <div className="leader-info">
                                      <h2></h2>
                                      <p>
                                        Hi and welcome to Sniser. I'm Sniserman, I
                                        guide our audience through the crypto related
                                        world. I've teamed up with the men behind
                                        Sniser to provide a totally unique and new
                                        service that allows you to profit from the
                                        crypto world without any active input. How do
                                        we do this? Well we use this software (known
                                        as an algorithm) to buy crypto assets when
                                        they are undervalued and sell them when they
                                        increase in value.
                                      </p>

                                      <p>
                                        With the assistance of the Sniser staff, I
                                        will provide you with the tools needed to get
                                        the best out of our service. So if you have
                                        questions about how to trade crypto feel free
                                        to drop us a line via the site or from one of
                                        our social media channels.&nbsp;
                                      </p>

                                      <p>
                                        Happy investing with me and the Sniser Team!
                                      </p>
                                      <p>
                                        <span></span>
                                      </p>
                                      <h4>
                                        <a href="" className="kwame-btn"></a>
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="leader-single">
                              <figure>
                                <img
                                  src="https://sniser.com/uploads/team/1619809780mascot.PNG"
                                  alt=""
                                  className="img-responsive"
                                />

                                <figcaption>
                                  <ul className="list-unstyled">
                                    <li>
                                      <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i className="fa fa-facebook"></i>
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i className="fa fa-twitter"></i>
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i className="fa fa-instagram"></i>
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        href="https://www.youtube.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i className="fa fa-youtube"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </figcaption>
                              </figure>

                              <div className="leader-info">
                                <h4>
                                  <a href=""></a>
                                </h4>

                                <span></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="team-listing">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="team-members">
                              <div className="member-box">
                                <img
                                  src="https://sniser.com/uploads/team/1619692459kwame.jpg"
                                  alt=""
                                  className="img-responsive"
                                />
                              </div>
                              <div className="member-info">
                                <h4>
                                  <a
                                    href=""
                                    data-toggle="modal"
                                    data-target="#myModal1"
                                  >
                                    Kwame Osei
                                  </a>
                                </h4>
                                CEO{" "}
                              </div>
                              <div className="modal" id="myModal1">
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h4 className="modal-title">Kwame Osei</h4>

                                      <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                      >
                                        ×
                                      </button>
                                    </div>

                                    <div className="modal-body">
                                      <p>
                                        Interested in all things technology related,
                                        Nelson has been a fundamental part of taking
                                        Sniser from a vision to reality. Experienced
                                        in cloud management systems, together with
                                        Kwame they focus on product development for
                                        the business.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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

export default AboutUs
