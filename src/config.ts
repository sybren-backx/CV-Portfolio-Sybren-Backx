export const siteConfig = {
  name: "Sybren Backx",
  heroTitle: "Full-Stack Software Engineer",
  description: "Portfolio website Sybren Backx",
  heroSubTitle: "Software developer with a strong foundation in web development, focused on delivering high-quality applications and continuously improving through projects and experience.",
  accentColor: "#6cb8e0",
  social: {
    email: "sybren.backx@hotmail.be",
    linkedin: "",
    twitter: "",
    github: "",
  },
  aboutMe:
    "I graduated in <strong>Applied Computer Science</strong> at Thomas More Geel, specializing in <strong>application development</strong>. I enjoy breaking down <strong>complex problems</strong> and building <strong>practical solutions</strong> through structured thinking and collaboration. Through both my studies and personal discipline from sports, I’ve developed a <strong>focused and consistent approach</strong> to learning and software development.",
  skills: {
    languages: ["C#", "Java", "Python", "JavaScript", "SQL"],
    frontend: ["HTML5", "CSS3", "Angular", "React"],
    backend: [".NET", "Node.js", "Spring Boot"],
    mobile: ["Flutter"],
    tools: ["Git", "Agile/Scrum"]
  },
  projects: [
    {
      name: "Internship Tokheim",
      description:
        "Geospatial station dashboard using Leaflet, enabling interactive map-based visualization and data exploration.",
      link: "/internship",
      skills: ["Angular", ".NET", "SQL"],
      image: "/images/tokheim.png"
    },
    {
      name: "Skills 3 Project Cloudway",
      description:
        "AI system to system Integration Platform",
      link: "/cloudway",
      skills: ["React", "Node.js", "SQL"],
      image: "/images/cloudway.png"
    },
    {
      name: "Electronic Mouse Trap",
      description:
        "A smart mousetrap system powered by a Raspberry Pi that automatically detects movement and triggers a mechanical capture mechanism.",
      link: "/IotMouseTrap",
      skills: ["Python", "IoT", "Raspberyy Pi"],
      image: "/images/trap.png"
    },
    {
      name: "Advanced Programming - Appointment Management System",
      description:
        "A distributed appointment scheduling backend for managing doctors, patients, and consultations in a microservices-based architecture.",
      link: "/projectAPT",
      skills: ["Java", "Microservices", "SQL/MongoDB", "Docker",],
      image: "/images/APT.png"
    },
    {
      name: "Guitar Hero App",
      description:
        "Augmented Reality mobile app to guide beginners with learning guitar and reading notes",
      link: "/guitar",
      skills: ["Flutter", "Unity"],
      image: "/images/guitar.png"
    },

  ],
  experience: [
    {
      company: "Dover Fueling Solutions",
      title: "Software Developer Internship",
      dateRange: "March 2026 - May 2026",
      bullets: [
        "Developed an interactive station map dashboard",
        "Implemented station geocoding functionality"
      ],
    },
    {
      company: "Ponyhoeve Turnhout vzw",
      title: "Volunteer Work",
      dateRange: "August 2019 - February 2026",
      bullets: [
        "Responsible for maintenance",
        "Performed physical work in a team environment"
      ],
    },
    {
      company: "Mekanders vzw",
      title: "Archive / Document Management",
      dateRange: "August 2019 - May 2020",
      bullets: [
        "Organized and classified administrative and financial records"
      ],
    },
  ],

  education: [
    {
      school: "Thomas More Geel",
      degree: "Bachelor Applied Computer Science - Application Development",
      dateRange: "2022 - 2026",
      achievements: []
    },
  ],
};
