interface BookItem {
  title: string;
  author: string;
  image: string;
  url?: string;
}

const BookItem = ({ title, author, image, url }: BookItem) => {
  const card = (
    <div className="overflow-hidden rounded-xl border-2 border-neutral-600 bg-neutral-800 transition duration-500 hover:scale-105">
      <img
        alt={`${title} cover`}
        src={image}
        className="aspect-[2/3] w-full object-cover"
      />
      <div className="p-3">
        <p className="truncate text-sm font-semibold leading-tight text-white">
          {title}
        </p>
        <p className="truncate text-xs text-neutral-400">{author}</p>
      </div>
    </div>
  );

  if (!url) return card;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {card}
    </a>
  );
};

export default BookItem;
