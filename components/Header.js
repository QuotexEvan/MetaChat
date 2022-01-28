import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500">
      <div className="text-left lg:text-center">
        <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
          <Avatar logoutOnPress />
        </div>
        <h1 className="text-3xl ">Welcome to the MetaChatVerse</h1>
        <h2 className="text-5xl font-bold truncate">{user.get("username")}</h2>

        <ChangeUsername />
      </div>
    </div>
  );
}

export default Header;
