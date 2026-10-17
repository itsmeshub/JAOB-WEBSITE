import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, BookOpen, MapPin } from "lucide-react";
import { aboutBoard } from "@/data/homeData";

export function AboutBoard() {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src={aboutBoard.image}
                alt="JAOB Campus"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/60 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-4 lg:right-8 bg-white rounded-2xl shadow-soft-lg p-6 max-w-xs"
            >
              <div className="grid grid-cols-2 gap-4">
                {aboutBoard.highlights.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                    <div className="text-xs text-secondary-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="heading-2 mb-4">{aboutBoard.title}</h2>
            <p className="body-text mb-6 leading-relaxed">{aboutBoard.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">Since 2008</div>
                  <div className="text-xs text-secondary-500">16+ Years</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-success-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-success-600" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">50,000+</div>
                  <div className="text-xs text-secondary-500">Students</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">10th & 12th</div>
                  <div className="text-xs text-secondary-500">Programs</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-warning-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-warning-600" />
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">03 Districts</div>
                  <div className="text-xs text-secondary-500">Coverage</div>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-glow"
            >
              Know More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
