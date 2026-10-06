const GH = "https://github.com/nesrine26rouissi";

export const profile = {
  name: "Nesrine Rouissi",
  first: "Nesrine",
  last: "Rouissi",
  title: "Computer Engineering Student",
  tracks: ["Business Intelligence", "Data Science", "Artificial Intelligence"],
  email: "rouissinesrine3@gmail.com",
  phone: "+33 7 69 80 46 05",
  address: "Angers, France",
  linkedin: "https://linkedin.com/in/nesrine-rouissi-b19614266",
  github: GH,
  about:
    "Computer engineering student (ESPRIT) specializing in Data Science, in my final year through an exchange semester at ESEO Angers. I design predictive modeling, Business Intelligence and generative AI solutions that answer a concrete business need. Seeking a 6-month end-of-studies internship starting February 2027.",
};

export const facts = [
  { n: "4", label: "Internships" },
  { n: "7", label: "Projects" },
  { n: "1st", label: "Hackathon prize" },
  { n: "3", label: "Languages" },
];

export const experience = [
  {
    org: "EY Tunisia",
    sub: "Ernst & Young",
    role: "Data Science Engineering Intern",
    period: "06/2026 – 07/2026",
    length: "2 months",
    points: [
      {
        t: "AI News Presenter Platform (Express FM)",
        d: "Architecture of a virtual AI presenter — news collection, semantic deduplication, categorization, importance scoring, summarization, TV script generation, speech synthesis and animated avatar.",
        href: `${GH}/vocalis`,
      },
      {
        t: "GenAI Assistant for Data Engineering & BI",
        d: "POC on how generative AI (Claude, MCP) can automate ETL pipelines, SQL scripts, DAX measures and Power Query code, benchmarking manual vs AI-assisted vs MCP-assisted development.",
        href: `${GH}/poc-etl-ia`,
      },
    ],
    tools: ["Python", "FastAPI", "PostgreSQL", "SQL Server", "SSIS", "Power BI", "Claude/MCP", "LLM"],
  },
  {
    org: "STB Bank",
    role: "Data / BI Analyst Intern",
    period: "06/2025 – 07/2025",
    length: "1.5 months",
    points: [
      { t: "Cash-flow & liquidity forecasting", d: "Analyzed and optimized predicted cash flows and liquidity across bank branches, and built predictive models using real financial and banking data.", href: `${GH}/stb-treasury-liquidity-forecasting` },
    ],
    tools: ["Python", "Statistical Analysis", "Dimensional Modeling"],
  },
  {
    org: "AVAXIA",
    role: "Intern — Final Year Project",
    period: "02/2024 – 05/2024",
    length: "4 months",
    points: [
      { t: "SAP monitoring BI solution", d: "Designed and developed a Business Intelligence solution for monitoring SAP systems, with dimensional modeling and an ETL process feeding the dashboards.", href: `${GH}/sap-monitoring-bi-etl` },
    ],
    tools: ["Power BI", "DAX", "Power Query", "ETL"],
  },
  {
    org: "ELITINFO",
    role: "Intern",
    period: "07/2023",
    length: "1 month",
    points: [{ t: "SAGE BI Reporting", d: "Introduced to SAGE BI reporting features and configuration." }],
    tools: [],
  },
];

export const projects = [
  { title: "ALIA", sub: "AI avatar for medical & pharmaceutical excellence", cat: "AI", d: "Intelligent conversational assistant improving medical representatives' training and their interactions with healthcare professionals.", size: "wide" },
  { title: "TB-Detect", sub: "Tuberculosis screening on chest X-rays", cat: "AI", d: "Deep Learning system for automatic tuberculosis detection on chest X-rays, designed for rapid screening in resource-limited environments.", href: `${GH}/tb-xray-screening` },
  { title: "Breast Cancer Detection", sub: "CRISP-DM predictive model", cat: "AI", d: "Predictive model following the CRISP-DM methodology, comparison of several algorithms and deployment of a classifier through a simple interface.", href: `${GH}/breast-cancer-screening` },
  { title: "Overfitted — AI Mode", sub: "Intelligent e-commerce platform", cat: "AI", d: "Combines computer vision, NLP, and generative AI for personalized recommendations, virtual try-on, and content generation.", size: "wide" },
  { title: "Hospital Dashboards", sub: "Power BI for hospital management", cat: "BI", d: "Complete BI solution: snowflake modeling, ETL processes and interactive dashboards tracking KPIs — patient satisfaction, occupancy rate, cost per service." },
  { title: "Alzheimer's Disease", sub: "MLOps pipeline", cat: "AI", d: "Contributed to a group MLOps pipeline for Alzheimer's disease classification: experiment tracking and model logging with MLflow, a prediction API built with FastAPI, and local containerization with Docker to test deployment." },
  { title: "HACK EL MAKEN", sub: "1st prize · Hackathon", cat: "Web", d: "Online booking platform for MAKAN site activities (calligraphy, coworking, design lab…).", badge: "1st prize" },
];

export const skills = [
  { g: "AI & Machine Learning", items: ["Machine Learning", "Deep Learning (TensorFlow/Keras)", "NLP", "Generative AI", "LLM", "RAG", "OCR", "Computer vision", "Diffusion models", "Prompt engineering", "Scikit-learn", "XGBoost", "CRISP-DM", "Statistical analysis"] },
  { g: "Programming", items: ["Python (pandas, NumPy)", "R", "SQL", "C++", "JavaScript", "PHP", "HTML/CSS"] },
  { g: "Data & BI", items: ["Power BI", "DAX", "Power Query", "ETL (SSIS)", "Dimensional modeling"] },
  { g: "Databases", items: ["PostgreSQL", "SQL Server", "Oracle", "MySQL", "MongoDB"] },
  { g: "MLOps & tools", items: ["Git", "Docker", "MLflow", "FastAPI", "Claude/MCP", "Node.js", "Symfony", "JavaFX", "FlutterFlow"] },
];

export const education = [
  { school: "ESEO Angers", deg: "Exchange Semester — DISA program, Biomedical Track", y: "09/2026 – 02/2027", now: true },
  { school: "ESPRIT", deg: "Engineering degree in Computer Science, Data Science specialization — École Supérieure Privée d'Ingénierie et de Technologie (degree awarded after the final-year internship)", y: "2024 – 2027" },
  { school: "ESEN, University of Manouba", deg: "Bachelor's Degree in Business Computing, Business Intelligence Track", y: "2022 – 2024" },
];

export const languages = [
  { l: "Arabic", v: "Native", p: 100 },
  { l: "French", v: "DELF B2", p: 78 },
  { l: "English", v: "B2", p: 78 },
];

export const certifications = ["Applications of AI for Anomaly Detection", "Fundamentals of Deep Learning"];

export const beyond = [
  {
    org: "ESEN Android Club",
    role: "Treasurer",
    school: "ESEN, University of Manouba",
    tags: ["Treasury", "Student club", "Mobile development community"],
    icon: "◈",
  },
  {
    org: "AIESEC University",
    role: "IR & Data Department",
    school: "Middle Manager MoGX+TM",
    tags: ["IR & Data", "Talent management", "Information management", "Global volunteer programs"],
    icon: "◉",
  },
];


