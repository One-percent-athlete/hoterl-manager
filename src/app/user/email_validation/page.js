"use client"

import Link from 'next/link'
import { useState } from "react"

export default function Page() {
  const [errorMsg, setErrorMsg] = useState(false)

  async function handleForm(formData){
    const fd = {
    'code' : formData.get('code'),
    }

  const res = await fetch("http://127.0.0.1:8000/api/code_validation", {"method": "POST", "body": JSON.stringify(fd), "headers": {
    "Content-Type":"application/json"
  }
  })
  const resData = await res.json()
  if (resData.error == "" || resData.error == null ){

    setErrorMsg(false)
    location.href="/user/change_password"

} else {
    setErrorMsg(resData.error)
}
}

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-10 offset-1">
              <h3 className="mb-5 text-center">Email Validation</h3>
              {
                errorMsg && <div className="alert alert-warning">{ errorMsg }</div>
              }
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="/banners/banner4.jpg" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 mb-3">
              <form className="row" action={handleForm}>
                <div className="col-12 mb-3">
                  <label className="form-label">Enter Code</label>
                  <input type="text" className="form-control" name="code" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <button className="btn hms-bg-dark">Submit</button>
                </div>
                <p>
                  Return to login? <Link href="/user/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
