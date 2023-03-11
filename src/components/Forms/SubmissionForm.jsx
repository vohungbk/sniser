import "./styles.scss"

const SubmissionForm = () => {
  return (
    <section className="submission">
      <div className="container">
        <div className="content">
          <h2>Complete the form</h2>
          <p>
            Complete the submission fields below, outlining key information about
            you, your artwork and your intentions. We'll analyze it and get in
            contact with you.
          </p>
          <form autoComplete="off">
            <div className="form-row row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className="form-control"
                  id="name"
                  placeholder="Enter your name here"
                />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group col-md-6 mb-27">
                <label htmlFor="linkFb">Link to Facebook account</label>
                <input
                  className="form-control"
                  placeholder="Enter your link to Facebook"
                  id="linkFb"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="linkInstagram">Link to INSTAGRAM account</label>
                <input
                  className="form-control"
                  id="linkInstagram"
                  placeholder="Enter your link to Instagram"
                />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group">
                <label htmlFor="linkOther">
                  LINKS TO OTHER SOcial media ACCOUNTS
                </label>
                <input
                  className="form-control"
                  id="linkOther"
                  placeholder="Enter your other existing social media accounts here"
                />
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group">
                <label htmlFor="linkOther">Content type</label>
                <select className="form-control">
                  <option>Audio</option>
                </select>
              </div>
            </div>
            <div className="form-row row">
              <div className="form-group">
                <label htmlFor="name">LINK TO CONTENT (PRIVATE)</label>
                <label className="hint">
                  Please ensure that it is set to private as public content cannot be
                  displayed on our platform
                </label>
                <input
                  className="form-control"
                  id="name"
                  placeholder="Enter the link to the content here"
                />
              </div>
            </div>
            <div className="form-row row">
              <div className="">
                <label htmlFor="name">Art BRIEF (level of funding required)</label>
                <textarea
                  rows={4}
                  className="form-control"
                  id="name"
                  style={{ height: "auto" }}
                  placeholder="Enter the Art Brief here, please make sure you are also including the level of funding"
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <button type="button" className="btn-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SubmissionForm
