import {Pacifico} from 'next/font/google';
const pacifico = Pacifico({ subsets: ['latin'], weight:"400" })
export default function Header() {
  return (
    <div style={{'backgroundColor':'#416284'}} data-bs-theme="dark">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" >
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className={`d-inline-flex link-body-emphasis text-decoration-none text-info fs-3 fw-bolder navbar-brand ${pacifico.className}`} >
              Hotel Manager
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-body-emphasis text-decoration-none text-info fw-semibold">Home</a></li>
            <li><a href="#" className="nav-link px-2 link-light">About</a></li>
            <li><a href="#" className="nav-link px-2 link-light">Gallery</a></li>
            <li><a href="#" className="nav-link px-2 link-light">Services</a></li>
            <li><a href="#" className="nav-link px-2 link-light">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-info me-2">Book Event</button>
            <button type="button" className="btn btn-info">Book Room</button>
          </div>
        </header>
      </div>
    </div>
  );
}
