import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrap = styled.div`
  margin-top: 20px;
  .item {
    display: flex;
    gap: 16px;
    margin-bottom: 14px;
    align-items: flex-start;
  }
  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent);
    margin-top: 6px;
    flex-shrink: 0;
  }
  .meta {
    color: var(--muted);
    font-size: 14px;
  }
`;

export default function Timeline() {
  const events = [
    {
      title: "Software Engineer, Accenture",
      date: "Nov 2023 - Present",
      desc: "Built scalable MERN stack apps with Redux, boosting engagement by 30% and improving performance by 50% through lazy loading, pagination, and optimization techniques. Secured APIs with JWT, delivered reusable components saving $5K annually, and accelerated Agile delivery by 25%.",
    },
    {
      title: "Mernstack Developer, Cognizant",
      date: "Jul 2021 - Nov 2023",
      desc: "Advanced from Trainee to Programmer Analyst, building scalable MERN stack apps with Redux. Boosted engagement by 50%, cut load times by 40%, secured APIs with JWT, optimized MongoDB for 30% faster queries, and accelerated Agile delivery by 25%.",
    },
  ];

  return (
    <Wrap aria-label="Experience timeline">
      {events.map((e, i) => (
        <motion.div
          key={i}
          className="item"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="dot" aria-hidden />
          <div>
            <div style={{ fontWeight: 600 }}>{e.title}</div>
            <div className="meta" aria-hidden>
              {e.date}
            </div>
            <div style={{ color: "var(--muted)", marginTop: 6 }}>{e.desc}</div>
          </div>
        </motion.div>
      ))}
    </Wrap>
  );
}
