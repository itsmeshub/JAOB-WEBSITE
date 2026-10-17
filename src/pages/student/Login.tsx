import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { LogIn, User, Lock, Eye, EyeOff, GraduationCap } from "lucide-react";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PageLayout breadcrumbs={[{ label: "Student Login" }]}>
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Student Login</h1>
            <p className="text-primary-200 max-w-2xl">
              Access your student dashboard, results, admit cards, and more
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-16">
        <div className="container-custom max-w-md">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-soft-lg p-8"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">Welcome Back</h2>
                <p className="text-secondary-500 text-sm mt-1">Sign in to your student account</p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label>Roll Number / Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <Input placeholder="Enter roll number" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-secondary-300" />
                    <span className="text-secondary-600">Remember me</span>
                  </label>
                  <Link to="/student/forgot-password" className="text-primary-600 hover:underline font-medium">
                    Forgot Password?
                  </Link>
                </div>

                <Button className="w-full flex items-center justify-center gap-2" size="lg">
                  <LogIn className="w-5 h-5" />
                  Sign In
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-secondary-200 text-center">
                <p className="text-secondary-600 text-sm">
                  Don't have an account?{" "}
                  <Link to="/student/register" className="text-primary-600 font-medium hover:underline">
                    Register Now
                  </Link>
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
