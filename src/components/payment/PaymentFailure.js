import Link from 'next/link'

export default function PaymentFailure() {
  return (
    <div>
      <h3 className="text-danger my-5">
        <i className="fa fa-times-circle"></i>
        Something went wrong, please try again.
      </h3>
      <h5 className="text-danger">
        Error Details: <Link href="#">Click To View</Link>
      </h5>
      <p className="my-4">
        <Link href="/" className="btn btn-outline-info ">
          Home
        </Link>
        <Link href="#" className="btn btn-info ms-2">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
