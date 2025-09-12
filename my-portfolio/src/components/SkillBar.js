import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BarOuter = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  flex: 1;
  height: 12px;
  overflow: hidden;
`;

const BarInner = styled(motion.div)`
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(90deg, var(--accent), rgba(124, 92, 255, 0.6));
`;

export default function SkillBar({ name, level = 60 }) {
  return (
    <Row role="group" aria-label={`${name} skill level ${level}%`}>
      <div style={{ width: 110 }}>{name}</div>
      <BarOuter aria-hidden>
        <BarInner
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.9 }}
        />
      </BarOuter>
      <div style={{ width: 40, textAlign: "right", color: "var(--muted)" }}>
        {level}%
      </div>
    </Row>
  );
}
