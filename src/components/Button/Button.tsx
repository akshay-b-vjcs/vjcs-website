// components/ButtonLink.tsx

import React from "react";

interface ButtonLinkProps {
  href: string;
  label: string;
  outline?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, label, outline }) => {
  const baseClass = "btn rounded-pill px-4 py-2 text-uppercase fw-semibold";
  const buttonClass = outline
    ? `${baseClass} btn-outline-success`
    : `${baseClass} btn-success`;

  return (
    <a href={href} className={buttonClass}>
      {label}
    </a>
  );
};

export default ButtonLink;
