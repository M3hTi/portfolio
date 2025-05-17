import { Link } from "react-router-dom";

import sharedStyles from "../components/shared.module.css";

function Footer({ children }) {
  if (children === "Get in touch") {
    return (
      <div className={sharedStyles.footerLink}>
        Check out{" "}
        <Link to="/contact" className="clear-links">
          {children}
        </Link>
      </div>
    );
  }
  if (children === "about me") {
    return (
      <div className={sharedStyles.footerLink}>
        Read more{" "}
        <Link to="/about" className="clear-links">
          {children}
        </Link>
      </div>
    );
  }
  return (
    <div className={sharedStyles.footerLink}>
      Check out my{" "}
      <Link to={`/${children}`} className="clear-links">
        {children}
      </Link>
    </div>
  );
}

export default Footer;
