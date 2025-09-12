import React, { useContext } from "react";
import styled from "styled-components";
import projectsData from "../data/projects";
import ProjectCard from "./ProjectCard";
import { FilterContext } from "../contexts/FilterContext";

const Wrap = styled.section`
  padding: 48px 0;
  .filters {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 18px;
  }
  button {
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background: transparent;
    color: var(--muted);
  }
  button[aria-pressed="true"] {
    background: rgba(124, 92, 255, 0.12);
    color: var(--text);
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 18px;
  }
`;

export default function Projects() {
  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];
  const { activeFilter, setActiveFilter } = useContext(FilterContext);

  const filtered =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <Wrap
      id="projects"
      className="container"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading">Projects</h2>
      <p style={{ color: "var(--muted)" }}>
        A filterable project showcase featuring live demos and GitHub
        repositories for hands-on exploration of my work.
      </p>
      <div className="filters" role="tablist" aria-label="Project categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeFilter === cat}
            aria-pressed={activeFilter === cat}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid" role="list">
        {filtered.map((pr) => (
          <ProjectCard key={pr.id} project={pr} />
        ))}
      </div>
    </Wrap>
  );
}
