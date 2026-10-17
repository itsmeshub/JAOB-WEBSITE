import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle, Upload, User, BookOpen, CreditCard, FileCheck } from "lucide-react";

const steps = [
  { id: 1, title: "Personal Details", icon: User },
  { id: 2, title: "Academic Details", icon: BookOpen },
  { id: 3, title: "Documents", icon: Upload },
  { id: 4, title: "Payment", icon: CreditCard },
  { id: 5, title: "Review", icon: FileCheck },
];

export function ApplyOnline() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    course: "",
    stream: "",
    lastQualification: "",
    lastSchool: "",
    category: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <PageLayout breadcrumbs={[{ label: "Admission", href: "/admission" }, { label: "Apply Online" }]}>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Online Admission Application</h1>
            <p className="text-primary-200 max-w-2xl">
              Fill in the details below to apply for admission. All fields marked with * are mandatory.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="container-custom max-w-4xl">
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;
                return (
                  <div key={step.id} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-primary-600 text-white shadow-glow"
                            : isCompleted
                            ? "bg-success-500 text-white"
                            : "bg-secondary-100 text-secondary-400"
                        }`}
                      >
                        {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                      </div>
                      <span
                        className={`text-xs mt-2 font-medium hidden sm:block ${
                          isActive ? "text-primary-600" : isCompleted ? "text-success-600" : "text-secondary-400"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`flex-1 h-0.5 mx-2 ${
                          isCompleted ? "bg-success-500" : "bg-secondary-200"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-soft-lg p-6 sm:p-8"
            >
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Personal Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Full Name *</Label>
                      <Input placeholder="Enter your full name" value={formData.fullName} onChange={(e) => updateField("fullName", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Father's Name *</Label>
                      <Input placeholder="Enter father's name" value={formData.fatherName} onChange={(e) => updateField("fatherName", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Mother's Name *</Label>
                      <Input placeholder="Enter mother's name" value={formData.motherName} onChange={(e) => updateField("motherName", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Date of Birth *</Label>
                      <Input type="date" value={formData.dob} onChange={(e) => updateField("dob", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Gender *</Label>
                      <Select value={formData.gender} onValueChange={(value) => updateField("gender", value)}>
                        <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => updateField("category", value)}>
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="sc">SC</SelectItem>
                          <SelectItem value="st">ST</SelectItem>
                          <SelectItem value="obc">OBC</SelectItem>
                          <SelectItem value="ews">EWS</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Email *</Label>
                      <Input type="email" placeholder="Enter email address" value={formData.email} onChange={(e) => updateField("email", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Mobile Number *</Label>
                      <Input placeholder="Enter 10-digit mobile number" value={formData.mobile} onChange={(e) => updateField("mobile", e.target.value)} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Address *</Label>
                    <Input placeholder="Enter your full address" value={formData.address} onChange={(e) => updateField("address", e.target.value)} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label>City *</Label>
                      <Input placeholder="City" value={formData.city} onChange={(e) => updateField("city", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>State *</Label>
                      <Input placeholder="State" value={formData.state} onChange={(e) => updateField("state", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Pincode *</Label>
                      <Input placeholder="Pincode" value={formData.pincode} onChange={(e) => updateField("pincode", e.target.value)} />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Academic Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Course *</Label>
                      <Select value={formData.course} onValueChange={(value) => updateField("course", value)}>
                        <SelectTrigger><SelectValue placeholder="Select course" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="secondary">Secondary (Class 10)</SelectItem>
                          <SelectItem value="senior-secondary">Senior Secondary (Class 12)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Stream (for Class 12) *</Label>
                      <Select value={formData.stream} onValueChange={(value) => updateField("stream", value)}>
                        <SelectTrigger><SelectValue placeholder="Select stream" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="commerce">Commerce</SelectItem>
                          <SelectItem value="arts">Arts</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Last Qualification *</Label>
                      <Input placeholder="e.g., Class 9 / Class 10" value={formData.lastQualification} onChange={(e) => updateField("lastQualification", e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Last School/Institution *</Label>
                      <Input placeholder="Enter school name" value={formData.lastSchool} onChange={(e) => updateField("lastSchool", e.target.value)} />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Upload Documents</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { label: "Passport Size Photo", required: true },
                      { label: "Digital Signature", required: true },
                      { label: "Aadhaar Card", required: true },
                      { label: "Last Qualification Certificate", required: true },
                      { label: "Caste Certificate", required: false },
                      { label: "Income Certificate", required: false },
                    ].map((doc) => (
                      <div key={doc.label} className="border-2 border-dashed border-secondary-200 rounded-xl p-6 text-center hover:border-primary-300 hover:bg-primary-50/50 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-secondary-400 mx-auto mb-3" />
                        <p className="font-medium text-secondary-700">{doc.label}</p>
                        <p className="text-xs text-secondary-500 mt-1">{doc.required ? "Required" : "Optional"} - Max 2MB (PDF/JPG)</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Payment</h2>
                  <div className="bg-secondary-50 rounded-xl p-6">
                    <h3 className="font-semibold text-secondary-900 mb-4">Fee Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between"><span className="text-secondary-600">Registration Fee</span><span className="font-medium">Rs. 500</span></div>
                      <div className="flex justify-between"><span className="text-secondary-600">Admission Fee</span><span className="font-medium">Rs. 1,000</span></div>
                      <div className="flex justify-between"><span className="text-secondary-600">Tuition Fee</span><span className="font-medium">Rs. 3,000</span></div>
                      <div className="flex justify-between"><span className="text-secondary-600">Examination Fee</span><span className="font-medium">Rs. 800</span></div>
                      <div className="flex justify-between"><span className="text-secondary-600">Study Material Fee</span><span className="font-medium">Rs. 1,200</span></div>
                      <div className="border-t border-secondary-200 pt-3 flex justify-between font-bold text-lg">
                        <span>Total</span><span className="text-primary-600">Rs. 6,500</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {["Net Banking", "Credit/Debit Card", "UPI"].map((method) => (
                      <div key={method} className="border-2 border-secondary-200 rounded-xl p-4 text-center hover:border-primary-400 cursor-pointer transition-colors">
                        <CreditCard className="w-6 h-6 text-secondary-400 mx-auto mb-2" />
                        <span className="text-sm font-medium text-secondary-700">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Review Application</h2>
                  <div className="bg-success-50 border border-success-200 rounded-xl p-6 text-center">
                    <CheckCircle className="w-16 h-16 text-success-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-success-700 mb-2">Application Submitted Successfully!</h3>
                    <p className="text-success-600 mb-4">Your application number is <strong>JAOB2024001234</strong></p>
                    <p className="text-secondary-600 text-sm">Please save this number for future reference. You will receive a confirmation email shortly.</p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 5 && (
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-secondary-200">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  <Button onClick={nextStep} className="flex items-center gap-2">
                    {currentStep === 4 ? "Pay & Submit" : "Next"}
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageLayout>
  );
}
