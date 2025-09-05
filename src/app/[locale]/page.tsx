import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicePreview from '@/components/sections/ServicePreview';
import FeaturedWork from '@/components/sections/FeaturedWork';
import Testimonials from '@/components/sections/Testimonials';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
       <HeroSection />
      <ServicePreview />
      <FeaturedWork />
      <Testimonials />
    </div>
  );
}
