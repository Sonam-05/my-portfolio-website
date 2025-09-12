import React, { useContext, useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const firstLinkRef = useRef(null);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  // handle resize to determine mobile breakpoint (inline-CSS can't use media queries)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // lock body scroll when modal open and focus first link
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setTimeout(() => firstLinkRef.current?.focus(), 80);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleNavClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  /* ---------- Inline styles ---------- */
  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 40,
    backdropFilter: "blur(6px)",
    background: "linear-gradient(180deg, rgba(0,0,0,0.35), transparent)",
  };

  const containerStyle = {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 16px",
  };

  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 0",
    position: "relative",
    zIndex: 100,
  };

  const leftStyle = {
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
    width: '100%'
  };

  const rightStyle = {
    display: isMobile ? "none" : "flex",
    gap: 12,
    alignItems: "center",
  };

  const textBtnStyle = {
    color: "var(--text)",
    padding: "6px 8px",
    borderRadius: 6,
    cursor: "pointer",
    background: "transparent",
    border: "none",
    font: "inherit",
  };

  const hamburgerStyle = {
    display: isMobile ? "inline-flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 6,
    background: "transparent",
    border: "none",
    padding: 6,
    cursor: "pointer",
    color: "var(--text)",
  };

  // Modal overlay (covers full viewport)
  const modalOverlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)", // dim behind white modal
    display: open ? "block" : "none",
    zIndex: 2147483000,
  };

  const modalContentStyle = {
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    padding: "36px 20px",
    backgroundColor: "#ffffff", // fully opaque white
    color: "#0b0b0b",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    zIndex: 2147483001,
    display: "flex",
    flexDirection: "column",
  };

    const modalDarkContentStyle = {
      position: "fixed",
      inset: 0,
      width: "100%",
      height: "100vh",
      boxSizing: "border-box",
      padding: "36px 20px",
      backgroundColor: "#0E1724", // fully opaque white
      color: "#fff",
      overflowY: "auto",
      WebkitOverflowScrolling: "touch",
      zIndex: 2147483001,
      display: "flex",
      flexDirection: "column",
    };

  const modalTopStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const modalNavStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    marginTop: 28,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  };

  const linkButtonStyle = {
    fontSize: "1.6rem",
    padding: "14px 18px",
    borderRadius: 8,
    background: "transparent",
    border: "none",
    color: "inherit",
    cursor: "pointer",
    width: "100%",
    maxWidth: 520,
    textAlign: "center",
  };

  /* ---------- JSX ---------- */
  return (
    <header style={headerStyle} aria-label="Main navigation">
      <div style={containerStyle}>
        <nav style={navStyle}>
          <div style={leftStyle}>
            <span
              style={{ ...textBtnStyle, fontWeight: 600 }}
              aria-label="Home"
              role="button"
              tabIndex={0}
              onClick={() =>
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Sonam Dangi
            </span>

            {/* hamburger - visible only on mobile (controlled by isMobile) */}
            <button
              className="hamburger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              style={hamburgerStyle}
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>

          <div style={rightStyle}>
            {navItems.map((it) => (
              <span
                key={it.id}
                role="button"
                tabIndex={0}
                style={textBtnStyle}
                onClick={() =>
                  document
                    .getElementById(it.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  document
                    .getElementById(it.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {it.label}
              </span>
            ))}
            <ThemeToggle aria-label="Toggle theme" />
          </div>
        </nav>
      </div>

      {/* Full screen modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        style={modalOverlayStyle}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div
          style={theme == "light" ? modalContentStyle : modalDarkContentStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={modalTopStyle}>
            <div /> {/* space / title could go here */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text)",
                cursor: "pointer",
                fontSize: 20,
                padding: 6,
              }}
            >
              <FiX size={24} />
            </button>
          </div>

          <nav style={modalNavStyle}>
            {navItems.map((it, idx) => (
              <button
                key={it.id}
                ref={idx === 0 ? firstLinkRef : undefined}
                onClick={() => handleNavClick(it.id)}
                onKeyDown={(e) => e.key === "Enter" && handleNavClick(it.id)}
                style={linkButtonStyle}
              >
                {it.label}
              </button>
            ))}

            <div style={{ marginTop: 12 }}>
              <ThemeToggle aria-label="Toggle theme" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
