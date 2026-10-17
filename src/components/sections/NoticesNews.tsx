import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, FileText, Bell, Newspaper } from "lucide-react";
import { latestNotices, latestNews } from "@/data/homeData";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function NoticesNews() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <Tabs defaultValue="notices" className="w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-1">Latest Updates</h2>
              <p className="body-text">Stay informed with the latest announcements</p>
            </motion.div>
            <TabsList className="bg-secondary-100">
              <TabsTrigger value="notices" className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Notices
              </TabsTrigger>
              <TabsTrigger value="news" className="flex items-center gap-2">
                <Newspaper className="w-4 h-4" />
                News
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="notices" className="mt-0">
            <div className="space-y-3">
              {latestNotices.map((notice, index) => (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={notice.link}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary-50 hover:bg-primary-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="default" className="text-xs">
                          {notice.category}
                        </Badge>
                        {notice.isNew && (
                          <Badge variant="accent" className="text-xs">
                            New
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-medium text-secondary-900 group-hover:text-primary-600 transition-colors truncate">
                        {notice.title}
                      </h3>
                      <div className="flex items-center gap-1 text-secondary-500 text-sm mt-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {notice.date}
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-secondary-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                to="/downloads/notifications"
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:underline"
              >
                View All Notices
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="news" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to="#" className="block">
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                          {news.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-secondary-500 text-sm mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {news.date}
                    </div>
                    <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-secondary-600 line-clamp-2">{news.excerpt}</p>
                  </Link>
                </motion.article>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
