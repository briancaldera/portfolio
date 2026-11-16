interface TechStackItem {
  label: string;
  url: string;
  alt: string;
  /** Image import (e.g. `someLogo.src`) for multicolor/branded logos */
  image?: string;
  /** simple-icons path data — rendered as an inline white SVG */
  path?: string;
}

const TechStackItem = ({ url, alt, image, path }: TechStackItem) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="aspect-square rounded-xl border-2 border-neutral-600 bg-neutral-800 p-4 saturate-0 sm:p-6">
        {path ? (
          <svg
            role="img"
            aria-label={alt}
            viewBox="0 0 24 24"
            fill="#fff"
            className="size-full transition duration-500 hover:scale-110"
          >
            <path d={path} />
          </svg>
        ) : (
          <img
            alt={alt}
            src={image}
            className="size-full transition duration-500 hover:scale-110"
          />
        )}
      </div>
    </a>
  );
};

export default TechStackItem;
