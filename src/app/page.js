export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7f4ee", color: "#1f1f1f", padding: "80px 24px", fontFamily: "serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "64px", marginBottom: "24px" }}>Nazarru D. Ulhaqi</h1>
        <p style={{ fontSize: "22px", lineHeight: 1.7, color: "#444" }}>
          MSc Mathematics student with a background in Physics. Interested in nonlinear systems, scientific machine learning, optimisation, and mathematical thinking.
        </p>

        <section style={{ marginTop: "80px" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Current Interests</h2>
          <ul style={{ lineHeight: 2, color: "#444", fontSize: "18px" }}>
            <li>Nonlinear systems</li>
            <li>Scientific machine learning</li>
            <li>Optimisation problems</li>
            <li>Mathematical proofs</li>
            <li>Logic and philosophy of science</li>
          </ul>
        </section>

        <section style={{ marginTop: "80px" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Notes</h2>

          <div style={{ border: "1px solid #ccc", borderRadius: "16px", padding: "24px", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "28px" }}>Determinants Beyond Computation</h3>
            <p style={{ color: "#555", lineHeight: 1.7 }}>
              Thinking geometrically about multilinearity, permutations, and volume.
            </p>
          </div>

          <div style={{ border: "1px solid #ccc", borderRadius: "16px", padding: "24px" }}>
            <h3 style={{ fontSize: "28px" }}>PINNs for Nonlinear Systems</h3>
            <p style={{ color: "#555", lineHeight: 1.7 }}>
              Notes on scientific machine learning and nonlinear lattice dynamics.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
