export default function Header() {
  return (
    <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <span className="fs-4">Hotel Manager</span>
        </a>

        <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active text-white bg-gray" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-body-secondary">Gallery</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-body-secondary">Services</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-body-secondary">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link text-body-secondary">Contact</a></li>
            <li className="nav-item"><a href="#" className="nav-link btn btn-primary btn-sm bg-dark text-white mx-1">Book Event</a></li>
            <li className="nav-item"><a href="#" className="nav-link btn btn-primary btn-sm bg-dark text-white mx-1">Book Room</a></li>
        </ul>
        </header>
    </div>
  );
}
