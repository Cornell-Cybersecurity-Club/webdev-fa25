import { useState } from "react";
import "./Join.css";

const POPUP_SIZE = 170;
const POPUP_UP_OFFSET = 60;
const POPUP_DIRECTIONS = ["left", "left", "left", "down", "right", "right", "right"] as const;

const POPUP_CONTENT = [
  { header: "Apps Open", body: "Club applications are now open! Link is attached below." },
  { header: "Club Fest", body: "Find us at club fest in Barton Hall!" },
  { header: "Info Session", body: "Join us for our first info session to learn more about the club." },
  { header: "Info Session", body: "Join us for our second info session to learn more about the club." },
  { header: "Apps Close!", body: "We are no longer accepting club applications beyond this date. " },
  { header: "Decisions Out!", body: "Welcoming our new members.." },
  { header: "Event", body: "Open to everyone, join for CTF!" },
];

const Join = () => {
  const [openPopups, setOpenPopups] = useState<Set<number>>(new Set());
  const circleData = [
    { angle: -70, date: "01/23", bg: "#E1DAD3" },
    { angle: -46.67, date: "01/24", bg: "#D9D9D9" },
    { angle: -23.33, date: "01/28", bg: "#CBC6C6" },
    { angle: 0, date: "01/30", bg: "#B8B8B8" },
    { angle: 23.33, date: "01/31", bg: "#A5A5A5" },
    { angle: 46.67, date: "02/03", bg: "#8F8F8F" },
    { angle: 70, date: "02/10", bg: "#7A7A7A" },
  ].map(({ angle, date, bg }) => {
    const rad = (angle * Math.PI) / 180;
    const radius = 550;
    const circleSize = 120;
    const half = circleSize / 2;

    const left = 300 + radius * Math.sin(rad) - half;
    const bottom = radius * Math.cos(rad) - half - 20;

    const centerX = left + half;
    const centerY = 600 - (bottom + half);

    return { left, bottom, centerX, centerY, date, bg };
  });

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col items-center text-center relative bg-black">
      <h1 className="mt-12 font-['Roboto_Mono'] text-[#E1DAD3] text-4xl mb-20 flex items-center justify-center gap-0.5">
        become a cybear?
        <span className="cursor-blink text-[#FA2139]">_</span>
      </h1>

      <div className="relative w-[600px] h-[600px] flex justify-center -mt-24 top-[60px] mb-11">

        {/*network background thing*/}
        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          viewBox="0 0 600 600"
          style={{ overflow: "visible" }}
        >
          {/*arcs*/}
          {circleData.slice(0, -1).map((p, i) => {
            const next = circleData[i + 1];
            return (
              <line
                key={"main" + i}
                x1={p.centerX}
                y1={p.centerY}
                x2={next.centerX}
                y2={next.centerY}
                stroke="#FA2139"
                strokeWidth="2.5"
              />
            );
          })}

          {/* scattered satellites/branching */}
          {circleData.map((p, i) => {
            const satellites = [
              { dx: -90, dy: -50, branchX: -20, branchY: -30 }, // Added branching coordinates
              { dx: 80, dy: -40, branchX: 30, branchY: -20 },
              { dx: -50, dy: 80, branchX: -10, branchY: 40 },
              { dx: 40, dy: 60, branchX: 20, branchY: 30 },     // Extra satellite for density
            ];

            return satellites.map((s, j) => {
              const x = p.centerX + s.dx;
              const y = p.centerY + s.dy;
              const bx = x + s.branchX;
              const by = y + s.branchY;

              return (
                <g key={`sat-${i}-${j}`}>
                 
                  <line x1={p.centerX} y1={p.centerY} x2={x} y2={y} stroke="#FA2139" strokeWidth="1.5" opacity="0.7" />
                  
                 
                  <line x1={x} y1={y} x2={bx} y2={by} stroke="#FA2139" strokeWidth="1" opacity="0.4" />
                  
                  <circle cx={x} cy={y} r="5" fill={j % 2 === 0 ? "#FA2139" : "#E1DAD3"} />
                  <circle cx={bx} cy={by} r="3" fill="#FA2139" opacity="0.6" />
                </g>
              );
            });
          })}
        </svg>

        <img
          src="/cybear.jpeg"
          alt="Cybear mascot"
          className="absolute left-1/2 bottom-[50px] -translate-x-1/2 z-10 w-[400px] h-auto object-contain"
        />

        {circleData.map(({ left, bottom, date, bg }, i) => (
          <div
            key={i}
            className="date-circle absolute w-[120px] h-[120px] rounded-full border-[5px] border-[#FA2139] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(250,33,57,0.2)]"
            style={{
              left: `${left}px`,
              bottom: `${bottom}px`,
              backgroundColor: bg,
            }}
            onClick={() =>
              setOpenPopups((prev) => {
                const next = new Set(prev);
                if (next.has(i)) next.delete(i);
                else next.add(i);
                return next;
              })
            }
          >
            <span className="font-['Roboto_Mono'] text-black text-lg font-semibold">
              {date}
            </span>
          </div>
        ))}

        {[...openPopups].map((i) => {
          const { left, bottom } = circleData[i];
          const dir = POPUP_DIRECTIONS[i];
          const gap = 10;
          const circleW = 120;
          const circleH = 120;
          const offset = (POPUP_SIZE - circleH) / 2;

          let popupStyle: { left: string; bottom: string };
          if (dir === "right") {
            popupStyle = {
              left: `${left + circleW + gap}px`,
              bottom: `${bottom - offset}px`,
            };
          } else if (dir === "left") {
            popupStyle = {
              left: `${left - POPUP_SIZE - gap}px`,
              bottom: `${bottom - offset}px`,
            };
          } else {
            popupStyle = {
              left: `${300 - POPUP_SIZE / 2}px`,
              bottom: `${50 + POPUP_UP_OFFSET + 100}px`,
            };
          }

          const { header, body } = POPUP_CONTENT[i];

          return (
            <div
              key={i}
              className="popup-square"
              style={popupStyle}
            >
              <button
                type="button"
                className="popup-close"
                onClick={() =>
                  setOpenPopups((prev) => {
                    const next = new Set(prev);
                    next.delete(i);
                    return next;
                  })
                }
                aria-label="Close"
              >
                ×
              </button>
              <div className="popup-content">
                <h3 className="popup-header">{header}</h3>
                <p className="popup-body">{body}</p>
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-0 w-[600px] h-[300px] bg-[#494141] rounded-t-full border-[30px] border-b-0 border-[#FA2139] overflow-hidden z-20 flex flex-col items-center justify-center gap-2">
          <a
            href="https://cornellcyber.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Roboto_Mono'] text-[#CBC6C6] text-4xl font-bold underline decoration-[#CBC6C6] hover:decoration-white hover:text-white transition-all transition-colors duration-200 cursor-pointer">
            applications...
          </a>
          <p className="font-['Roboto_Mono'] text-[#CBC6C6] text-3xl">
            status: <span className="text-[#00FF00] font-bold">open</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Join;