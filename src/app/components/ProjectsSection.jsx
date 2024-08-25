"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BugFlow",
    description:
      "A modern issue tracking application built with Next.js, NextAuth, Prisma, Tailwind CSS, and MySQL.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/selvvm/BugFlow",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Sports Live",
    description:
      "Real-time sports updates application using Spring Boot, Angular, and Socket.IO",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/selvvm/Sports-info-live",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Blog-Go",
    description: "AI-powered blog application using Java, Spring Boot, and React",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/selvvm/Blog-Go-An-Ai-powered-web-application",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Custom Heap Allocator",
    description: "Custom heap allocator with garbage collector implemented in C",
    image: "/images/projects/5.png",
    tag: ["All", "Systems"],
    gitUrl: "https://github.com/selvvm/Custom-Heap-Allocator-with-Garbage-Collector-",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "TCP Chat Server in Go",
    description:
      "A simple TCP chat server implemented in Go that allows multiple clients to connect and communicate in real-time.",
    image: "/images/projects/5.png", // You'll need to add this image
    tag: ["All", "Systems"],
    gitUrl: "https://github.com/selvvm/Mutichat-Like-YT-or-insta-live-chat",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Simple Neural Network for XOR Problem",
    description:
      "A C++ implementation of a simple neural network designed to solve the XOR problem using a feedforward architecture with backpropagation.",
    image: "/images/projects/5.png", // You'll need to add this image
    tag: ["All", "Systems"],
    gitUrl: "https://github.com/selvvm/Training-Single-Neuron-in-C-",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "ShopinglyX",
    description:
      "An e-commerce website built with Django, featuring a payment gateway integration.",
    image: "/images/projects/3.png", // You'll need to add this image
    tag: ["All", "Web"],
    gitUrl: "https://github.com/selvvm/ShopinglyX",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Systems"
          isSelected={tag === "Systems"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
