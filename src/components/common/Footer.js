import Link from 'next/link'
import { Pacifico } from 'next/font/google'
const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })

export default function Footer() {
  return (
    <div className="p-0 m-0" style={{ 'backgroundColor': '#416284' }} data-bs-theme="dark">
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3">
            <Link
              href="/"
              className={`{d-flex align-items-center mb-3 link-body-emphasis text-decoration-none text-info fs-3 fw-bolder navbar-brand ${pacifico.className}`}>
              Hotel Manager
            </Link>

            <p className="text-body-secondary">© 2024</p>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h5 className="text-white">About</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Gallery
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="text-white">Contact</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="text-white">User</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/user/dashboard" className="nav-link p-0 text-body-secondary">
                  Dashboard
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/user/profile" className="nav-link p-0 text-body-secondary">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}
