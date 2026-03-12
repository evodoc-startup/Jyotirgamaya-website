'use client'
import { useState, useEffect } from "react";

const steps = [
  {
    color: "#F5C518",
    colorDark: "#c9a010",
    shadow: "rgba(245,197,24,0.4)",
    glow: "rgba(245,197,24,0.15)",
    side: "right",
    num: "01",
    title: "Personality Profiling",
    desc: "Uncovers how you think, behave, and make decisions – forming the emotional backbone of your career path.",
  },
  {
    color: "#8DC63F",
    colorDark: "#6a9e28",
    shadow: "rgba(141,198,63,0.4)",
    glow: "rgba(141,198,63,0.12)",
    side: "left",
    num: "02",
    title: "Aptitude Analysis",
    desc: "Measures your core abilities to reveal what you are naturally built to excel at.",
  },
  {
    color: "#3DBFB8",
    colorDark: "#2a9990",
    shadow: "rgba(61,191,184,0.4)",
    glow: "rgba(61,191,184,0.12)",
    side: "right",
    num: "03",
    title: "Emotional Intelligence",
    desc: "Evaluates your capacity to understand and manage emotions for stronger interpersonal fit.",
  },
  {
    color: "#2176AE",
    colorDark: "#155a87",
    shadow: "rgba(33,118,174,0.4)",
    glow: "rgba(33,118,174,0.12)",
    side: "left",
    num: "04",
    title: "Psychomotor Skills",
    desc: "Assesses coordination and response to align you with careers fitting your physical and mental synergy.",
  },
  {
    color: "#6A1FC2",
    colorDark: "#4e1590",
    shadow: "rgba(106,31,194,0.4)",
    glow: "rgba(106,31,194,0.12)",
    side: "right",
    num: "05",
    title: "Interest Mapping",
    desc: "Identifies what truly engages and motivates you, ensuring long-term career satisfaction.",
  },
];

export default function App() {
  const [shown, setShown] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    steps.forEach((_, i) =>
      setTimeout(() => setShown((s) => [...s, i]), 200 * i + 150)
    );
  }, []);

  /* ─── MOBILE ─── */
  if (isMobile) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(155deg, #c8dff2 0%, #dceef8 45%, #edf5ff 100%)",
          fontFamily: "Georgia, 'Times New Roman', serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "48px 20px 56px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 260, height: 260, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(141,198,63,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -60, left: -60,
          width: 220, height: 220, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(33,118,174,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Header */}
        <div style={{
          textAlign: "center", marginBottom: 40,
          opacity: shown.includes(0) ? 1 : 0,
          transform: shown.includes(0) ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          <p style={{
            color: "#6a9e28", letterSpacing: "0.22em", fontSize: 10,
            textTransform: "uppercase", margin: "0 0 10px",
          }}>
            Your Assessment Journey
          </p>
          <h1 style={{
            color: "#1a2535", fontSize: 26,
            fontWeight: "normal", margin: 0, letterSpacing: "0.02em", lineHeight: 1.25,
          }}>
            Five Dimensions<br />of Discovery
          </h1>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", width: "100%", maxWidth: 400 }}>
          {/* Vertical spine */}
          <div style={{
            position: "absolute",
            left: 22,
            top: 0,
            bottom: 0,
            width: 1,
            background: "linear-gradient(to bottom, transparent, rgba(30,60,100,0.15) 8%, rgba(30,60,100,0.15) 92%, transparent)",
          }} />

          {steps.map((s, i) => {
            const vis = shown.includes(i);
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: i < steps.length - 1 ? 20 : 0,
                  opacity: vis ? 1 : 0,
                  transform: vis ? "translateX(0)" : "translateX(-24px)",
                  transition: "opacity 0.55s ease, transform 0.55s ease",
                }}
              >
                {/* Node */}
                <div style={{ position: "relative", flexShrink: 0, zIndex: 2, marginRight: 18 }}>
                  <div style={{
                    position: "absolute",
                    top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 56, height: 56,
                    borderRadius: "50%",
                    border: `1px solid ${s.color}`,
                    opacity: 0.3,
                    animation: vis ? "pulse 3s ease-in-out infinite" : "none",
                  }} />
                  <div style={{
                    width: 44, height: 44,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${s.color}, ${s.colorDark})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 18px ${s.shadow}, 0 3px 10px rgba(30,60,100,0.2)`,
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#fff",
                    letterSpacing: "0.05em",
                    flexShrink: 0,
                  }}>
                    {s.num}
                  </div>
                </div>

                {/* Card */}
                <div style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(12px)",
                  border: `1px solid rgba(255,255,255,0.9)`,
                  borderLeft: `4px solid ${s.color}`,
                  borderRadius: "2px 14px 14px 2px",
                  padding: "16px 20px",
                  boxShadow: `0 4px 20px rgba(30,60,100,0.1), 0 1px 4px rgba(30,60,100,0.06), inset 0 0 30px ${s.glow}`,
                }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                    <span style={{ color: s.color, fontSize: 10, letterSpacing: "0.18em", fontWeight: "bold" }}>
                      {s.num}
                    </span>
                    <h3 style={{ color: "#1a2535", fontSize: 14, fontWeight: "bold", margin: 0, lineHeight: 1.3 }}>
                      {s.title}
                    </h3>
                  </div>
                  <p style={{ color: "#4a5e78", fontSize: 12, lineHeight: 1.65, margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          @keyframes pulse { 0%,100% { transform: translate(-50%,-50%) scale(1); opacity:0.3; } 50% { transform: translate(-50%,-50%) scale(1.45); opacity:0.08; } }
        `}</style>
      </div>
    );
  }

  /* ─── DESKTOP ─── */
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(155deg, #c8dff2 0%, #dceef8 45%, #edf5ff 100%)",
        fontFamily: "Georgia, 'Times New Roman', serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle decorative blobs */}
      <div style={{
        position: "absolute", top: -120, right: -120,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(141,198,63,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -100, left: -100,
        width: 350, height: 350, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(33,118,174,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 56,
          opacity: shown.includes(0) ? 1 : 0,
          transform: shown.includes(0) ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <p style={{
          color: "#6a9e28", letterSpacing: "0.25em", fontSize: 11,
          textTransform: "uppercase", margin: "0 0 12px", fontFamily: "Georgia, serif",
        }}>
          Your Assessment Journey
        </p>
        <h1 style={{
          color: "#1a2535", fontSize: "clamp(28px, 3vw, 42px)",
          fontWeight: "normal", margin: 0, letterSpacing: "0.02em", lineHeight: 1.2,
        }}>
          Five Dimensions of Discovery
        </h1>
      </div>

      {/* Steps timeline */}
      <div style={{ position: "relative", width: "100%", maxWidth: 1100 }}>

        {/* Center spine line */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: 1,
          background: "linear-gradient(to bottom, transparent, rgba(30,60,100,0.15) 10%, rgba(30,60,100,0.15) 90%, transparent)",
          transform: "translateX(-50%)",
        }} />

        {steps.map((s, i) => {
          const vis = shown.includes(i);
          const isLeft = s.side === "left";

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                marginBottom: i < steps.length - 1 ? 28 : 0,
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              {/* LEFT content area */}
              <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", paddingRight: 48 }}>
                {isLeft ? (
                  <div
                    style={{
                      width: "100%",
                      maxWidth: 380,
                      background: "rgba(255,255,255,0.72)",
                      backdropFilter: "blur(12px)",
                      border: `1px solid rgba(255,255,255,0.9)`,
                      borderLeft: `4px solid ${s.color}`,
                      borderRadius: "2px 14px 14px 2px",
                      padding: "22px 28px",
                      boxShadow: `0 4px 24px rgba(30,60,100,0.1), 0 1px 4px rgba(30,60,100,0.06), inset 0 0 40px ${s.glow}`,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                      <span style={{ color: s.color, fontSize: 11, letterSpacing: "0.2em", fontWeight: "bold" }}>
                        {s.num}
                      </span>
                      <h3 style={{ color: "#1a2535", fontSize: 16, fontWeight: "bold", margin: 0, lineHeight: 1.3 }}>
                        {s.title}
                      </h3>
                    </div>
                    <p style={{ color: "#4a5e78", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                      {s.desc}
                    </p>
                  </div>
                ) : (
                  <div style={{ width: "100%", maxWidth: 380 }} />
                )}
              </div>

              {/* Center node */}
              <div style={{ position: "relative", flexShrink: 0, zIndex: 2 }}>
                <div style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 68, height: 68,
                  borderRadius: "50%",
                  border: `1px solid ${s.color}`,
                  opacity: 0.35,
                  animation: vis ? "pulse 3s ease-in-out infinite" : "none",
                }} />
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${s.color}, ${s.colorDark})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 20px ${s.shadow}, 0 4px 12px rgba(30,60,100,0.2)`,
                    fontSize: 13,
                    fontWeight: "bold",
                    color: "#fff",
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.num}
                </div>
              </div>

              {/* RIGHT content area */}
              <div style={{ flex: 1, paddingLeft: 48 }}>
                {!isLeft ? (
                  <div
                    style={{
                      width: "100%",
                      maxWidth: 380,
                      background: "rgba(255,255,255,0.72)",
                      backdropFilter: "blur(12px)",
                      border: `1px solid rgba(255,255,255,0.9)`,
                      borderRight: `4px solid ${s.color}`,
                      borderRadius: "14px 2px 2px 14px",
                      padding: "22px 28px",
                      boxShadow: `0 4px 24px rgba(30,60,100,0.1), 0 1px 4px rgba(30,60,100,0.06), inset 0 0 40px ${s.glow}`,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                      <span style={{ color: s.color, fontSize: 11, letterSpacing: "0.2em", fontWeight: "bold" }}>
                        {s.num}
                      </span>
                      <h3 style={{ color: "#1a2535", fontSize: 16, fontWeight: "bold", margin: 0, lineHeight: 1.3 }}>
                        {s.title}
                      </h3>
                    </div>
                    <p style={{ color: "#4a5e78", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                      {s.desc}
                    </p>
                  </div>
                ) : (
                  <div style={{ width: "100%", maxWidth: 380 }} />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes pulse { 0%,100% { transform: translate(-50%,-50%) scale(1); opacity:0.35; } 50% { transform: translate(-50%,-50%) scale(1.45); opacity:0.1; } }
      `}</style>
    </div>
  );
}