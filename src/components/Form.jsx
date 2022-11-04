import React from "react";
import { useState } from "react";
import Palete from "./Palete";

const Form = () => {
  const [naziv, setNaziv] = useState("");
  const [kolicina, setKolicina] = useState("");
  const [sirina, setSirina] = useState("");
  const [duzina, setDuzina] = useState("");
  const [oznaka, setOznaka] = useState("");
  const [isEntered, setIsEntered] = useState(false);

  const nalozi = [];

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  const nazivChangeHandler = (e) => {
    setNaziv(e.target.value);
  };

  const kolicinaChangeHandler = (e) => {
    setKolicina(e.target.value);
  };

  const sirinaChangeHandler = (e) => {
    setSirina(e.target.value);
  };

  const duzinaChangeHandler = (e) => {
    setDuzina(e.target.value);
  };

  const oznakaChangeHandler = (e) => {
    setOznaka(e.target.value);
  };

  const dodajPaletuHandler = () => {
    setIsEntered(true);
    nalozi.push({
      naziv: naziv,
      kolicina: kolicina,
      sirina: sirina,
      duzina: duzina,
      oznaka: oznaka,
    });
  };

  return (
    <div className="flex">
      <form
        className="flex flex-col border rounded border-black p-10 max-w-max ml-80 mt-20 bg-white"
        onSubmit={submitFormHandler}
      >
        <label htmlFor="naziv" className="p-2">
          Naziv:
        </label>
        <input
          type="text"
          id="naziv"
          name="naziv"
          value={naziv}
          onChange={nazivChangeHandler}
          className="border border-black bg-gray-100"
        ></input>
        <label htmlFor="kolicina" className="p-2">
          Količina:
        </label>
        <input
          type="text"
          id="kolicina"
          name="kolicina"
          value={kolicina}
          onChange={kolicinaChangeHandler}
          className="border border-black bg-gray-100"
        ></input>
        <label htmlFor="sirina" className="p-2">
          Širina:
        </label>
        <input
          type="text"
          id="sirina"
          name="sirina"
          value={sirina}
          onChange={sirinaChangeHandler}
          className="border border-black bg-gray-100"
        ></input>
        <label htmlFor="duzina" className="p-2">
          Dužina:
        </label>
        <input
          type="text"
          id="duzina"
          name="duzina"
          value={duzina}
          onChange={duzinaChangeHandler}
          className="border border-black bg-gray-100"
        ></input>
        <label htmlFor="oznaka" className="p-2">
          Oznaka:
        </label>
        <input
          type="text"
          id="oznaka"
          name="oznaka"
          value={oznaka}
          onChange={oznakaChangeHandler}
          className="border border-black bg-gray-100"
        ></input>
        <button
          type="submit"
          value="Submit"
          className="font-bold border-2 rounded border-black p-1 mt-5 bg-gray-100"
          onClick={dodajPaletuHandler}
        >
          Dodaj Paletu
        </button>
      </form>
      {isEntered && <Palete nalozi={nalozi} />}
    </div>
  );
};

export default Form;
