import Link from "next/link";
import { useRouter } from "next/router";

const PaginationButtons = () => {
  const { query } = useRouter();
  const pageCount = Number(query.start) || 1;

  return (
    <div className="flex justify-center items-center gap-10 pb-6">
      {pageCount > 10 && (
        <Link
          href={`/search?term=${query.term}&searchType=${
            query.searchType
          }&start=${pageCount - 10}`}
          className="flex justify-center items-center p-2 bg-blue-500 text-white rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 translate-y-[1px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
      )}
      <p className="text-blue-500 text-xl font-semibold">
        {Math.floor(pageCount / 10) + 1}
      </p>
      {pageCount < 91 && (
        <Link
          href={`/search?term=${query.term}&searchType=${
            query.searchType
          }&start=${pageCount + 10}`}
          className="flex justify-center items-center p-2 bg-blue-500 text-white rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 translate-y-[1px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
