// Updated portfolio configuration for Muhammad Hashim
import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Muhammad",
  lastName: "Hashim",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI & Automation Engineer",
  avatar: "/images/avatar.jpeg",
  location: "Swabi, KPK, Pakistan",
  languages: ["English", "Urdu"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about AI workflows, agentic systems, LangGraph, and automation pipelines built using platforms like n8n.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/EngrHashim160",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/engr-hashim",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:engrhashim160@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/923197453196",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>AI & Automation Engineer</>,
  subline: (
    <>
      I'm Muhammad Hashim, an AI & Automation Engineer specializing in building intelligent agents using <InlineCode>LangGraph</InlineCode>, <InlineCode>Autogen</InlineCode>, and automating CRMs using <InlineCode>n8n</InlineCode>.
      <br /> I also work with Python, LLMs, and modern data pipelines.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/engrhashim160",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a self-driven AI & Automation Engineer with expertise in creating agentic systems, integrating LLMs, and streamlining workflows using tools like LangGraph, Autogen, and n8n. I love building intelligent, scalable systems that automate complex business tasks.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
         
        company: "AI Intern - DigiSync Technologies (Pvt) Ltd ",
        timeframe: "Apr 2025 - Jul 2025",
        role: "AI Intern",
        achievements: [
          <>Completed a 3-month AI internship, working on model training, automation pipelines, and exploratory research under mentorship of senior engineers.</>,
        ],
        images: [],
      },
      {
        company: "ProspectRoi",
        timeframe: "Jul 2025 - Present",
        role: "AI & Automation Engineer",
        achievements: [
          <>Automated email and CRM workflows using Zapier and n8n integrated with LLMs.</>,
          <>Developed agent pipelines using LangGraph and HuggingFace models.</>,
          <>Optimized B2B outreach processes using autonomous AI agents.</>,
        ],
        images: [],
      },
     
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of Engineering & Technology, Mardan",
        description: <>BS Software Engineering | 2021 - 2025 | CGPA: 3.5</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "AI & Automation",
        description: <>LangGraph, Autogen, OpenAI, HuggingFace, Zapier, n8n, CrewAI</>,
      },
      {
        title: "Languages & Frameworks",
        description: <>Python, JavaScript, TypeScript, C++, HTML/CSS, Tailwind, React</>,
      },
      {
        title: "Backend & APIs",
        description: <>FastAPI, Flask, Node.js, REST APIs, Firebase</>,
      },
      {
        title: "Databases",
        description: <>MongoDB, PostgreSQL, MySQL</>,
      },
      {
        title: "Tools & Platforms",
        description: <>GitHub, VS Code, Postman, Linux, Docker (basic)</>,
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about AI, automation, and intelligent agents...",
  description: `Read what ${person.name} has been working on in the AI space`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Projects and AI tools built by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "Photo Gallery",
  description: `Snapshots from ${person.name}'s journey`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };