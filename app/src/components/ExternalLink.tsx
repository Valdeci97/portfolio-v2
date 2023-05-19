type ExternalLinkProps = { link: string; componentClass: string };

export default function ExternalLink({
  link,
  componentClass,
}: ExternalLinkProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-external-link ${componentClass}`}
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" x2="21" y1="14" y2="3"></line>
      </svg>
    </a>
  );
}
