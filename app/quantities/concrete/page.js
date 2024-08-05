"use client"

import { useState } from "react";

export default function Concrete({
  footingObject,
  wallObject,
  handleConcreteChange,
}) {

  const [show, setShow] = useState(false);

  function handleShow() {
    let showComponent = show;
    if (!showComponent) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  
  return (
    <main className="m-4">
      <span className="flex justify-center">
        <h1 className="text-xl font-bold underline mt-3">Concrete</h1>
        <button className={`${show ? 'bg-green-900 text-amber-300' : 'bg-green-700'} hover:underline rounded-md p-1 text-lg m-2 border-solid border-2 border-black`} onClick={handleShow}>
          {show ? "Hide Concrete" : "Show Concrete"}
        </button>
      </span>
      {show && (
        <div className="flex flex-col">
          <span className="m-2">
            <label className="text-white text-lg font-bold mx-2">
              Footing Concrete Volume (m^3):{" "}
            </label>
            <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2" onChange={handleConcreteChange}>
              {footingObject.depth * footingObject.width * footingObject.linear / 1000000}
            </output>
          </span>
          <span className="m-2">
            <label className="text-white text-lg font-bold mx-2">
              Wall Concrete Volume (m^3):{" "}
            </label>
            <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2" onChange={handleConcreteChange}>
              {wallObject.height * wallObject.width * wallObject.linear / 1000000}
            </output>
          </span>
          <span className="m-2">
            <label className="text-white text-lg font-bold mx-2">
              Total Concrete Volume (m^3):{" "}
            </label>
            <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2" onChange={handleConcreteChange}>
              {footingObject.depth * footingObject.width * footingObject.linear / 1000000 + wallObject.height * wallObject.width * wallObject.linear / 1000000}
            </output>
          </span>
        </div>
      )}
    </main>
  );
}
