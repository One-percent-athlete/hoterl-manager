"use client"
export default function Logout() {
    localStorage.removeItem('user')
    location.href="/user/login"
  return (
    <section className="container my-5">
    </section>
  )
}
