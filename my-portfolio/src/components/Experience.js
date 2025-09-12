import React from "react";
import styled from "styled-components";
import experienceData from "../data/experience";
import { motion } from "framer-motion";

const Wrap = styled.section`
  padding: 48px 0;
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 12px;
  }
  .metrics {
    display: flex;
    gap: 18px;
    margin-top: 14px;
    flex-wrap: wrap;
  }
  .metric {
    background: var(--card);
    padding: 12px 16px;
    border-radius: 10px;
    min-width: 120px;
    text-align: center;
  }
`;

export default function Experience() {
  return (
    <Wrap
      id="experience"
      className="container"
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading">Experience</h2>
      <p style={{ color: "var(--muted)" }}>
        A vertical timeline showcasing my career journey, highlighted with key
        achievements and impact metrics.
      </p>

      <div className="timeline" role="list">
        {experienceData.map((e, idx) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                background: "var(--card)",
                padding: 14,
                borderRadius: 10,
              }}
            >
              <div style={{ fontWeight: 700 }}>{e.title}</div>
              <div style={{ color: "var(--muted)", marginTop: 6 }}>
                {e.date}
              </div>
              <ul>
                {e.bullets.map((b, i) => (
                  <li key={i} style={{ color: "var(--muted)", marginTop: 6 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="metrics" role="list" aria-label="Experience metrics">
        <div className="metric" role="listitem">
          <div style={{ fontSize: 22, fontWeight: 700 }}>
            +{experienceData.reduce((a, b) => a + b.metrics.projects, 0)}
          </div>
          <div style={{ color: "var(--muted)" }}>Projects</div>
        </div>
        <div className="metric" role="listitem">
          <div style={{ fontSize: 22, fontWeight: 700 }}>
            {experienceData.reduce((a, b) => a + b.metrics.clients, 0)}
          </div>
          <div style={{ color: "var(--muted)" }}>Clients</div>
        </div>
      </div>
    </Wrap>
  );
}
