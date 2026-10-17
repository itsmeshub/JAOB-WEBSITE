import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, X, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Annual Function 2024",
    category: "Events",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "March 2024",
  },
  {
    id: 2,
    title: "Convocation Ceremony",
    category: "Events",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "February 2024",
  },
  {
    id: 3,
    title: "Science Lab",
    category: "Infrastructure",
    image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "January 2024",
  },
  {
    id: 4,
    title: "Examination Hall",
    category: "Infrastructure",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "December 2023",
  },
  {
    id: 5,
    title: "Student Achievement Awards",
    category: "Events",
    image: "https://images.pexels.com/photos/159711/books-education-school-literature-by-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "November 2023",
  },
  {
    id: 6,
    title: "Library",
    category: "Infrastructure",
    image: "https://images.pexels.com/photos/159711/books-education-school-literature-by-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "October 2023",
  },
  {
    id: 7,
    title: "Workshop on Digital Learning",
    category: "Activities",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "September 2023",
  },
  {
    id: 8,
    title: "Cultural Program",
    category: "Events",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "August 2023",
  },
  {
    id: 9,
    title: "Computer Lab",
    category: "Infrastructure",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "July 2023",
  },
];

const categories = ["All", "Events", "Infrastructure", "Activities"];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <PageLayout breadcrumbs={[{ label: "Gallery" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center mb-6 shadow-glow-accent">
              <ImageIcon className="w-8 h-8 text-primary-900" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Explore moments and memories from JAOB events, infrastructure, and activities
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-secondary-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-xl font-medium text-sm transition-all",
                  selectedCategory === category
                    ? "bg-primary-600 text-white shadow-soft"
                    : "bg-secondary-100 text-secondary-700 hover:bg-secondary-200"
                )}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all border border-secondary-100"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedImage(item)}
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-primary-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </motion.button>
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-semibold text-primary-600 mb-2">{item.category}</div>
                    <h3 className="font-semibold text-secondary-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-secondary-500">{item.date}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-secondary-700 hover:bg-white transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6 border-t border-secondary-100">
                <div className="text-sm font-semibold text-primary-600 mb-1">{selectedImage.category}</div>
                <h3 className="text-xl font-bold text-secondary-900">{selectedImage.title}</h3>
                <p className="text-secondary-500 text-sm mt-1">{selectedImage.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
