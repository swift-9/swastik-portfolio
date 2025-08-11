import { ArrowRight, ExternalLink, Github } from "lucide-react";
const BASE_URL = import.meta.env.BASE_URL;
const projects = [
  {
    id: 2,
    title: "RIDEAtlas-EX: SSR Page with React Router v7",
    description:
      "A beautiful landing page app using React and Tailwind and Rest API to display countries data.",
    image: "https://swift-9.github.io/swastik-portfolio/projects/project1.png",
    tags: ["React", "TailwindCSS", "Router v7"],
    demoUrl: "https://ride-atlas-ex.vercel.app/",
    githubUrl: "https://github.com/swift-9/RIDEAtlas-EX.git",
  },
  {
    id: 1,
    title: "RideAtlas Orbit: Trip Planner",
    description:
      "Trip planner with itinerary creation, image uploads, and globe visualization using Google Maps API — built with Next.js, TypeScript, Tailwind CSS, and Neon DB.",
    image: "https://swift-9.github.io/swastik-portfolio/projects/project2.png",
    tags: [
      "TypeScript",
      "Neon DB",
      "Next.js",
      "TailwindCSS",
      "Google Maps API",
    ],
    demoUrl: "https://ride-atlas-trip-planner.vercel.app",
    githubUrl: "https://github.com/swift-9/RideAtlas-Trip-Planner.git",
  },
  {
    id: 3,
    title: "Frontend Gaming Website: Award winning UI UX Design",
    description:
      "High-performance, visually captivating frontend application built with Vite and Tailwind CSS.",
    image: "https://swift-9.github.io/swastik-portfolio/projects/project3.png",
    tags: ["React", "Tailwindcss", "Vercel"],
    demoUrl: "https://frontend-pure.vercel.app/",
    githubUrl: "https://github.com/swift-9/frontend-pure",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/swift-9"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
