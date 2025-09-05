import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "../../app/globals.css";
import Navigation from '@/components/navigation';
import Footer from '@/components/Footer';
import { Expletus_Sans } from 'next/font/google';

const expletus = Expletus_Sans({ subsets: ['latin'] })
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale} className={expletus.className}>
      <body>
        <NextIntlClientProvider>
          <Navigation />
          <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
          <Footer />
          </NextIntlClientProvider>
      </body>
    </html>
  );
}