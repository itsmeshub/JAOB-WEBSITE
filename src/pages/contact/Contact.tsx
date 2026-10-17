import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Globe,
  MessageSquare,
  Share2,
  Video,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["JAOB Headquarters", "Education Complex, Main Road", "Ranchi, Jharkhand - 834001"],
    color: "bg-primary-100 text-primary-600",
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91-1234-567-890", "+91-1234-567-891", "Toll Free: 1800-123-4567"],
    color: "bg-success-100 text-success-600",
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["info@jaob.gov.in", "admission@jaob.gov.in", "support@jaob.gov.in"],
    color: "bg-accent-100 text-accent-600",
  },
  {
    icon: Clock,
    title: "Office Timings",
    details: ["Monday - Saturday", "10:00 AM - 5:00 PM", "Sunday: Closed"],
    color: "bg-warning-100 text-warning-600",
  },
];

const faqs = [
  {
    question: "How can I contact the admission department?",
    answer: "You can contact the admission department via email at admission@jaob.gov.in or call +91-1234-567-890 during office hours.",
  },
  {
    question: "What is the response time for queries?",
    answer: "We aim to respond to all queries within 24-48 hours during working days.",
  },
  {
    question: "Can I visit the office without an appointment?",
    answer: "Yes, you can visit during office hours. However, for specific services, we recommend booking an appointment online.",
  },
  {
    question: "How do I report a technical issue with the portal?",
    answer: "For technical issues, email support@jaob.gov.in with screenshots and a detailed description of the problem.",
  },
  {
    question: "Is there a helpline for examination-related queries?",
    answer: "Yes, you can call our examination helpline at +91-1234-567-891 or email exam@jaob.gov.in.",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageLayout breadcrumbs={[{ label: "Contact Us" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              We're here to help. Reach out to us for any queries or assistance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all border border-secondary-100 h-full"
                  >
                    <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-secondary-900 mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-secondary-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Map & Form */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden h-full min-h-[400px]">
                <div className="h-full bg-secondary-200 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-100 to-secondary-200" />
                  <div className="relative z-10 text-center p-8">
                    <MapPin className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-secondary-800 mb-2">JAOB Headquarters</h3>
                    <p className="text-secondary-600 mb-4">Education Complex, Main Road<br />Ranchi, Jharkhand - 834001</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl shadow-soft-lg p-8">
                {!submitted ? (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-primary-600" />
                      </div>
                      <h2 className="text-xl font-bold text-secondary-900">Send us a Message</h2>
                    </div>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label>Full Name *</Label>
                          <Input placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                          <Label>Email *</Label>
                          <Input type="email" placeholder="Enter your email" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label>Phone</Label>
                          <Input placeholder="Enter phone number" />
                        </div>
                        <div className="space-y-2">
                          <Label>Query Type *</Label>
                          <Select>
                            <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admission">Admission</SelectItem>
                              <SelectItem value="examination">Examination</SelectItem>
                              <SelectItem value="result">Result</SelectItem>
                              <SelectItem value="certificate">Certificate</SelectItem>
                              <SelectItem value="general">General</SelectItem>
                              <SelectItem value="technical">Technical Support</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Subject *</Label>
                        <Input placeholder="Enter subject" />
                      </div>

                      <div className="space-y-2">
                        <Label>Message *</Label>
                        <Textarea placeholder="Describe your query in detail..." rows={5} />
                      </div>

                      <Button onClick={() => setSubmitted(true)} className="w-full flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-success-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-success-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-secondary-900 mb-2">Message Sent!</h2>
                    <p className="text-secondary-600 mb-6">
                      Thank you for contacting us. We'll get back to you within 24-48 hours.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="heading-2 mb-3">Connect With Us</h2>
              <p className="body-text max-w-xl mx-auto">
                Follow us on social media for the latest updates and announcements
              </p>
            </div>
          </AnimatedSection>

          <div className="flex justify-center gap-4">
            {[
              { icon: Globe, label: "Website", color: "bg-primary-600" },
              { icon: MessageSquare, label: "Messages", color: "bg-accent-600" },
              { icon: Share2, label: "Share", color: "bg-success-600" },
              { icon: Video, label: "Videos", color: "bg-error-600" },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 rounded-2xl ${social.color} flex items-center justify-center text-white shadow-soft hover:shadow-lg transition-shadow`}
                  title={social.label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="text-center mb-10">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="heading-2 mb-3">Frequently Asked Questions</h2>
              <p className="body-text">Common questions about contacting JAOB</p>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-soft border border-secondary-100"
              >
                <h3 className="font-semibold text-secondary-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-secondary-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
