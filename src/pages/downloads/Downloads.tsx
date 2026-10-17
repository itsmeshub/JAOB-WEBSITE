import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { downloadsData } from "@/data/downloadsData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Download, FileText, Calendar, File } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All Downloads" },
  { id: "prospectus", label: "Prospectus" },
  { id: "application", label: "Application Forms" },
  { id: "certificate", label: "Certificate Forms" },
  { id: "syllabus", label: "Syllabus" },
  { id: "notification", label: "Notifications" },
];

interface DownloadItem {
  id: number;
  title: string;
  description: string;
  fileSize: string;
  fileType: string;
  date: string;
  downloadUrl: string;
  category: string;
  isNew?: boolean;
}

const allDownloads: DownloadItem[] = [
  ...downloadsData.prospectus.map((d) => ({ ...d, category: "prospectus" })),
  ...downloadsData.applicationForms.map((d) => ({ ...d, category: "application" })),
  ...downloadsData.certificateForms.map((d) => ({ ...d, category: "certificate" })),
  ...downloadsData.syllabus.map((d) => ({ ...d, category: "syllabus" })),
  ...downloadsData.notifications.map((d) => ({ ...d, category: "notification" })),
];

export function Downloads() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allDownloads.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout breadcrumbs={[{ label: "Downloads" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Downloads</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Download forms, prospectus, syllabus, and official notifications
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-5xl">
          {/* Search & Filter */}
          <AnimatedSection className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                <Input
                  placeholder="Search downloads..."
                  className="pl-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary-600 text-white shadow-glow"
                      : "bg-secondary-100 text-secondary-600 hover:bg-secondary-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Downloads List */}
          <div className="space-y-3">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-soft hover:shadow-soft-lg transition-all border border-secondary-100 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors truncate">
                        {item.title}
                      </h3>
                      {"isNew" in item && item.isNew && (
                        <Badge variant="accent" className="text-xs">New</Badge>
                      )}
                    </div>
                    <p className="text-sm text-secondary-600 mb-2">{item.description}</p>
                    <div className="flex items-center gap-4 text-xs text-secondary-500">
                      <span className="flex items-center gap-1">
                        <File className="w-3.5 h-3.5" />
                        {item.fileType} | {item.fileSize}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    </div>
                  </div>
                  <a
                    href={item.downloadUrl}
                    className="shrink-0 w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-secondary-300 mx-auto mb-4" />
              <p className="text-secondary-500">No downloads found matching your criteria</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
