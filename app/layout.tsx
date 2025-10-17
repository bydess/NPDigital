import './globals.css'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Northern Peak Digital',
  description: 'Future-Ready Digital Solutions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white font-quicksand">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
