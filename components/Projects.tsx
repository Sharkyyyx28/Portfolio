"use client";

import React from "react";
import Project from "./Project";

function Projects() {
  const projects = [
    {
      title: "A full-stack note-taking app in a high-performance monorepo",
      description:
        "NestNotes is a modern, full-stack note-taking application constructed within a high-performance monorepo powered by Turborepo. Database performance is optimized by implementing Drizzle ORM with Neon Postgres, resulting in 40% faster query execution compared to standard REST-to-SQL implementations.",
      name: "NestNotes",
      year: "2025",
      link: "https://github.com/Sharkyyyx28",
      techStack: ["Next.js", "Drizzle ORM", "Neon Serverless Postgres", "Turborepo"],
      images: [
        "/images/nestnotes/1.png",
      ],
    },
    {
      title: "An AI-powered trip planner",
      description:
        "Smart-trip is an AI-powered trip planner that assists users in generating, managing, and securely viewing personalized travel itineraries. Firebase Firestore powers real-time synchronization, with React delivering a seamless travel planning UI.",
      name: "Smart-trip",
      year: "2025",
      link: "https://github.com/Sharkyyyx28",
      techStack: ["React", "TypeScript", "Firebase Firestore", "Gemini AI"],
      images: [
        "/images/smarttrip/1.png",
      ],
    },
    {
      title: "A real-time monitoring dashboard for agricultural rovers",
      description:
        "Agrobot Realtime Viewer is a frontend interface leveraging React and Firebase for the real-time monitoring of agricultural rover data, with real-time data visualization maintaining sub-200ms latency for live tracking of soil temperature and humidity across multiple sensor nodes.",
      name: "Agrobot Realtime Viewer",
      year: "2024",
      link: "https://github.com/Sharkyyyx28",
      techStack: ["React", "Firebase", "IoT Sensors"],
      images: [
        "/images/agrobot/1.png",
      ],
    },
  ];

  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          name={project.name}
          year={project.year}
          link={project.link}
          techStack={project.techStack}
          images={project.images}
          index={index}
        />
      ))}
    </section>
  );
}

export default Projects;
