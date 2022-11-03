import React from "react";

const Form = () => {
  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col border rounded border-black p-10 max-w-max ml-80 mt-20"
      onSubmit={submitFormHandler}
    >
      <label htmlFor="naziv" className="p-2">
        Naziv:
      </label>
      <input
        type="text"
        id="naziv"
        name="naziv"
        className="border border-black"
      ></input>
      <label htmlFor="kolicina" className="p-2">
        Količina:
      </label>
      <input
        type="text"
        id="kolicina"
        name="kolicina"
        className="border border-black"
      ></input>
      <label htmlFor="šxd" className="p-2">
        ŠxD:
      </label>
      <input
        type="text"
        id="šxd"
        name="šxd"
        className="border border-black"
      ></input>
      <label htmlFor="oznaka" className="p-2">
        Oznaka:
      </label>
      <input
        type="text"
        id="oznaka"
        name="oznaka"
        className="border border-black"
      ></input>
      <button
        type="submit"
        value="Submit"
        className="font-bold border-2 rounded border-black p-1 mt-5"
      >
        Dodaj Paletu
      </button>
    </form>
  );
};

export default Form;
