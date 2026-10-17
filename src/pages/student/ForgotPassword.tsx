import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { KeyRound, Mail, ArrowLeft, CheckCircle } from "lucide-react";

export function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageLayout breadcrumbs={[{ label: "Student", href: "/student/login" }, { label: "Forgot Password" }]}>
      <section className="relative py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Forgot Password</h1>
            <p className="text-primary-200 max-w-2xl">Reset your password in a few simple steps</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-md">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-soft-lg p-8"
            >
              {!submitted ? (
                <>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mx-auto mb-4 shadow-glow-accent">
                      <KeyRound className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-secondary-900">Reset Password</h2>
                    <p className="text-secondary-500 text-sm mt-1">Enter your email to receive reset instructions</p>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                        <Input type="email" placeholder="Enter registered email" className="pl-10" />
                      </div>
                    </div>

                    <Button onClick={() => setSubmitted(true)} className="w-full">
                      Send Reset Link
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-success-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-success-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary-900 mb-2">Check Your Email</h2>
                  <p className="text-secondary-600 mb-6">We've sent password reset instructions to your email address.</p>
                  <Link to="/student/login">
                    <Button variant="outline" className="flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Back to Login
                    </Button>
                  </Link>
                </div>
              )}

              {!submitted && (
                <div className="mt-6 pt-6 border-t border-secondary-200 text-center">
                  <Link to="/student/login" className="text-primary-600 font-medium hover:underline flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Login
                  </Link>
                </div>
              )}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
