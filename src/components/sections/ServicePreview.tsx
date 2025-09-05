// components/sections/ServicePreview.tsx
"use client";

import { GlareCard } from "../ui/glare-card";
import { ReactNode } from "react";
import { Briefcase, Code, Camera } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <GlareCard className="flex flex-col items-start justify-evenly p-6 rounded-2xl bg-gradient-to-b from-emerald-950 via-black to-emerald-950 hover:bg-green-900  transition-colors duration-300">
      <div className="mb-4 text-emerald-950 rounded-sm bg-white p-5">{icon}</div>
      <h3 className="text-lg font-semibold text-white text-left">{title}</h3>
      <p className="text-sm text-gray-300 mt-2 ">{description}</p>
    </GlareCard>
  );
}

export default function ServicePreview() {
  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
            
    
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          Our Services
        </h2>
        <p className="text-large max-w-3xl mx-auto">
            We combine strategic thinking with creative execution to deliver results that matter to your business.
          </p>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="services" >
          <ServiceCard
            icon={<Code size={40} />}
            title="Web-Design"
            description="UX/UI design, Webflow development, responsive design, SEO-optimized websites that convert visitors into customers."
          />
          </Link>
          <Link href="services" >
          <ServiceCard
            icon={<Briefcase size={40} />}
            title="Branding"
            description="Logo design, visual identity, brand strategy, and comprehensive brand guidelines that make you unforgettable."
          />
          </Link>
          <Link href="services" >
          <ServiceCard
            icon={<Camera size={40} />}
            title="Strategy"
            description="Digital strategy, user research, conversion optimization, and data-driven insights to grow your business."
          />
          </Link>
        </div>
      </div>
    </section>
  );
}
