"use client";

import { useState } from "react";

export default function Footing({
  footingObject,
  handleFootingChange,
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
        <h1 className="text-xl font-bold underline mt-3">Footings</h1>
        <button className={`${show ? 'bg-green-900 text-amber-300' : 'bg-green-700'} hover:underline rounded-md p-1 text-lg m-2 border-solid border-2 border-black`} onClick={handleShow}>
          {show ? "Hide Footing" : "Show Footing"}
        </button>
      </span>
      {show && (
        <div className="flex flex-col">
          <span>
            <label className="text-white text-lg font-bold mx-2">
              Footing Depth (mm):{" "}
            </label>
            <input
              type="number"
              name="depth"
              value={footingObject.depth}
              onChange={handleFootingChange}
              className="m-2 rounded-sm bg-slate-700 text-white"
            />
          </span>
          <span>
            <label className="text-white text-lg font-bold mx-2">
              Footing Width (mm):{" "}
            </label>
            <input
              type="number"
              name="width"
              value={footingObject.width}
              onChange={handleFootingChange}
              className="m-2 rounded-sm bg-slate-700 text-white"
            />
          </span>
          <span>
            <label className="text-white text-lg font-bold mx-2">
              Footing Linear (m):{" "}
            </label>
            <input
              type="number"
              name="linear"
              value={footingObject.linear}
              onChange={handleFootingChange}
              className="m-2 rounded-sm bg-slate-700 text-white"
            />
          </span>
        </div>
      )}
    </main>
  );
}
