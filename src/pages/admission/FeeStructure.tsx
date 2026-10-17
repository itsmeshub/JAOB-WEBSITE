import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { feeStructureData } from "@/data/admissionData";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Wallet, Tag } from "lucide-react";

export function FeeStructure() {
  return (
    <PageLayout breadcrumbs={[{ label: "Admission", href: "/admission" }, { label: "Fee Structure" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Fee Structure</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              Transparent fee structure with concessions for eligible categories
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Fee Tables */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Secondary */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden">
                <div className="p-6 bg-primary-50 border-b border-primary-100">
                  <div className="flex items-center gap-3">
                    <Wallet className="w-6 h-6 text-primary-600" />
                    <h2 className="text-xl font-bold text-secondary-900">Secondary (Class 10)</h2>
                  </div>
                </div>
                <div className="p-6">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-secondary-600">Registration Fee</TableCell>
                        <TableCell className="text-right font-medium">Rs. {feeStructureData.secondary.registrationFee}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-secondary-600">Admission Fee</TableCell>
                        <TableCell className="text-right font-medium">Rs. {feeStructureData.secondary.admissionFee}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-secondary-600">Tuition Fee</TableCell>
                        <TableCell className="text-right font-medium">Rs. {feeStructureData.secondary.tuitionFee}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-secondary-600">Examination Fee</TableCell>
                        <TableCell className="text-right font-medium">Rs. {feeStructureData.secondary.examinationFee}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-secondary-600">Study Material Fee</TableCell>
                        <TableCell className="text-right font-medium">Rs. {feeStructureData.secondary.studyMaterialFee}</TableCell>
                      </TableRow>
                      <TableRow className="bg-primary-50">
                        <TableCell className="font-bold text-secondary-900">Total</TableCell>
                        <TableCell className="text-right font-bold text-primary-600 text-lg">Rs. {feeStructureData.secondary.total}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </AnimatedSection>

            {/* Senior Secondary */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden">
                <div className="p-6 bg-accent-50 border-b border-accent-100">
                  <div className="flex items-center gap-3">
                    <Wallet className="w-6 h-6 text-accent-600" />
                    <h2 className="text-xl font-bold text-secondary-900">Senior Secondary (Class 12)</h2>
                  </div>
                </div>
                <div className="p-6">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-secondary-600">Registration Fee</TableCell>
                        <TableCell className="text-right font-medium">Rs. {feeStructureData.seniorSecondary.registrationFee}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-secondary-600">Admission Fee</TableCell>
                        <TableCell className="text-right font-medium">Rs. {feeStructureData.seniorSecondary.admissionFee}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-secondary-600">Tuition Fee</TableCell>
                        <TableCell className="text-right font-medium">Rs. {feeStructureData.seniorSecondary.tuitionFee}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-secondary-600">Examination Fee</TableCell>
                        <TableCell className="text-right font-medium">Rs. {feeStructureData.seniorSecondary.examinationFee}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-secondary-600">Study Material Fee</TableCell>
                        <TableCell className="text-right font-medium">Rs. {feeStructureData.seniorSecondary.studyMaterialFee}</TableCell>
                      </TableRow>
                      <TableRow className="bg-accent-50">
                        <TableCell className="font-bold text-secondary-900">Total</TableCell>
                        <TableCell className="text-right font-bold text-accent-600 text-lg">Rs. {feeStructureData.seniorSecondary.total}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Concessions */}
          <AnimatedSection delay={0.3} className="mt-10">
            <div className="bg-white rounded-2xl shadow-soft-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Tag className="w-6 h-6 text-success-600" />
                <h2 className="text-xl font-bold text-secondary-900">Fee Concessions</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {feeStructureData.concessions.map((item) => (
                  <div key={item.category} className="text-center p-4 rounded-xl bg-secondary-50">
                    <Badge variant="success" className="mb-2">{item.discount} OFF</Badge>
                    <div className="font-medium text-secondary-900">{item.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
