import { useRouter } from "next/router";
import { forwardRef, useImperativeHandle, useState } from "react";

// Used forwardRef here to fire "handleSearch" function from parent component
const SearchInput = forwardRef((_, ref) => {
  const router = useRouter();

  const [input, setInput] = useState(router.query.term || "");
  const [showClearButton, setShowClearButton] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
    setShowClearButton(true);
  };

  const handleClear = () => {
    setInput("");
    setShowClearButton(false);
  };

  const handleSearch = () => {
    if (input.trim()) {
      router.push(`/search?term=${input.trim()}&searchType=`);
    }
  };

  useImperativeHandle(ref, () => ({
    handleSearch,
  }));

  return (
    <form
      className="relative"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2"
        onClick={handleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 text-neutral-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
      <button className="absolute top-1/2 right-4 -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-neutral-500"
        >
          <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
          <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
        </svg>
      </button>
      {showClearButton && (
        <button
          className="absolute flex items-center gap-3 top-1/2 right-12 -translate-y-1/2"
          onClick={handleClear}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-neutral-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="w-[1px] h-6 bg-neutral-300"></span>
        </button>
      )}
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="w-full max-w-xl p-2 px-10 border border-neutral-200 rounded-full outline-none hover:shadow-[0_1px_6px_#ccc]"
      />
    </form>
  );
});
SearchInput.displayName = "SearchInput";

export default SearchInput;
