import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Calendar, Hash, BookOpen, Award, Edit, Save, Camera } from "lucide-react";

const studentProfile = {
  name: "Rahul Kumar Singh",
  rollNumber: "JAOB2024001234",
  email: "rahul.singh@email.com",
  mobile: "+91-98765-43210",
  dob: "15-08-2008",
  gender: "Male",
  category: "General",
  course: "Secondary (Class 10)",
  session: "2024-25",
  address: "123, Main Road, Near City Center",
  city: "Ranchi",
  state: "Jharkhand",
  pincode: "834001",
  photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  enrollmentDate: "01-07-2024",
  status: "Active",
};

const academicHistory = [
  { exam: "First Term Exam 2024", result: "Pass", percentage: "85%", grade: "A" },
  { exam: "Second Term Exam 2024", result: "Pass", percentage: "88%", grade: "A" },
];

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <PageLayout breadcrumbs={[{ label: "Student", href: "/student/login" }, { label: "Profile" }]}>
      <section className="py-8">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden">
              {/* Profile Header */}
              <div className="relative h-32 bg-gradient-to-r from-primary-600 to-primary-800">
                <div className="absolute -bottom-12 left-8">
                  <div className="relative">
                    <img
                      src={studentProfile.photo}
                      alt={studentProfile.name}
                      className="w-24 h-24 rounded-2xl border-4 border-white object-cover shadow-soft-lg"
                    />
                    <button className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-sm hover:bg-primary-700">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-16 px-8 pb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                  <div>
                    <h1 className="text-2xl font-bold text-secondary-900">{studentProfile.name}</h1>
                    <p className="text-secondary-500">{studentProfile.rollNumber} | {studentProfile.course}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3 sm:mt-0">
                    <Badge variant="success">{studentProfile.status}</Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center gap-2"
                    >
                      {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                      {isEditing ? "Save" : "Edit Profile"}
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="personal" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="academic">Academic</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                          <Input defaultValue={studentProfile.name} disabled={!isEditing} className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Roll Number</Label>
                        <div className="relative">
                          <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                          <Input defaultValue={studentProfile.rollNumber} disabled className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                          <Input defaultValue={studentProfile.email} disabled={!isEditing} className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Mobile</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                          <Input defaultValue={studentProfile.mobile} disabled={!isEditing} className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Date of Birth</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                          <Input defaultValue={studentProfile.dob} disabled={!isEditing} className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Gender</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                          <Input defaultValue={studentProfile.gender} disabled={!isEditing} className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Category</Label>
                        <Input defaultValue={studentProfile.category} disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label>Enrollment Date</Label>
                        <Input defaultValue={studentProfile.enrollmentDate} disabled className="bg-secondary-50" />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label>Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-400" />
                          <Input defaultValue={studentProfile.address} disabled={!isEditing} className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>City</Label>
                        <Input defaultValue={studentProfile.city} disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label>State</Label>
                        <Input defaultValue={studentProfile.state} disabled={!isEditing} />
                      </div>
                      <div className="space-y-2">
                        <Label>Pincode</Label>
                        <Input defaultValue={studentProfile.pincode} disabled={!isEditing} />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="academic">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-primary-50 border border-primary-100">
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="w-5 h-5 text-primary-600" />
                            <span className="font-semibold text-secondary-900">Course</span>
                          </div>
                          <p className="text-secondary-600">{studentProfile.course}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-accent-50 border border-accent-100">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-5 h-5 text-accent-600" />
                            <span className="font-semibold text-secondary-900">Session</span>
                          </div>
                          <p className="text-secondary-600">{studentProfile.session}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-success-50 border border-success-100">
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="w-5 h-5 text-success-600" />
                            <span className="font-semibold text-secondary-900">Status</span>
                          </div>
                          <p className="text-secondary-600">{studentProfile.status}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-secondary-900 mb-4">Examination History</h3>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="bg-secondary-50">
                                <th className="text-left p-3 rounded-tl-xl">Examination</th>
                                <th className="text-center p-3">Result</th>
                                <th className="text-center p-3">Percentage</th>
                                <th className="text-center p-3 rounded-tr-xl">Grade</th>
                              </tr>
                            </thead>
                            <tbody>
                              {academicHistory.map((item, index) => (
                                <tr key={index} className="border-b border-secondary-100">
                                  <td className="p-3">{item.exam}</td>
                                  <td className="p-3 text-center">
                                    <Badge variant="success">{item.result}</Badge>
                                  </td>
                                  <td className="p-3 text-center">{item.percentage}</td>
                                  <td className="p-3 text-center">
                                    <Badge variant="default">{item.grade}</Badge>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="documents">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { name: "Aadhaar Card", status: "Verified", date: "2024-07-01" },
                        { name: "Last Qualification Certificate", status: "Verified", date: "2024-07-01" },
                        { name: "Caste Certificate", status: "Not Required", date: "-" },
                        { name: "Income Certificate", status: "Not Required", date: "-" },
                        { name: "Passport Size Photo", status: "Verified", date: "2024-07-01" },
                        { name: "Digital Signature", status: "Verified", date: "2024-07-01" },
                      ].map((doc) => (
                        <motion.div
                          key={doc.name}
                          whileHover={{ y: -3 }}
                          className="p-4 rounded-xl bg-secondary-50 border border-secondary-200 flex items-center justify-between"
                        >
                          <div>
                            <div className="font-medium text-secondary-900">{doc.name}</div>
                            <div className="text-xs text-secondary-500">Uploaded: {doc.date}</div>
                          </div>
                          <Badge
                            variant={doc.status === "Verified" ? "success" : doc.status === "Pending" ? "warning" : "secondary"}
                          >
                            {doc.status}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
