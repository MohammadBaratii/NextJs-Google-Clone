import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const UserProfile = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="w-max">
        <Image
          src={session.user.image}
          alt="User avatar"
          width="500"
          height="500"
          className="w-10 h-10 rounded-full object-cover cursor-pointer hover:ring-4 hover:ring-neutral-300"
          onClick={() => setIsProfileClicked(true)}
        />
        {isProfileClicked && (
          <div
            className="absolute top-0 left-0 w-full h-screen"
            onClick={() => setIsProfileClicked(false)}
          >
            <div
              className="absolute top-[85px] right-3 w-max p-3 bg-neutral-700 rounded-lg sm:right-7"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="absolute -top-[6%] right-4 w-4 h-4 bg-neutral-700 rounded rotate-45 -z-10"></span>
              <p className="text-white font-medium">{session.user.name}</p>
              <button
                className="flex items-center gap-1 m-auto mt-2 p-3 py-1 bg-red-400 text-white rounded transition hover:bg-red-500"
                onClick={signOut}
              >
                Sign Out
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="w-5"
                  fill="#fff"
                >
                  <path d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <button
      className="w-max p-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:shadow-md sm:px-7"
      onClick={signIn}
    >
      Sign In
    </button>
  );
};

export default UserProfile;
