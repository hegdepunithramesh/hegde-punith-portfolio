/**
 * Centralized Portfolio Data for Hegde Punith Ramesh
 * Single source of truth for all sections, metadata, experience, projects, skills, achievements, leadership, and contact.
 */

export const personalInfo = {
  name: "Hegde Punith Ramesh",
  shortName: "Punith Hegde",
  title: "Software Engineer / Developer",
  tagline: "Building practical software, scalable backend systems, and high-performance full-stack applications.",
  bio: "Software engineering student with a deep passion for system architecture, elegant backend services, and crafting refined digital experiences.",
  location: "Bengaluru, India",
  email: "hegdepunithramesh@gmail.com",
  github: "https://github.com/hegdepunithramesh",
  linkedin: "https://www.linkedin.com/in/hegde-punith-ramesh-016ba8296/",
  twitter: "https://twitter.com/hegdepunith",
};

export const education = {
  institution: "University Visvesvaraya College of Engineering (UVCE)",
  degree: "B.Tech - Information Science and Engineering",
  status: "Undergraduate Student",
};

/**
 * Experience Data - Source of Truth (Phase 6 & Kaashvi Updates)
 */
export const experiences = [
  {
    id: "sap-labs-india",
    organization: "SAP Labs India",
    role: "Summer Intern – BTP ADM Team",
    duration: "May 25, 2026 – July 24, 2026",
    periodLabel: "2026",
    isEnterprise: true,
    isRecent: true,
    badgeText: "Enterprise Internship",
    description: "Contributed to backend development of Advanced Document Management solutions using SAP CAP Java on SAP BTP.",
    contributions: [
      "Contributed to backend development of Advanced Document Management solutions using SAP CAP Java on SAP BTP.",
      "Developed backend workflows and service-level features for both proof-of-concept and production applications.",
      "Tested OData APIs using Bruno, analyzed application logs, and debugged integration issues to identify and resolve defects.",
      "Collaborated with developers and mentors to implement fixes and follow enterprise software development practices."
    ],
    technologies: [
      "SAP CAP Java",
      "SAP BTP",
      "Backend Development",
      "OData APIs",
      "Bruno",
      "Application Debugging",
      "Enterprise Software Development"
    ]
  },
  {
    id: "kaashvi-tutorials",
    organization: "Kaashvi Tutorials Learning Platform",
    role: "Core Technical Team",
    duration: "Nov 01, 2025 – May 15, 2026; July 26, 2026 – Present",
    periodLabel: "2025 - Present",
    isEnterprise: false,
    isRecent: false,
    badgeText: "Core Technical Team",
    description: "Contributed to the development and maintenance of the Kaashvi Learner's App and platform management systems serving 1,000+ downloads and 500+ active users across Karnataka State Board and CBSE (Classes 8–10).",
    appLink: "https://play.google.com/store/apps/details?id=com.kaashvi.tutorapp",
    exactMetrics: [
      { label: "App Downloads", value: "1,000+ Downloads" },
      { label: "Active Users", value: "500+ Active Users" },
      { label: "Target Scope", value: "Classes 8–10 (State/CBSE)" }
    ],
    contributions: [
      "Developed and maintained the Kaashvi Learner's App, serving 1,000+ downloads and 500+ active users across Karnataka State Board and CBSE (Classes 8–10).",
      "Implemented secure authentication and authorization and managed application releases and updates on the Google Play Store.",
      "Designed and developed an Admin Management Web Application for managing student data and platform content.",
      "Built backend services using Node.js, Express.js, and Firebase, while using Android Studio and GitHub for development and collaboration."
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Firebase",
      "Android Studio",
      "GitHub",
      "Backend Development",
      "Authentication & Authorization",
      "Admin Management",
      "Application Development"
    ]
  }
];

/**
 * Projects Data - Source of Truth (Phase 7 & Extended Case Study Schema)
 */
export const projects = [
  {
    id: "eventpilot",
    slug: "eventpilot",
    number: "01",
    title: "EventPilot",
    fullTitle: "Event Registration & Volunteer Management Platform",
    category: "Full-Stack Web Development · Event Management · Backend Engineering",
    tagline: "From Registration to Recognition",
    featured: true,
    description: "A full-stack event registration and volunteer management platform designed to handle event workflows from registration and team management to QR-based attendance, certificates, communication, and analytics.",
    overview: "A full-stack event registration and volunteer management platform built to stream line the event lifecycle - from participant registration and team management to attendance, certificates, communication, and post-event analytics.",
    problem: "Event workflows often require organizers to manage multiple disconnected processes: participant registration, team registration, custom form collection, volunteer management, payment information, attendance, certificates, announcements, and post-event data.",
    solution: "EventPilot unifies these workflows into a single full-stack platform connecting Registration → Team Management → Event Participation → Attendance → Certificates → Communication → Analytics.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "JWT",
      "Zod",
      "GitHub Actions"
    ],
    caseStudyTechnologies: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "React Query",
      "Zustand",
      "React Router v6",
      "Node.js",
      "Express.js",
      "Zod",
      "PostgreSQL",
      "Supabase",
      "Supabase Storage",
      "JWT",
      "Vitest",
      "Supertest",
      "GitHub Actions",
      "Resend API / Verifyly Email",
      "Gemini AI"
    ],
    groupedTechnologies: {
      Backend: ["Node.js", "Express.js"],
      Database: ["PostgreSQL", "Supabase"],
      Security: ["JWT", "Zod"],
      Testing: ["Vitest", "Supertest"],
      DevOps: ["GitHub Actions"]
    },
    architectureNodes: [
      { layer: "Client & Presentation", items: ["React 18 / Vite / Tailwind CSS", "Role-Based Dashboards", "Dynamic Form Builder (14+ Field Types)"] },
      { layer: "API & Validation Layer", items: ["Node.js & Express.js REST API", "Centralized Zod Input Validation", "JWT Authentication & Timing-Safe Hash Comparison"] },
      { layer: "Backend Infrastructure & Storage", items: ["Role-Based Access Control (RBAC)", "PostgreSQL via Supabase", "Supabase Storage (PDF Uploads)", "Resend Email Dispatch"] },
      { layer: "Testing & Automation", items: ["GitHub Actions Automated CI/CD (Node.js 22)", "Vitest & Supertest Suites (16 Test Files, 43 Test Cases, 100% Pass Rate)"] }
    ],
    formBuilderFeatures: [
      "14+ question field types",
      "Drag-and-drop reordering",
      "Real-time field preview",
      "Configurable validation rules",
      "Indian phone validation (10-digit constraints)",
      "USN validation",
      "Pincode & UPI ID validation",
      "Custom regex validation & CSV import/export"
    ],
    registrationModels: [
      { model: "Volunteer Registration", details: "Manual approval workflow, team assignments, task management, and QR attendance tracking." },
      { model: "Participant Registration", details: "Automatic acceptance model with optional payment verification upload." },
      { model: "Team Registration", details: "Team leader code generation (e.g. TEAM-2027-A3F9B2); complete upon reaching minimum team size." }
    ],
    teamWorkflow: [
      "Team leader creates a team",
      "System generates unique team code (e.g. TEAM-2027-A3F9B2)",
      "Members enter code during registration",
      "Reaching minimum size completes team for organizer review"
    ],
    attendanceFeatures: [
      "Accepted volunteer requirement check",
      "Camera QR scanner integration",
      "Cryptographically random scan tokens",
      "Duplicate scan prevention"
    ],
    certificateFeatures: [
      "Verifiable digital certificates distribution",
      "Automatic mapping by name / ID / email",
      "Public certificate verification by verification code",
      "Published certificate visibility controls"
    ],
    paymentFeatures: [
      "Participant pays and uploads payment screenshot",
      "Organizer reviews and verifies payment status",
      "Automated email confirmation sent upon verification",
      "Applies to participant & team registration types"
    ],
    analyticsFeatures: [
      "Post-event rating analytics & feedback reviews",
      "Attendance, volunteer, registration & certificate analytics",
      "CSV data export & bulk CSV import"
    ],
    communicationFeatures: [
      "Automated email notifications via Resend API / Verifyly Email Service",
      "Broadcast announcements",
      "Support ticket system, bug reports & feature suggestions"
    ],
    aiFeatures: [
      "Gemini AI event description generation",
      "Gemini AI event schedule generation API"
    ],
    securityMeasures: [
      "JWT authentication with 7-day expiry",
      "Role-Based Access Control (RBAC)",
      "Centralized Zod validation for RFC-style emails, 10-digit mobile numbers, UPI IDs, and custom rules",
      "Timing-attack mitigation (dummy bcrypt hash comparison for non-existent users)",
      "Secure QR token handling & Admin self-deactivation protection"
    ],
    testingDetails: [
      "16 test files",
      "43 test cases",
      "100% pass rate",
      "Vitest + Supertest integration suite",
      "Covers Auth, Admin, Events, Applications, Teams, Attendance, Certificates, Forms, Announcements, Reports, Feedback, Support, AI, Keepalive",
      "HTML & Markdown automated test reports on GitHub Actions (Node.js 22)"
    ],
    deploymentDetails: [
      { service: "Frontend UI", provider: "Vercel" },
      { service: "Backend REST API", provider: "Render" },
      { service: "Database & Storage", provider: "Supabase" }
    ],
    keyFeatures: [
      "Event registration & volunteer management",
      "Team registrations & custom forms (14+ field types)",
      "QR-based attendance scanning",
      "Verifiable digital certificates",
      "Payment screenshot verification workflow",
      "Post-event rating analytics & CSV import/export",
      "Broadcast announcements & automated email notifications",
      "Vitest + Supertest test suite & GitHub Actions CI/CD"
    ],
    engineeringHighlights: [
      "Automated GitHub Actions CI/CD pipeline on Node.js 22",
      "Vitest and Supertest test suites (16 test files, 43 test cases, 100% pass rate)",
      "Centralized Zod schema validation & Role-Based Access Control (RBAC)",
      "Supabase Storage & PostgreSQL relational database architecture"
    ],
    exactMetrics: [
      { label: "Test Suites", value: "16 Test Files" },
      { label: "Test Cases", value: "43 Test Cases" },
      { label: "Test Pass Rate", value: "100% Pass Rate" }
    ],
    outcome: "EventPilot brings multiple event-management workflows into a unified full-stack platform, combining registration, participant and volunteer management, attendance, certificates, communication, analytics, validation, authentication, and automated testing.",
    takeaway: "EventPilot strengthened my experience in building full-stack systems where frontend workflows, backend business logic, database operations, validation, authentication, testing, and deployment workflows need to work together as one product.",
    liveDemo: "https://event-pilot-khaki.vercel.app/",
    github: null,
    challenges: [
      "Complex registration workflows: Supporting configurable registration forms and team-based registration",
      "Data validation: Maintaining consistent and validated user input across different workflows with Zod",
      "Role-based access: Managing permissions across different types of users (Super Admin, Organizer, Volunteer, Participant)",
      "Attendance: Connecting participant registration with QR-based attendance scanning",
      "Post-event workflows: Connecting attendance, certificates, communication, and analytics",
      "Regression testing: Maintaining automated Vitest + Supertest coverage as the application evolves"
    ]
  },
  {
    id: "student-expense-tracker",
    slug: "student-expense-tracker",
    number: "02",
    title: "Student Expense Tracker",
    fullTitle: "Student Expense Tracker - Personal Finance App",
    category: "Full-Stack · Personal Finance · Backend Systems",
    tagline: "Personal Finance Management for Students",
    featured: false,
    description: "A full-stack personal finance platform for students and young adults to track income and expenses, manage budgets, set savings goals, handle debts, and understand spending through interactive analytics.",
    overview: "A full-stack financial management application that brings income/expense tracking, category budgets, savings goals, debt/loan records, and visual dashboard analytics into a single connected workspace.",
    problem: "Students and young adults often struggle to understand where their money goes, how much they have available, whether they are exceeding category budgets, and tracking money owed to or by others across disconnected note apps or spreadsheets.",
    solution: "Student Expense Tracker unifies these workflows into a connected financial engine: User → Wallet → Income/Expenses → Categories → Budgets → Savings Goals → Debts/Loans → Visual Analytics Dashboard, ensuring modifications to transactions dynamically update related balances and budgets.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "REST APIs"
    ],
    caseStudyTechnologies: [
      "React 19",
      "Vite 6",
      "React Router v7",
      "Axios",
      "Material UI",
      "Recharts",
      "Framer Motion",
      "Node.js",
      "Express.js 4",
      "PostgreSQL",
      "JWT",
      "bcryptjs",
      "Multer"
    ],
    groupedTechnologies: {
      Frontend: ["React 19", "Vite 6", "React Router v7", "Axios", "Material UI", "Recharts", "Framer Motion"],
      Backend: ["Node.js", "Express.js 4 (ES Modules)", "JWT Authentication", "HTTP-Only Cookies & Bearer Tokens", "bcryptjs", "Multer Avatar Uploads"],
      Database: ["PostgreSQL (Relational Storage)", "Custom Pool Wrapper Layer", "AsyncLocalStorage Context", "Supabase/Neon Pooler Failover"]
    },
    architectureNodes: [
      { layer: "Client & Presentation", items: ["React 19 / Vite 6 / Material UI", "Recharts Dashboard Visualizations", "AuthContext & ToastProvider Layer"] },
      { layer: "API & Axios Layer", items: ["Centralized Axios Interceptors", "Automatic Token Injection", "REST API Endpoint Routing"] },
      { layer: "Express Controllers & Models", items: ["Node.js & Express.js Controllers", "JWT / HTTP-Only Cookie Session Guard", "Bcrypt Hashing & Multer Avatars"] },
      { layer: "Database Pool & Data Layer", items: ["PostgreSQL Relational Storage", "Custom Connection Pool Wrapper Layer", "Transactional SQL & Foreign Key Constraints"] }
    ],
    walletFeatures: [
      "Set initial balance",
      "Add funds workflow",
      "Live current balance tracking",
      "Cumulative spending logs"
    ],
    transactionFeatures: [
      "Income & expense entry with category assignment",
      "Transaction history filtering & search",
      "Automatic budget refund recalculation upon transaction edit/deletion"
    ],
    budgetFeatures: [
      "Monthly & custom-period budget limits",
      "Category-specific spending thresholds",
      "Live remaining budget calculation & threshold alert indicators"
    ],
    savingsFeatures: [
      "Custom savings goals with target amounts & deadlines",
      "Incremental fund contribution",
      "Celebratory progress feedback upon goal completion"
    ],
    debtFeatures: [
      "Track money owed to or by others with due dates",
      "Status transition (Pending → Settled)",
      "Balance adjustment upon debt settlement"
    ],
    analyticsFeatures: [
      "Category expense breakdown (Pie Chart)",
      "Monthly spending trends (Line Chart)",
      "Balance & transaction summaries (Recharts)"
    ],
    databaseTables: [
      "users",
      "categories",
      "wallet",
      "budget",
      "transactions",
      "income",
      "expenses",
      "saving_goals",
      "debts_loans",
      "budget_alerts",
      "notifications",
      "recurring_transactions",
      "tags",
      "audit_logs"
    ],
    apiEndpoints: [
      "/auth",
      "/api/wallet",
      "/api/budget",
      "/api/categories",
      "/api/transactions",
      "/api/debts",
      "/api/savings",
      "/api/profile",
      "/api/dashboard"
    ],
    securityMeasures: [
      "Bcryptjs password hashing",
      "JWT authentication via HTTP-only cookies and Bearer headers",
      "Configurable CORS credential whitelist",
      "Protected backend route middleware"
    ],
    keyFeatures: [
      "Income & expense tracking",
      "Category-based monthly & custom budgets",
      "Savings goals progress tracking",
      "Debt & loan management (Pending → Settled)",
      "Financial analytics dashboard (Recharts)",
      "Wallet & current balance management"
    ],
    engineeringHighlights: [
      "Interconnected financial data workflow (Transactions → Budgets → Wallet)",
      "Custom PostgreSQL pool wrapper with AsyncLocalStorage context & connection failover",
      "Transaction edit/delete automatic budget refund recalculations",
      "Modular REST API architecture across 9 endpoint domains"
    ],
    exactMetrics: null,
    outcome: "Student Expense Tracker evolved into a complete personal finance management system rather than a basic expense logger, combining transaction management, budgeting, savings goals, debt tracking, wallet management, and visual financial analytics in one application.",
    liveDemo: "https://student-expense-frontend.onrender.com",
    github: null,
    challenges: [
      "Maintaining financial consistency across wallet, budgets, and savings upon transaction edits/deletions",
      "Relational financial modeling across 14 tables with check constraints and foreign keys",
      "Custom PostgreSQL pool wrapper supporting dynamic parameter normalization, transaction context, and failover"
    ]
  },
  {
    id: "personal-blog-website",
    slug: "personal-blog-website",
    number: "03",
    title: "Personal Blog Website",
    fullTitle: "Personal Blog Website - Server-Rendered EJS Application",
    category: "Backend Development · Server-Side Rendering · CRUD",
    tagline: "Understanding Frontend–Backend Integration",
    featured: false,
    description: "A server-rendered blog application built to understand frontend-backend integration with Node.js, Express.js, and EJS, while implementing complete CRUD workflows with file-backed persistence.",
    overview: "A lightweight server-rendered blogging application built with Node.js, Express.js, and EJS to understand how frontend views, backend routes, CRUD operations, and persistent data work together in a traditional web application.",
    whyBuilt: "I built this project primarily to understand how the frontend and backend communicate in a traditional server-rendered web application: how HTTP requests reach backend routes, how forms submit data, how Express handles logic, how data is passed into EJS templates, and how CRUD operations modify data persisted across server restarts.",
    technologies: [
      "Node.js",
      "Express.js",
      "EJS",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    caseStudyTechnologies: [
      "Node.js",
      "Express.js 5.1.0",
      "EJS 3.1.10",
      "express-ejs-layouts",
      "body-parser",
      "Vanilla CSS",
      "JavaScript"
    ],
    groupedTechnologies: {
      Runtime: ["Node.js"],
      Backend: ["Express.js 5.1.0"],
      Templating: ["EJS 3.1.10", "express-ejs-layouts"],
      RequestParsing: ["body-parser"],
      Styling: ["Vanilla CSS", "Google Fonts / Poppins"]
    },
    architectureNodes: [
      { layer: "Client / Browser", items: ["Browser Form Submissions", "Vanilla CSS & Poppins Typography", "Client-Side Delete Confirmation"] },
      { layer: "Express Router & Controllers", items: ["Express.js 5.1.0 HTTP Route Handlers", "Controller Request Handling Logic", "URL Linkify Helper Utility"] },
      { layer: "EJS Template Rendering Engine", items: ["views/layout.ejs Master Wrapper", "EJS Page Views (home, post, compose, edit)", "express-ejs-layouts Integration"] },
      { layer: "File-Backed Data Layer", items: ["In-Memory Posts Array ({ title, content })", "File-Backed data.json Storage", "Synchronous File Sync on Startup & Mutation"] }
    ],
    crudOperations: [
      { op: "CREATE", route: "POST /compose", desc: "User submits compose form; server creates post and persists to data.json." },
      { op: "READ", route: "GET / & GET /posts/:index", desc: "Home page lists all posts; individual post view renders post details by index." },
      { op: "UPDATE", route: "GET /edit/:index & POST /edit/:index", desc: "Displays pre-filled edit form; POST saves changes to data.json." },
      { op: "DELETE", route: "POST /delete/:index", desc: "Client confirmation triggers POST request; server removes post from data.json." }
    ],
    routingTable: [
      { method: "GET", path: "/", action: "Displays all blog posts on home view" },
      { method: "GET", path: "/compose", action: "Displays post creation form" },
      { method: "POST", path: "/compose", action: "Processes & persists new post" },
      { method: "GET", path: "/posts/:index", action: "Renders specific post by array index" },
      { method: "GET", path: "/edit/:index", action: "Displays post edit form" },
      { method: "POST", path: "/edit/:index", action: "Updates and saves post changes" },
      { method: "POST", path: "/delete/:index", action: "Deletes post and updates data.json" }
    ],
    viewsList: [
      "layout.ejs (master layout wrapper)",
      "home.ejs (post feed view)",
      "post.ejs (individual post view)",
      "compose.ejs (create post form)",
      "edit.ejs (edit post form)"
    ],
    fileTree: [
      "blog-app/",
      "├── app.js",
      "├── data.json",
      "├── package.json",
      "├── public/css/style.css",
      "└── views/ (compose.ejs, edit.ejs, home.ejs, layout.ejs, post.ejs)"
    ],
    supportingFeatures: [
      "URL Linkification (converts raw HTTP/HTTPS URLs inside post content into clickable HTML links)",
      "Delete confirmation popup (client-side JS popup before POST form submission)"
    ],
    learningOutcomes: [
      "Node.js & Express.js HTTP request handling",
      "Routing table mapping for HTTP GET and POST methods",
      "EJS server-side rendering & dynamic view context injection",
      "Browser form payload submission & body-parser middleware",
      "File-backed JSON data persistence lifecycle"
    ],
    keyFeatures: [
      "Frontend-backend integration",
      "Express.js routing",
      "EJS server-side rendering",
      "CRUD operations",
      "Form handling",
      "File-backed persistence",
      "Dynamic content rendering"
    ],
    engineeringHighlights: [
      "Request-to-render lifecycle transparency (Browser → Express → EJS → HTML)",
      "File-backed persistence model via JSON synchronization",
      "Full CRUD routing table across GET and POST endpoints",
      "Master layout template inheritance with express-ejs-layouts"
    ],
    takeaway: "This project gave me a practical foundation in backend development by making the request lifecycle visible from end to end - from a browser form, through an Express route, into application logic and persistence, and finally back to a rendered HTML page.",
    futureImprovements: [
      "Database-backed persistence (PostgreSQL / MongoDB)",
      "User authentication & authorization",
      "Form input validation & sanitization",
      "REST API separation",
      "Image file uploads",
      "Pagination & post search"
    ],
    exactMetrics: null,
    liveDemo: "https://my-blog-rg3p.onrender.com",
    github: null,
    challenges: [
      "Understanding traditional server-side rendering & view template data inheritance",
      "Handling synchronous file persistence across CREATE, UPDATE, and DELETE operations",
      "Managing array index-based URL routing & redirection flows"
    ]
  },
  {
    id: "chronosphere",
    slug: "chronosphere",
    number: "04",
    title: "ChronoSphere",
    fullTitle: "ChronoSphere - Historical Timeline Web Application",
    category: "Backend Development · API Integration · Server-Side Rendering",
    tagline: "Explore History Through Time",
    featured: false,
    description: "A historical timeline explorer that combines external API integration, server-side data processing, and interactive timeline visualization to explore events, births, and deaths from any selected date.",
    overview: "A web-based historical timeline explorer that lets users select a specific calendar date and year to discover historical events, notable births, and influential deaths retrieved from an external historical records API.",
    idea: "Users select a date (YYYY-MM-DD) and year. ChronoSphere queries the external Muffin Labs History API (https://history.muffinlabs.com/date/{month}/{day}), parses and validates the date parameters, filters records so that event.year <= queryYear, calculates metadata, and renders an interactive timeline.",
    technologies: [
      "Node.js",
      "Express.js",
      "EJS",
      "Axios",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    caseStudyTechnologies: [
      "Node.js",
      "Express.js",
      "EJS",
      "Axios",
      "Vanilla JavaScript",
      "CSS3",
      "Nodemon"
    ],
    groupedTechnologies: {
      Runtime: ["Node.js"],
      Backend: ["Express.js"],
      Templating: ["EJS View Engine"],
      HttpClient: ["Axios"],
      Frontend: ["HTML5", "CSS3", "Vanilla JavaScript (main.js)"],
      Development: ["Nodemon"]
    },
    architectureNodes: [
      { layer: "Browser / Client Interaction", items: ["Date Input Selector & Future Date Guard", "Confirmation Modal UI", "IntersectionObserver Scroll Animations (main.js)"] },
      { layer: "Express Server & Route Processing", items: ["GET / & GET /timeline?date=YYYY-MM-DD", "Date Parsing & Validation Middleware", "Error Handling & User Banners"] },
      { layer: "External API Integration Layer", items: ["Axios HTTP Client Querying Muffin Labs API", "https://history.muffinlabs.com/date/{month}/{day}", "Wikipedia Reference Link Payload Ingestion"] },
      { layer: "Backend Filtering & EJS Rendering", items: ["Server-Side Year Filtering (event.year <= queryYear)", "Category Splitting (Events, Births, Deaths)", "EJS Server Rendering (views/results.ejs)"] }
    ],
    apiIntegrationDetails: "Queries the external Muffin Labs History API (https://history.muffinlabs.com/date/{month}/{day}) using Axios to fetch raw historical records for Events, Births, and Deaths with Wikipedia reference links.",
    dateProcessingDetails: "Parses requested YYYY-MM-DD input, validates format, enforces future date protection, and applies server-side year threshold filtering (event.year <= queryYear) before passing data to EJS templates.",
    timelineCategories: [
      "EVENTS (Historical events on selected date)",
      "BIRTHS (Notable births on selected date)",
      "DEATHS (Influential deaths on selected date)"
    ],
    clientSideInteractions: [
      "Date Input Validation (future date guard)",
      "Confirmation Modal (explaining date exploration)",
      "IntersectionObserver Scroll Animations (timeline card reveals)"
    ],
    fileTree: [
      "ChronoSphere/",
      "├── app.js (Express server entry point)",
      "├── routes/index.js (application routes & API logic)",
      "├── views/ (index.ejs, results.ejs, partials/header.ejs, footer.ejs)",
      "└── public/ (css/style.css, js/main.js, images/)"
    ],
    routingTable: [
      { method: "GET", path: "/", action: "Renders ChronoSphere landing page view (index.ejs)" },
      { method: "GET", path: "/timeline?date=YYYY-MM-DD", action: "Parses & validates date, fetches API data, filters by year, renders results view" }
    ],
    errorHandling: [
      "Invalid date format protection",
      "Future date query prevention",
      "No historical data feedback",
      "External API failure graceful error banners",
      "Global 404 handler"
    ],
    learningOutcomes: [
      "Node.js & Express external HTTP API integration using Axios",
      "URL query parameter parsing, validation & date manipulation",
      "Backend array filtering & data transformation prior to rendering",
      "Express + EJS server-side HTML template rendering",
      "Handling external service dependencies & graceful error recovery"
    ],
    keyFeatures: [
      "Historical API integration",
      "Date-based search & validation",
      "Server-side year filtering",
      "Events / Births / Deaths categorization",
      "Wikipedia reference links",
      "Responsive timeline UI",
      "Scroll-triggered animations"
    ],
    engineeringHighlights: [
      "External API integration with Axios client (Muffin Labs History API)",
      "Server-side year threshold filtering (event.year <= queryYear)",
      "Complete request-to-timeline pipeline (User → Express → API → EJS → Browser)",
      "Vanilla client JS validation, confirmation modal & IntersectionObserver reveals"
    ],
    takeaway: "ChronoSphere helped me understand the complete flow of a data-driven server-rendered application - from user input and HTTP routing to external API consumption, backend filtering, EJS rendering, and client-side interaction.",
    exactMetrics: null,
    liveDemo: "https://chronosphere-1.onrender.com",
    github: null,
    challenges: [
      "Handling external API dependency & potential request failure states gracefully",
      "Implementing server-side date validation and future date query prevention",
      "Filtering month/day external API payloads to strictly respect user-selected query years (event.year <= queryYear)"
    ]
  }
];

/**
 * Categorized Tech Stack Data - Source of Truth (Phase 9)
 */
export const techStackCategorized = [
  {
    category: "PROGRAMMING LANGUAGES",
    items: ["C", "C++", "JavaScript", "Python", "Kotlin"]
  },
  {
    category: "WEB DEVELOPMENT",
    items: ["Node.js", "Express.js", "HTML5", "CSS3", "EJS", "REST APIs", "Vite"]
  },
  {
    category: "DATABASES & BACKEND",
    items: ["PostgreSQL", "MySQL", "Firebase", "SQL", "SAP CAP Java"]
  },
  {
    category: "DEVOPS & CLOUD",
    items: ["CI/CD Pipelines", "Vercel", "Render", "Supabase", "Firebase"]
  },
  {
    category: "DEVELOPER TOOLS",
    items: ["Git", "GitHub", "Android Studio", "VS Code", "Bruno"]
  },
  {
    category: "COMPUTER SCIENCE FUNDAMENTALS",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems"
    ]
  }
];

/**
 * Achievements Data - Source of Truth (Phase 9)
 */
export const academicAchievements = [
  {
    id: "sslc",
    stat: "98.4%",
    title: "SSLC (Class 10)",
    institution: "Church English Medium School, Ajekar",
    type: "Academic Excellence"
  },
  {
    id: "class-12",
    stat: "90.6%",
    title: "Class 12",
    institution: "Jawahar Navodaya Vidyalaya, Udupi",
    type: "Academic Excellence"
  },
  {
    id: "kcet",
    stat: "Rank 5783",
    title: "KCET Engineering Entrance",
    institution: "KCET Examination",
    type: "Competitive Entrance Rank"
  },
  {
    id: "university",
    stat: "8.98 / 10",
    title: "B.Tech - Information Science & Engineering",
    institution: "University Visvesvaraya College of Engineering, Bangalore",
    type: "Undergraduate Academic Record"
  }
];

export const competitiveAchievements = [
  {
    id: "bull-market",
    stat: "7th Rank",
    title: "Bull Market 6.0",
    description: "National-level trading event.",
    type: "Competitive Technical Event"
  }
];

export const ambassadorAchievements = [
  {
    id: "techx-ambassador",
    title: "IEEE TechX CS SYP Region 10",
    role: "Selected Student Ambassador",
    description: "Supporting technical student engagement initiatives.",
    type: "Student Leadership & Engagement"
  }
];

/**
 * Leadership Data - Source of Truth (Phase 9)
 */
export const leadershipPositions = [
  {
    id: "ieee-uvce-vice-chair",
    number: "01",
    organization: "IEEE UVCE",
    role: "Vice Chairperson",
    period: "Present",
    yearLabel: "2026"
  },
  {
    id: "ieee-uvce-gen-sec",
    number: "02",
    organization: "IEEE UVCE",
    role: "General Secretary",
    period: "May 2025 - May 2026",
    yearLabel: "2025"
  },
  {
    id: "ieee-bangalore-spac",
    number: "03",
    organization: "IEEE Bangalore Section",
    role: "SPAC Co-Lead",
    period: "Jan 2025 - Apr 2025",
    yearLabel: "2025"
  },
  {
    id: "ieee-uvce-rep-comm",
    number: "04",
    organization: "IEEE UVCE",
    role: "Representative Committee Member",
    period: "May 2023 - Apr 2024",
    yearLabel: "2023"
  },
  {
    id: "jnv-vice-captain",
    number: "05",
    organization: "Jawahar Navodaya Vidyalaya, Udupi",
    role: "Vice Captain",
    period: "May 2021 - Apr 2023",
    yearLabel: "2021"
  }
];

export const communityEventContributions = {
  title: "Technical Event Organization",
  events: ["CODEFURY 8.0", "KAGADA 2025", "IMPETUS 25.0"],
  description: "Coordinated major technical events including CODEFURY 8.0, KAGADA 2025, and IMPETUS 25.0, demonstrating leadership, event management, and team coordination."
};

export const ieeeSacVolunteer = {
  title: "IEEE SAC Volunteer",
  organization: "IEEE Student Activities Committee",
  description: "Contributed to section-level IEEE initiatives and supported inter-college technical engagement."
};
