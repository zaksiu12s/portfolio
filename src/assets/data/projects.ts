import { Project } from "../../components/ProjectsSection/Project";

const projects: Project[] = [{
    mainText: "Geolingo",
    secondaryText: "Project 1",
    src: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    alt: "Test image",
    link: "https://github.com/Geolingo-app/geolingo-app",
    linkWebsite: "GitHub",
    icons: [{
        src: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
        alt: "React icon",
    },
    {
        src: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
        alt: "Tailwind CSS icon"
    },
    {
        src: "https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white",
        alt: "Vite icon"
    }]
}];

export default projects;