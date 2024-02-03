import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5">
      <div className="">
        <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
          Expenser
        </h1>
      </div>
      <div>
        <button
          className="bg-green-500 text-white font-bold py-2 px-8 rounded shadow
            border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300"
        >
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default Header;
