import Image from "next/image";
import Link from "next/link";
import SearchHeaderOptionList from "./SearchHeaderOptionList";
import SearchInput from "../SearchInput";
import UserProfile from "../UserProfile";

const SearchHeader = () => {
  return (
    <header className="p-6 px-10 pb-0 border-b">
      <nav className="flex items-center">
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
        <SearchInput />
        <div className="ml-auto">
          <UserProfile />
        </div>
      </nav>
      <SearchHeaderOptionList />
    </header>
  );
};

export default SearchHeader;
