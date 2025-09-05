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
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl backdrop-blur-md bg-white/40 shadow-md transition-all duration-300 w-[90%] max-w-sm lg:max-w-none lg:w-auto ${scrolled ? 'py-1 px-4 lg:px-6' : 'py-1 px-4 lg:px-6'}`}>
      <div className="flex items-center justify-between h-14 lg:h-16 w-full lg:max-w-6xl lg:mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <div className="w-8 h-8 lg:w-12 lg:h-12">
            <Image 
              src="/logojh.png" 
              alt="Logo" 
              width={32} 
              height={32} 
              className="w-full h-full object-contain" 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 px-8">
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

        {/* Desktop Language Switcher & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          
          <Button className="bg-lime-500 text-black hover:bg-lime-600">
            Book a Call
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex-shrink-0">
          <Button variant="ghost" size="sm" className="p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden py-3 border-t border-gray-300/30">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[var(--dark-green)] font-medium transition-colors py-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Language Switcher & CTA */}
            <div className="flex flex-col items-center space-y-3 pt-3 border-t border-gray-300/30">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-sm">
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
              <Button className="bg-lime-500 text-black hover:bg-lime-600 w-full max-w-[200px] text-sm">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}