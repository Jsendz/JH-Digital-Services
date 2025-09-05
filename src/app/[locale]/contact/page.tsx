import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className=" pt-32 bg-gradient-to-br from-[var(--light-gray)] to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="heading-xl mb-6">
              Let's <span className="text-[var(--dark-green)]">Talk</span>
            </h1>
            <p className="text-large mb-8">
              Ready to transform your digital presence? Get in touch and let's discuss how we can help you achieve your
              business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding relative -z-10">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000",
          }}
        />
        
        <div className="container-custom relative z-50">
          
          <div className="grid lg:grid-cols-5 gap-12 z-50">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Website</label>
                        <Input placeholder="www.yourwebsite.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Budget Range</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-plus">$25,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Services Needed</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select primary service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-design">Web Design</SelectItem>
                          <SelectItem value="branding">Branding</SelectItem>
                          <SelectItem value="strategy">Digital Strategy</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Project Details *</label>
                      <Textarea
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        rows={6}
                      />
                    </div>

                    <Button className="bg-lime-500 w-full text-black">Send Inquiry</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Cards - 2x2 Grid (4 cards total) */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1: Email & Phone */}
                <Card className="h-fit">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Mail className="w-4 h-4 text-[var(--lime-green)] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-sm">Email</div>
                          <div className="text-gray-600 text-xs">hello@digitalagency.com</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="w-4 h-4 text-[var(--lime-green)] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-sm">Phone</div>
                          <div className="text-gray-600 text-xs">+1 (555) 123-4567</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 2: Location & Response Time */}
                <Card className="h-fit">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Visit & Response</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 text-[var(--lime-green)] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-sm">Location</div>
                          <div className="text-gray-600 text-xs">New York, NY</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-4 h-4 text-[var(--lime-green)] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-sm">Response Time</div>
                          <div className="text-gray-600 text-xs">Within 24 hours</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 3: Schedule Call */}
                <Card className="h-fit">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3">Schedule a Call</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      Book a free 30-minute strategy call.
                    </p>
                    <Button className="bg-lime-500 text-black w-full text-sm">Book Strategy Call</Button>
                  </CardContent>
                </Card>

                {/* Card 4: What Happens Next */}
                <Card className="h-fit">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Next Steps</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-xs">
                        <div className="w-4 h-4 bg-[var(--lime-green)] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-xs font-bold text-[var(--dark-green)]">1</span>
                        </div>
                        <span>We review (24h)</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <div className="w-4 h-4 bg-[var(--lime-green)] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-xs font-bold text-[var(--dark-green)]">2</span>
                        </div>
                        <span>Discovery call (30min)</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <div className="w-4 h-4 bg-[var(--lime-green)] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-xs font-bold text-[var(--dark-green)]">3</span>
                        </div>
                        <span>Custom proposal</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}