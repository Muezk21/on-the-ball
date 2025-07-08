'use client';

export default function BackToTopButton() {
  return (
    <a
      href="#top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        padding: "0.75rem 1.25rem",
        backgroundColor: "#f37c22",
        color: "#fff",
        borderRadius: "50%",
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 5px 15px rgba(243, 124, 34, 0.4)",
        transition: "transform 0.3s ease",
        fontSize: "1.5rem",
        zIndex: 1000,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      aria-label="Back to top"
    >
      ↑
    </a>
  );
}
