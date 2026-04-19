import React, { useState, useEffect } from "react";

export default function SpecialForceCleaners() {
  const [bookingType, setBookingType] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "" });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openBooking = (type) => {
    setBookingType(type);
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", details: "" });
  };

  const closeBooking = () => setBookingType(null);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone) return;
    setSubmitted(true);
  };

  // Palette pulled directly from the new logo
  const BLUE = "#1D6FD9";
  const BLUE_DEEP = "#0F4EA8";
  const BLUE_DARK = "#0A3678";
  const YELLOW = "#FFD93D";
  const YELLOW_DEEP = "#F0BE1F";
  const CREAM = "#FFFCF0";
  const INK = "#0A1F3D";

  const headline = `'Anton', 'Bebas Neue', 'Impact', sans-serif`;
  const body = `'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif`;

  const LOGO_SRC = "/special-force-cleaners/logo.png";

  return (
    <div style={{ minHeight: "100vh", background: CREAM, color: INK, fontFamily: body, overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:wght@400;500;600;700&display=swap');

        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(2deg); } }
        @keyframes bubble { 0% { transform: translateY(0) scale(1); opacity: 0.5; } 100% { transform: translateY(-110vh) scale(1.3); opacity: 0; } }
        @keyframes shine { 0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); } 50% { opacity: 1; transform: scale(1.15) rotate(15deg); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        .reveal { animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .reveal-1 { animation-delay: 0.1s; }
        .reveal-2 { animation-delay: 0.2s; }
        .reveal-3 { animation-delay: 0.35s; }
        .reveal-4 { animation-delay: 0.5s; }

        .btn-hard { transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); box-shadow: 0 6px 0 ${INK}; }
        .btn-hard:hover { transform: translateY(-2px); box-shadow: 0 8px 0 ${INK}; }
        .btn-hard:active { transform: translateY(4px); box-shadow: 0 2px 0 ${INK}; }

        .service-card { transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .service-card:hover { transform: translateY(-6px) rotate(-0.3deg); }

        .nav-link { position: relative; transition: color 0.2s; }
        .nav-link::after {
          content: ''; position: absolute; left: 0; bottom: -4px;
          width: 0; height: 3px; background: ${YELLOW}; transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        input:focus, textarea:focus {
          outline: none; border-color: ${BLUE} !important;
          box-shadow: 0 0 0 3px rgba(29, 111, 217, 0.25);
        }

        .sparkle { position: absolute; animation: shine 2.5s ease-in-out infinite; pointer-events: none; font-size: 20px; }

        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: scrolled ? "10px 32px" : "18px 32px",
        background: scrolled ? "rgba(255, 252, 240, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `3px solid ${INK}` : "3px solid transparent",
        transition: "all 0.3s ease",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src={LOGO_SRC} alt="Special Force Cleaners" style={{ height: scrolled ? 48 : 60, transition: "height 0.3s" }} onError={(e) => { e.currentTarget.style.display = "none"; }} />
        </div>
        <div className="nav-links" style={{ display: "flex", gap: 36, alignItems: "center", fontSize: 15, fontWeight: 700 }}>
          <a href="#services" className="nav-link" style={{ color: INK, textDecoration: "none" }}>Services</a>
          <a href="#process" className="nav-link" style={{ color: INK, textDecoration: "none" }}>How it works</a>
          <a href="#testimonial" className="nav-link" style={{ color: INK, textDecoration: "none" }}>Reviews</a>
          <button onClick={() => openBooking("residential")} className="btn-hard" style={{
            background: YELLOW, color: INK, border: `3px solid ${INK}`,
            padding: "10px 22px", borderRadius: 999, fontSize: 14, fontWeight: 700,
            cursor: "pointer", letterSpacing: "0.05em", textTransform: "uppercase",
          }}>Book now</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 140, paddingBottom: 80, paddingLeft: 32, paddingRight: 32, maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{
            position: "absolute", bottom: -50, left: `${5 + i * 12}%`,
            width: 16 + (i % 3) * 12, height: 16 + (i % 3) * 12, borderRadius: "50%",
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(29, 111, 217, 0.4))`,
            border: `2px solid ${BLUE}`, opacity: 0.4,
            animation: `bubble ${10 + i * 1.5}s ease-in infinite`, animationDelay: `${i * 1.2}s`,
            pointerEvents: "none",
          }} />
        ))}

        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div className="reveal reveal-1" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: YELLOW, border: `3px solid ${INK}`,
              padding: "8px 18px", borderRadius: 999,
              fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
              marginBottom: 28, boxShadow: `3px 3px 0 ${INK}`,
            }}>
              <span style={{ color: BLUE }}>●</span> Residential &amp; Commercial
            </div>

            <h1 className="reveal reveal-2" style={{
              fontFamily: headline, fontSize: "clamp(60px, 9vw, 136px)",
              lineHeight: 0.9, fontWeight: 400, letterSpacing: "-0.01em",
              margin: 0, textTransform: "uppercase", color: INK,
            }}>
              Dirt doesn't<br />stand a{" "}
              <span style={{
                display: "inline-block", background: YELLOW, color: BLUE,
                padding: "0 16px", border: `4px solid ${INK}`, borderRadius: 12,
                transform: "rotate(-2deg)", boxShadow: `6px 6px 0 ${INK}`,
              }}>chance.</span>
            </h1>

            <p className="reveal reveal-3" style={{
              fontSize: 19, lineHeight: 1.55, color: INK,
              maxWidth: 540, marginTop: 40, marginBottom: 40, fontWeight: 500,
            }}>
              Special Force Cleaners deploys trained, bonded, eco-conscious teams across the GTA. Homes, offices, condos, turnovers — we show up ready, we work clean, we leave it better than we found it.
            </p>

            <div className="reveal reveal-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => openBooking("residential")} className="btn-hard" style={{
                background: BLUE, color: "#fff", border: `3px solid ${INK}`,
                padding: "18px 32px", borderRadius: 999, fontSize: 15, fontWeight: 700,
                cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.05em",
              }}>Book a home clean →</button>
              <button onClick={() => openBooking("commercial")} className="btn-hard" style={{
                background: YELLOW, color: INK, border: `3px solid ${INK}`,
                padding: "18px 32px", borderRadius: 999, fontSize: 15, fontWeight: 700,
                cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.05em",
              }}>Get commercial quote</button>
            </div>
          </div>

          <div className="reveal reveal-2" style={{
            position: "relative", aspectRatio: "1 / 1",
            background: `radial-gradient(circle at 50% 50%, ${YELLOW} 0%, ${BLUE} 65%, ${BLUE_DARK} 100%)`,
            borderRadius: 32, border: `4px solid ${INK}`,
            boxShadow: `10px 10px 0 ${INK}`,
            display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
          }}>
            <span className="sparkle" style={{ top: 24, left: 32, animationDelay: "0s", color: "#fff", fontSize: 24 }}>✦</span>
            <span className="sparkle" style={{ top: 60, right: 48, animationDelay: "0.5s", fontSize: 18, color: YELLOW }}>✦</span>
            <span className="sparkle" style={{ bottom: 48, left: 24, animationDelay: "1s", fontSize: 26, color: "#fff" }}>✦</span>
            <span className="sparkle" style={{ bottom: 80, right: 32, animationDelay: "1.5s", color: YELLOW }}>✦</span>
            <span className="sparkle" style={{ top: "50%", left: 16, animationDelay: "0.8s", color: "#fff" }}>✦</span>
            <span className="sparkle" style={{ top: "40%", right: 20, animationDelay: "1.3s", color: YELLOW }}>✦</span>

            <img src={LOGO_SRC} alt="Special Force Cleaners logo" style={{
              width: "90%", height: "90%", objectFit: "contain",
              animation: "float 6s ease-in-out infinite",
              filter: `drop-shadow(5px 5px 0 ${BLUE_DARK})`,
              position: "relative", zIndex: 2,
            }} onError={(e) => { e.currentTarget.style.display = "none"; }} />
          </div>
        </div>

        {/* Stats */}
        <div className="reveal reveal-4 stats-grid" style={{
          marginTop: 80, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
          background: BLUE, borderRadius: 20, border: `4px solid ${INK}`,
          overflow: "hidden", boxShadow: `8px 8px 0 ${INK}`,
        }}>
          {[
            { value: "500+", label: "Happy clients" },
            { value: "$2M", label: "Liability coverage" },
            { value: "100%", label: "Bonded & insured" },
            { value: "4.9★", label: "Average rating" },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: "28px 20px",
              borderRight: i < 3 ? `3px solid ${BLUE_DARK}` : "none",
              textAlign: "center", color: "#fff",
            }}>
              <div style={{ fontFamily: headline, fontSize: 48, fontWeight: 400, color: YELLOW, lineHeight: 1, marginBottom: 6 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, opacity: 0.95 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: INK, color: YELLOW, padding: "22px 0", overflow: "hidden", borderTop: `4px solid ${INK}`, borderBottom: `4px solid ${INK}` }}>
        <div style={{ display: "flex", gap: 48, animation: "marquee 30s linear infinite", whiteSpace: "nowrap", fontFamily: headline, fontSize: 30, letterSpacing: "0.05em" }}>
          {[...Array(2)].map((_, j) => (
            <React.Fragment key={j}>
              <span>★ BONDED</span>
              <span style={{ color: "#fff" }}>★ INSURED</span>
              <span>★ ECO-FRIENDLY</span>
              <span style={{ color: "#fff" }}>★ VETTED TEAMS</span>
              <span>★ SAME-DAY AVAILABLE</span>
              <span style={{ color: "#fff" }}>★ 100% GUARANTEED</span>
              <span>★ BONDED</span>
              <span style={{ color: "#fff" }}>★ INSURED</span>
              <span>★ ECO-FRIENDLY</span>
              <span style={{ color: "#fff" }}>★ VETTED TEAMS</span>
              <span>★ SAME-DAY AVAILABLE</span>
              <span style={{ color: "#fff" }}>★ 100% GUARANTEED</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 32px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: 16, fontWeight: 700 }}>
            ★ What we do ★
          </div>
          <h2 style={{
            fontFamily: headline, fontSize: "clamp(44px, 6vw, 88px)",
            lineHeight: 0.95, fontWeight: 400, letterSpacing: "-0.01em",
            margin: 0, textTransform: "uppercase", color: INK,
          }}>
            Two missions.<br />
            <span style={{ color: BLUE }}>One elite squad.</span>
          </h2>
        </div>

        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          {/* Residential */}
          <div className="service-card" onClick={() => openBooking("residential")} style={{
            background: YELLOW, border: `4px solid ${INK}`, borderRadius: 24,
            padding: 44, cursor: "pointer", boxShadow: `10px 10px 0 ${INK}`,
            minHeight: 520, display: "flex", flexDirection: "column",
            justifyContent: "space-between", position: "relative",
          }}>
            <div style={{
              position: "absolute", top: -18, right: 32, background: BLUE, color: "#fff",
              fontFamily: headline, fontSize: 15, padding: "8px 18px", borderRadius: 999,
              border: `3px solid ${INK}`, letterSpacing: "0.12em", boxShadow: `3px 3px 0 ${INK}`,
            }}>MOST POPULAR</div>
            <div>
              <div style={{ fontFamily: headline, fontSize: 22, color: BLUE, marginBottom: 16, letterSpacing: "0.1em" }}>
                01 — RESIDENTIAL
              </div>
              <h3 style={{
                fontFamily: headline, fontSize: 54, fontWeight: 400, letterSpacing: "-0.01em",
                lineHeight: 0.95, margin: 0, marginBottom: 28, textTransform: "uppercase", color: INK,
              }}>Home, but sparkling.</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 16, lineHeight: 2, fontWeight: 600, color: INK }}>
                <li><span style={{ color: BLUE, marginRight: 8 }}>✓</span> Weekly, biweekly, or one-time deep cleans</li>
                <li><span style={{ color: BLUE, marginRight: 8 }}>✓</span> Move-in / move-out specialists</li>
                <li><span style={{ color: BLUE, marginRight: 8 }}>✓</span> Post-renovation detail work</li>
                <li><span style={{ color: BLUE, marginRight: 8 }}>✓</span> Same trusted team every visit</li>
                <li><span style={{ color: BLUE, marginRight: 8 }}>✓</span> Pet &amp; kid-safe products</li>
              </ul>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 32 }}>
              <div>
                <div style={{ fontSize: 11, color: INK, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>Starting at</div>
                <div style={{ fontFamily: headline, fontSize: 40, color: BLUE }}>$130</div>
              </div>
              <span style={{ fontSize: 36, color: BLUE, fontWeight: 700 }}>→</span>
            </div>
          </div>

          {/* Commercial */}
          <div className="service-card" onClick={() => openBooking("commercial")} style={{
            background: BLUE, color: "#fff", border: `4px solid ${INK}`, borderRadius: 24,
            padding: 44, cursor: "pointer", boxShadow: `10px 10px 0 ${INK}`,
            minHeight: 520, display: "flex", flexDirection: "column",
            justifyContent: "space-between", position: "relative",
          }}>
            <div>
              <div style={{ fontFamily: headline, fontSize: 22, color: YELLOW, marginBottom: 16, letterSpacing: "0.1em" }}>
                02 — COMMERCIAL
              </div>
              <h3 style={{
                fontFamily: headline, fontSize: 54, fontWeight: 400, letterSpacing: "-0.01em",
                lineHeight: 0.95, margin: 0, marginBottom: 28, textTransform: "uppercase",
              }}>Workplace,<br /><span style={{ color: YELLOW }}>deployed.</span></h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 16, lineHeight: 2, fontWeight: 600 }}>
                <li><span style={{ color: YELLOW, marginRight: 8 }}>✓</span> Offices, clinics, studios, retail</li>
                <li><span style={{ color: YELLOW, marginRight: 8 }}>✓</span> Nightly, weekly, or custom schedules</li>
                <li><span style={{ color: YELLOW, marginRight: 8 }}>✓</span> Dedicated account manager</li>
                <li><span style={{ color: YELLOW, marginRight: 8 }}>✓</span> COI &amp; compliance on file</li>
                <li><span style={{ color: YELLOW, marginRight: 8 }}>✓</span> Medical-grade protocols available</li>
              </ul>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 32 }}>
              <div>
                <div style={{ fontSize: 11, color: YELLOW, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>Pricing</div>
                <div style={{ fontFamily: headline, fontSize: 40 }}>CUSTOM QUOTE</div>
              </div>
              <span style={{ fontSize: 36, color: YELLOW, fontWeight: 700 }}>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{
        padding: "100px 32px", background: BLUE, color: "#fff",
        position: "relative", overflow: "hidden",
        borderTop: `4px solid ${INK}`, borderBottom: `4px solid ${INK}`,
      }}>
        <span className="sparkle" style={{ top: 80, left: "10%", fontSize: 32, color: YELLOW }}>✦</span>
        <span className="sparkle" style={{ top: 200, right: "12%", fontSize: 22, color: "#fff", animationDelay: "1s" }}>✦</span>
        <span className="sparkle" style={{ bottom: 120, left: "20%", fontSize: 28, color: YELLOW, animationDelay: "2s" }}>✦</span>
        <span className="sparkle" style={{ bottom: 80, right: "8%", fontSize: 24, color: "#fff", animationDelay: "1.5s" }}>✦</span>

        <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: YELLOW, marginBottom: 16, fontWeight: 700 }}>
              ★ How it works ★
            </div>
            <h2 style={{
              fontFamily: headline, fontSize: "clamp(44px, 6vw, 88px)",
              lineHeight: 0.95, fontWeight: 400, letterSpacing: "-0.01em",
              margin: 0, textTransform: "uppercase",
            }}>
              From call to clean<br />
              <span style={{ color: YELLOW }}>in 4 steps.</span>
            </h2>
          </div>

          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              { n: "01", t: "TELL US", d: "Pick residential or commercial. Share a few details. Takes 90 seconds." },
              { n: "02", t: "WE QUOTE", d: "Transparent pricing within 24 hrs. No mystery fees, no upsell calls." },
              { n: "03", t: "WE DEPLOY", d: "Same small team each visit. Trained, bonded, and never late." },
              { n: "04", t: "YOU RELAX", d: "Walk in, breathe easy. That's the whole point of this." },
            ].map((step, i) => (
              <div key={i} style={{
                background: CREAM, color: INK, border: `3px solid ${INK}`,
                borderRadius: 16, padding: 28, position: "relative",
                boxShadow: `5px 5px 0 ${INK}`,
              }}>
                <div style={{ fontFamily: headline, fontSize: 56, color: BLUE, lineHeight: 1, marginBottom: 16 }}>
                  {step.n}
                </div>
                <h3 style={{ fontFamily: headline, fontSize: 24, fontWeight: 400, letterSpacing: "0.03em", margin: 0, marginBottom: 10 }}>
                  {step.t}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, opacity: 0.85, fontWeight: 500 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section id="testimonial" style={{
        padding: "100px 32px", maxWidth: 1100, margin: "0 auto",
        textAlign: "center", position: "relative",
      }}>
        <span className="sparkle" style={{ top: 40, left: "10%", fontSize: 32, color: BLUE }}>✦</span>
        <span className="sparkle" style={{ top: 80, right: "15%", fontSize: 24, color: YELLOW_DEEP, animationDelay: "1s" }}>✦</span>
        <span className="sparkle" style={{ bottom: 60, left: "18%", fontSize: 28, color: BLUE, animationDelay: "0.5s" }}>✦</span>

        <div style={{ fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: 24, fontWeight: 700 }}>
          ★ Word on the street ★
        </div>
        <div style={{ color: YELLOW_DEEP, fontSize: 32, marginBottom: 28, letterSpacing: "0.2em" }}>★ ★ ★ ★ ★</div>
        <blockquote style={{
          fontFamily: headline, fontSize: "clamp(28px, 3.8vw, 48px)",
          fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.15,
          margin: 0, color: INK, textTransform: "uppercase",
        }}>
          "They showed up like a <span style={{ color: BLUE }}>tactical unit</span>, left it looking like a{" "}
          <span style={{ background: YELLOW, padding: "2px 8px", border: `3px solid ${INK}`, display: "inline-block", transform: "rotate(-1deg)" }}>hotel suite</span>. Stopped checking their work after visit two."
        </blockquote>
        <div style={{ marginTop: 40, fontSize: 15, fontWeight: 600, color: INK }}>
          — A. Laurent · Biweekly client since 2024
        </div>
      </section>

      {/* BIG CTA */}
      <section style={{
        margin: "40px 16px 60px", padding: "80px 32px",
        background: YELLOW, borderRadius: 32, border: `4px solid ${INK}`,
        boxShadow: `10px 10px 0 ${INK}`, textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <span className="sparkle" style={{ top: 32, left: "15%", fontSize: 28, color: BLUE }}>✦</span>
        <span className="sparkle" style={{ bottom: 40, right: "18%", fontSize: 24, color: BLUE, animationDelay: "1s" }}>✦</span>
        <span className="sparkle" style={{ top: 60, right: "10%", fontSize: 32, color: INK, animationDelay: "0.5s" }}>✦</span>

        <h2 style={{
          fontFamily: headline, fontSize: "clamp(48px, 8vw, 112px)",
          lineHeight: 0.9, fontWeight: 400, letterSpacing: "-0.01em",
          margin: 0, textTransform: "uppercase", color: INK,
        }}>
          Ready to<br /><span style={{ color: BLUE }}>call in</span> the squad?
        </h2>
        <p style={{ fontSize: 18, marginTop: 24, marginBottom: 40, maxWidth: 560, margin: "24px auto 40px", fontWeight: 600, color: INK }}>
          Free quote in 24 hours. No contracts. No pressure. Just cleaner space.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => openBooking("residential")} className="btn-hard" style={{
            background: BLUE, color: "#fff", border: `3px solid ${INK}`,
            padding: "20px 36px", borderRadius: 999, fontSize: 16, fontWeight: 700,
            cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.05em",
          }}>Home Clean →</button>
          <button onClick={() => openBooking("commercial")} className="btn-hard" style={{
            background: INK, color: YELLOW, border: `3px solid ${INK}`,
            padding: "20px 36px", borderRadius: 999, fontSize: 16, fontWeight: 700,
            cursor: "pointer", textTransform: "uppercase", letterSpacing: "0.05em",
          }}>Commercial Quote</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: INK, color: "#fff", padding: "48px 32px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img src={LOGO_SRC} alt="Special Force Cleaners" style={{ height: 56 }} onError={(e) => { e.currentTarget.style.display = "none"; }} />
            <div>
              <div style={{ fontFamily: headline, fontSize: 22, letterSpacing: "0.05em", color: YELLOW }}>SPECIAL FORCE CLEANERS</div>
              <div style={{ fontSize: 12, opacity: 0.7, letterSpacing: "0.12em", textTransform: "uppercase" }}>Serving the GTA</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 32, fontSize: 14, fontWeight: 500 }}>
            <span>hello@specialforcecleaners.ca</span>
            <span style={{ color: YELLOW }}>(555) 012-3456</span>
          </div>
        </div>
        <div style={{ marginTop: 32, paddingTop: 24, borderTop: `1px solid rgba(255,255,255,0.15)`, fontSize: 12, opacity: 0.6, letterSpacing: "0.05em" }}>
          © 2026 Special Force Cleaners. Bonded. Insured. Unstoppable.
        </div>
      </footer>

      {/* MODAL */}
      {bookingType && (
        <div onClick={closeBooking} style={{
          position: "fixed", inset: 0, background: "rgba(10, 31, 61, 0.65)",
          backdropFilter: "blur(8px)", zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24, animation: "fadeIn 0.3s ease",
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: CREAM, borderRadius: 24, padding: 40,
            maxWidth: 520, width: "100%", position: "relative",
            animation: "fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            border: `4px solid ${INK}`, boxShadow: `10px 10px 0 ${INK}`,
          }}>
            <button onClick={closeBooking} style={{
              position: "absolute", top: 16, right: 16,
              background: INK, border: "none", width: 36, height: 36,
              borderRadius: "50%", fontSize: 20, cursor: "pointer",
              color: YELLOW, lineHeight: 1, fontWeight: 700,
            }}>×</button>

            {!submitted ? (
              <>
                <div style={{
                  display: "inline-block",
                  background: bookingType === "residential" ? YELLOW : BLUE,
                  color: bookingType === "residential" ? INK : "#fff",
                  padding: "6px 14px", borderRadius: 999,
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.15em",
                  textTransform: "uppercase", marginBottom: 16, border: `3px solid ${INK}`,
                }}>
                  {bookingType === "residential" ? "★ Home Cleaning" : "★ Commercial Quote"}
                </div>
                <h3 style={{
                  fontFamily: headline, fontSize: 40, fontWeight: 400,
                  letterSpacing: "-0.01em", lineHeight: 0.95,
                  margin: 0, marginBottom: 10,
                  textTransform: "uppercase", color: INK,
                }}>
                  {bookingType === "residential" ? "Let's get started." : "Let's talk shop."}
                </h3>
                <p style={{ fontSize: 14, color: INK, lineHeight: 1.6, marginBottom: 24, fontWeight: 500 }}>
                  {bookingType === "residential"
                    ? "A few details and we'll reach out within 24 hours with a quote."
                    : "Tell us about your facility and we'll prepare a custom proposal."}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <input type="text" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle(INK)} />
                  <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle(INK)} />
                  <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle(INK)} />
                  <textarea
                    placeholder={bookingType === "residential" ? "Home size, frequency, any notes (optional)" : "Business type, square footage, schedule (optional)"}
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    rows={3}
                    style={{ ...inputStyle(INK), resize: "vertical", fontFamily: "inherit" }}
                  />

                  <button onClick={handleSubmit} className="btn-hard" style={{
                    background: BLUE, color: "#fff", border: `3px solid ${INK}`,
                    padding: "16px 28px", borderRadius: 999,
                    fontSize: 14, fontWeight: 700, cursor: "pointer",
                    marginTop: 8, textTransform: "uppercase", letterSpacing: "0.05em",
                  }}>
                    {bookingType === "residential" ? "Deploy the squad →" : "Request quote →"}
                  </button>
                </div>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%", background: YELLOW,
                  margin: "0 auto 24px", display: "flex", alignItems: "center",
                  justifyContent: "center", color: INK, fontSize: 36,
                  border: `4px solid ${INK}`, fontWeight: 700,
                }}>✓</div>
                <h3 style={{
                  fontFamily: headline, fontSize: 36, fontWeight: 400,
                  letterSpacing: "-0.01em", margin: 0, marginBottom: 12,
                  textTransform: "uppercase", color: INK,
                }}>
                  Mission received, {form.name.split(" ")[0]}.
                </h3>
                <p style={{ fontSize: 15, color: INK, lineHeight: 1.6, margin: 0, marginBottom: 24, fontWeight: 500 }}>
                  We'll be in touch within 24 hours at{" "}
                  <span style={{ color: BLUE, fontWeight: 700 }}>{form.email}</span>.
                </p>
                <button onClick={closeBooking} style={{
                  background: INK, color: YELLOW, border: `3px solid ${INK}`,
                  padding: "12px 28px", borderRadius: 999, fontSize: 13,
                  cursor: "pointer", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.05em",
                }}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle = (borderColor) => ({
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  border: `3px solid ${borderColor}`,
  background: "#fff",
  fontSize: 15,
  color: borderColor,
  fontFamily: "inherit",
  fontWeight: 500,
  transition: "all 0.2s ease",
  boxSizing: "border-box",
});
