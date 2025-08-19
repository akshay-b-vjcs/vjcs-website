// components/ServiceCard.tsx
import React, { ReactNode } from "react";
import "./Card.css";

interface ServiceCardProps {
  icon: string;
  title: ReactNode;
  description: ReactNode;
  linkText?: string;
  linkUrl?: string;
  badge?: string;
  price?: string;
  featured?: boolean;
  compact?: boolean;
}

export default function Card({
  icon,
  title,
  description,
  linkText,
  linkUrl,
  badge,
  price,
  featured = false,
  compact = false,
}: ServiceCardProps) {
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
        <h3>
          {linkUrl ? (
            <a href={linkUrl}>{title}</a>
          ) : (
            <>{title}</> // fallback if no link
          )}
        </h3>

        <p>{description}</p>

        {(badge || price) && (
          <div className="service-meta d-flex align-items-center flex-wrap gap-2 mb-3">
            {badge && (
              <span className="badge popular text-uppercase">{badge}</span>
            )}
            {price && <span className="price fw-bold">{price}</span>}
          </div>
        )}

        {linkUrl && (
          <a
            href={linkUrl}
            className="btn-cta d-inline-flex align-items-center gap-2"
          >
            <span>{linkText || "Learn More"}</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        )}
      </div>

      <div className="service-bg position-absolute"></div>
    </div>
  );
}
