export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  noDemo?: true;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Examensprojekt React",
    description:
      "CRUD applikation med stripe betallösning integretat och MongoDB som databas",
    tags: ["React", "CRUD", "MongoDB"],
    image: "project-img/examenProjekt.png",
    github: "https://github.com/hanna01m/finalProject",
    demo: "https://idyllic-gingersnap-64ec01.netlify.app/",
  },
  {
    id: 2,
    title: "React API Polisen",
    description:
      "API från polisens “senaste händelser”, sökfunktion och Leaflet implementerat",
    tags: ["React.js", "SCSS", "API"],
    image: "project-img/reactApi.png",
    github: "https://github.com/hanna01m/react-api",
    demo: "https://scintillating-mooncake-0f93cb.netlify.app",
  },
  {
    id: 4,
    title: "Väderapp",
    description:
      "En enkel webbapplikation som visar väderinformation samt med sökfunktion. ",
    tags: ["HTML", "SCSS", "JS"],
    image: "project-img/weatherApp.png",
    github: "https://github.com/hanna01m/weatherApp",
    demo: "https://astounding-crostata-0506db.netlify.app/",
  },
  {
    id: 5,
    title: "CRUD-projekt + PHP Express",
    description: "CRUD & möjlighet att exportera produkter till CSV-fil",
    tags: ["PHP", "Express", "CRUD"],
    image: "project-img/express-php.png",
    github: "https://github.com/hanna01m/enskildaProjektet",
    // demo: "https://astounding-crostata-0506db.netlify.app/",
    noDemo: true,
  },
  {
    id: 6,
    title: "Skolprojekt webshop React ",
    description:
      "Varukorg, checkout, logga in och registrera. Stripe betallösning och databas MondoDB",
    tags: ["React", "Prisma", "Node.js"],
    image: "project-img/stripeReact.png",
    github: "https://github.com/MarizzaK/stripeReactProject",
    // demo: "https://astounding-crostata-0506db.netlify.app/",
    noDemo: true,
  },
  {
    id: 7,
    title: "PHP mySQL Webshop",
    description: "Webbshop skapat med PHP och mySQL, sorteringsfunktion",
    tags: ["PHP", "mySQL"],
    image: "project-img/php-shop2.png",
    github: "https://github.com/yourusername/project2",
    // demo: "https://astounding-crostata-0506db.netlify.app/",
    noDemo: true,
  },
];
