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
                  Dashboard
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
            <p>
              <a href="#">
                <i className="fa fa-facebook text-white text-decoration-none me-3"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram text-white text-decoration-none me-3"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter text-white text-decoration-none me-3"></i>
              </a>
              <a href="#">
                <i className="fa fa-wechat text-white text-decoration-none me-3"></i>
              </a>
            </p>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 p-0 text-body-secondary">
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className="nav-item mb-2 p-0 text-body-secondary">
                <Link href="/career">Join Us</Link>
              </li>
              <li className="nav-item mb-2 p-0 text-body-secondary">Email: xxx@xxx.com</li>
              <li className="nav-item mb-2 p-0 text-body-secondary">Mobile: +12 23234 324</li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className="text-white">Support</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Terms & Conditions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}
