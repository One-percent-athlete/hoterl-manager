"use client"
import Link from 'next/link'
import { useRef,useState } from "react";

export default function SignupForm() {
    const resestRefButton = useRef(null)
    const [successMsg, setSuccessMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

  async function handleForm(formData){
    const fd = {
      'first_name' : formData.get('first_name'),
      'last_name' : formData.get('last_name'),
      'username' : formData.get('username'),
      'email' : formData.get('email'),
      'password' : formData.get('password'),
      'profile' : {
        'phone': formData.get('phone')
      }
    }
    
    const res = await fetch("http://127.0.0.1:8000/api/signup", {"method": "POST", "body": JSON.stringify(fd), "headers": {
      "Content-Type":"application/json"
    }
  })
  const resData = await res.json()
  
  if (res.ok){
    setSuccessMsg(true)
    setErrorMsg("")
    resestRefButton.current.click()
  } else {
    var errorStr=[];
    for(const [key, values] of Object.entries(resData)){  
      console.log(values[key]);
         for(let i=0; i<values.length; i++) {
             errorStr.push(`${values[i]}`)
         }
    }
    setSuccessMsg(false)
    setErrorMsg(errorStr)
  }
  }

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-10 offset-1">
              <h3 className="mb-5 text-center">Signup</h3>
              {
                successMsg && <div className="alert alert-success">Thank you for joining us!</div>
              }
              {
                errorMsg && <div className="alert alert-warning">{ errorMsg }</div>
              }
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="/banners/banner1.jpg" className="img-fluid" />
            </div>
            <form className="col-md-6 col-12 mb-3" action={handleForm}>
              <div className="row">
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" required name="first_name" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" required name="last_name" />
                </div>

                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" required name="email" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="number" className="form-control" required name="phone" />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" required name="username" />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" required name="password" />
                </div>
                {/* <div className="col-12 mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" name="password1" />
                </div> */}
                <div className="col-md-6 col-12 mb-3">
                  <button className="btn btn-danger" ref={resestRefButton}>Reset</button>
                  <button className="btn hms-bg-dark ms-2">Submit</button>
                </div>
                <p>
                  Already a user? <Link href="/user/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
