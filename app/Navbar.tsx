import Link from "next/link";

export default function Navbar() {
    return (
        <nav style={{ 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 2rem", 
            background: "#2a2a2a",
            color: "white",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}>
            <div className="logo" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                <Link href="/" style={{ color: "#f37c22", textDecoration: "none" }}>
                    ON THE BALL
                </Link>
            </div>
            
            <div className="nav-links" style={{ display: "flex", gap: "1.5rem" }}>
                <Link href="/" style={{ 
                    color: "white", 
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease"
                }}>Home</Link>
                <Link href="/about" style={{ 
                    color: "white", 
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease"
                }}>About</Link>
                <Link href="/programs" style={{ 
                    color: "white", 
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease"
                }}>Program</Link>
                <Link href="/registration" style={{ 
                    color: "white", 
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease"
                }}>Registration</Link>
                <Link href="/contact" style={{ 
                    color: "white", 
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "color 0.3s ease"
                }}>Contact</Link>
            </div>
        </nav>
    );
}