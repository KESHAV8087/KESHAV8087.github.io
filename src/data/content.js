export const profile = {
  name: "Keshav Girish Adkar",
  tagline: "Building reliable AI systems that matter.",
  badge: "Open to Job Opportunities",
  bio: "MSCS student at Northeastern University. Former IT Consultant at Deloitte. Researching LLM hallucinations, RAG evaluation, and scalable ML pipelines.",
  resumeUrl: "/Keshav_AI_ML_Base_Resume_2026.pdf",
  photoUrl: "/KESHAV PHOTO PROFESSIONAL.jpeg",
  emails: {
    college: "adkar.k@northeastern.edu",
    personal: "adkarkeshav@gmail.com",
  },
  socials: {
    github: "https://github.com/KESHAV8087",
    linkedin: "https://www.linkedin.com/in/keshav-girish-adkar-35b36a140/",
    whatsappUS: "https://wa.me/18573131503",
    whatsappIN: "https://wa.me/919766528776",
  },
};

export const stats = [
  { num: "3.33", label: "GPA · Northeastern" },
  { num: "2+", label: "Years Industry Exp." },
  { num: "94.2%", label: "Published Model Acc." },
  { num: "2", label: "Research Projects" },
];

export const heroSkills = ["PyTorch", "LangChain", "RAG", "Python", "TensorFlow", "Docker", "Flask", "OpenCV", "Scikit-learn", "SQL"];

export const experience = [
  {
    period: "Jan 2023 – Jun 2025",
    company: "Deloitte India",
    location: "Hyderabad, India",
    role: "IT Consultant — AI Integration & Automation",
    bullets: [
      "Engineered Python automation workflows that cut manual processing effort by 30% across enterprise audit pipelines.",
      "Led SAP S/4HANA security remediation across cross-functional teams, designing audit workflows adopted organization-wide.",
      "Mentored a cohort of 5 junior analysts, driving a 25% productivity improvement measured over two quarters.",
      "Integrated AI-assisted tooling into compliance workflows, reducing review cycle time for high-volume processes.",
    ],
    tags: ["Python", "SAP S/4HANA", "Workflow Automation", "AI Integration", "Linux"],
  },
  {
    period: "Jan 2022 – Mar 2022",
    company: "HighRadius Inc.",
    location: "Hyderabad, India",
    role: "Software Engineer Intern — Full-Stack",
    bullets: [
      "Built a Flask-based B2B fintech application serving 1,000+ enterprise users with real-time financial dashboards.",
      "Integrated ML model outputs via REST API into client-facing dashboards, improving cash-flow forecasting accuracy by 25%.",
      "Optimized deployment pipelines, cutting processing time by 40% through query tuning and caching strategies.",
    ],
    tags: ["Flask", "REST APIs", "ML Integration", "Python", "MongoDB"],
  },
  {
    period: "Oct 2020 – Dec 2020",
    company: "Aurify Systems",
    location: "Remote",
    role: "Deep Learning Intern",
    bullets: [
      "Designed OpenCV + PyTorch computer vision pipelines that increased data conversion efficiency by 50%.",
      "Trained CNN models for automated image labeling, reducing manual annotation time significantly at scale.",
    ],
    tags: ["PyTorch", "OpenCV", "CNNs", "Computer Vision"],
  },
];

export const research = [
  {
    type: "Ongoing · Northeastern University",
    title: "Mitigating Hallucinations in Large Language Models",
    desc: "Investigating prompt engineering strategies and deterministic frameworks to reduce LLM hallucinations. Developing RAG benchmark and evaluation pipelines to measure factual grounding across retrieval-augmented architectures. Focus on quantifying hallucination rates across GPT, Claude, and open-source models under domain-specific retrieval conditions.",
    tags: ["LangChain", "RAG", "Prompt Engineering", "LLM Evaluation", "Python"],
  },
  {
    type: "Published · IJSDR · May 2023",
    title: "Deep Learning-Based Phishing URL Detection Using Bi-LSTM",
    desc: "Designed and trained a Bi-directional LSTM classifier achieving 94.2% accuracy on phishing URL detection. The model leveraged character-level sequence encoding to distinguish malicious URLs from legitimate ones, outperforming prior CNN and traditional ML baselines on the same benchmark dataset.",
    tags: ["Bi-LSTM", "TensorFlow", "NLP", "Cybersecurity", "IJSDR"],
  },
];

export const projects = [
  {
    id: "rag-eval",
    num: "01",
    title: "RAG Evaluation Pipeline",
    desc: "End-to-end benchmark framework for measuring factual grounding in retrieval-augmented LLMs. Compares retrieval quality, context utilization, and hallucination rates across model families.",
    tech: ["LangChain", "Python", "FAISS"],
    category: "AI/ML",
    github: null,
  },
  {
    id: "phishing",
    num: "02",
    title: "Bi-LSTM Phishing Detector",
    desc: "Published deep learning model for real-time phishing URL classification. Character-level Bi-LSTM architecture trained on 500K+ URLs achieving 94.2% accuracy. Outperformed SVM and CNN baselines.",
    tech: ["TensorFlow", "Bi-LSTM", "NLP"],
    category: "AI/ML",
    github: null,
  },
  {
    id: "ecommerce",
    num: "03",
    title: "E-Commerce Management System",
    desc: "Led a team of 3 to build a full-stack inventory and order management platform with real-time stock tracking, analytics dashboards, and role-based access control.",
    tech: ["Python", "MongoDB", "Flask"],
    category: "Full-Stack",
    github: null,
  },
  {
    id: "cv-pipeline",
    num: "04",
    title: "CV Pipeline — Automated Labeling",
    desc: "Built at Aurify Systems: OpenCV + PyTorch computer vision pipeline for automated dataset labeling. CNN model reduced manual annotation effort by 50%, enabling faster training data generation.",
    tech: ["PyTorch", "OpenCV", "CNNs"],
    category: "Computer Vision",
    github: null,
  },
  {
    id: "weather",
    num: "05",
    title: "Real-Time Weather Scraper",
    desc: "Python scraping application with BeautifulSoup + multi-source API integration, providing unified real-time weather data with location-aware querying and historical trend storage.",
    tech: ["Python", "BeautifulSoup", "APIs"],
    category: "Full-Stack",
    github: null,
  },
  {
    id: "deloitte-automation",
    num: "06",
    title: "Deloitte Automation Workflows",
    desc: "Designed Python automation pipelines for enterprise audit workflows at Deloitte, reducing manual effort by 30% and integrating AI-assisted review into compliance processes at scale.",
    tech: ["Python", "SAP", "Bash"],
    category: "Automation",
    github: null,
  },
];

export const skills = [
  {
    group: "AI / ML",
    items: ["PyTorch & TensorFlow", "LangChain & RAG", "Prompt Engineering", "Scikit-learn", "CNNs, Bi-LSTM, Transformers", "OpenCV", "LLM Evaluation"],
  },
  {
    group: "Languages",
    items: ["Python", "Java", "C / C++", "SQL", "Bash / Shell", "PHP"],
  },
  {
    group: "Engineering",
    items: ["Flask & REST APIs", "Docker", "Git & GitHub", "MongoDB & Oracle DB", "Linux (Red Hat)", "Pandas & NumPy", "BeautifulSoup"],
  },
  {
    group: "Certifications",
    items: ["DeepLearning.AI Prompt Eng.", "Oracle DB Foundations", "Red Hat Linux Fundamentals", "Google Data Analytics", "Python Advanced"],
  },
];

export const education = [
  {
    period: "Sept 2025 – May 2027",
    company: "Northeastern University",
    location: "Boston, MA",
    role: "M.S. Computer Science · GPA 3.33",
    bullets: [
      "Specializing in AI/ML with research focus on LLM hallucination mitigation and RAG evaluation.",
      "Coursework: Machine Learning, Algorithms (CS5800), Database Management Systems, Programming Design Paradigms.",
    ],
    tags: ["Machine Learning", "Algorithms", "DBMS", "AI Research"],
  },
  {
    period: "Aug 2019 – May 2023",
    company: "SRM Institute of Science & Technology",
    location: "Chennai, India",
    role: "B.Tech Computer Science · GPA 8.62 / 10",
    bullets: [
      "Published deep learning research in IJSDR during final year — Bi-LSTM phishing URL classifier at 94.2% accuracy.",
      "Coursework: Data Structures, Software Engineering, Operating Systems, Computer Networking.",
    ],
    tags: ["Data Structures", "Software Engineering", "Operating Systems", "Networking"],
  },
];

export const posts = [
  {
    id: "why-llms-hallucinate",
    title: "Why LLMs Hallucinate (and What We Can Actually Do About It)",
    date: "Coming Soon",
    excerpt: "A practical look at the mechanics behind hallucination in large language models, and why retrieval alone doesn't fix it.",
    published: false,
  },
];