import Head from "next/head";
import { useRouter } from "next/router";
import PaginationButtons from "../../components/search/PaginationButtons";
import SearchBodyImageList from "../../components/search/SearchBodyImageList";
import SearchBodyList from "../../components/search/SearchBodyList";
import SearchHeader from "../../components/search/SearchHeader";
import { imageSearchType } from "../../dummy-data";

const Search = (props) => {
  const {
    query: { term, searchType },
  } = useRouter();

  const title = `${term} - Google Search`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchHeader />
      {!searchType ? (
        <SearchBodyList {...props} />
      ) : (
        <SearchBodyImageList {...props} />
      )}
      <PaginationButtons />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  // I use hard coded data for now because google developer allows 100 request per day
  const useDummyData = true;
  const pageCount = query.start || 1;

  const response = useDummyData
    ? imageSearchType
    : await fetch(`
  https://www.googleapis.com/customsearch/v1?key=${
    process.env.SEARCH_API_KEY
  }&cx=${process.env.SEARCH_CONTEXT_KEY}&q=${query.term}${
        query.searchType && "&searchType=image"
      }&start=${pageCount}
  `);
  const data = useDummyData ? response : await response.json();
  return {
    props: data,
  };
};

export default Search;
