import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { faqs } from "@/data/homeData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="body-text mb-8">
              Find answers to commonly asked questions about admissions, examinations, results, and more.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="font-semibold text-secondary-900">Still have questions?</h4>
                <p className="text-sm text-secondary-600">
                  Contact our support team for assistance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-secondary-200 px-6 data-[state=open]:shadow-soft transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-secondary-900 hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
