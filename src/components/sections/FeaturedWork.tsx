"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function FeaturedWork() {
  const projects = [
    {
      title: "Creative Agency ",
      category: "Web Design",
      image: "/ecco.png",
      metrics: {
        conversion: "+150%",
        engagement: "+89%",
      },
    },
    {
      title: "Creative Agency & Events",
      category: "Branding",
      image: "/larandom.png",
      metrics: {
        sales: "+85%",
        awareness: "+120%",
      },
    },
    {
      title: "Consulting Firm",
      category: "UX/UI Design",
      image: "/hilltop.png",
      metrics: {
        retention: "+95%",
        satisfaction: "4.8/5",
      },
    },
  ]

  return (
    <section className="section-padding bg-[#f8f9fa]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-emerald-950">Featured Work</h2>
          <p className="text-large max-w-3xl mx-auto">Projects that drive results</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover-lift overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/foto.jpg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1a4d3a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="btn-accent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Case Study
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3 bg-[#84cc16] text-[#1a4d3a]">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="w-4 h-4 text-[#84cc16] mr-1" />
                        <span className="font-bold text-[#1a4d3a]">{value}</span>
                      </div>
                      <span className="text-sm text-gray-500 capitalize">{key}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
