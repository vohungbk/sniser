import "./styles.scss"
import CreativeContentIndustry from "../../../assets/creative_content_industry.png"
import UsingWeb from "../../../assets/using_web.png"
import Working from "../../../assets/working-with-the-best-talent.png"

const AboutUs = () => {
  return (
    <>
      <div class="page-banner-about-area">
        <h2>
          <i class="fa fa-quote-left lfts pr-3"></i>A professional team that provides
          expert
          <br /> knowledge and
          <span>
            &nbsp;customer service in equal <br />
            measure
          </span>
          <i class="fa fa-quote-right lfts pl-3"></i>
        </h2>
      </div>
      <section class="teacher-registration-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12  bt-tabs">
              <div role="tabpanel">
                <ul class="nav nav-tabs" role="tablist" style={{ width: "206px" }}>
                  <li role="presentation">
                    <a
                      class="active"
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

                <div class="tab-content">
                  <div role="tabpanel" class="tab-pane fade active in" id="home">
                    <div class="sniser-offers ptb-50">
                      <div class="container">
                        <div
                          class="row"
                          style={{ justifyContent: "center", alignItems: "center" }}
                        >
                          <div class="col-md-6">
                            <div class="sinser-box">
                              <h2>
                                <span>
                                  <i class="fa fa-quote-left lfts pr-3"></i>
                                  Empowering the creative content industry
                                </span>
                                <i class="fa fa-quote-right pl-3"></i>
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

                          <div class="col-md-6">
                            {/* <div class="layer_image">
                              <img
                                src={CreativeContentIndustry}
                                class="img-responsive"
                                alt=""
                              />
                            </div> */}

                            <div class="sniser-image">
                              <img
                                src={CreativeContentIndustry}
                                class="img-responsive"
                                alt=""
                                title=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="sniser-offers ptb-50">
                      <div class="container">
                        <div class="row reversed-order">
                          <div
                            class="col-md-6"
                            style={{
                              display: "flex",
                              justifyContent: "center !important",
                              alignitems: "center !important",
                            }}
                          >
                            {/* <div class="layer_image lft">
                              <img
                                src="http://alltoit.org/development/sniser/images/layer2.jpg"
                                class="img-responsive"
                                alt=""
                              />
                            </div> */}

                            <div class="sniser-image visible-lg">
                              <img
                                src={UsingWeb}
                                class="img-responsive"
                                alt=""
                                title=""
                              />
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="sinser-box">
                              {/* <div class="sniser-image mobile visible-sm">
                                <img
                                  src="/uploads/about_us/Sniser - Using web 3.0.png"
                                  class="img-responsive"
                                  alt=""
                                />
                              </div> */}

                              <h2>
                                <span>
                                  <i class="fa fa-quote-left lfts pr-3"></i>Using web
                                  3.0 to support artists, consumers, and investors
                                </span>
                                <i class="fa fa-quote-right pl-3"></i>
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
                    <div class="sniser-offers ptb-50">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="sinser-box">
                              <h2>
                                <span>
                                  <i class="fa fa-quote-left lfts pr-3"></i>Working
                                  with the best talent
                                </span>
                                <i class="fa fa-quote-right pl-3"></i>
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
                            class="col-md-6"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {/* <div class="layer_image">
                              <img
                                src="http://alltoit.org/development/sniser/images/LAYER1.jpg"
                                class="img-responsive"
                                alt=""
                              />
                            </div> */}

                            <div class="sniser-image">
                              <img
                                src={Working}
                                class="img-responsive"
                                alt=""
                                title=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div role="tabpanel" class="tab-pane fade" id="tab2">
                    <section class="leaders">
                      <div class="container">
                        <div class="row leader-block mt-3">
                          <div class="col-md-12">
                            <div class="team-lderss">
                              <div class="row">
                                <div class="col-md-4">
                                  <div class="leader-single">
                                    <figure class="large-image">
                                      <img
                                        src="https://sniser.com/uploads/team/1619809780mascot.PNG"
                                        alt=""
                                        class="img-responsive"
                                      />
                                    </figure>
                                  </div>
                                </div>
                                <div class="col-md-8">
                                  <div class="leader-single leader-holder">
                                    <div class="leader-info">
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
                                        <a href="" class="kwame-btn"></a>
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="leader-single">
                              <figure>
                                <img
                                  src="https://sniser.com/uploads/team/1619809780mascot.PNG"
                                  alt=""
                                  class="img-responsive"
                                />

                                <figcaption>
                                  <ul class="list-unstyled">
                                    <li>
                                      <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i class="fa fa-facebook"></i>
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i class="fa fa-twitter"></i>
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i class="fa fa-instagram"></i>
                                      </a>
                                    </li>

                                    <li>
                                      <a
                                        href="https://www.youtube.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i class="fa fa-youtube"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </figcaption>
                              </figure>

                              <div class="leader-info">
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
                    <div class="team-listing">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-4">
                            <div class="team-members">
                              <div class="member-box">
                                <img
                                  src="https://sniser.com/uploads/team/1619692459kwame.jpg"
                                  alt=""
                                  class="img-responsive"
                                />
                              </div>
                              <div class="member-info">
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
                              <div class="modal" id="myModal1">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h4 class="modal-title">Kwame Osei</h4>

                                      <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                      >
                                        ×
                                      </button>
                                    </div>

                                    <div class="modal-body">
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
