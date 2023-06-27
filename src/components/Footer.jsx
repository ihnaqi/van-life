import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <span className="footer-text">
                <p>&copy; {new Date().getFullYear()}</p>
                <Link to="/">
                    <p className="footer-logo">#vanlife</p>
                </Link>
            </span>
        </footer>
    )
}