import { useState } from "react";
import Form from "./components/Form";

import "./index.css";

function App() {
  const [nalog, setNalog] = useState(false);

  const noviNalogHandler = () => {
    setNalog(!nalog);
  };

  return (
    <>
      <h1 className="text-6xl font-bold flex justify-center items-center pt-5">
        D.L.M. Sorting
      </h1>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="border border-black rounded p-2 font-bold mt-20"
          onClick={noviNalogHandler}
        >
          Novi Nalog
        </button>
      </div>
      {nalog && <Form />}
    </>
  );
}

export default App;
