const GH = "https://github.com/nesrine26rouissi";

export const profile = {
  name: "Nesrine Rouissi",
  first: "Nesrine",
  last: "Rouissi",
  title: "Computer Engineering Student",
  tracks: ["Business Intelligence", "Data Science", "Artificial Intelligence"],
  email: "rouissinesrine3@gmail.com",
  phone: "+33 07 69 80 46 05",
  address: "18 Rue Paul Bert, 49100 Angers, France",
  linkedin: "https://linkedin.com/in/nesrine-rouissi-b19614266",
  github: GH,
  about:
    "Third-year Computer Engineering student (final-year exchange semester at ESEO Angers) specializing in Business Intelligence and Data Science. Hands-on experience across Data Science, Business Intelligence and Artificial Intelligence projects, designing BI solutions and predictive models that turn complex data into actionable insights, with a focus on applying generative AI to Data & BI workflows.",
};

export const facts = [
  { n: "4", label: "Internships" },
  { n: "9", label: "Projects" },
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
  { title: "Student Performance Analysis", sub: "Statistics in R", cat: "BI", d: "Statistical analysis in R, identification of key factors and predictive models to detect at-risk students." },
  { title: "Alzheimer's Disease Detection", sub: "MLOps pipeline · group project", cat: "AI", d: "Contributed to a group MLOps pipeline for Alzheimer's disease classification: experiment tracking and model logging with MLflow, a prediction API built with FastAPI, and local containerization with Docker to test deployment." },
  { title: "HACK EL MAKEN", sub: "1st prize · Hackathon", cat: "Web", d: "Online booking platform for MAKAN site activities (calligraphy, coworking, design lab…).", badge: "1st prize" },
  { title: "Year-end Integrated Project", sub: "E-commerce website", cat: "Web", size: "wide", d: "Design of an e-commerce website for clothing and accessories." },
];

export const skills = [
  { g: "Programming", items: ["Python", "R", "C++", "JavaScript", "PHP", "SQL", "HTML/CSS"] },
  { g: "BI & Data", items: ["Power BI", "DAX", "Power Query", "ETL", "Dimensional Modeling", "Heflo"] },
  { g: "AI & ML", items: ["Deep Learning", "Machine Learning", "NLP", "CRISP-DM", "TensorFlow/Keras", "Scikit-learn", "Medical Image Processing"] },
  { g: "Databases", items: ["Oracle", "MongoDB", "MySQL", "SQL Server"] },
  { g: "Frameworks", items: ["Node.js", "Symfony", "JavaFX", "FlutterFlow", "FastAPI"] },
  { g: "Methods & Tools", items: ["Merise", "UML", "Statistical Analysis", "VS Code", "StarUML", "Cisco Packet Tracer", "Git", "SSIS", "Claude/MCP", "Docker", "MLflow", "MLOps"] },
];

export const education = [
  { school: "ESEO Angers", deg: "Exchange Semester — DISA Specialization, Biomedical Track", y: "09/2026 – 02/2027", now: true },
  { school: "ESPRIT", deg: "2nd year Computer Science Engineering Cycle — École Supérieure Privée d'Ingénierie et de Technologie", y: "2024 – 2026" },
  { school: "ESEN, University of Manouba", deg: "Bachelor's Degree in Business Computing, Business Intelligence Track", y: "2022 – 2024" },
  { school: "Lycée Ibn Rachik, Ezzahra", deg: "Baccalaureate in Experimental Sciences", y: "2020 – 2021" },
];

export const languages = [
  { l: "Arabic", v: "Native", p: 100 },
  { l: "French", v: "DELF B2", p: 78 },
  { l: "English", v: "B2", p: 78 },
];

export const certifications = ["Applications of AI for Anomaly Detection", "Fundamentals of Deep Learning"];

export const beyond = [
  { t: "ESEN Android Club", r: "Treasurer" },
  { t: "AIESEC University", r: "Member", d: "IR and Data Department, Middle Manager MoGX+TM Specialist_IM (outgoing global volunteer/talent marketing, talent management, information management)." },
];
