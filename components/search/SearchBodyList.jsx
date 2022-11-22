import SearchBodyItem from "./SearchBodyItem";

const SearchBodyList = ({ searchInformation, items }) => {
  return (
    <main className="p-3 sm:p-5 sm:pl-[5%] md:pl-[13%]">
      <p className="text-neutral-500">
        About {searchInformation.formattedTotalResults} results (
        {searchInformation.formattedSearchTime})
      </p>
      {items.map((searchResult) => {
        return (
          <SearchBodyItem key={searchResult.formattedUrl} {...searchResult} />
        );
      })}
    </main>
  );
};

export default SearchBodyList;
