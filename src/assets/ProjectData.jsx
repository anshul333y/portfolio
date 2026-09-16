import blogImage from "./blog.png";
import weatherImage from "./weather.png";
import arch from "./arch.png";

export const projectsData = [
  {
    id: 1,
    title: "Full-Stack Blogging Platform",
    description:
      "A modern blogging platform with authentication, blog publishing, and a responsive interface.",
    longDescription:
      "Built a full-stack blogging application where users can sign up, sign in, create, edit, and publish blogs. The backend is powered by Hono running on Cloudflare Workers with PostgreSQL and Prisma ORM. JWT authentication secures protected routes, while shared Zod schemas provide end-to-end type-safe validation. The frontend is built using React, TypeScript, Vite, and Tailwind CSS for a fast and responsive user experience.",
    imageUrl: blogImage,
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
    imageUrl: weatherImage,
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
  {
    id: 3,
    title: "Arch Linux + Hyprland",
    description:
      "A highly customized Arch Linux desktop environment built around Hyprland with a focus on minimalism, performance, and keyboard-driven workflows.",
    longDescription:
      "Built and maintained a personalized Arch Linux environment using Hyprland as the Wayland compositor. The setup includes customized window management, Waybar, terminal and shell configurations, Neovim, tmux, wallpapers, keybindings, and user scripts mapped to ~/.local/bin. The configuration is organized as a dotfiles repository to make the entire desktop environment reproducible and easy to deploy on a fresh Arch Linux installation.",
    imageUrl: arch,
    technologies: [
      "Arch Linux",
      "Hyprland",
      "Wayland",
      "Waybar",
      "Kitty",
      "Neovim",
      "tmux",
      "Bash",
      "Git",
    ],
    liveLink: "https://github.com/anshul333y/scripts",
    repoLink: "https://github.com/anshul333y/.dots",
  },
];
