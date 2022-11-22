import SearchBodyItem from "./SearchBodyItem";

const SearchBodyList = ({ searchInformation, items }) => {
  return (
    <main className="p-5 px-10">
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
