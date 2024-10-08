export default function Header() {
  return (

    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="#" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <span className="fs-4">Hotel Manager</span>
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Gallery</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Services</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Contact</a></li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-success me-2"><a href="#" className="nav-link mx-1">Book Event</a></button>
        <button type="button" className="btn btn-success"><a href="#" className="nav-link mx-1">Book Room</a></button>
      </div>
    </header>
  </div>
  );
}
