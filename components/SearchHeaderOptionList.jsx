import { useRouter } from "next/router";
import SearchHeaderOptionItem from "./SearchHeaderOptionItem";

const ALL_TABS = [
  { id: 1, title: "All", tabSearchType: "" },
  { id: 2, title: "Image", tabSearchType: "image" },
];

const SearchHeaderOptionList = () => {
  const {
    query: { searchType },
  } = useRouter();

  return (
    <ul className="flex gap-5 mt-10 ml-32">
      {ALL_TABS.map((tab) => {
        return (
          <SearchHeaderOptionItem
            key={tab.id}
            title={tab.title}
            icon={tab.title}
            activeTab={searchType === tab.tabSearchType}
            tabSearchType={tab.tabSearchType}
          />
        );
      })}
    </ul>
  );
};

export default SearchHeaderOptionList;
