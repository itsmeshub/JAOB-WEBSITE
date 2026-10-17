import { ReactNode } from "react";
import { motion } from "framer-motion";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

interface PageLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  showBreadcrumb?: boolean;
}

export function PageLayout({ children, breadcrumbs, showBreadcrumb = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      {showBreadcrumb && breadcrumbs && <Breadcrumb items={breadcrumbs} />}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
