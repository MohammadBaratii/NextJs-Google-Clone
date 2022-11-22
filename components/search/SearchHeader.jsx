import Image from "next/image";
import Link from "next/link";
import SearchHeaderOptionList from "./SearchHeaderOptionList";
import SearchInput from "../SearchInput";
import UserProfile from "../UserProfile";

const SearchHeader = () => {
  return (
    <header className="border-b">
      <nav className="flex items-center gap-3 p-7 px-3 md:gap-10 sm:px-7">
        <h1>
          <Link href="/">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="Google Icon"
              width="96"
              height="32"
              className="w-24 m-auto object-cover"
            />
          </Link>
        </h1>
        <div className="flex-1 max-w-lg">
          <SearchInput />
        </div>
        <div className="ml-auto">
          <UserProfile />
        </div>
      </nav>
      <SearchHeaderOptionList />
    </header>
  );
};

export default SearchHeader;
