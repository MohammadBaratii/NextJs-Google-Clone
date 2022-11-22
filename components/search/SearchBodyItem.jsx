import parse from "html-react-parser";

const SearchBodyItem = ({ displayLink, formattedUrl, title, htmlSnippet }) => {
  return (
    <div className="my-6">
      <p>{displayLink}</p>
      <h2>
        <a
          href={formattedUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[#1a0dab] text-xl hover:underline"
        >
          {title}
        </a>
      </h2>
      <p className="text-neutral-600 text-sm">{parse(htmlSnippet)}</p>
    </div>
  );
};

export default SearchBodyItem;
