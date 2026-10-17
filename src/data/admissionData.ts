export const admissionProcessSteps = [
  {
    step: 1,
    title: "Online Registration",
    description: "Create your account on the JAOB portal by providing basic details like name, email, and mobile number.",
    icon: "UserPlus",
  },
  {
    step: 2,
    title: "Fill Application",
    description: "Complete the online application form with personal details, academic qualifications, and course preferences.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Upload Documents",
    description: "Upload scanned copies of required documents including photograph, signature, and certificates.",
    icon: "Upload",
  },
  {
    step: 4,
    title: "Pay Fee",
    description: "Pay the application fee online through net banking, credit/debit card, or UPI.",
    icon: "CreditCard",
  },
  {
    step: 5,
    title: "Submit Application",
    description: "Review all details and submit your application. Download the confirmation receipt for future reference.",
    icon: "CheckCircle",
  },
  {
    step: 6,
    title: "Admission Confirmation",
    description: "Receive admission confirmation via email and SMS. Collect your study material and ID card.",
    icon: "Mail",
  },
];

export const eligibilityData = {
  secondary: {
    title: "Secondary (Class 10)",
    requirements: [
      "Minimum age: 14 years as on 31st March of the admission year",
      "No minimum qualification required",
      "Candidates who have failed/passed in Class 9 can apply",
      "Candidates who have completed elementary education",
    ],
    duration: "1-5 years (flexible)",
    subjects: [
      "Hindi", "English", "Mathematics", "Science", "Social Science",
      "Home Science", "Economics", "Business Studies", "Indian Culture & Heritage",
    ],
  },
  seniorSecondary: {
    title: "Senior Secondary (Class 12)",
    requirements: [
      "Minimum age: 15 years as on 31st March of the admission year",
      "Must have passed Secondary (Class 10) or equivalent",
      "Candidates who have failed in Class 11 can apply",
      "Candidates who have completed Secondary education",
    ],
    duration: "1-5 years (flexible)",
    streams: [
      {
        name: "Science",
        subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"],
      },
      {
        name: "Commerce",
        subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "Computer Science"],
      },
      {
        name: "Arts",
        subjects: ["History", "Political Science", "Geography", "Economics", "Sociology"],
      },
    ],
  },
};

export const feeStructureData = {
  secondary: {
    registrationFee: 500,
    admissionFee: 1000,
    tuitionFee: 3000,
    examinationFee: 800,
    studyMaterialFee: 1200,
    total: 6500,
  },
  seniorSecondary: {
    registrationFee: 600,
    admissionFee: 1200,
    tuitionFee: 4000,
    examinationFee: 1000,
    studyMaterialFee: 1500,
    total: 8300,
  },
  concessions: [
    { category: "SC/ST", discount: "50%" },
    { category: "OBC", discount: "25%" },
    { category: "PWD", discount: "50%" },
    { category: "Women", discount: "10%" },
  ],
};

export const requiredDocuments = [
  {
    category: "Identity Proof",
    documents: [
      "Aadhaar Card (Mandatory)",
      "Voter ID / PAN Card / Passport",
      "Birth Certificate",
    ],
  },
  {
    category: "Educational Documents",
    documents: [
      "Class 8 Marksheet (for Secondary)",
      "Class 10 Marksheet (for Senior Secondary)",
      "School Leaving Certificate",
      "Migration Certificate (if applicable)",
    ],
  },
  {
    category: "Photographs",
    documents: [
      "Recent Passport Size Photo (white background)",
      "Digital Signature",
      "Thumb Impression (if required)",
    ],
  },
  {
    category: "Category Documents",
    documents: [
      "Caste Certificate (SC/ST/OBC)",
      "Income Certificate (for fee concession)",
      "Disability Certificate (if applicable)",
      "Ex-Serviceman Certificate (if applicable)",
    ],
  },
];

export const reservationData = {
  categories: [
    { name: "Scheduled Caste (SC)", percentage: "15%", seats: "750" },
    { name: "Scheduled Tribe (ST)", percentage: "7.5%", seats: "375" },
    { name: "Other Backward Class (OBC)", percentage: "27%", seats: "1350" },
    { name: "Economically Weaker Section (EWS)", percentage: "10%", seats: "500" },
    { name: "Persons with Disability (PWD)", percentage: "5%", seats: "250" },
    { name: "General", percentage: "35.5%", seats: "1775" },
  ],
  notes: [
    "Reservation is applicable as per Government of Jharkhand norms",
    "Candidates must submit valid category certificates at the time of admission",
    "EWS candidates must submit income certificate",
    "PWD candidates must submit disability certificate",
    "Women candidates get additional 10% fee concession",
  ],
};

export const examinationData = {
  schedule: [
    { exam: "First Term Exam", month: "September", mode: "Offline" },
    { exam: "Second Term Exam", month: "December", mode: "Offline" },
    { exam: "Annual Exam", month: "March-April", mode: "Offline" },
    { exam: "Supplementary Exam", month: "July", mode: "Offline" },
  ],
  pattern: [
    { component: "Theory Exam", weightage: "80%", duration: "3 hours" },
    { component: "Practical Exam", weightage: "15%", duration: "2 hours" },
    { component: "Internal Assessment", weightage: "5%", duration: "-" },
  ],
  centers: [
    "Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh",
    "Deoghar", "Giridih", "Ramgarh", "Medininagar", "Phusro",
  ],
};

export const helpdeskData = {
  contacts: [
    { type: "Toll-Free", number: "1800-123-4567", timing: "24x7" },
    { type: "Admission Helpline", number: "+91-1234-567-890", timing: "10 AM - 5 PM" },
    { type: "Technical Support", number: "+91-1234-567-891", timing: "10 AM - 6 PM" },
    { type: "WhatsApp", number: "+91-98765-43210", timing: "9 AM - 9 PM" },
  ],
  emails: [
    { purpose: "General Queries", email: "info@jaob.gov.in" },
    { purpose: "Admission", email: "admission@jaob.gov.in" },
    { purpose: "Examination", email: "exam@jaob.gov.in" },
    { purpose: "Technical Support", email: "support@jaob.gov.in" },
  ],
  faqs: [
    {
      question: "How do I apply for admission online?",
      answer: "Visit the 'Apply Online' section, register with your email and mobile number, fill the application form, upload documents, and pay the fee.",
    },
    {
      question: "What is the last date for admission?",
      answer: "The last date for admission for the academic year 2024-25 is 31st March 2025. However, it is advisable to apply early to avoid last-minute rush.",
    },
    {
      question: "Can I change my subject after admission?",
      answer: "Yes, subject change is allowed within 30 days of admission with a nominal fee of Rs. 500 per subject.",
    },
    {
      question: "How do I get study material?",
      answer: "Study material is provided in both digital and physical formats. Digital material is available on the student portal, and physical books are sent by post.",
    },
    {
      question: "What if I fail in an exam?",
      answer: "You can appear for the supplementary exam or re-register for the next session. There is no limit on the number of attempts.",
    },
  ],
};
