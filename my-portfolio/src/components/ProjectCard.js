import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Card = styled(motion.article)`
  background: var(--card);
  padding: 16px;
  border-radius: 12px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 6px 14px rgba(2, 6, 23, 0.4);
`;

export default function ProjectCard({ project }) {
  return (
    <Card
      role="listitem"
      tabIndex={0}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <div style={{ fontWeight: 700 }}>{project.title}</div>
        <div style={{ color: "var(--muted)", marginTop: 6 }}>
          {project.desc}
        </div>
        <div
          style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}
        >
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12,
                color: "var(--muted)",
                background: "rgba(255,255,255,0.03)",
                padding: "4px 8px",
                borderRadius: 6,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open demo ${project.title}`}
          >
            <FiExternalLink />
          </a>
        ) : null}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open GitHub ${project.title}`}
        >
          <FiGithub />
        </a>
      </div>
    </Card>
  );
}
