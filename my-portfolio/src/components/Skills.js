import React from "react";
import styled from "styled-components";
import skillsData from "../data/skills";
import SkillBar from "./SkillBar";

const Wrap = styled.section`
  padding: 48px 0;
`;

export default function Skills() {
  return (
    <Wrap id="skills" className="container" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      <p style={{ color: "var(--muted)" }}>
        A categorized skillset displayed with interactive bars, highlighting my proficiency across front-end, back-end, databases, and tools offering a clear snapshot of my technical expertise.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: 18,
          marginTop: 18,
        }}
      >
        {skillsData.map((group) => (
          <div key={group.category}>
            <h3 style={{ marginBottom: 8 }}>{group.category}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {group.items.map((it) => (
                <SkillBar key={it.name} name={it.name} level={it.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Wrap>
  );
}
