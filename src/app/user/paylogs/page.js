import Link from 'next/link'
import BarChart from '@/components/user/Chart'
import DashboardSidebar from '@/components/user/DashboardSidebar'

export default function Page() {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-4 col-12">
          <DashboardSidebar />
        </div>
        <div className="col-md-8 col-12">
          <h3>Payment Logs</h3>
        </div>
      </div>
    </section>
  )
}
