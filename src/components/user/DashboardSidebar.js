'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardSidebar() {
  const pathname = usePathname()
  return (
    <div className="list-group">
      <Link
        className={`list-group-item ${pathname == '/user/dashboard' ? 'hms-bg-dark' : ''}`}
        href="/user/dashboard">
        Dashboard
      </Link>
      <Link
        className={`list-group-item ${pathname == '/user/history' ? 'hms-bg-dark' : ''}`}
        href="/user/history">
        Booking History
      </Link>
      <Link
        className={`list-group-item ${pathname == '/user/paylogs' ? 'hms-bg-dark' : ''}`}
        href="/user/paylogs">
        Payment Log
      </Link>
      <Link
        className={`list-group-item ${pathname == '/user/profile' ? 'hms-bg-dark' : ''}`}
        href="/user/profile">
        Profile
      </Link>
      <Link
        className={`list-group-item ${pathname == '/user/logout' ? 'hms-bg-dark' : ''}`}
        href="/user/logout">
        Logout
      </Link>
    </div>
  )
}
