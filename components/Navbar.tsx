'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-lg border-b border-purple-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/npd-logo.svg" alt="Northern Peak Digital" className="h-12 w-36 object-cover rounded-lg" />
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-purple-400">Home</Link>
            <Link href="/services" className="hover:text-purple-400">Services</Link>
            <Link href="/ai-automation" className="hover:text-purple-400">AI Automations</Link>
            <Link href="/about" className="hover:text-purple-400">About</Link>
            <Link href="/contact" className="hover:text-purple-400">Contact</Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-t border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="/services" className="block px-3 py-2 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link href="/ai-automation" className="block px-3 py-2 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>AI Automations</Link>
              <Link href="/about" className="block px-3 py-2 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="/contact" className="block px-3 py-2 hover:text-purple-400" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
