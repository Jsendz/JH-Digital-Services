"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations("navigation")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    
    { href: "/services", label: t("services") },
    { href: "/portfolio", label: t("portfolio") },
    
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ]

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl backdrop-blur-md bg-white/40 shadow-md transition-all duration-300 ${scrolled ? 'py-1 px-6' : 'py-1 px-6'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            
            <div className="w-full px-2">
              <Image src="/logojh.png" alt="" width={150} height={150} className="w-full" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[var(--dark-green)] font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  EN
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/" locale="en">
                    English
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/" locale="es">
                    Español
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="btn-primary">Book a Call</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-[var(--dark-green)] font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Globe className="w-4 h-4 mr-2" />
                      EN
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/" locale="en">
                        English
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/" locale="es">
                        Español
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button className="btn-primary">Book a Call</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}