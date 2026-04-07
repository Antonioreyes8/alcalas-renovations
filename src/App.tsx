export default function App() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      
      {/* Header */}
      <header style={{ marginBottom: "30px" }}>
        <h1>Alcalas Renovations</h1>
        <p>Quality Construction & Home Remodeling</p>
      </header>

      {/* Services */}
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Kitchen Remodeling</li>
          <li>Bathroom Renovations</li>
          <li>Flooring Installation</li>
          <li>Painting & Drywall</li>
        </ul>
      </section>

      {/* About */}
      <section>
        <h2>About Us</h2>
        <p>
          We provide high-quality renovation services with a focus on detail,
          reliability, and customer satisfaction.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact</h2>
        <p>Phone: (123) 456-7890</p>
        <p>Email: alcalasrenovations@email.com</p>
      </section>

    </div>
  );
}