import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Coffee } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const team = [
    {
      name: "Alex Thompson",
      role: "Creative Director & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "10+ years in digital design with a passion for creating brands that make a difference.",
    },
    {
      name: "Sarah Kim",
      role: "Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack developer specializing in modern web technologies and performance optimization.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Brand Strategist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Strategic thinker who helps brands find their unique voice and market position.",
    },
  ]

  const tools = ["Webflow", "Figma", "Adobe Creative Suite", "Notion", "Slack", "Google Analytics"]

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every decision we make is backed by data and focused on achieving your business goals.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "We work as an extension of your team, ensuring transparent communication throughout.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to delivering work that exceeds expectations and drives real impact.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--light-gray)] to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="heading-xl mb-6">
              We're a <span className="text-[var(--dark-green)]">Strategic Creative Studio</span>
            </h1>
            <p className="text-large mb-8">
              Founded in 2020, we've helped over 100 businesses transform their digital presence and achieve measurable
              growth through strategic design and development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="heading-lg mb-6">Our Mission</h2>
              <p className="text-large mb-6">
                We believe great design should drive business results. That's why we combine creative excellence with
                strategic thinking to build brands and websites that don't just look good—they perform.
              </p>
              <p className="text-base text-gray-600">
                Every project starts with understanding your unique challenges and goals. We then craft custom solutions
                that resonate with your audience and drive measurable growth.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Our team at work"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[var(--lime-green)] rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-[var(--dark-green)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* Tools & Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Tools & Process</h2>
              <p className="text-large mb-8">
                We use industry-leading tools and follow proven methodologies to ensure consistent, high-quality results
                for every project.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {tools.map((tool) => (
                  <Badge key={tool} variant="outline" className="text-sm py-2 px-4">
                    {tool}
                  </Badge>
                ))}
              </div>
              <Button className="btn-primary">View Our Process</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Coffee className="w-8 h-8 text-[var(--lime-green)] mb-3" />
                  <h4 className="font-semibold mb-2">Discovery</h4>
                  <p className="text-sm text-gray-600">Understanding your goals and challenges</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Target className="w-8 h-8 text-[var(--lime-green)] mb-3" />
                  <h4 className="font-semibold mb-2">Strategy</h4>
                  <p className="text-sm text-gray-600">Developing the roadmap to success</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Users className="w-8 h-8 text-[var(--lime-green)] mb-3" />
                  <h4 className="font-semibold mb-2">Design</h4>
                  <p className="text-sm text-gray-600">Creating beautiful, functional solutions</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Award className="w-8 h-8 text-[var(--lime-green)] mb-3" />
                  <h4 className="font-semibold mb-2">Launch</h4>
                  <p className="text-sm text-gray-600">Delivering results that drive growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--dark-green)] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Work Together?</h2>
          <p className="text-large mb-8 text-gray-200 max-w-3xl mx-auto">
            Let's discuss your project and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-accent">Start a Project</Button>
            <Button className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--dark-green)]">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
