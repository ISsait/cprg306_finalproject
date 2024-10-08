"use client";

import { useState } from "react";

export default function Rebar({ rebarObject, handleRebarChange }) {
  const listItemStyle = "m-2 p-2 border-solid border-2 border-slate-700";
  const kgPerMeter10M = 0.785;
  const kgPerMeter15M = 1.57;
  const kgPerMeter20M = 2.355;

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
        <h1 className="text-xl font-bold underline mt-3">Rebar</h1>
        <button
          className={`${
            show ? "bg-green-900 text-amber-300" : "bg-green-700"
          } hover:underline rounded-md p-1 text-lg m-2 border-solid border-2 border-black`}
          onClick={handleShow}
        >
          {show ? "Hide Rebar" : "Show Rebar"}
        </button>
      </span>
      {show && (
        <div className="flex flex-col">
          <span>
            <h2 className="text-white text-lg font-bold mx-2 text-center border-b-2 border-white">
              Footing Rebar
            </h2>
            <section className="flex justify-center">
              <ul className="my-4">
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Continuous Rebar Diameter (mm):{" "}
                  </label>
                  <select
                    name="footingRebarObject.continuous.diameter"
                    value={rebarObject.footingRebarObject.continuous.diameter}
                    onChange={(event) => handleRebarChange(event)}
                    className="m-2 rounded-sm bg-slate-700 text-white"
                  >
                    <option value="N/A">Select</option>
                    <option value="10M">10M</option>
                    <option value="15M">15M</option>
                    <option value="20M">20M</option>
                  </select>
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Continuous Rebar Spacing (mm):{" "}
                  </label>
                  <input
                    type="number"
                    name="footingRebarObject.continuous.spacing"
                    value={rebarObject.footingRebarObject.continuous.spacing}
                    onChange={(event) => handleRebarChange(event)}
                    className="m-2 rounded-sm bg-slate-700 text-white"
                  />
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Continuous Rebar 6 Meter Stock Qty:{" "}
                  </label>
                  <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2">
                    {rebarObject.footingRebarObject.continuous.stockBarQty}
                  </output>
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Continuous Rebar Kg Mass:{" "}
                  </label>
                  <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2">
                    {rebarObject.footingRebarObject.continuous.kg}
                  </output>
                </li>
              </ul>
              <ul className="my-4">
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Transverse Rebar Diameter (mm):{" "}
                  </label>
                  <select
                    name="footingRebarObject.transverse.diameter"
                    value={rebarObject.footingRebarObject.transverse.diameter}
                    onChange={(event) => handleRebarChange(event)}
                    className="m-2 rounded-sm bg-slate-700 text-white"
                  >
                    <option value="N/A">Select</option>
                    <option value="10M">10M</option>
                    <option value="15M">15M</option>
                    <option value="20M">20M</option>
                  </select>
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Transverse Rebar Spacing (mm):{" "}
                  </label>
                  <input
                    type="number"
                    name="footingRebarObject.transverse.spacing"
                    value={rebarObject.footingRebarObject.transverse.spacing}
                    onChange={(event) => handleRebarChange(event)}
                    className="m-2 rounded-sm bg-slate-700 text-white"
                  />
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Transverse Rebar Fabricated Qty:{" "}
                  </label>
                  <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2">
                    {rebarObject.footingRebarObject.transverse.fabBarQty}
                  </output>
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Transverse Rebar Kg Mass:{" "}
                  </label>
                  <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2">
                    {rebarObject.footingRebarObject.transverse.kg}
                  </output>
                </li>
              </ul>
              <ul className="my-4">
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Dowel Rebar Diameter (mm):{" "}
                  </label>
                  <select
                    name="footingRebarObject.dowels.diameter"
                    value={rebarObject.footingRebarObject.dowels.diameter}
                    onChange={(event) => handleRebarChange(event)}
                    className="m-2 rounded-sm bg-slate-700 text-white"
                  >
                    <option value="N/A">Select</option>
                    <option value="10M">10M</option>
                    <option value="15M">15M</option>
                    <option value="20M">20M</option>
                  </select>
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Dowel Rebar Spacing (mm):{" "}
                  </label>
                  <input
                    type="number"
                    name="footingRebarObject.dowels.spacing"
                    value={rebarObject.footingRebarObject.dowels.spacing}
                    onChange={(event) => handleRebarChange(event)}
                    className="m-2 rounded-sm bg-slate-700 text-white"
                  />
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Dowel Rebar Projection (mm):{" "}
                  </label>
                  <input
                    type="number"
                    name="footingRebarObject.dowels.projection"
                    value={rebarObject.footingRebarObject.dowels.projection}
                    onChange={(event) => handleRebarChange(event)}
                    className="m-2 rounded-sm bg-slate-700 text-white"
                  />
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Dowel Rebar Fabricated Qty:{" "}
                  </label>
                  <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2">
                    {rebarObject.footingRebarObject.dowels.fabBarQty}
                  </output>
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Dowel Rebar Kg Mass:{" "}
                  </label>
                  <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2">
                    {rebarObject.footingRebarObject.dowels.kg}
                  </output>
                </li>
              </ul>
            </section>
            <span className="block p-2 text-center text-white text-lg font-bold mb-12">
              Total Footing Rebar Kg:{" "}
              {rebarObject.footingRebarObject.continuous.kg +
                rebarObject.footingRebarObject.transverse.kg +
                rebarObject.footingRebarObject.dowels.kg}
            </span>
          </span>
          <span>
            <h2 className="text-white text-lg font-bold mx-2 text-center border-b-2 border-white">
              Wall Rebar
            </h2>
            <section className="flex justify-center">
              <ul className="my-4">
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Horizontal Rebar Diameter (mm):{" "}
                  </label>
                  <select
                    name="wallRebarObject.horizontal.diameter"
                    value={rebarObject.wallRebarObject.horizontal.diameter}
                    onChange={(event) => handleRebarChange(event)}
                    className="m-2 rounded-sm bg-slate-700 text-white"
                  >
                    <option value="N/A">Select</option>
                    <option value="10M">10M</option>
                    <option value="15M">15M</option>
                    <option value="20M">20M</option>
                  </select>
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Horizontal Rebar Spacing (mm):{" "}
                  </label>
                  <input
                    type="number"
                    name="wallRebarObject.horizontal.spacing"
                    value={rebarObject.wallRebarObject.horizontal.spacing}
                    onChange={(event) => handleRebarChange(event)}
                    className="m-2 rounded-sm bg-slate-700 text-white"
                  />
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Horizontal Rebar 6 Meter Stock Qty:{" "}
                  </label>
                  <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2">
                    {rebarObject.wallRebarObject.horizontal.stockBarQty}
                  </output>
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Horizontal Rebar Kg Mass:{" "}
                  </label>
                  <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2">
                    {rebarObject.wallRebarObject.horizontal.kg}
                  </output>
                </li>
              </ul>
              <ul className="my-4">
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Vertical Rebar Diameter (mm):{" "}
                  </label>
                  <select
                    name="wallRebarObject.vertical.diameter"
                    value={rebarObject.wallRebarObject.vertical.diameter}
                    onChange={(event) => handleRebarChange(event)}
                    className="m-2 rounded-sm bg-slate-700 text-white"
                  >
                    <option value="N/A">Select</option>
                    <option value="10M">10M</option>
                    <option value="15M">15M</option>
                    <option value="20M">20M</option>
                  </select>
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Vertical Rebar Spacing (mm):{" "}
                  </label>
                  <input
                    type="number"
                    name="wallRebarObject.vertical.spacing"
                    value={rebarObject.wallRebarObject.vertical.spacing}
                    onChange={(event) => handleRebarChange(event)}
                    className="m-2 rounded-sm bg-slate-700 text-white"
                  />
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Vertical Rebar Fabricated Qty:{" "}
                  </label>
                  <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2">
                    {rebarObject.wallRebarObject.vertical.fabBarQty}
                  </output>
                </li>
                <li className={listItemStyle}>
                  <label className="text-white text-lg font-bold mx-2">
                    Vertical Rebar Kg Mass:{" "}
                  </label>
                  <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2">
                    {rebarObject.wallRebarObject.vertical.kg}
                  </output>
                </li>
              </ul>
            </section>
            <span className="block p-2 text-center text-white text-lg font-bold mb-12">
              Total Wall Rebar Kg:{" "}
              {rebarObject.wallRebarObject.horizontal.kg +
              rebarObject.wallRebarObject.vertical.kg}
            </span>
          </span>
        </div>
      )}
    </main>
  );
}
