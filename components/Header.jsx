import Link from "next/link";

const Header = () => {
  return (
    <header>
      <ul className="flex items-center gap-5 p-4">
        <li>
          <Link href="/" className="hover:underline">
            About
          </Link>
        </li>
        <li className="mr-auto">
          <Link href="/" className="hover:underline">
            Store
          </Link>
        </li>
        <li>
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
          <Link href="/">
            <img
              src="https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg?compress=1&resize=768x576&vertical=top"
              alt="avatar"
              className="w-9 h-9 object-cover rounded-full hover:ring-4 ring-neutral-200"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
