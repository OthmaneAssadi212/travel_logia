import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './componenents/partials/Footer'
import Navbar from './componenents/partials/Navbar'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
