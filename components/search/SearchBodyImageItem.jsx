const SearchBodyImageItem = (props) => {
  return (
    <div className="group w-full max-w-sm m-auto">
      <a href={props.image.contextLink} target="_blank" rel="noreferrer">
        <div className="bg-neutral-100 rounded-lg md:h-44">
          <img
            src={props.image.thumbnailLink}
            alt={props.title}
            className="w-full h-full rounded-lg object-contain group-hover:shadow-[0_0_12px_#bbb]"
          />
        </div>
        <p className="text-neutral-400 text-sm group-hover:underline">
          {props.displayLink}
        </p>
        <p className="w-44 truncate text-neutral-600 text-sm group-hover:underline">
          {props.title}
        </p>
      </a>
    </div>
  );
};

export default SearchBodyImageItem;
