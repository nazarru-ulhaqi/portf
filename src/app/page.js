export default function Home() {
  const projects = [
    {
      title: "ANN Optimisation of Thermoelectric Materials",
      description:
        "Neural-network-assisted optimisation of synthesis parameters for Ca₃Co₄O₉ thermoelectric systems.",
    },
    {
      title: "PINNs for Nonlinear Systems",
      description:
        "Explorations in scientific machine learning and nonlinear lattice dynamics.",
    },
  ];

  const notes = [
    {
      title: "Determinants Beyond Computation",
      description:
        "Thinking geometrically about multilinearity, permutations, and volume.",
    },
    {
      title: "Mathematical Proofs and Taste",
      description:
        "A note on why proof is not only correctness, but also structure and elegance.",
    },
  ];

  const writings = [
    {
      title: "Notes on Logic and Syllogism",
      description:
        "Reflections on reasoning, argument form, and the discipline of thought.",
    },
    {
      title: "Physics, Mathematics, and Modelling",
      description:
        "Why formalism matters when one moves from physical intuition to abstraction.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f4ee",
        color: "#1f1f1f",
        padding: "80px 24px",
        fontFamily: "serif",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <nav
          style={{
            display: "flex",
            gap: "24px",
            marginBottom: "72px",
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            color: "#666",
          }}
        >
          <a href="#projects" style={{ textDecoration: "none", color: "inherit" }}>
            Projects
          </a>
          <a href="#notes" style={{ textDecoration: "none", color: "inherit" }}>
            Notes
          </a>
          <a href="#writing" style={{ textDecoration: "none", color: "inherit" }}>
            Writing
          </a>
        </nav>

        <header style={{ paddingBottom: "56px", borderBottom: "1px solid #ddd" }}>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "500",
              letterSpacing: "-2px",
              margin: "0 0 24px 0",
              lineHeight: 0.95,
            }}
          >
            Nazarru D. Ulhaqi
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.9,
              color: "#444",
              margin: 0,
              maxWidth: "680px",
            }}
          >
            MSc student in mathematics. Interested in
            nonlinear systems, scientific machine learning, mathematical proofs,
            and the philosophy of rigorous thought.
          </p>
        </header>

        <section id="projects" style={{ marginTop: "72px" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Selected Work</h2>

          <div style={{ display: "grid", gap: "20px" }}>
            {projects.map((item) => (
              <article
                key={item.title}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "16px",
                  padding: "24px",
                  background: "rgba(255,255,255,0.35)",
                }}
              >
                <h3 style={{ fontSize: "28px", margin: "0 0 10px 0" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="notes" style={{ marginTop: "80px" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Notes</h2>

          <div style={{ display: "grid", gap: "20px" }}>
            {notes.map((item) => (
              <article
                key={item.title}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "16px",
                  padding: "24px",
                  background: "rgba(255,255,255,0.35)",
                }}
              >
                <h3 style={{ fontSize: "28px", margin: "0 0 10px 0" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="writing" style={{ marginTop: "80px" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Writing</h2>

          <div style={{ display: "grid", gap: "20px" }}>
            {writings.map((item) => (
              <article
                key={item.title}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "16px",
                  padding: "24px",
                  background: "rgba(255,255,255,0.35)",
                }}
              >
                <h3 style={{ fontSize: "28px", margin: "0 0 10px 0" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#555", lineHeight: 1.8, margin: 0 }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer
          style={{
            marginTop: "96px",
            paddingTop: "24px",
            borderTop: "1px solid #ddd",
            color: "#666",
            fontSize: "15px",
            lineHeight: 1.8,
          }}
        >
          <p style={{ margin: 0 }}>
            Built as a quiet archive of ideas, methods, and unfinished thoughts.
          </p>
        </footer>
      </div>
    </main>
  );
}
