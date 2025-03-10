import { Link } from "react-router-dom";

const Breadcrumb = ({ links }) => {
  return (
    <nav className="text-white text-sm">
      {links.map((link, index) => (
        <span key={index}>
          {index > 0 && <span className="mx-2">/</span>}
          {link.href ? (
            <Link to={link.href} className="text-primary hover:underline">
              {link.label}
            </Link>
          ) : (
            <span className="text-gray-400">{link.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
