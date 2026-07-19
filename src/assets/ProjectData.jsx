export const projectsData = [
  {
    id: 1,
    title: "Full-Stack Blogging Platform",
    description:
      "A modern blogging platform with authentication, blog publishing, and a responsive interface.",
    longDescription:
      "Built a full-stack blogging application where users can sign up, sign in, create, edit, and publish blogs. The backend is powered by Hono running on Cloudflare Workers with PostgreSQL and Prisma ORM. JWT authentication secures protected routes, while shared Zod schemas provide end-to-end type-safe validation. The frontend is built using React, TypeScript, Vite, and Tailwind CSS for a fast and responsive user experience.",
    imageUrl: "/src/assets/blog.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Hono",
      "Cloudflare Workers",
      "PostgreSQL",
      "Prisma ORM",
      "Zod",
      "JWT",
    ],
    liveLink: "https://blog.anshul333y.me",
    repoLink: "https://github.com/anshul333y/blog-app",
  },
  {
    id: 2,
    title: "Weather Forecast App",
    description:
      "A responsive weather application that displays real-time weather conditions and forecasts.",
    longDescription:
      "Developed a weather application that fetches live weather data from a public API and presents current conditions, hourly forecasts, and multi-day forecasts in a clean and intuitive interface. Features include city search, dynamic weather icons, temperature conversion, loading states, and responsive design optimized for desktop and mobile devices.",
    imageUrl: "/src/assets/weather.png",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Weather API",
      "Axios",
    ],
    liveLink: "https://weather.anshul333y.me",
    repoLink: "https://github.com/anshul333y/weather-app",
  },
];
