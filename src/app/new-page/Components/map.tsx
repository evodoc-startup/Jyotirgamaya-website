'use client'
import { useState, useEffect } from "react";

const steps = [
  {
    color: "#F5C518",
    shadow: "rgba(245,197,24,0.35)",
    side: "right",
    title: "Personality Profiling.",
    desc: "Uncovers how you think, behave, and make decisions – forming the emotional backbone of your career path",
  },
  {
    color: "#8DC63F",
    shadow: "rgba(141,198,63,0.35)",
    side: "left",
    title: "Aptitude Analysis",
    desc: "Measures your core abilities to reveal what you are naturally built to excel at.",
  },
  {
    color: "#3DBFB8",
    shadow: "rgba(61,191,184,0.35)",
    side: "right",
    title: "Emotional Intelligence Assessment",
    desc: "Measures your core abilities to reveal what you are naturally built to excel at.",
  },
  {
    color: "#2176AE",
    shadow: "rgba(33,118,174,0.35)",
    side: "left",
    title: "Psychomotor Skills Evaluation",
    desc: "Assesses coordination and response with careers that fit your physical and mental synergy.",
  },
  {
    color: "#6A1FC2",
    shadow: "rgba(106,31,194,0.35)",
    side: "right",
    title: "Interest Mapping",
    desc: "Identifies what truly engages and motivates you, ensuring long-term career satisfaction.",
  },
];

const W = 100;
const H = 160;
const PH = 48;
const OVERLAP = 20;

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
      setTimeout(() => setShown((s) => [...s, i]), 180 * i + 100)
    );
  }, []);

  // Mobile: stacked vertically, arrow on left, text on right
  if (isMobile) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-5 py-10"
        style={{
          background: "linear-gradient(155deg, #c8dff2 0%, #dceef8 45%, #edf5ff 100%)",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div className="w-full max-w-sm flex flex-col items-start">
          {steps.map((s, i) => {
            const vis = shown.includes(i);
            return (
              <div
                key={i}
                className="flex flex-row items-center w-full mb-20"
                style={{
                  marginTop: i === 0 ? 0 : -(PH - OVERLAP),
                  position: "relative",
                  zIndex: steps.length - i,
                  opacity: vis ? 1 : 0,
                  transform: vis ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                {/* Arrow */}
                <div className="flex-shrink-0">
                  <svg
                    width={W * 0.7}
                    height={H * 0.7}
                    viewBox={`0 0 ${W} ${H}`}
                    style={{ filter: `drop-shadow(0 4px 10px ${s.shadow})` }}
                  >
                    <polygon
                      points={`0,0 ${W},0 ${W},${H - PH} ${W / 2},${H} 0,${H - PH}`}
                      fill={s.color}
                    />
                    <polygon
                      points={`5,5 ${W - 5},5 ${W - 5},14 5,14`}
                      fill="rgba(255,255,255,0.22)"
                    />
                  </svg>
                </div>

                {/* Text */}
                <div className="pl-4 flex-1">
                  <p className="font-bold text-slate-900 leading-snug mb-1 text-sm">
                    {s.title}
                  </p>
                  <p className="text-slate-500 leading-relaxed text-xs">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop: alternating left/right labels
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-14"
      style={{
        background: "linear-gradient(155deg, #c8dff2 0%, #dceef8 45%, #edf5ff 100%)",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <div className="w-full max-w-2xl">
        {steps.map((s, i) => {
          const isLeft = s.side === "left";
          const vis = shown.includes(i);

          return (
            <div
              key={i}
              className="flex items-center justify-center w-full mb-20"
              style={{
                marginTop: i === 0 ? 0 : -(PH - OVERLAP),
                position: "relative",
                zIndex: steps.length - i,
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.55s ease, transform 0.55s ease",
              }}
            >
              {/* Left label */}
              <div
                className="text-right pr-8"
                style={{
                  width: 210,
                  visibility: isLeft ? "visible" : "hidden",
                }}
              >
                <p
                  className="font-bold text-slate-900 leading-snug mb-1"
                  style={{ fontSize: 14 }}
                >
                  {s.title}
                </p>
                <p
                  className="text-slate-500 leading-relaxed"
                  style={{ fontSize: 11 }}
                >
                  {s.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <svg
                  width={W}
                  height={H}
                  viewBox={`0 0 ${W} ${H}`}
                  style={{ filter: `drop-shadow(0 6px 14px ${s.shadow})` }}
                >
                  <polygon
                    points={`0,0 ${W},0 ${W},${H - PH} ${W / 2},${H} 0,${H - PH}`}
                    fill={s.color}
                  />
                  <polygon
                    points={`5,5 ${W - 5},5 ${W - 5},14 5,14`}
                    fill="rgba(255,255,255,0.22)"
                  />
                </svg>
              </div>

              {/* Right label */}
              <div
                className="text-left pl-8"
                style={{
                  width: 210,
                  visibility: !isLeft ? "visible" : "hidden",
                }}
              >
                <p
                  className="font-bold text-slate-900 leading-snug mb-1"
                  style={{ fontSize: 14 }}
                >
                  {s.title}
                </p>
                <p
                  className="text-slate-500 leading-relaxed"
                  style={{ fontSize: 11 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}