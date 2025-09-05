"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Palette, Code, TrendingUp, Camera, Search, Megaphone } from "lucide-react"

export default function ServicesPage() {
  const t = useTranslations()

  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description:
        "UX/UI design, Webflow or WordPress development, responsive design, SEO-optimized websites that convert visitors into customers.",
      features: [
        "Custom UX/UI Design",
        "Webflow Development",
        "WordPress Development",
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "CMS Integration",
        "E-commerce Solutions",
      ],
    },
    {
      icon: Palette,
      title: "Branding & Visual Identity",
      description:
        "Logo design, visual identity, brand strategy, and comprehensive brand guidelines that make you unforgettable.",
      features: [
        "Logo Design",
        "Visual Identity System",
        "Brand Strategy",
        "Brand Guidelines",
        "Color Palette",
        "Typography Selection",
        "Brand Voice & Messaging",
        "Brand Applications",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Strategy",
      description:
        "Digital strategy, user research, conversion optimization, and data-driven insights to grow your business.",
      features: [
        "Digital Strategy Planning",
        "User Research & Testing",
        "Conversion Optimization",
        "Analytics & Reporting",
        "Competitor Analysis",
        "Growth Strategy",
        "Performance Monitoring",
        "ROI Optimization",
      ],
    },
  ]

  const addOns = [
    {
      icon: Search,
      title: "SEO Copywriting",
      description: "Strategic content that ranks and converts",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional brand photography and product shots",
    },
    {
      icon: Megaphone,
      title: "Social Branding",
      description: "Social media templates and brand consistency",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[var(--light-gray)] to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="heading-xl mb-6">
              Services That Drive <span className="text-[var(--dark-green)]">Real Results</span>
            </h1>
            <p className="text-large mb-8">
              We combine strategic thinking with creative execution to build brands and websites that convert. Every
              project is tailored to your unique goals and audience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding relative bg-black ">
        <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000",
      }}
    />
  
        <div className="container-custom z-10 relative">
          <div className="grid lg:grid-cols-1 gap-16">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-[var(--lime-green)] rounded-lg flex items-center justify-center mr-4">
                          <service.icon className="w-8 h-8 text-[var(--dark-green)]" />
                        </div>
                        <CardTitle className="heading-md">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-large mb-8">{service.description}</CardDescription>
                      <Button className="btn-primary">Let's Build Your {service.title.split(" ")[0]}</Button>
                    </div>
                    <div className="p-8 lg:p-12 bg-[var(--light-gray)]">
                      <h4 className="text-xl font-semibold mb-6">What's Included:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="w-5 h-5 text-[var(--lime-green)] mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="section-padding bg-[var(--light-gray)]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Optional Add-ons</h2>
            <p className="text-large max-w-3xl mx-auto">
              Enhance your project with these specialized services to maximize your brand's impact and reach.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-[var(--dark-green)] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <addon.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{addon.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{addon.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--dark-green)] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-large mb-8 text-gray-200 max-w-3xl mx-auto">
            Let's discuss your project and create a custom strategy that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-accent">Book a Free Strategy Call</Button>
            <Button className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--dark-green)]">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
