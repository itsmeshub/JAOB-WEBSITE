import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  Moon,
  Sun,
  ChevronDown,
  GraduationCap,
  Home,
  Info,
  FileText,
  Download,
  User,
  Phone,
  BookOpen,
  ClipboardList,
  HelpCircle,
  FileCheck,
  Landmark,
  Users,
  Target,
  Eye,
  MessageSquare,
  Wallet,
  History,
  BookMarked,
  BadgeCheck,
  ScrollText,
  FileSearch,
  FileSpreadsheet,
  Bell,
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn, isExternalUrl } from "@/lib/utils";
import { LARAVEL_APPLY_URL, LARAVEL_STUDENT_LOGIN_URL } from "@/config/externalLinks";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: "HOME",
    href: "/",
    icon: <Home className="w-4 h-4" />,
  },
  {
    label: "ABOUT",
    href: "/about",
    icon: <Info className="w-4 h-4" />,
    children: [
      { label: "About Board", href: "/about", icon: <Landmark className="w-4 h-4" /> },
      { label: "History", href: "/about/history", icon: <History className="w-4 h-4" /> },
      { label: "Aim & Objective", href: "/about/aim-objective", icon: <Target className="w-4 h-4" /> },
      { label: "Mission", href: "/about/mission", icon: <BookMarked className="w-4 h-4" /> },
      { label: "Vision", href: "/about/vision", icon: <Eye className="w-4 h-4" /> },
      { label: "Chairman's Message", href: "/about/chairman-message", icon: <MessageSquare className="w-4 h-4" /> },
      { label: "Authorities", href: "/about/authorities", icon: <Users className="w-4 h-4" /> },
    ],
  },
  {
    label: "ADMISSION",
    href: "/admission",
    icon: <FileText className="w-4 h-4" />,
    children: [
      { label: "Apply Online", href: LARAVEL_APPLY_URL, icon: <ClipboardList className="w-4 h-4" /> },
      { label: "Admission Process", href: "/admission/process", icon: <FileCheck className="w-4 h-4" /> },
      { label: "Eligibility", href: "/admission/eligibility", icon: <BadgeCheck className="w-4 h-4" /> },
      { label: "Fee Structure", href: "/admission/fee-structure", icon: <Wallet className="w-4 h-4" /> },
      { label: "Required Documents", href: "/admission/documents", icon: <ScrollText className="w-4 h-4" /> },
      { label: "Reservation", href: "/admission/reservation", icon: <Users className="w-4 h-4" /> },
      { label: "Examination", href: "/admission/examination", icon: <FileSearch className="w-4 h-4" /> },
      { label: "Helpdesk", href: "/admission/helpdesk", icon: <HelpCircle className="w-4 h-4" /> },
    ],
  },
  {
    label: "DOWNLOADS",
    href: "/downloads",
    icon: <Download className="w-4 h-4" />,
    children: [
      { label: "Prospectus", href: "/downloads/prospectus", icon: <BookOpen className="w-4 h-4" /> },
      { label: "Application Form", href: "/downloads/application-form", icon: <FileSpreadsheet className="w-4 h-4" /> },
      { label: "Certificate Forms", href: "/downloads/certificate-forms", icon: <FileCheck className="w-4 h-4" /> },
      { label: "Syllabus", href: "/downloads/syllabus", icon: <BookMarked className="w-4 h-4" /> },
      { label: "Notifications", href: "/downloads/notifications", icon: <Bell className="w-4 h-4" /> },
    ],
  },
  {
    label: "ADMINISTRATION",
    href: "/ADMINISTRATION",
    icon: <Info className="w-4 h-4" />,
    children: [
      { label: "GOVERMENT LETTER", href: "/about", icon: <Landmark className="w-4 h-4" /> },
      { label: "RULES & REGULATION", href: "/about/history", icon: <History className="w-4 h-4" /> },
    ],
  },
    {
    label: "STUDENT-ZONE",
    href: LARAVEL_STUDENT_LOGIN_URL,
    icon: <User className="w-4 h-4" />,
    children: [
      { label: "Login", href: LARAVEL_STUDENT_LOGIN_URL, icon: <User className="w-4 h-4" /> },
    ],
  },
  {
    label: "CONTACT",
    href: "/contact",
    icon: <Phone className="w-4 h-4" />,
  },
];

function LayoutDashboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Header with Logo */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-soft border-b border-secondary-200/50"
            : "bg-white"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-14 h-14 lg:w-16 lg:h-16"><img 
              src="/images/logo.png" alt="JAOB Logo"className="w-full h-full object-contain"/>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm lg:text-base font-bold text-secondary-900 leading-tight">
                  Jharkhand Academic
                </h1>
                <p className="text-xs text-secondary-500">Open Board (JAOB)</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {isExternalUrl(item.href) ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-secondary-700 hover:text-primary-600 hover:bg-secondary-50"
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )} />
                      )}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                          ? "text-primary-600 bg-primary-50"
                          : "text-secondary-700 hover:text-primary-600 hover:bg-secondary-50"
                      )}
                    >
                      {item.label}
                      {item.children && (
                        <ChevronDown className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )} />
                      )}
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-soft-lg border border-secondary-200/50 overflow-hidden z-50"
                      >
                        <div className="p-2">
                          {item.children.map((child) =>
                            isExternalUrl(child.href) ? (
                              <a
                                key={child.label}
                                href={child.href}
                                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-200 text-secondary-700 hover:bg-secondary-50 hover:text-primary-600"
                              >
                                {child.icon}
                                {child.label}
                              </a>
                            ) : (
                              <Link
                                key={child.label}
                                to={child.href}
                                className={cn(
                                  "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-200",
                                  location.pathname === child.href
                                    ? "bg-primary-50 text-primary-600"
                                    : "text-secondary-700 hover:bg-secondary-50 hover:text-primary-600"
                                )}
                              >
                                {child.icon}
                                {child.label}
                              </Link>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2.5 rounded-xl text-secondary-600 hover:bg-secondary-100 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-xl text-secondary-600 hover:bg-secondary-100 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-secondary-600 hover:bg-secondary-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-secondary-200/50"
            >
              <div className="container-custom py-4">
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                  <input
                    type="text"
                    placeholder="Search for services, notices, results..."
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-secondary-200 bg-secondary-50 text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto"
            >
              <div className="p-4 border-b border-secondary-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-secondary-900">JAOB</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-secondary-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="p-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div className="space-y-1">
                        <button
                          onClick={() =>
                            setActiveDropdown(activeDropdown === item.label ? null : item.label)
                          }
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                            activeDropdown === item.label
                              ? "bg-primary-50 text-primary-600"
                              : "text-secondary-700 hover:bg-secondary-50"
                          )}
                        >
                          <span className="flex items-center gap-3">
                            {item.icon}
                            {item.label}
                          </span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform",
                              activeDropdown === item.label && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden ml-4 border-l-2 border-primary-200"
                            >
                              {item.children.map((child) =>
                                isExternalUrl(child.href) ? (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                                  >
                                    {child.icon}
                                    {child.label}
                                  </a>
                                ) : (
                                  <Link
                                    key={child.label}
                                    to={child.href}
                                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                                  >
                                    {child.icon}
                                    {child.label}
                                  </Link>
                                )
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                          location.pathname === item.href
                            ? "bg-primary-50 text-primary-600"
                            : "text-secondary-700 hover:bg-secondary-50"
                        )}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
