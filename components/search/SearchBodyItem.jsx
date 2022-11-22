import parse from "html-react-parser";

const SearchBodyItem = ({ displayLink, formattedUrl, title, htmlSnippet }) => {
  return (
    <div className="my-6">
      <a
        href={formattedUrl}
        target="_blank"
        rel="noreferrer"
        className="group block w-fit"
      >
        <p className="w-fit">{displayLink}</p>
        <h2 className="w-fit text-[#1a0dab] text-xl group-hover:underline">
          {title}
        </h2>
      </a>
      <p className="max-w-xl text-neutral-600 text-sm">{parse(htmlSnippet)}</p>
    </div>
  );
};

export default SearchBodyItem;
