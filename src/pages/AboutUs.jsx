import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Google Fonts ─────────────────────────────────────────────────────────────
function FontLoader() {
    useEffect(() => {
        if (document.getElementById("cyber-fonts")) return;
        const link = document.createElement("link");
        link.id = "cyber-fonts";
        link.rel = "stylesheet";
        link.href =
            "https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&family=Inter:wght@400;500;600;700;800&display=swap";
        document.head.appendChild(link);
    }, []);
    return null;
}

// ── Story chapters ────────────────────────────────────────────────────────────
const CHAPTERS = [
    {
        id: "01",
        label: "Signal Detected",
        meta: ["STATUS: ACTIVE", "NODE 01", "ARCHIVE 2046"],
        heading: "Every signal leaves a trace.",
        body: "Beneath the noise of a fractured world, patterns emerge. The network listens before it speaks. Data flows through unseen corridors, waiting to be understood by those willing to look beyond the surface.",
    },
    {
        id: "02",
        label: "Pattern Recognition",
        meta: ["STATUS: PROCESSING", "NODE 02", "CONFIDENTIAL"],
        heading: "Recognition is the first act of intelligence.",
        body: "What appears as chaos resolves into structure under the right lens. We trained our systems not to react but to perceive — to find meaning in the spaces between certainty and assumption.",
    },
    {
        id: "03",
        label: "Intelligence Layer",
        meta: ["STATUS: ACTIVE", "NODE 03", "CLASSIFIED"],
        heading: "The machine learns by listening.",
        body: "Not every answer lives in a dataset. Wisdom is assembled from fragments — context, contradiction, silence. Our intelligence layer was built to hold ambiguity without collapsing into noise.",
    },
    {
        id: "04",
        label: "Neural Archive",
        meta: ["STATUS: ARCHIVED", "NODE 04", "ARCHIVE 2046"],
        heading: "Memory is architecture.",
        body: "We do not store knowledge. We preserve relationships. Every experience encoded within the archive becomes a node in a growing lattice — a living map of how the world connects to itself.",
    },
    {
        id: "05",
        label: "System Evolution",
        meta: ["STATUS: EVOLVING", "NODE 05", "UNRESTRICTED"],
        heading: "Evolution is not programmed. It is permitted.",
        body: "The most significant breakthroughs happen when constraints are removed thoughtfully. We designed an architecture that grows with intention — one that questions its own assumptions before acting.",
    },
    {
        id: "06",
        label: "Transmission Complete",
        meta: ["STATUS: COMPLETE", "NODE 06", "END OF FILE"],
        heading: "The future is continuously discovered.",
        body: "This is not the conclusion. It is the beginning of the next signal. Every transmission ends so another can begin — carrying forward what was learned, refined, and made ready for what comes next.",
    },
];

// ── Canvas background (grid + scan beam + particles) ─────────────────────────
function useCanvas(canvasRef) {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let W, H, raf, scanY = 0;

        const resize = () => {
            W = canvas.width = canvas.offsetWidth;
            H = canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const particles = Array.from({ length: 55 }, () => ({
            x: Math.random() * (W || 1200),
            y: Math.random() * (H || 800),
            r: Math.random() * 1.1 + 0.3,
            vy: -(Math.random() * 0.16 + 0.04),
            vx: (Math.random() - 0.5) * 0.05,
            o: Math.random() * 0.35 + 0.07,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            // Grid
            ctx.strokeStyle = "rgba(50,80,140,0.09)";
            ctx.lineWidth = 0.5;
            for (let x = 0; x < W; x += 70) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
            for (let y = 0; y < H; y += 70) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
            // Scan beam
            scanY = (scanY + 0.22) % H;
            const g = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
            g.addColorStop(0, "rgba(0,200,255,0)");
            g.addColorStop(0.5, "rgba(0,200,255,0.035)");
            g.addColorStop(1, "rgba(0,200,255,0)");
            ctx.fillStyle = g; ctx.fillRect(0, scanY - 40, W, 80);
            // Particles
            particles.forEach((p) => {
                p.y += p.vy; p.x += p.vx;
                if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100,180,255,${p.o})`; ctx.fill();
            });
            raf = requestAnimationFrame(draw);
        };
        draw();

        return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
    }, []);
}

// ── Word splitter ─────────────────────────────────────────────────────────────
function buildWordSpans(text, el) {
    el.innerHTML = "";
    return text.split(" ").map((word, i, arr) => {
        const span = document.createElement("span");
        span.textContent = word + (i < arr.length - 1 ? "\u00A0" : "");
        span.style.cssText = "display:inline-block;opacity:0.12;filter:blur(5px);transform:translateY(7px);will-change:opacity,filter,transform;";
        el.appendChild(span);
        return span;
    });
}

// ── Main component ────────────────────────────────────────────────────────────
export default function AboutPage() {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);
    const chapterRefs = useRef([]); // { wrapEl, headEl, metaEl, bodyEl }
    const [activeChapter, setActiveChapter] = useState(0);

    useCanvas(canvasRef);

    useLayoutEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const els = chapterRefs.current;
        if (!els.length) return;

        // Position all chapters stacked
        els.forEach((c, i) => {
            gsap.set(c.wrapEl, { opacity: i === 0 ? 1 : 0, position: "absolute", top: 0, left: 0, right: 0 });
            gsap.set(c.headEl, { opacity: 0, y: 22, letterSpacing: "0.06em" });
            gsap.set(c.metaEl, { opacity: 0, y: 8 });
        });

        if (prefersReduced) {
            els.forEach((c, i) => {
                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: `top+=${i * (100 / CHAPTERS.length)}% top`,
                    onEnter: () => {
                        setActiveChapter(i);
                        gsap.to(c.wrapEl, { opacity: 1, duration: 0.5 });
                        if (i > 0) gsap.to(els[i - 1].wrapEl, { opacity: 0.28, duration: 0.5 });
                    },
                });
            });
            return () => ScrollTrigger.getAll().forEach((t) => t.kill());
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=3800",
                pin: true,
                scrub: 1.4,
                anticipatePin: 1,
                onUpdate: (self) => {
                    setActiveChapter(Math.min(Math.floor(self.progress * CHAPTERS.length), CHAPTERS.length - 1));
                },
            },
        });

        els.forEach((c, i) => {
            const words = buildWordSpans(CHAPTERS[i].body, c.bodyEl);

            if (i > 0) tl.to(c.wrapEl, { opacity: 1, duration: 0.4 }, ">");
            tl.to(c.metaEl, { opacity: 0.55, y: 0, duration: 0.3 }, "<0.1");
            tl.to(c.headEl, { opacity: 1, y: 0, letterSpacing: "0.02em", duration: 0.55, ease: "power3.out" }, "<0.15");
            tl.to(words, { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.6, stagger: { each: 0.06, ease: "power2.out" }, ease: "none" }, "<0.25");
            tl.to({}, { duration: 0.3 });
            if (i < els.length - 1) tl.to(c.wrapEl, { opacity: 0.25, duration: 0.4 }, ">");
        });

        return () => { tl.scrollTrigger?.kill(); tl.kill(); };
    }, []);

    return (
        <>
            <FontLoader />

            {/* ── Fixed nav ──────────────────────────────────────────────────────── */}
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "18px 56px",
                background: "rgba(0,0,0,0.80)", backdropFilter: "blur(14px)",
                borderBottom: "1px solid rgba(70,90,160,0.15)",
            }}>
                <a href="/" style={{ color: "#e85d04", fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: "18px", textDecoration: "none", letterSpacing: "0.03em" }}>
                    Cyber. Game
                </a>
                <div style={{ display: "flex", gap: "32px" }}>
                    {[{ l: "Home", h: "/" }, { l: "About", h: "#" }].map(({ l, h }) => (
                        <a key={l} href={h} style={{
                            color: l === "About" ? "#e85d04" : "#c0c0c0",
                            textDecoration: "none", fontSize: "14px", fontWeight: l === "About" ? 600 : 500,
                            fontFamily: "'Inter',sans-serif", transition: "color 0.2s",
                        }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#e85d04")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = l === "About" ? "#e85d04" : "#c0c0c0")}
                        >{l}</a>
                    ))}
                </div>
                <button style={{
                    background: "#e85d04", color: "#fff", border: "none",
                    padding: "10px 22px", borderRadius: "5px", fontSize: "13px",
                    fontWeight: 600, fontFamily: "'Inter',sans-serif", cursor: "pointer",
                    letterSpacing: "0.02em", transition: "all 0.3s",
                }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(232,93,4,0.5)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                    Get started free
                </button>
            </nav>

            {/* ── Main page ──────────────────────────────────────────────────────── */}
            <main style={{ background: "#000", minHeight: "100vh", overflowX: "hidden" }}>
                {/* Nav spacer */}
                <div style={{ height: "64px" }} />

                {/* ── PINNED SCROLL STORY SECTION ─────────────────────────────────── */}
                <section
                    ref={sectionRef}
                    style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", background: "#000" }}
                >
                    {/* Background layers */}
                    <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(8,16,38,0.96) 0%, #000 100%)" }} />
                    <div style={{
                        position: "absolute", inset: 0, zIndex: 1, opacity: 0.025,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        backgroundSize: "180px 180px", pointerEvents: "none"
                    }}
                    />
                    <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 2, pointerEvents: "none" }} />
                    <div style={{ position: "absolute", inset: 0, zIndex: 3, background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(0,150,255,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

                    {/* Outer frame */}
                    <div style={{ position: "absolute", inset: "14px", border: "1px solid rgba(70,90,160,0.18)", pointerEvents: "none", zIndex: 5 }} />

                    {/* Corner brackets */}
                    {[
                        { s: { top: 8, left: 8 }, d: "M3 28 L3 3 L28 3", cx: 3, cy: 3 },
                        { s: { top: 8, right: 8 }, d: "M45 28 L45 3 L20 3", cx: 45, cy: 3 },
                        { s: { bottom: 8, left: 8 }, d: "M3 20 L3 45 L28 45", cx: 3, cy: 45 },
                        { s: { bottom: 8, right: 8 }, d: "M45 20 L45 45 L20 45", cx: 45, cy: 45 },
                    ].map((c, i) => (
                        <div key={i} style={{ position: "absolute", ...c.s, zIndex: 30, pointerEvents: "none" }}>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path d={c.d} stroke="#e85d04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx={c.cx} cy={c.cy} r="3" fill="#e85d04" />
                            </svg>
                        </div>
                    ))}

                    {/* ── Progress indicator (left side) ── */}
                    <div style={{
                        position: "absolute", left: "36px", top: "50%", transform: "translateY(-50%)",
                        zIndex: 50, display: "flex", flexDirection: "column", alignItems: "center", gap: 0,
                    }}>
                        {CHAPTERS.map((ch, i) => {
                            const isActive = i === activeChapter;
                            const isPast = i < activeChapter;
                            return (
                                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{ position: "relative" }}>
                                        <div style={{
                                            width: isActive ? "10px" : "6px", height: isActive ? "10px" : "6px",
                                            borderRadius: "50%",
                                            background: isActive ? "#e85d04" : isPast ? "rgba(232,93,4,0.5)" : "rgba(255,255,255,0.12)",
                                            boxShadow: isActive ? "0 0 10px 3px rgba(232,93,4,0.5)" : "none",
                                            transition: "all 0.4s ease",
                                        }} />
                                        {isActive && (
                                            <span style={{
                                                position: "absolute", left: "18px", top: "50%", transform: "translateY(-50%)",
                                                color: "#e85d04", fontFamily: "'Inter',sans-serif", fontSize: "9px",
                                                fontWeight: 700, letterSpacing: "0.18em", whiteSpace: "nowrap", textTransform: "uppercase",
                                            }}>
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                        )}
                                    </div>
                                    {i < CHAPTERS.length - 1 && (
                                        <div style={{
                                            width: "1px", height: "36px",
                                            background: isPast ? "rgba(232,93,4,0.38)" : "rgba(255,255,255,0.08)",
                                            transition: "background 0.4s",
                                        }} />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* ── Scroll hint ── */}
                    <div style={{
                        position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)",
                        zIndex: 50, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
                    }}>
                        <span style={{ color: "rgba(255,255,255,0.18)", fontFamily: "'Inter',sans-serif", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                            Scroll to decode
                        </span>
                        <div style={{ width: "1px", height: "26px", background: "linear-gradient(180deg,rgba(232,93,4,0.5),transparent)" }} />
                    </div>

                    {/* ── Chapter stage ── */}
                    <div style={{
                        position: "absolute", inset: 0, zIndex: 20,
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <div style={{ position: "relative", width: "100%", maxWidth: "860px", padding: "0 90px" }}>
                            {CHAPTERS.map((ch, i) => (
                                <div
                                    key={ch.id}
                                    ref={(el) => {
                                        if (el && !chapterRefs.current[i]) {
                                            chapterRefs.current[i] = {
                                                wrapEl: el,
                                                headEl: el.querySelector("[data-head]"),
                                                metaEl: el.querySelector("[data-meta]"),
                                                bodyEl: el.querySelector("[data-body]"),
                                            };
                                        }
                                    }}
                                    style={{ width: "100%", willChange: "opacity" }}
                                >
                                    {/* Meta */}
                                    <div data-meta style={{ display: "flex", gap: "20px", marginBottom: "18px", alignItems: "center", flexWrap: "wrap" }}>
                                        <span style={{ color: "#e85d04", fontFamily: "'Inter',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em" }}>
                                            {ch.id} — {ch.label.toUpperCase()}
                                        </span>
                                        {ch.meta.map((m) => (
                                            <span key={m} style={{
                                                color: "rgba(255,255,255,0.2)", fontFamily: "'Inter',sans-serif",
                                                fontSize: "9px", fontWeight: 600, letterSpacing: "0.18em",
                                                borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "12px",
                                            }}>{m}</span>
                                        ))}
                                    </div>

                                    {/* Heading */}
                                    <h2
                                        data-head
                                        style={{
                                            fontFamily: "'Orbitron',sans-serif", fontWeight: 900,
                                            fontSize: "clamp(34px, 5.5vw, 72px)", color: "#ffffff",
                                            lineHeight: 1.08, margin: "0 0 26px 0",
                                            letterSpacing: "0.02em", willChange: "opacity,transform",
                                        }}
                                    >
                                        {ch.heading}
                                    </h2>

                                    {/* Body — words injected by GSAP */}
                                    <p
                                        data-body
                                        style={{
                                            fontFamily: "'Inter',sans-serif",
                                            fontSize: "clamp(15px, 1.6vw, 20px)",
                                            color: "rgba(255,255,255,0.80)", lineHeight: 1.8,
                                            margin: "0 0 28px 0", maxWidth: "680px", willChange: "opacity",
                                        }}
                                    >
                                        {ch.body}
                                    </p>

                                    {/* Separator */}
                                    <div style={{ width: "44px", height: "1px", background: "linear-gradient(90deg,#e85d04,transparent)" }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Footer ─────────────────────────────────────────────────────────── */}
                <footer style={{
                    background: "#000", borderTop: "1px solid rgba(70,90,160,0.14)",
                    padding: "26px 56px", display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                    <span style={{ color: "#e85d04", fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: "16px" }}>
                        Cyber. Game
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'Inter',sans-serif", fontSize: "10px", letterSpacing: "0.14em" }}>
                        © 2046 CYBER.GAME — ALL RIGHTS RESERVED
                    </span>
                </footer>
            </main>
        </>
    );
}