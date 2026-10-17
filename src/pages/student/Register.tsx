import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { UserPlus, User, Lock, Mail, Phone, Eye, EyeOff } from "lucide-react";

export function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <PageLayout breadcrumbs={[{ label: "Student", href: "/student/login" }, { label: "Register" }]}>
      <section className="relative py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Student Registration</h1>
            <p className="text-primary-200 max-w-2xl">Create your student account to access all services</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-lg">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-soft-lg p-8"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <UserPlus className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">Create Account</h2>
                <p className="text-secondary-500 text-sm mt-1">Step {step} of 2</p>
              </div>

              {step === 1 ? (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <Input placeholder="Enter full name" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <Input type="email" placeholder="Enter email" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Mobile Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <Input placeholder="Enter 10-digit mobile" className="pl-10" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Roll Number</Label>
                      <Input placeholder="Enter roll number" />
                    </div>
                    <div className="space-y-2">
                      <Label>Course</Label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="secondary">Class 10</SelectItem>
                          <SelectItem value="senior-secondary">Class 12</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button onClick={() => setStep(2)} className="w-full">Continue</Button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label>Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <Input type={showPassword ? "text" : "password"} placeholder="Create password" className="pl-10 pr-10" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400">
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <Input type="password" placeholder="Confirm password" className="pl-10" />
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 rounded border-secondary-300" />
                    <span className="text-sm text-secondary-600">I agree to the <Link to="#" className="text-primary-600 hover:underline">Terms of Service</Link> and <Link to="#" className="text-primary-600 hover:underline">Privacy Policy</Link></span>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep(1)} className="flex-1">Back</Button>
                    <Button className="flex-1">Register</Button>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-secondary-200 text-center">
                <p className="text-secondary-600 text-sm">Already have an account? <Link to="/student/login" className="text-primary-600 font-medium hover:underline">Sign In</Link></p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
