import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "TechFlow SaaS Platform",
      category: "Web Design",
      industry: "Technology",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete redesign of a B2B SaaS platform focusing on user experience and conversion optimization.",
      metrics: {
        conversion: "+150%",
        engagement: "+89%",
        revenue: "+200%",
      },
      tags: ["UX/UI", "Webflow", "SaaS"],
    },
    {
      id: 2,
      title: "GreenLeaf Organic Brand",
      category: "Branding",
      industry: "Food & Beverage",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete brand identity for an organic food company, from logo to packaging design.",
      metrics: {
        brandAwareness: "+120%",
        sales: "+85%",
        marketShare: "+45%",
      },
      tags: ["Brand Identity", "Packaging", "Strategy"],
    },
    {
      id: 3,
      title: "FinanceHub Web App",
      category: "Web Design",
      industry: "Finance",
      image: "/placeholder.svg?height=400&width=600",
      description: "Modern financial dashboard with complex data visualization and user-friendly interface.",
      metrics: {
        userRetention: "+95%",
        taskCompletion: "+110%",
        satisfaction: "4.8/5",
      },
      tags: ["Web App", "Dashboard", "Finance"],
    },
    {
      id: 4,
      title: "Wellness Studio Rebrand",
      category: "Branding",
      industry: "Health & Wellness",
      image: "/placeholder.svg?height=400&width=600",
      description: "Sophisticated rebrand for a luxury wellness studio including digital and print materials.",
      metrics: {
        bookings: "+75%",
        brandRecognition: "+130%",
        customerLoyalty: "+60%",
      },
      tags: ["Rebrand", "Luxury", "Wellness"],
    },
    {
      id: 5,
      title: "EduTech Learning Platform",
      category: "Web Design",
      industry: "Education",
      image: "/placeholder.svg?height=400&width=600",
      description: "Interactive learning platform with gamification elements and progress tracking.",
      metrics: {
        engagement: "+180%",
        completion: "+145%",
        retention: "+90%",
      },
      tags: ["EdTech", "UX/UI", "Interactive"],
    },
    {
      id: 6,
      title: "Artisan Coffee Co.",
      category: "Branding",
      industry: "Food & Beverage",
      image: "/placeholder.svg?height=400&width=600",
      description: "Artisanal coffee brand with focus on sustainability and premium positioning.",
      metrics: {
        premiumSales: "+160%",
        brandLoyalty: "+85%",
        marketExpansion: "3 new cities",
      },
      tags: ["Coffee", "Sustainable", "Premium"],
    },
  ]

  const categories = ["All", "Web Design", "Branding", "Strategy"]
  const industries = ["All", "Technology", "Food & Beverage", "Finance", "Health & Wellness", "Education"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--light-gray)] to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="heading-xl mb-6">
              Our <span className="text-[var(--dark-green)]">Portfolio</span>
            </h1>
            <p className="text-large mb-8">
              Explore our featured projects and see how we've helped businesses transform their digital presence and
              achieve measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">Filter by Service:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className="hover:bg-[var(--dark-green)] hover:text-white bg-transparent"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Filter by Industry:</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Button
                    key={industry}
                    variant="outline"
                    className="hover:bg-[var(--lime-green)] hover:text-[var(--dark-green)] bg-transparent"
                  >
                    {industry}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover-lift overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[var(--dark-green)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="btn-accent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Case Study
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-[var(--lime-green)] text-[var(--dark-green)]">
                      {project.category}
                    </Badge>
                    <Badge variant="outline">{project.industry}</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-3 h-3 text-[var(--lime-green)] mr-1" />
                          <span className="text-sm font-bold text-[var(--dark-green)]">{value}</span>
                        </div>
                        <span className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--dark-green)] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-large mb-8 text-gray-200 max-w-3xl mx-auto">
            Let's create something amazing together. Book a free strategy call to discuss your project.
          </p>
          <Button className="btn-accent">Start Your Project</Button>
        </div>
      </section>
    </div>
  )
}
