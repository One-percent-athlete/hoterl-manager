import Link from 'next/link'

export default function Login() {

    const [successMsg, setSuccessMsg] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    async function handleForm(formData){
        const fd = {
        'username' : formData.get('username'),
        'password' : formData.get('password'),
        }
    
    const res = await fetch("http://127.0.0.1:8000/api/signup", {"method": "POST", "body": JSON.stringify(fd), "headers": {
      "Content-Type":"application/json"
    }
  })
    const resData = await res.text()
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
          <div className="row">
            <div className="col-md-6 col-12">
              <img src="/banners/banner2.jpg" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 mb-3">
              <h3 className="mb-3">Login</h3>
              <div className="row">
                <div className="col-12 mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <button className="btn hms-bg-dark">Login</button>
                </div>
                <p>
                  <Link className="text-danger" href="/user/forgotpassword">
                    Forgot password?
                  </Link>
                </p>
                <p>
                  Not a user yet? <Link href="/user/signup">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
