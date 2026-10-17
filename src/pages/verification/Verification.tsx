import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Search, ShieldCheck, QrCode, Calendar, User, Hash, Award, CheckCircle, FileCheck } from "lucide-react";

const dummyCertificate = {
  certificateNumber: "JAOB-CERT-2024-001234",
  studentName: "Rahul Kumar Singh",
  fatherName: "Mahesh Kumar Singh",
  motherName: "Sunita Devi",
  dob: "15-08-2008",
  course: "Secondary (Class 10)",
  session: "2024-25",
  issueDate: "20-05-2025",
  status: "Valid",
  verificationDate: "25-12-2024",
  qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=JAOB-CERT-2024-001234",
  subjects: [
    { name: "Hindi", marks: 92 },
    { name: "English", marks: 88 },
    { name: "Mathematics", marks: 95 },
    { name: "Science", marks: 95 },
    { name: "Social Science", marks: 85 },
    { name: "Information Technology", marks: 30 },
  ],
  totalMarks: 485,
  maxMarks: 500,
  percentage: "97.0%",
  division: "First Division with Distinction",
};

export function Verification() {
  const [showResult, setShowResult] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <PageLayout breadcrumbs={[{ label: "Certificate Verification" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Certificate Verification</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Verify the authenticity of certificates issued by JAOB
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-12">
        <div className="container-custom max-w-2xl">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-soft-lg p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Certificate Number *</Label>
                  <Input placeholder="Enter certificate number" defaultValue="JAOB-CERT-2024-001234" />
                </div>
                <div className="space-y-2">
                  <Label>Roll Number *</Label>
                  <Input placeholder="Enter roll number" defaultValue="JAOB2024001234" />
                </div>
                <div className="space-y-2">
                  <Label>Course *</Label>
                  <Select defaultValue="secondary">
                    <SelectTrigger><SelectValue placeholder="Select course" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="secondary">Secondary (Class 10)</SelectItem>
                      <SelectItem value="senior-secondary">Senior Secondary (Class 12)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Session *</Label>
                  <Select defaultValue="2024-25">
                    <SelectTrigger><SelectValue placeholder="Select session" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-25">2024-25</SelectItem>
                      <SelectItem value="2023-24">2023-24</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={handleSearch} className="w-full mt-6 flex items-center justify-center gap-2" size="lg">
                <Search className="w-5 h-5" />
                {searching ? "Verifying..." : "Verify Certificate"}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Verification Result */}
      {showResult && (
        <section className="pb-16">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden border border-secondary-200">
                {/* Header */}
                <div className="bg-gradient-to-r from-success-600 to-success-700 text-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-8 h-8" />
                      <div>
                        <h2 className="text-xl font-bold">Certificate Verified</h2>
                        <p className="text-success-100 text-sm">This certificate is authentic and valid</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Valid
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  {/* Certificate Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                        <FileCheck className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500">Certificate No.</div>
                        <div className="font-semibold text-secondary-900 text-sm">{dummyCertificate.certificateNumber}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500">Student Name</div>
                        <div className="font-semibold text-secondary-900">{dummyCertificate.studentName}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500">Issue Date</div>
                        <div className="font-semibold text-secondary-900">{dummyCertificate.issueDate}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center">
                        <Award className="w-5 h-5 text-accent-600" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500">Course</div>
                        <div className="font-semibold text-secondary-900">{dummyCertificate.course}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-success-100 flex items-center justify-center">
                        <Hash className="w-5 h-5 text-success-600" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500">Session</div>
                        <div className="font-semibold text-secondary-900">{dummyCertificate.session}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-warning-100 flex items-center justify-center">
                        <QrCode className="w-5 h-5 text-warning-600" />
                      </div>
                      <div>
                        <img src={dummyCertificate.qrCode} alt="QR Code" className="w-16 h-16" />
                      </div>
                    </div>
                  </div>

                  {/* Marks Summary */}
                  <div className="bg-secondary-50 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-secondary-900 mb-4">Academic Performance</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
                      {dummyCertificate.subjects.map((subject) => (
                        <div key={subject.name} className="text-center p-3 bg-white rounded-xl">
                          <div className="text-lg font-bold text-primary-600">{subject.marks}</div>
                          <div className="text-xs text-secondary-600">{subject.name}</div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-4 border-t border-secondary-200">
                      <div>
                        <div className="text-xl font-bold text-primary-600">{dummyCertificate.totalMarks}</div>
                        <div className="text-xs text-secondary-600">Total Marks</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-primary-600">{dummyCertificate.maxMarks}</div>
                        <div className="text-xs text-secondary-600">Maximum</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-success-600">{dummyCertificate.percentage}</div>
                        <div className="text-xs text-secondary-600">Percentage</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-accent-600 mt-1">{dummyCertificate.division}</div>
                        <div className="text-xs text-secondary-600">Division</div>
                      </div>
                    </div>
                  </div>

                  {/* Verification Status */}
                  <div className="flex items-center justify-between p-4 bg-success-50 border border-success-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-success-600" />
                      <div>
                        <div className="font-semibold text-success-800">Verification Successful</div>
                        <div className="text-sm text-success-600">Verified on: {dummyCertificate.verificationDate}</div>
                      </div>
                    </div>
                    <Badge variant="success">Authentic</Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
