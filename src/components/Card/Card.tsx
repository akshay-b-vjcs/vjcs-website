import React from "react";
import "./Card.css";
import Link from "next/link";

interface ServiceLink {
  icon: string | undefined;
  text: string;
  url: string;
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  links?: ServiceLink[]; // optional now
  badge?: string;
  price?: string;
  featured?: boolean;
  compact?: boolean;
}

const Card:React.FC<ServiceCardProps>  = ({
  icon,
  title,
  description,
  links = [], // default empty array

  featured = false,
  compact = false,
}: ServiceCardProps) =>{
  const cardClass = [
    "service-card",
    featured ? "featured" : "",
    compact ? "compact" : "",
    "h-100",
    "p-4",
    "rounded-4",
    "border",
    "position-relative",
    "overflow-hidden",
    featured || compact ? "transition-hover" : "",
  ]
    .join(" ")
    .trim();

  return (
    <div className={cardClass}>
      <div className="service-icon d-flex align-items-center justify-content-center mb-4 rounded">
        <i className={`bi ${icon}`}></i>
      </div>

      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {links && links.length > 0 && (

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

      <div className="service-bg position-absolute"></div>
    </div>
  );
}

export default Card;