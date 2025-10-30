import React, { ReactNode } from "react";
import "./Card.css";
import Link from "next/link";

interface ServiceLink {
  icon: string | undefined;
  text: string;
  url: string;
}

interface CardProps {
  icon: string;
  title: ReactNode;
  description?: ReactNode;
  links?: ServiceLink[];
  featured?: boolean;
  compact?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  links = [],
  featured = false,
  compact = false,
  className,
}) => {
  const cardClass = [
    "card",
    featured ? "featured" : "",
    compact ? "compact" : "",
    "h-100",
    "p-4",
    "rounded-4",
    "border",
    "position-relative",
    "overflow-hidden",
    featured || compact ? "transition-hover" : "",
    className ? className : "",
  ]
    .join(" ")
    .trim();

  return (
    <div className={cardClass}>
      <div className="card-icon d-flex align-items-center justify-content-center mb-4 rounded">
        <i className={`bi ${icon}`}></i>
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {links.length > 0 && (
          <ul className="mt-3 list-unstyled">
            {links.map((link, idx) => (
              <li key={idx} className="mb-2">
                <Link
                  href={link.url}
                  className="d-flex align-items-center gap-2 text-decoration-none"
                >
                  <i className={link.icon}></i>
                  <span>{link.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="card-bg position-absolute"></div>
    </div>
  );
};

export default Card;
