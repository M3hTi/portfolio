import { Link } from "react-router-dom";

function Button({ to = "", children, className = "" }) {
  if (to) {
    return <Link to={to} className={className}>{children}</Link>;
  }
  return <button className={className}>{children}</button>;
}

export default Button;
