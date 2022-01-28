import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
    const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <title>Login Page</title>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center ">
        <button onClick={authenticate} className=" text-3xl text-transparent bg-clip-text bg-gradient-to-tr from-violet-600 to-fuchsia-900 animate-pulse delay-700">
          Log-In into The MetaChatVerse 
          <p className=" text-xs hover:opacity-100 active:opacity-0 ">You need to install MetaMask extension on you browser and sign in it to enter here !</p>
              </button>
        </div>

      <div className="w-full h-screen">
        <Image
          src="https://i.imgur.com/WYAjt3T.jpeg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
