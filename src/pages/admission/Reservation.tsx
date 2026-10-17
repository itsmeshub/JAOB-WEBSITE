import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { reservationData } from "@/data/admissionData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Info, AlertCircle } from "lucide-react";

export function Reservation() {
  return (
    <PageLayout breadcrumbs={[{ label: "Admission", href: "/admission" }, { label: "Reservation" }]}>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Reservation Policy</h1>
            <p className="text-primary-200 text-lg max-w-2xl">
              JAOB follows the reservation policy as per Government of Jharkhand norms
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden mb-8">
              <div className="p-6 bg-primary-50 border-b border-primary-100">
                <div className="flex items-center gap-3">
                  <Info className="w-6 h-6 text-primary-600" />
                  <h2 className="text-xl font-bold text-secondary-900">Category-wise Reservation</h2>
                </div>
              </div>
              <div className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>Percentage</TableHead>
                      <TableHead className="text-right">Approx. Seats</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reservationData.categories.map((cat) => (
                      <TableRow key={cat.name}>
                        <TableCell className="font-medium">{cat.name}</TableCell>
                        <TableCell>
                          <span className="px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                            {cat.percentage}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">{cat.seats}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl shadow-soft-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-warning-600" />
                <h2 className="text-xl font-bold text-secondary-900">Important Notes</h2>
              </div>
              <ul className="space-y-3">
                {reservationData.notes.map((note, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 rounded-xl bg-secondary-50">
                    <span className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-secondary-700">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
