import React from "react";

const Palete = ({ nalozi }) => {
  return (
    <div>
      <div className="justify-center border rounded border-black max-w-max p-10 ml-20 mt-20 bg-white">
        <p>{nalozi[0].naziv}</p>
      </div>
      <button
        type="button"
        className="font-bold border-2 rounded border-black p-1 mt-5 ml-36 bg-gray-100"
      >
        Sortiraj
      </button>
    </div>
  );
};

export default Palete;
