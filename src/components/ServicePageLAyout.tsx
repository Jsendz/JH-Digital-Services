import { ReactNode } from "react";

import * as motion from "motion/react-client"

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function ServicePageLayout({ title, subtitle, children }: Props) {
  return (
    
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 py-16 max-w-6xl mx-auto"
    >
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </header>
      <div>{children}</div>
    </motion.div>
  );
}
