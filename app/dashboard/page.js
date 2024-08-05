"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Footing from "../elements/footing/page";
import Wall from "../elements/wall/page";
import Concrete from "../quantities/concrete/page";
import Rebar from "../quantities/rebar/page";

export default function Dashboard() {
  const [footingObject, setFootingObject] = useState({
    depth: 0,
    width: 0,
    linear: 0,
  });

  const [wallObject, setWallObject] = useState({
    height: 0,
    width: 0,
    linear: 0,
  });

  const [concreteObject, setConcreteObject] = useState({
    footingConcrete: 0,
    wallConcrete: 0,
    totalConcrete: 0,
  });

  const [rebarObject, setRebarObject] = useState({
    footingRebarObject: {
      continuous: {
        diameter: 0,
        spacing: 0,
        stockBarQty: 0,
        kg: 0,
      },
      transverse: {
        diameter: 0,
        spacing: 0,
        fabBarQty: 0,
        kg: 0,
      },
      dowels: {
        diameter: 0,
        spacing: 0,
        projection: 0,
        fabBarQty: 0,
        kg: 0,
      },
    },
    wallRebarObject: {
      horizontal: {
        diameter: 0,
        spacing: 0,
        stockBarQty: 0,
        kg: 0,
      },
      vertical: {
        diameter: 0,
        spacing: 0,
        fabBarQty: 0,
        kg: 0,
      },
    },
  });

  function handleFootingChange(event) {
    const { name, value } = event.target;
    setFootingObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleWallChange(event) {
    const { name, value } = event.target;
    setWallObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleConcreteChange(event) {
    const { name, value } = event.target;
    setConcreteObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleRebarChange = (event) => {
    const { name, value } = event.target;
    const keys = name.split('.');
  
    setRebarObject((prevState) => {
      let newState = { ...prevState };
      let current = newState;
  
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
  
      current[keys[keys.length - 1]] = value;
      return newState;
    });
  };

  useEffect(() => {
    window.footingObject = footingObject;
    window.concreteObject = concreteObject;
    window.rebarObject = rebarObject;
  }, [footingObject, concreteObject, rebarObject]);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="text-4xl text-white font-bold p-2 border-solid border-2 border-white rounded-md">
        Formwork Estimator Dashboard
      </header>
      <div>
        <Footing
          footingObject={footingObject}
          handleFootingChange={handleFootingChange}
        />
      </div>
      <div>
        <Wall wallObject={wallObject} handleWallChange={handleWallChange} />
      </div>
      <div>
        <Concrete
          footingObject={footingObject}
          wallObject={wallObject}
          concreteObject={concreteObject}
          handleConcreteChange={handleConcreteChange}
        />
      </div>
      <div>
        <Rebar
          footingObject={footingObject}
          wallObject={wallObject}
          rebarObject={rebarObject}
          handleRebarChange={handleRebarChange}
        />
      </div>
      <div className="flex flex-col items-center justify-between p-2 m-4">
        <button className="bg-green-700 hover:bg-green-500 hover:underline rounded-md p-2 text-lg mb-14 border-solid border-2 border-black">
          <Link href="/">Go To Home</Link>
        </button>
      </div>
      <div className="flex flex-col items-center justify-between p-2 m-4">
        <button className="bg-green-700 hover:bg-green-500 hover:underline rounded-md p-2 text-lg mb-14 border-solid border-2 border-black">
          <Link href="/about">About</Link>
        </button>
      </div>
    </section>
  );
}
