import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Search, Printer, Download, Award, Calendar, User, Hash, QrCode, CheckCircle, XCircle } from "lucide-react";

// Dummy result data
const dummyResult = {
  rollNumber: "JAOB2024001234",
  studentName: "Rahul Kumar Singh",
  fatherName: "Mahesh Kumar Singh",
  motherName: "Sunita Devi",
  dob: "15-08-2008",
  course: "Secondary (Class 10)",
  session: "2024-25",
  examCenter: "Ranchi Center - 001",
  status: "Pass",
  totalMarks: 485,
  maxMarks: 500,
  percentage: "97.0%",
  division: "First Division with Distinction",
  subjects: [
    { code: "101", name: "Hindi", theory: 92, practical: 0, total: 92, max: 100, grade: "A+" },
    { code: "102", name: "English", theory: 88, practical: 0, total: 88, max: 100, grade: "A" },
    { code: "103", name: "Mathematics", theory: 95, practical: 0, total: 95, max: 100, grade: "A+" },
    { code: "104", name: "Science", theory: 90, practical: 15, total: 95, max: 100, grade: "A+" },
    { code: "105", name: "Social Science", theory: 85, practical: 0, total: 85, max: 100, grade: "A" },
    { code: "106", name: "Information Technology", theory: 30, practical: 0, total: 30, max: 50, grade: "A+" },
  ],
  qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=JAOB2024001234",
};

export function Result() {
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
    <PageLayout breadcrumbs={[{ label: "Result" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Check Result</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Enter your roll number and other details to view your result
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
                  <Label>Roll Number *</Label>
                  <Input placeholder="Enter roll number" defaultValue="JAOB2024001234" />
                </div>
                <div className="space-y-2">
                  <Label>Date of Birth *</Label>
                  <Input type="date" defaultValue="2008-08-15" />
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
                      <SelectItem value="2022-23">2022-23</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={handleSearch} className="w-full mt-6 flex items-center justify-center gap-2" size="lg">
                <Search className="w-5 h-5" />
                {searching ? "Searching..." : "Search Result"}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Result Card */}
      {showResult && (
        <section className="pb-16">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Result Header */}
              <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden border border-secondary-200">
                {/* Header Banner */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold">Result Card</h2>
                      <p className="text-primary-200 text-sm">Session: {dummyResult.session}</p>
                    </div>
                    <Badge variant={dummyResult.status === "Pass" ? "success" : "destructive"} className="text-sm px-4 py-1.5">
                      {dummyResult.status === "Pass" ? <CheckCircle className="w-4 h-4 mr-1" /> : <XCircle className="w-4 h-4 mr-1" />}
                      {dummyResult.status}
                    </Badge>
                  </div>
                </div>

                {/* Student Details */}
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                        <Hash className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500">Roll Number</div>
                        <div className="font-semibold text-secondary-900">{dummyResult.rollNumber}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500">Student Name</div>
                        <div className="font-semibold text-secondary-900">{dummyResult.studentName}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500">Date of Birth</div>
                        <div className="font-semibold text-secondary-900">{dummyResult.dob}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent-100 flex items-center justify-center">
                        <Award className="w-5 h-5 text-accent-600" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500">Course</div>
                        <div className="font-semibold text-secondary-900">{dummyResult.course}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-success-100 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-success-600" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500">Exam Center</div>
                        <div className="font-semibold text-secondary-900">{dummyResult.examCenter}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-warning-100 flex items-center justify-center">
                        <QrCode className="w-5 h-5 text-warning-600" />
                      </div>
                      <div>
                        <img src={dummyResult.qrCode} alt="QR Code" className="w-16 h-16" />
                      </div>
                    </div>
                  </div>

                  {/* Subject Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-secondary-50">
                          <th className="text-left p-3 rounded-tl-xl font-semibold text-secondary-700">Code</th>
                          <th className="text-left p-3 font-semibold text-secondary-700">Subject</th>
                          <th className="text-center p-3 font-semibold text-secondary-700">Theory</th>
                          <th className="text-center p-3 font-semibold text-secondary-700">Practical</th>
                          <th className="text-center p-3 font-semibold text-secondary-700">Total</th>
                          <th className="text-center p-3 font-semibold text-secondary-700">Max</th>
                          <th className="text-center p-3 rounded-tr-xl font-semibold text-secondary-700">Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dummyResult.subjects.map((subject) => (
                          <tr key={subject.code} className="border-b border-secondary-100 hover:bg-secondary-50/50">
                            <td className="p-3 text-secondary-600">{subject.code}</td>
                            <td className="p-3 font-medium text-secondary-900">{subject.name}</td>
                            <td className="p-3 text-center text-secondary-600">{subject.theory}</td>
                            <td className="p-3 text-center text-secondary-600">{subject.practical || "-"}</td>
                            <td className="p-3 text-center font-semibold text-secondary-900">{subject.total}</td>
                            <td className="p-3 text-center text-secondary-600">{subject.max}</td>
                            <td className="p-3 text-center">
                              <Badge variant={subject.grade === "A+" ? "success" : "default"} className="text-xs">
                                {subject.grade}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Summary */}
                  <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary-600">{dummyResult.totalMarks}</div>
                        <div className="text-xs text-secondary-600">Total Marks</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600">{dummyResult.maxMarks}</div>
                        <div className="text-xs text-secondary-600">Maximum Marks</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-success-600">{dummyResult.percentage}</div>
                        <div className="text-xs text-secondary-600">Percentage</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-accent-600 mt-1">{dummyResult.division}</div>
                        <div className="text-xs text-secondary-600">Division</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 border-t border-secondary-200 flex flex-wrap gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Printer className="w-4 h-4" />
                    Print Result
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
