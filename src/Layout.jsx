import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './componenents/partials/Footer'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

     <Footer />
    </div>
  )
}

export default Layout
