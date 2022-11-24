import SearchBodyImageItem from "./SearchBodyImageItem";

const SearchBodyImageList = ({ items }) => {
  return (
    <div className="grid gap-5 p-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.map((searchResult) => {
        return (
          <SearchBodyImageItem key={searchResult.link} {...searchResult} />
        );
      })}
    </div>
  );
};

export default SearchBodyImageList;
