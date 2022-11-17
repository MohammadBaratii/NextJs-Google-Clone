import { useSession } from "next-auth/react";
import Link from "next/link";
import UserProfile from "./UserProfile";

const Header = () => {
  const { data: isAuthenticated } = useSession();

  return (
    <header>
      <ul className="flex items-center gap-5 p-4">
        {isAuthenticated && (
          <>
            <li>
              <Link href="/" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Store
              </Link>
            </li>
          </>
        )}
        <li className="ml-auto">
          <Link href="/" className="hover:underline">
            Gmail
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:underline">
            Images
          </Link>
        </li>
        <li>
          <UserProfile />
        </li>
      </ul>
    </header>
  );
};

export default Header;
