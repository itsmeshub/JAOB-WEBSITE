import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  User,
  Bell,
  Download,
  CreditCard,
  FileText,
  Award,
  Settings,
  LogOut,
  ChevronRight,
  BookOpen,
  Calendar,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/student/dashboard", active: true },
  { icon: User, label: "Profile", href: "/student/profile", active: false },
  { icon: Bell, label: "Notifications", href: "/student/notifications", active: false },
  { icon: Download, label: "Downloads", href: "/student/downloads", active: false },
  { icon: CreditCard, label: "Payment History", href: "/student/payments", active: false },
  { icon: FileText, label: "Documents", href: "/student/documents", active: false },
  { icon: Award, label: "Results", href: "/result", active: false },
  { icon: Settings, label: "Settings", href: "/student/settings", active: false },
];

const notifications = [
  { id: 1, title: "Examination Schedule Released", date: "2024-12-12", type: "exam", read: false },
  { id: 2, title: "Fee Payment Due", date: "2024-12-10", type: "payment", read: false },
  { id: 3, title: "Study Material Updated", date: "2024-12-08", type: "academic", read: true },
];

const upcomingExams = [
  { subject: "Hindi", date: "15-03-2025", time: "10:00 AM" },
  { subject: "English", date: "17-03-2025", time: "10:00 AM" },
  { subject: "Mathematics", date: "19-03-2025", time: "10:00 AM" },
];

const recentDownloads = [
  { title: "Admit Card 2024-25", date: "2024-12-01", type: "PDF" },
  { title: "Syllabus - Mathematics", date: "2024-11-28", type: "PDF" },
  { title: "Sample Paper - Science", date: "2024-11-25", type: "PDF" },
];

export function Dashboard() {
  const [isSidebarOpen] = useState(false);

  return (
    <PageLayout breadcrumbs={[{ label: "Student Zone", href: "/student/login" }, { label: "Dashboard" }]}>
      <section className="py-8">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className={`lg:w-64 shrink-0 ${isSidebarOpen ? "block" : "hidden lg:block"}`}>
              <div className="bg-white rounded-2xl shadow-soft p-4 sticky top-24">
                <div className="flex items-center gap-3 p-3 mb-4 border-b border-secondary-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900 text-sm">Rahul Kumar</div>
                    <div className="text-xs text-secondary-500">JAOB2024001234</div>
                  </div>
                </div>
                <nav className="space-y-1">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        to={item.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          item.active
                            ? "bg-primary-50 text-primary-600"
                            : "text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-4 pt-4 border-t border-secondary-100">
                  <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-error-600 hover:bg-error-50 transition-colors w-full">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Welcome */}
              <AnimatedSection>
                <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-6 text-white mb-6">
                  <h2 className="text-xl font-bold mb-1">Welcome back, Rahul!</h2>
                  <p className="text-primary-200 text-sm">Your next exam is in 78 days. Keep studying!</p>
                </div>
              </AnimatedSection>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Attendance", value: "92%", icon: TrendingUp, color: "text-success-600 bg-success-50" },
                  { label: "Assignments", value: "8/10", icon: CheckCircle, color: "text-primary-600 bg-primary-50" },
                  { label: "Exams", value: "6", icon: Calendar, color: "text-accent-600 bg-accent-50" },
                  { label: "Downloads", value: "12", icon: Download, color: "text-warning-600 bg-warning-50" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      whileHover={{ y: -3 }}
                      className="bg-white rounded-xl p-4 shadow-soft"
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${stat.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-2xl font-bold text-secondary-900">{stat.value}</div>
                      <div className="text-xs text-secondary-500">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upcoming Exams */}
                <AnimatedSection delay={0.1}>
                  <div className="bg-white rounded-2xl shadow-soft p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-secondary-900 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary-600" />
                        Upcoming Exams
                      </h3>
                      <Link to="/admit-card" className="text-sm text-primary-600 hover:underline">View All</Link>
                    </div>
                    <div className="space-y-3">
                      {upcomingExams.map((exam, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-secondary-50">
                          <div>
                            <div className="font-medium text-secondary-900">{exam.subject}</div>
                            <div className="text-xs text-secondary-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {exam.date} at {exam.time}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-secondary-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Notifications */}
                <AnimatedSection delay={0.2}>
                  <div className="bg-white rounded-2xl shadow-soft p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-secondary-900 flex items-center gap-2">
                        <Bell className="w-5 h-5 text-accent-600" />
                        Notifications
                      </h3>
                      <Badge variant="accent" className="text-xs">{notifications.filter((n) => !n.read).length} New</Badge>
                    </div>
                    <div className="space-y-3">
                      {notifications.map((note) => (
                        <div key={note.id} className={`flex items-start gap-3 p-3 rounded-xl ${note.read ? "bg-secondary-50" : "bg-primary-50"}`}>
                          <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${note.read ? "bg-secondary-300" : "bg-primary-500"}`} />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-secondary-900">{note.title}</div>
                            <div className="text-xs text-secondary-500">{note.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Recent Downloads */}
                <AnimatedSection delay={0.3}>
                  <div className="bg-white rounded-2xl shadow-soft p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-secondary-900 flex items-center gap-2">
                        <Download className="w-5 h-5 text-success-600" />
                        Recent Downloads
                      </h3>
                      <Link to="/student/downloads" className="text-sm text-primary-600 hover:underline">View All</Link>
                    </div>
                    <div className="space-y-3">
                      {recentDownloads.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-secondary-50">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                              <FileText className="w-4 h-4 text-primary-600" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-secondary-900">{item.title}</div>
                              <div className="text-xs text-secondary-500">{item.date}</div>
                            </div>
                          </div>
                          <Badge variant="secondary" className="text-xs">{item.type}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Quick Links */}
                <AnimatedSection delay={0.4}>
                  <div className="bg-white rounded-2xl shadow-soft p-6">
                    <h3 className="font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-warning-600" />
                      Quick Links
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "View Result", href: "/result", icon: Award },
                        { label: "Admit Card", href: "/admit-card", icon: FileText },
                        { label: "Fee Payment", href: "/student/payments", icon: CreditCard },
                        { label: "Study Material", href: "/downloads/syllabus", icon: BookOpen },
                      ].map((link) => {
                        const Icon = link.icon;
                        return (
                          <Link
                            key={link.label}
                            to={link.href}
                            className="flex items-center gap-3 p-3 rounded-xl bg-secondary-50 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{link.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
