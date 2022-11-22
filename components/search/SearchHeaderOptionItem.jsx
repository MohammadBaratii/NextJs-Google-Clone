import { useRouter } from "next/router";

const SearchHeaderOptionItem = ({ title, icon, activeTab, tabSearchType }) => {
  const router = useRouter();

  const handleChangeTab = (tabSearchType) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${tabSearchType}`
    );
  };

  return (
    <li>
      <button
        className={`${
          activeTab ? "text-blue-500 border-blue-500" : "border-transparent"
        } flex items-center gap-1 pb-2 border-b-[3px]`}
        onClick={() => handleChangeTab(tabSearchType)}
      >
        {icon === "All" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${
              activeTab ? "text-blue-500" : " text-neutral-500"
            } w-4 h-4`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${
              activeTab ? "text-blue-500" : " text-neutral-500"
            } w-4 h-4`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        )}
        {title}
      </button>
    </li>
  );
};

export default SearchHeaderOptionItem;
