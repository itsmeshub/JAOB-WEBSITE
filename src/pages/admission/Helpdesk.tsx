import { useState, useEffect, useRef } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { helpdeskData } from "@/data/admissionData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  Clock,
  HelpCircle,
  Ticket,
  User,
  FileText,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Upload,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Loader2,
  XCircle,
  FileUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = [
  "Admission",
  "Examination",
  "Hall Ticket",
  "Result",
  "Marksheet",
  "Migration Certificate",
  "Transfer Certificate",
  "Course Change",
  "Fee Payment",
  "Student Login",
  "Technical Issue",
  "Complaint",
  "Other",
];

const courses = [
  "Secondary (Class 10)",
  "Senior Secondary (Class 12)",
  "Vocational",
  "Open Schooling",
  "Other",
];

type Priority = "low" | "medium" | "high" | null;

interface FormData {
  fullName: string;
  rollNumber: string;
  email: string;
  mobile: string;
  priority: Priority;
  category: string;
  course: string;
  subject: string;
  description: string;
  captcha: string;
  attachment: File | null;
}

interface FormErrors {
  fullName?: string;
  rollNumber?: string;
  email?: string;
  mobile?: string;
  priority?: string;
  category?: string;
  course?: string;
  subject?: string;
  description?: string;
  captcha?: string;
  attachment?: string;
}

export function Helpdesk() {
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    rollNumber: "",
    email: "",
    mobile: "",
    priority: null,
    category: "",
    course: "",
    subject: "",
    description: "",
    captcha: "",
    attachment: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const inputRef = useRef<HTMLInputElement>(null);

  // Generate random CAPTCHA
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setCaptchaInput("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = "Roll/Application number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.priority) {
      newErrors.priority = "Please select issue priority";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 20) {
      newErrors.description = "Description must be at least 20 characters";
    }

    if (!captchaInput.trim()) {
      newErrors.captcha = "Please enter the CAPTCHA";
    } else if (captchaInput.toUpperCase() !== captchaText) {
      newErrors.captcha = "CAPTCHA does not match";
    }

    if (formData.attachment) {
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (!allowedTypes.includes(formData.attachment.type)) {
        newErrors.attachment = "Only JPG, PNG, or PDF files are allowed";
      }
      if (formData.attachment.size > 5 * 1024 * 1024) {
        newErrors.attachment = "File size must be less than 5 MB";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const generatedTicketId = `JAOB-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 999999)).padStart(6, "0")}`;
    setTicketId(generatedTicketId);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      rollNumber: "",
      email: "",
      mobile: "",
      priority: null,
      category: "",
      course: "",
      subject: "",
      description: "",
      captcha: "",
      attachment: null,
    });
    setErrors({});
    generateCaptcha();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData((prev) => ({ ...prev, attachment: file }));
      setErrors((prev) => ({ ...prev, attachment: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, attachment: e.target.files![0] }));
      setErrors((prev) => ({ ...prev, attachment: undefined }));
    }
  };

  return (
    <PageLayout breadcrumbs={[{ label: "Admission", href: "/admission" }, { label: "Helpdesk" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Admission Helpdesk</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              We're here to help you with your admission queries
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {/* Phone Contacts */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-soft-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <h2 className="text-lg font-bold text-secondary-900">Phone Support</h2>
                </div>
                <div className="space-y-4">
                  {helpdeskData.contacts.map((contact) => (
                    <div key={contact.type} className="flex items-center justify-between p-3 rounded-xl bg-secondary-50">
                      <div>
                        <div className="font-medium text-secondary-900 text-sm">{contact.type}</div>
                        <div className="text-xs text-secondary-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {contact.timing}
                        </div>
                      </div>
                      <a href={`tel:${contact.number}`} className="text-primary-600 font-semibold text-sm hover:underline">
                        {contact.number}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Email Contacts */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl shadow-soft-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-600" />
                  </div>
                  <h2 className="text-lg font-bold text-secondary-900">Email Support</h2>
                </div>
                <div className="space-y-4">
                  {helpdeskData.emails.map((email) => (
                    <div key={email.purpose} className="flex items-center justify-between p-3 rounded-xl bg-secondary-50">
                      <div className="font-medium text-secondary-900 text-sm">{email.purpose}</div>
                      <a href={`mailto:${email.email}`} className="text-accent-600 font-semibold text-sm hover:underline">
                        {email.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* FAQs */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl shadow-soft-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-success-100 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-success-600" />
                </div>
                <h2 className="text-xl font-bold text-secondary-900">Frequently Asked Questions</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {helpdeskData.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border border-secondary-200 rounded-xl px-6 data-[state=open]:shadow-soft transition-shadow"
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
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Raise Support Ticket Section */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 to-primary-50/30">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                  <Ticket className="w-4 h-4" />
                  <span>Support Center</span>
                </div>
                <h2 className="heading-2 mb-3">Raise a Support Ticket</h2>
                <p className="text-secondary-600 max-w-xl mx-auto">
                  Need assistance? Submit your issue below and our support team will respond within 4 working hours.
                </p>
              </div>

              {/* Info Banner */}
              <div className="mb-8 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-5 border border-primary-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-primary-700 font-medium">
                    Response Time: Our support team typically responds within 4 working hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {!isSuccess ? (
            <AnimatedSection delay={0.1}>
              <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-soft-lg border border-secondary-100">
                  {/* Issue Priority */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-secondary-900 mb-3">
                      Issue Priority <span className="text-error-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: "low", label: "Low", color: "success", icon: "🟢" },
                        { value: "medium", label: "Medium", color: "warning", icon: "🟡" },
                        { value: "high", label: "High", color: "error", icon: "🔴" },
                      ].map((priority) => (
                        <motion.button
                          key={priority.value}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, priority: priority.value as Priority }));
                            setErrors((prev) => ({ ...prev, priority: undefined }));
                          }}
                          className={cn(
                            "relative p-4 rounded-xl border-2 transition-all text-center",
                            formData.priority === priority.value
                              ? priority.color === "success"
                                ? "border-success-500 bg-success-50"
                                : priority.color === "warning"
                                ? "border-warning-500 bg-warning-50"
                                : "border-error-500 bg-error-50"
                              : "border-secondary-200 bg-white hover:border-secondary-300"
                          )}
                        >
                          <span className="text-lg mb-1 block">{priority.icon}</span>
                          <span
                            className={cn(
                              "font-semibold text-sm",
                              formData.priority === priority.value
                                ? priority.color === "success"
                                  ? "text-success-700"
                                  : priority.color === "warning"
                                  ? "text-warning-700"
                                  : "text-error-700"
                                : "text-secondary-700"
                            )}
                          >
                            {priority.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                    {errors.priority && (
                      <p className="text-error-600 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.priority}
                      </p>
                    )}
                  </div>

                  {/* Form Fields - Two Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-secondary-900 mb-2">
                        Full Name <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, fullName: e.target.value }));
                            setErrors((prev) => ({ ...prev, fullName: undefined }));
                          }}
                          placeholder="Enter your full name"
                          className={cn(
                            "w-full pl-12 pr-4 py-3 rounded-xl border bg-secondary-50 text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400",
                            errors.fullName ? "border-error-300" : "border-secondary-200"
                          )}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-error-600 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Roll / Application Number */}
                    <div>
                      <label className="block text-sm font-semibold text-secondary-900 mb-2">
                        Roll / Application Number <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                        <input
                          type="text"
                          value={formData.rollNumber}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, rollNumber: e.target.value }));
                            setErrors((prev) => ({ ...prev, rollNumber: undefined }));
                          }}
                          placeholder="Enter your roll/application number"
                          className={cn(
                            "w-full pl-12 pr-4 py-3 rounded-xl border bg-secondary-50 text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400",
                            errors.rollNumber ? "border-error-300" : "border-secondary-200"
                          )}
                        />
                      </div>
                      {errors.rollNumber && (
                        <p className="text-error-600 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.rollNumber}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-sm font-semibold text-secondary-900 mb-2">
                        Email Address <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, email: e.target.value }));
                            setErrors((prev) => ({ ...prev, email: undefined }));
                          }}
                          placeholder="Enter your email address"
                          className={cn(
                            "w-full pl-12 pr-4 py-3 rounded-xl border bg-secondary-50 text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400",
                            errors.email ? "border-error-300" : "border-secondary-200"
                          )}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-error-600 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-sm font-semibold text-secondary-900 mb-2">
                        Mobile Number <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                        <input
                          type="tel"
                          value={formData.mobile}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, mobile: e.target.value }));
                            setErrors((prev) => ({ ...prev, mobile: undefined }));
                          }}
                          placeholder="Enter 10-digit mobile number"
                          maxLength={10}
                          className={cn(
                            "w-full pl-12 pr-4 py-3 rounded-xl border bg-secondary-50 text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400",
                            errors.mobile ? "border-error-300" : "border-secondary-200"
                          )}
                        />
                      </div>
                      {errors.mobile && (
                        <p className="text-error-600 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Category and Course Dropdowns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Category */}
                    <div>
                      <label className="block text-sm font-semibold text-secondary-900 mb-2">
                        Category <span className="text-error-500">*</span>
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, category: e.target.value }));
                          setErrors((prev) => ({ ...prev, category: undefined }));
                        }}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border bg-secondary-50 text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 appearance-none cursor-pointer",
                          errors.category ? "border-error-300" : "border-secondary-200"
                        )}
                      >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      {errors.category && (
                        <p className="text-error-600 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.category}
                        </p>
                      )}
                    </div>

                    {/* Course */}
                    <div>
                      <label className="block text-sm font-semibold text-secondary-900 mb-2">
                        Course <span className="text-error-500">*</span>
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, course: e.target.value }));
                          setErrors((prev) => ({ ...prev, course: undefined }));
                        }}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border bg-secondary-50 text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 appearance-none cursor-pointer",
                          errors.course ? "border-error-300" : "border-secondary-200"
                        )}
                      >
                        <option value="">Select a course</option>
                        {courses.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                      {errors.course && (
                        <p className="text-error-600 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.course}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-secondary-900 mb-2">
                      Subject <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, subject: e.target.value }));
                        setErrors((prev) => ({ ...prev, subject: undefined }));
                      }}
                      placeholder="e.g., Unable to download Admit Card"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border bg-secondary-50 text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400",
                        errors.subject ? "border-error-300" : "border-secondary-200"
                      )}
                    />
                    {errors.subject && (
                      <p className="text-error-600 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-secondary-900 mb-2">
                      Description <span className="text-error-500">*</span>
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => {
                        setFormData((prev) => ({ ...prev, description: e.target.value }));
                        setErrors((prev) => ({ ...prev, description: undefined }));
                      }}
                      placeholder="Please describe your issue in detail so we can help you faster..."
                      rows={5}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border bg-secondary-50 text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 resize-none",
                        errors.description ? "border-error-300" : "border-secondary-200"
                      )}
                    />
                    {errors.description && (
                      <p className="text-error-600 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.description}
                      </p>
                    )}
                  </div>

                  {/* Attachment Upload */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-secondary-900 mb-2">
                      Attachment (Optional)
                    </label>
                    <div
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                      className={cn(
                        "relative border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer",
                        dragActive
                          ? "border-primary-500 bg-primary-50"
                          : "border-secondary-300 bg-secondary-50 hover:border-primary-400"
                      )}
                      onClick={() => inputRef.current?.click()}
                    >
                      <input
                        ref={inputRef}
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <motion.div
                        animate={dragActive ? { scale: 1.05 } : { scale: 1 }}
                        className="flex flex-col items-center"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-3">
                          <FileUp className="w-6 h-6 text-primary-600" />
                        </div>
                        <p className="text-secondary-700 font-medium mb-1">
                          {formData.attachment ? formData.attachment.name : "Drag & drop file here or click to browse"}
                        </p>
                        <p className="text-secondary-500 text-sm">
                          JPG, PNG or PDF (Max 5 MB)
                        </p>
                      </motion.div>
                    </div>
                    {errors.attachment && (
                      <p className="text-error-600 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.attachment}
                      </p>
                    )}
                  </div>

                  {/* CAPTCHA */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-secondary-900 mb-2">
                      CAPTCHA <span className="text-error-500">*</span>
                    </label>
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="relative bg-secondary-100 rounded-lg px-6 py-3 font-mono text-xl tracking-widest text-secondary-800 select-none">
                        <span className="font-bold">{captchaText}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                      </div>
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary-100 hover:bg-secondary-200 text-secondary-700 transition-colors"
                      >
                        <RefreshCw className="w-4 h-4" />
                        Refresh
                      </button>
                    </div>
                    <input
                      type="text"
                      value={captchaInput}
                      onChange={(e) => {
                        setCaptchaInput(e.target.value);
                        setErrors((prev) => ({ ...prev, captcha: undefined }));
                      }}
                      placeholder="Enter the CAPTCHA above"
                      className={cn(
                        "mt-3 w-full md:w-64 px-4 py-3 rounded-xl border bg-secondary-50 text-secondary-900 uppercase tracking-wider placeholder:normal-case placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400",
                        errors.captcha ? "border-error-300" : "border-secondary-200"
                      )}
                    />
                    {errors.captcha && (
                      <p className="text-error-600 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.captcha}
                      </p>
                    )}
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={handleClearForm}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary-100 text-secondary-700 font-semibold hover:bg-secondary-200 transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Clear Form
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                      className={cn(
                        "flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all",
                        isSubmitting
                          ? "bg-primary-400 cursor-not-allowed"
                          : "bg-primary-600 hover:bg-primary-700 shadow-soft hover:shadow-glow"
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Ticket className="w-5 h-5" />
                          Submit Ticket
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              {/* Success Screen */}
              <div className="max-w-2xl mx-auto">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-soft-lg border border-success-200 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-success-500 to-success-600 flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-secondary-900 mb-4">Ticket Submitted Successfully!</h2>
                  <div className="bg-secondary-50 rounded-xl p-4 mb-6">
                    <p className="text-secondary-600 text-sm mb-2">Ticket ID</p>
                    <p className="text-2xl font-mono font-bold text-primary-600">{ticketId}</p>
                  </div>
                  <p className="text-secondary-700 mb-6">
                    Our support team will contact you within <strong>4 working hours</strong>.
                    <br />
                    Confirmation has been sent through Email and SMS.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsSuccess(false);
                      handleClearForm();
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 shadow-soft transition-all"
                  >
                    Submit Another Ticket
                  </motion.button>
                </motion.div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
