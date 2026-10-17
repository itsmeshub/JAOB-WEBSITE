import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Search, Printer, Download, Calendar, User, Hash, MapPin, AlertTriangle } from "lucide-react";

const dummyAdmitCard = {
  rollNumber: "JAOB2024001234",
  studentName: "Rahul Kumar Singh",
  fatherName: "Mahesh Kumar Singh",
  motherName: "Sunita Devi",
  dob: "15-08-2008",
  course: "Secondary (Class 10)",
  session: "2024-25",
  examCenter: "Ranchi Center - 001",
  centerAddress: "Government High School, Main Road, Ranchi - 834001",
  examDate: "15-03-2025",
  reportingTime: "8:30 AM",
  examTime: "10:00 AM - 1:00 PM",
  photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
  qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=JAOB2024001234",
  subjects: [
    { date: "15-03-2025", subject: "Hindi", time: "10:00 AM - 1:00 PM" },
    { date: "17-03-2025", subject: "English", time: "10:00 AM - 1:00 PM" },
    { date: "19-03-2025", subject: "Mathematics", time: "10:00 AM - 1:00 PM" },
    { date: "21-03-2025", subject: "Science", time: "10:00 AM - 1:00 PM" },
    { date: "23-03-2025", subject: "Social Science", time: "10:00 AM - 1:00 PM" },
    { date: "25-03-2025", subject: "Information Technology", time: "10:00 AM - 12:00 PM" },
  ],
  instructions: [
    "Reach the examination center at least 1 hour before the exam time.",
    "Carry this admit card and a valid photo ID proof (Aadhaar/Voter ID).",
    "Use only blue/black ballpoint pen for writing answers.",
    "Electronic devices including mobile phones, calculators, and smartwatches are strictly prohibited.",
    "Read the question paper carefully before starting to write.",
    "Maintain silence in the examination hall.",
    "No candidate will be allowed to leave the examination hall before the completion of the exam.",
    "Any form of malpractice will lead to disqualification.",
  ],
};

export function AdmitCard() {
  const [showCard, setShowCard] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setShowCard(true);
    }, 1500);
  };

  return (
    <PageLayout breadcrumbs={[{ label: "Admit Card" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Download Admit Card</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Enter your details to view and download your examination admit card
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
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={handleSearch} className="w-full mt-6 flex items-center justify-center gap-2" size="lg">
                <Search className="w-5 h-5" />
                {searching ? "Searching..." : "Search Admit Card"}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Admit Card Preview */}
      {showCard && (
        <section className="pb-16">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden border border-secondary-200">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold">Admit Card</h2>
                      <p className="text-primary-200 text-sm">Session: {dummyAdmitCard.session}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <Printer className="w-4 h-4 mr-1" />
                        Print
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Student Info */}
                  <div className="flex flex-col sm:flex-row gap-6 mb-8">
                    <div className="shrink-0">
                      <img
                        src={dummyAdmitCard.photo}
                        alt={dummyAdmitCard.studentName}
                        className="w-32 h-40 object-cover rounded-xl border-2 border-secondary-200"
                      />
                    </div>
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Hash className="w-5 h-5 text-primary-500" />
                        <div>
                          <div className="text-xs text-secondary-500">Roll Number</div>
                          <div className="font-semibold text-secondary-900">{dummyAdmitCard.rollNumber}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-primary-500" />
                        <div>
                          <div className="text-xs text-secondary-500">Student Name</div>
                          <div className="font-semibold text-secondary-900">{dummyAdmitCard.studentName}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary-500" />
                        <div>
                          <div className="text-xs text-secondary-500">Date of Birth</div>
                          <div className="font-semibold text-secondary-900">{dummyAdmitCard.dob}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary-500" />
                        <div>
                          <div className="text-xs text-secondary-500">Exam Center</div>
                          <div className="font-semibold text-secondary-900">{dummyAdmitCard.examCenter}</div>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <img src={dummyAdmitCard.qrCode} alt="QR Code" className="w-24 h-24" />
                    </div>
                  </div>

                  {/* Center Address */}
                  <div className="p-4 bg-secondary-50 rounded-xl mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-secondary-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-secondary-900">Examination Center Address</div>
                        <div className="text-secondary-600">{dummyAdmitCard.centerAddress}</div>
                      </div>
                    </div>
                  </div>

                  {/* Exam Schedule */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-secondary-900 mb-4">Examination Schedule</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-secondary-50">
                            <th className="text-left p-3 rounded-tl-xl font-semibold text-secondary-700">Date</th>
                            <th className="text-left p-3 font-semibold text-secondary-700">Subject</th>
                            <th className="text-center p-3 rounded-tr-xl font-semibold text-secondary-700">Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dummyAdmitCard.subjects.map((subject, index) => (
                            <tr key={index} className="border-b border-secondary-100 hover:bg-secondary-50/50">
                              <td className="p-3 text-secondary-600">{subject.date}</td>
                              <td className="p-3 font-medium text-secondary-900">{subject.subject}</td>
                              <td className="p-3 text-center text-secondary-600">{subject.time}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="p-4 bg-warning-50 border border-warning-200 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-warning-600" />
                      <h3 className="font-semibold text-warning-800">Important Instructions</h3>
                    </div>
                    <ol className="space-y-2">
                      {dummyAdmitCard.instructions.map((instruction, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-warning-700">
                          <span className="font-bold shrink-0">{index + 1}.</span>
                          {instruction}
                        </li>
                      ))}
                    </ol>
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
