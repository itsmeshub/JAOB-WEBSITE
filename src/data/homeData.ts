import { LARAVEL_APPLY_URL } from "@/config/externalLinks";

export const heroSlides = [
  {
    id: 1,
    title: "Empowering Education for All",
    subtitle: "Jharkhand Academic Open Board",
    description: "Providing quality open and distance learning opportunities to students across Jharkhand. Enroll now for a brighter future.",
    image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "Apply Now",
    ctaLink: LARAVEL_APPLY_URL,
    secondaryCta: "Learn More",
    secondaryCtaLink: "/about",
  },
  {
    id: 2,
    title: "Admission Open 2024-25",
    subtitle: "Secure Your Future",
    description: "Applications are now open for the academic year 2024-25. Choose from a wide range of courses and start your educational journey today.",
    image: "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "Apply Online",
    ctaLink: LARAVEL_APPLY_URL,
    secondaryCta: "View Courses",
    secondaryCtaLink: "/admission/eligibility",
  },
  {
    id: 3,
    title: "Check Your Results Online",
    subtitle: "Quick & Easy Access",
    description: "Students can now check their examination results online. Enter your roll number and get instant access to your marksheet.",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    cta: "Check Result",
    ctaLink: "/result",
    secondaryCta: "Download Admit Card",
    secondaryCtaLink: "/admit-card",
  },
];

export const quickServices = [
  {
    id: 1,
    title: "Admission",
    description: "Apply for new admission",
    icon: "FileText",
    link: LARAVEL_APPLY_URL,
    color: "bg-primary-50 text-primary-600",
    hoverColor: "hover:bg-primary-100",
  },
  {
    id: 2,
    title: "Result",
    description: "Check examination results",
    icon: "Award",
    link: "/result",
    color: "bg-success-50 text-success-600",
    hoverColor: "hover:bg-success-100",
  },
  {
    id: 3,
    title: "Admit Card",
    description: "Download admit cards",
    icon: "CreditCard",
    link: "/admit-card",
    color: "bg-warning-50 text-warning-600",
    hoverColor: "hover:bg-warning-100",
  },
  {
    id: 4,
    title: "Registration",
    description: "New student registration",
    icon: "UserPlus",
    link: "/student/register",
    color: "bg-accent-50 text-accent-600",
    hoverColor: "hover:bg-accent-100",
  },
  {
    id: 5,
    title: "Verification",
    description: "Verify certificates",
    icon: "ShieldCheck",
    link: "/verification",
    color: "bg-secondary-100 text-secondary-600",
    hoverColor: "hover:bg-secondary-200",
  },
  {
    id: 6,
    title: "Migration",
    description: "Apply for migration",
    icon: "ArrowRightLeft",
    link: "/admission/helpdesk",
    color: "bg-primary-50 text-primary-600",
    hoverColor: "hover:bg-primary-100",
  },
  {
    id: 7,
    title: "Downloads",
    description: "Forms & prospectus",
    icon: "Download",
    link: "/downloads",
    color: "bg-success-50 text-success-600",
    hoverColor: "hover:bg-success-100",
  },
  {
    id: 8,
    title: "Helpdesk",
    description: "Get support & help",
    icon: "HelpCircle",
    link: "/admission/helpdesk",
    color: "bg-error-50 text-error-600",
    hoverColor: "hover:bg-error-100",
  },
];

export const latestNotices = [
  {
    id: 1,
    title: "Admission Notification 2024-25",
    date: "2024-12-15",
    category: "Admission",
    isNew: true,
    link: "#",
  },
  {
    id: 2,
    title: "Examination Schedule Released",
    date: "2024-12-12",
    category: "Examination",
    isNew: true,
    link: "#",
  },
  {
    id: 3,
    title: "Re-evaluation Application Form",
    date: "2024-12-10",
    category: "Result",
    isNew: false,
    link: "#",
  },
  {
    id: 4,
    title: "Migration Certificate Guidelines",
    date: "2024-12-08",
    category: "General",
    isNew: false,
    link: "#",
  },
  {
    id: 5,
    title: "Syllabus Update for Science Stream",
    date: "2024-12-05",
    category: "Academic",
    isNew: false,
    link: "#",
  },
];

export const latestNews = [
  {
    id: 1,
    title: "JAOB Signs MoU with Leading Universities",
    excerpt: "Jharkhand Academic Open Board has signed Memorandum of Understanding with several leading universities to enhance educational opportunities.",
    date: "2024-12-14",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Partnership",
  },
  {
    id: 2,
    title: "Digital Learning Platform Launched",
    excerpt: "New digital learning platform launched to provide online study materials and resources to all registered students.",
    date: "2024-12-11",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Technology",
  },
  {
    id: 3,
    title: "Scholarship Program for Meritorious Students",
    excerpt: "Special scholarship program announced for meritorious students from economically weaker sections.",
    date: "2024-12-09",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Scholarship",
  },
];

export const aboutBoard = {
  title: "About Jharkhand Academic Open Board",
  description: "The Jharkhand Academic Open Board (JAOB) was established with the mission to provide quality education through open and distance learning mode. We are committed to making education accessible to all sections of society, especially those who cannot attend regular schools due to various reasons.",
  highlights: [
    { label: "Established", value: "2008" },
    { label: "Students Enrolled", value: "50,000+" },
    { label: "Study Centers", value: "120+" },
    { label: "Courses Offered", value: "25+" },
  ],
  image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
};

export const chairmanMessage = {
  name: "Dr. Rajesh Kumar Sharma",
  designation: "Chairman, Jharkhand Academic Open Board",
  message: "Education is the most powerful weapon which you can use to change the world. At Jharkhand Academic Open Board, we are dedicated to providing quality education to every student, regardless of their circumstances. Our open learning system ensures that no one is left behind in the pursuit of knowledge. We continuously strive to improve our curriculum, teaching methodologies, and support systems to create an inclusive learning environment.",
  image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
};

export const statistics = [
  { label: "Total Students", value: 50000, suffix: "+" },
  { label: "Study Centers", value: 120, suffix: "+" },
  { label: "Courses", value: 25, suffix: "+" },
  { label: "Pass Percentage", value: 92, suffix: "%" },
  { label: "Districts Covered", value: 24, suffix: "" },
  { label: "Years of Excellence", value: 16, suffix: "+" },
];

export const galleryImages = [
  { id: 1, src: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Campus Building", category: "Campus" },
  { id: 2, src: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Library", category: "Library" },
  { id: 3, src: "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Study Hall", category: "Study" },
  { id: 4, src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Seminar", category: "Events" },
  { id: 5, src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Computer Lab", category: "Lab" },
  { id: 6, src: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Graduation", category: "Events" },
];

export const importantLinks = [
  { id: 1, title: "Ministry of Education", url: "#", icon: "Landmark" },
  { id: 2, title: "Government of Jharkhand", url: "#", icon: "Building" },
  { id: 3, title: "CBSE Board", url: "#", icon: "BookOpen" },
  { id: 4, title: "NCERT", url: "#", icon: "BookMarked" },
  { id: 5, title: "UGC", url: "#", icon: "GraduationCap" },
  { id: 6, title: "AICTE", url: "#", icon: "Award" },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Singh",
    role: "Student, Class 12",
    message: "JAOB has been a blessing for me. As a working student, the flexible schedule allowed me to continue my education without compromising my job. The study materials are excellent.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    role: "Student, Class 10",
    message: "The support from teachers and the quality of education at JAOB is outstanding. I was able to clear my exams with excellent grades thanks to their comprehensive study material.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 3,
    name: "Anita Devi",
    role: "Parent",
    message: "My daughter completed her secondary education through JAOB. The board provided excellent guidance and the examination process was very smooth. Highly recommended!",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export const faqs = [
  {
    question: "What is Jharkhand Academic Open Board?",
    answer: "Jharkhand Academic Open Board (JAOB) is a state-level open school board that provides flexible education opportunities to students who cannot attend regular schools. We offer secondary and senior secondary courses through open and distance learning mode.",
  },
  {
    question: "How can I apply for admission?",
    answer: "You can apply for admission online through our website. Visit the Admission section, click on 'Apply Online', fill in the required details, upload necessary documents, and pay the application fee.",
  },
  {
    question: "What courses are offered by JAOB?",
    answer: "JAOB offers Secondary (Class 10) and Senior Secondary (Class 12) courses in various streams including Science, Commerce, and Arts. We also offer vocational courses.",
  },
  {
    question: "How do I check my result?",
    answer: "You can check your result by visiting the Result page on our website. Enter your roll number and date of birth to view and download your marksheet.",
  },
  {
    question: "What is the fee structure?",
    answer: "The fee structure varies by course and category. Detailed fee information is available on the Fee Structure page under the Admission section. We also offer fee concessions for reserved categories.",
  },
  {
    question: "How can I verify my certificate?",
    answer: "Certificate verification can be done online through our Verification page. Enter your certificate number and other required details to verify the authenticity of your certificate.",
  },
];
