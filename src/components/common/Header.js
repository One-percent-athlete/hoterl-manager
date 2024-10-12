export default function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none text-primary fs-3 fw-bolder">
            Hotel Manager
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-body-emphasis text-decoration-none text-primary fw-semibold">Home</a></li>
          <li><a href="#" className="nav-link px-2 link-secondary">About</a></li>
          <li><a href="#" className="nav-link px-2 link-secondary">Gallery</a></li>
          <li><a href="#" className="nav-link px-2 link-secondary">Services</a></li>
          <li><a href="#" className="nav-link px-2 link-secondary">Contact</a></li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Book Event</button>
          <button type="button" className="btn btn-primary">Book Room</button>
        </div>
      </header>
    </div>
  );
}
