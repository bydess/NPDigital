import Link from 'next/link'
import { Code, Bot, ChevronRight } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 mb-6">
            <span className="text-sm font-medium">Our Core Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Transforming Ideas Into
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We specialize in two core areas that drive modern business success: cutting-edge web development and intelligent automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group relative bg-gradient-to-br from-slate-800/40 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110">
              <Code className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-purple-100 transition-colors">Website Development</h3>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Crafting modern, responsive, and visually striking websites for businesses. We build custom web solutions that not only look exceptional but deliver outstanding performance and user experience.
            </p>

            <ul className="space-y-3 text-gray-400 mb-8">
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Modern Frameworks & Technologies</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Responsive & Mobile-First Design</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Performance Optimized Solutions</li>
            </ul>

            <Link href="/services" className="group/btn flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold transition-all duration-300">
              <span>Learn More</span>
              <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="group relative bg-gradient-to-br from-slate-800/40 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110">
              <Bot className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-purple-100 transition-colors">AI Automations</h3>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Creating intelligent automation solutions to streamline workflows and improve efficiency. We harness the power of AI to eliminate repetitive tasks and unlock new possibilities for your business.
            </p>

            <ul className="space-y-3 text-gray-400 mb-8">
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Workflow Automation & Integration</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>AI-Powered Business Intelligence</li>
              <li className="flex items-center"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>Custom AI Solutions & Chatbots</li>
            </ul>

            <Link href="/ai-automation" className="group/btn flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold transition-all duration-300">
              <span>Learn More</span>
              <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
