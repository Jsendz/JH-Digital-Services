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
      <section className="section-padding bg-gradient-to-br from-[var(--light-gray)] to-white">
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
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

                    <Button className="btn-primary w-full">Send Inquiry</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-[var(--lime-green)] mr-3" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-gray-600">hello@digitalagency.com</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-[var(--lime-green)] mr-3" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-gray-600">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-[var(--lime-green)] mr-3" />
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-gray-600">New York, NY</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-[var(--lime-green)] mr-3" />
                      <div>
                        <div className="font-medium">Response Time</div>
                        <div className="text-gray-600">Within 24 hours</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Prefer to Schedule a Call?</h3>
                  <p className="text-gray-600 mb-6">
                    Book a free 30-minute strategy call to discuss your project in detail.
                  </p>
                  <Button className="btn-accent w-full">Book Strategy Call</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">What Happens Next?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[var(--lime-green)] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-[var(--dark-green)]">1</span>
                      </div>
                      <div>
                        <div className="font-medium">We review your inquiry</div>
                        <div className="text-gray-600">Within 24 hours</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[var(--lime-green)] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-[var(--dark-green)]">2</span>
                      </div>
                      <div>
                        <div className="font-medium">Discovery call</div>
                        <div className="text-gray-600">30-minute strategy session</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-[var(--lime-green)] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-xs font-bold text-[var(--dark-green)]">3</span>
                      </div>
                      <div>
                        <div className="font-medium">Custom proposal</div>
                        <div className="text-gray-600">Tailored to your needs</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
