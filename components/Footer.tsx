import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/10 mt-24 py-12 text-center text-gray-400">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" target="_blank" rel="noreferrer"><Github className="w-5 h-5 hover:text-white" /></a>
        <a href="#" target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5 hover:text-white" /></a>
        <a href="#" target="_blank" rel="noreferrer"><Twitter className="w-5 h-5 hover:text-white" /></a>
      </div>
      <p>© {new Date().getFullYear()} Northern Peak Digital. All rights reserved.</p>
    </footer>
  )
}
