export default function HomeReviews() {
  return (
    <section className="container mt-5">
      <h3 className="my-5 text-center">
        Reviews
        <a href="/reviews" className="float-end fs-5 btn text-white hms-bg-dark">
          View All
        </a>
      </h3>

      <div className="row text-center">
        <div className="col-4 mb-3">
          <h4>Author King</h4>
          <p>This is an awesome project.</p>
          <span className="text-warning">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
        </div>
        <div className="col-4 mb-3">
          <h4>Author King</h4>
          <p>This is an awesome project.</p>
          <span className="text-warning">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
        </div>
        <div className="col-4 mb-3">
          <h4>Author King</h4>
          <p>This is an awesome project.</p>
          <span className="text-warning">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </span>
        </div>
      </div>
    </section>
  )
}
