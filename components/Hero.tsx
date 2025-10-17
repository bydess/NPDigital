'use client'
import React from 'react'
import { Sparkles, ChevronRight, ExternalLink, Bot, Code, Zap, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="absolute top-20 left-10 w-4 h-4 border border-purple-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 border border-purple-500/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 border-2 border-purple-400/20 rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-purple-500/30 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>

        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 lg:col-start-1 overflow-visible">
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm">Pioneering Digital Innovation</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-2">Future-Ready</span>
            <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent pb-2">Digital Solutions</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Transforming businesses through cutting-edge web development and intelligent AI automation.
            We craft digital experiences that drive growth and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2">
              <span>Start Your Project</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="/services" className="px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 rounded-xl font-semibold transition-all duration-300 hover:bg-purple-500/10 flex items-center justify-center space-x-2">
              <span>View Our Work</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 hidden lg:block">
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              </div>

              <div className="absolute inset-4 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                <div className="absolute top-1/4 right-0 w-2 h-2 bg-purple-300 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-1/4 left-0 w-1 h-1 bg-purple-600 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              </div>

              <div className="absolute inset-8 bg-gradient-to-br from-purple-900/20 to-purple-600/10 rounded-full backdrop-blur-sm border border-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Bot className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-purple-300 font-semibold">AI Powered</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 animate-float">
              <Code className="w-6 h-6 text-purple-400" />
            </div>

            <div className="absolute -bottom-4 -right-4 bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
              <Zap className="w-6 h-6 text-purple-400" />
            </div>

            <div className="absolute top-1/2 -right-8 bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-2 animate-float" style={{ animationDelay: '2s' }}>
              <Cpu className="w-5 h-5 text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
