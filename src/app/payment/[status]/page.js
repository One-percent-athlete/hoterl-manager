import PaymentSuccess from '@/components/payment/PaymentSuccess'
import PaymentFailure from '@/components/payment/PaymentFailure'

export default function Page({ params }) {
  const status = params.status
  return (
    <section className="container my-5 text-center">
      {status == 'success' && <PaymentSuccess />}
      {status == 'failure' && <PaymentFailure />}
    </section>
  )
}
