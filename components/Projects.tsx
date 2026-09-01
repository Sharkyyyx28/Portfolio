"use client";

import React from "react";
import Project from "./Project";

function Projects() {
  const projects = [
    {
      title: "An open civic data platform for the city of Lucknow",
      description:
        "Lucknow civic data pulls the city's scattered public records into one searchable place: an interactive Leaflet map of the municipal boundary, 121 elected representatives across 9 constituencies and 110 wards, a draggable metro and suburban rail timeline, nearest-amenity lookup for saved neighbourhoods, and a resident-reported community feed. Every dataset carries a visible provenance note, and gaps are labelled rather than guessed at.",
      name: "Lucknow civic data",
      year: "2026",
      link: "https://lucknow.sharkyyyx28.space/",
      techStack: [
        "Next.js 14",
        "TypeScript",
        "Leaflet",
        "MySQL",
        "NextAuth",
        "Tailwind CSS",
        "Turf.js",
        "OpenStreetMap",
      ],
      images: [
        "/images/lucknow/1.png",
        "/images/lucknow/2.png",
        "/images/lucknow/3.png",
        "/images/lucknow/4.png",
        "/images/lucknow/5.png",
        "/images/lucknow/6.png",
      ],
    },
    {
      title: "A full-stack note-taking app in a high-performance monorepo",
      description:
        "NestNotes is a modern, full-stack note-taking application constructed within a high-performance monorepo powered by Turborepo. Database performance is optimized by implementing Drizzle ORM with Neon Postgres, resulting in 40% faster query execution compared to standard REST-to-SQL implementations.",
      name: "NestNotes",
      year: "2025",
      link: "https://github.com/Sharkyyyx28/NestNotes",
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
      link: "https://smart-trip-three.vercel.app/",
      techStack: ["React", "TypeScript", "Firebase Firestore", "Gemini AI"],
      images: [
        "/images/smarttrip/1.png",
        "/images/smarttrip/2.png",
        "/images/smarttrip/3.png",
        "/images/smarttrip/4.png",
      ],
    },
    {
      title: "A real-time monitoring dashboard for agricultural rovers",
      description:
        "Agrobot Realtime Viewer is a frontend interface leveraging React and Firebase for the real-time monitoring of agricultural rover data, with real-time data visualization maintaining sub-200ms latency for live tracking of soil temperature and humidity across multiple sensor nodes.",
      name: "Agrobot Realtime Viewer",
      year: "2024",
      link: "https://agro-bot2102.vercel.app/",
      techStack: ["React", "Firebase", "IoT Sensors"],
      images: [
        "/images/agrobot/1.png",
        "/images/agrobot/2.png",
        "/images/agrobot/3.png",
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
          total={projects.length}
        />
      ))}
    </section>
  );
}

export default Projects;
