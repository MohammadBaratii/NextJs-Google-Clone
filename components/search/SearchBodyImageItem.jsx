const SearchBodyImageItem = ({ image, title, displayLink }) => {
  return (
    <div className="group w-full max-w-sm m-auto">
      <a href={image.contextLink} target="_blank" rel="noreferrer">
        <div className="bg-neutral-100 rounded-lg md:h-44">
          <img
            src={image.thumbnailLink}
            alt={title}
            className="w-full h-full rounded-lg object-contain group-hover:shadow-[0_0_12px_#bbb]"
          />
        </div>
        <p className="text-neutral-400 text-sm group-hover:underline">
          {displayLink}
        </p>
        <p className="w-44 truncate text-neutral-600 text-sm group-hover:underline">
          {title}
        </p>
      </a>
    </div>
  );
};

export default SearchBodyImageItem;
