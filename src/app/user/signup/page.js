import Link from 'next/link'

export default function Page() {

  async function handleForm(formData){
    "use server"
    console.log(formData);
    
  }

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-10 offset-1">
              <h3 className="mb-5 text-center">Signup</h3>
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="/banners/banner1.jpg" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 mb-3">
              <form className="row" action={handleForm}>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" required name="first_name" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" required name="last_name" />
                </div>

                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" required name="username" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label" aria-required>
                    Email
                  </label>
                  <input type="email" className="form-control" required name="email" />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" required name="password1" />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" required name="password2" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <button className="btn btn-secondary">Reset</button>
                  <button className="btn hms-bg-dark ms-2">Submit</button>
                </div>
                <p>
                  Already a user? <Link href="/user/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
