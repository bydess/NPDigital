import React from 'react'

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-28 px-6">
      <div className="max-w-2xl mx-auto text-center py-24">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-gray-300 mb-8">Get in touch to start your project.</p>

        <form className="space-y-4 text-left">
          <label className="block">
            <span className="text-gray-300">Name</span>
            <input className="mt-1 block w-full rounded-md bg-slate-800 border border-purple-500/20 p-3" placeholder="Your name" />
          </label>

          <label className="block">
            <span className="text-gray-300">Email</span>
            <input className="mt-1 block w-full rounded-md bg-slate-800 border border-purple-500/20 p-3" placeholder="you@example.com" />
          </label>

          <label className="block">
            <span className="text-gray-300">Message</span>
            <textarea className="mt-1 block w-full rounded-md bg-slate-800 border border-purple-500/20 p-3" rows={6} placeholder="Tell us about your project..." />
          </label>

          <button className="px-6 py-3 bg-purple-600 rounded-md font-semibold">Send Message</button>
        </form>
      </div>
    </main>
  )
}
