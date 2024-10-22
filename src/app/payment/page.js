import Link from 'next/link'

export default function Page() {
  return (
    <section className="container my-5">
      <h3 className="my-4">Payment</h3>
      <div className="row">
        <div className="col-8 offset-2">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Total Guests</th>
                <td>2</td>
              </tr>
              <tr>
                <th>Total Rooms</th>
                <td>2</td>
              </tr>
              <tr>
                <th>Checkin Date</th>
                <td>20/04/2024</td>
              </tr>
              <tr>
                <th>Checkout Date</th>
                <td>25/04/2024</td>
              </tr>
              <tr>
                <th>Room Price</th>
                <td>1700 x 5 = 23000</td>
              </tr>
              <tr>
                <th>Tax</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Total Price</th>
                <td>23000 + 300 = 23300</td>
              </tr>
              <tr>
                <td colSpan={2} className="text-danger">
                  ID required when check in
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Link href="#">Terms & Conditions</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-danger">Cancel Booking</button>
                  <button className="btn btn-success ms-2">Pay Now</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
