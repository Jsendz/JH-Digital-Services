'use client'

import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  return (
   <div className="min-h-screen w-full relative overflow-x-hidden">
    {/* Emerald Depths Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 80%), #000000",
      }}
    />
  
    
     
   <section id="home" className="relative min-h-screen flex items-center  overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-emerald-100 to-lime-400 bg-clip-text text-transparent">
              Digital Presence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We craft exceptional digital experiences that drive growth, engage audiences, 
            and elevate your brand to new heights in the digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary text-lg px-10 py-4 group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            
          </div>

          {/* Stats */}
         
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
</div>
   
  
    
 
    
  )
}