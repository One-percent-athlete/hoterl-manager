"use client"

import Link from 'next/link'
import { useState } from "react"

export default function Page() {
  const [errorMsg, setErrorMsg] = useState(false)

  async function handleForm(formData){
    const fd = {
    'email' : formData.get('email'),
    }

const res = await fetch("http://127.0.0.1:8000/api/email_validation", {"method": "POST", "body": JSON.stringify(fd), "headers": {
  "Content-Type":"application/json"
}
})
const resData = await res.json()
if (res.ok){

    setErrorMsg(false)
    location.href="/email_validation"

} else {
    var errorStr=[];
    for(const [key, values] of Object.entries(resData)){  
    console.log(values[key]);
        for(let i=0; i<values.length; i++) {
            errorStr.push(`${values[i]}`)
        }
    }
    setErrorMsg(errorStr)
}
}

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-10 offset-1">
              <h3 className="mb-5 text-center">Forgot Password</h3>
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="/banners/banner4.jpg" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 mb-3">
              <form className="row" action={handleForm}>
                <div className="col-12 mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <button className="btn hms-bg-dark">Send Link</button>
                </div>
                <p>
                  Not a user yet? <Link href="/user/signup">Sign up</Link>
                </p>
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
