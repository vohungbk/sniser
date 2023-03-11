import "./styles.scss"
const ContactUs = () => {
  return (
    <>
      <div className="page-banner-area page-banner-contact-area">
        <h2>
          <i className="fa fa-quote-left lfts pr-3"></i>We'd love to hear from you,
          <br />
          so please feel<span> free to contact us below</span>
          <i className="fa fa-quote-right lfts pl-3"></i>
        </h2>
      </div>
      <section className="contact-wrapper pb-70 pt-70">
        <div className="container">
          <div className="contact-title text-center">
            <h2>
              <i className="fa fa-quote-left lfts pr-3"></i>Want to sign up?
              <span>Or have a question for us?</span>
              <i className="fa fa-quote-right lfts pl-3"></i>
            </h2>
          </div>

          <div className="row">
            <div className="col-md-5 mt-4">
              <div>
                <div className="contact-holder clearfix">
                  <div className="icon-contact">
                    <i className="fa fa-envelope"></i>
                  </div>

                  <div className="contact-information">
                    <p>contact@sniser.com</p>
                  </div>
                </div>

                <div className="contact-holder clearfix">
                  <div className="icon-contact icon-contact-extra">
                    <i className="fa fa-map-marker"></i>
                  </div>

                  <div className="contact-information">
                    <p>SNISER LTD 3rd Floor, 86-90 Paul Street, London, EC2A 4NE</p>
                  </div>
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
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
