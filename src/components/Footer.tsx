import Link from 'next/link';
import { Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-black to-emerald-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">JH Digital</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Strategic web design & branding for growth-focused businesses. 
              We craft digital experiences that convert visitors into customers.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:hello@jhdigital.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
                <span>hello@jhdigital.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} JH Digital. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://instagram.com/jhdigital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:hello@jhdigital.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 