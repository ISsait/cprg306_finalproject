"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Footing from "../elements/footing/page";
import Wall from "../elements/wall/page";
import Concrete from "../quantities/concrete/page";
import Rebar from "../quantities/rebar/page";
import {
  footingRebarQtyCalc,
  wallRebarQtyCalc,
} from "../quantities/rebar/qtyCalcs";
import { dbAddItem } from "../_services/estimator-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Dashboard() {
  const { user } = useUserAuth();

  const [projectName, setProjectName] = useState("");

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

  function handleProjectNameChange(event) {
    const { value } = event.target;
    setProjectName(value);
  }

  function handleFootingChange(event) {
    const { name, value } = event.target;

    setFootingObject((prevState) => {
      const current = {
        ...prevState,
        [name]: value,
      };
      footingRebarQtyCalc(rebarObject, current);
      handleConcreteChange(current, wallObject);
      return current;
    });
  }

  function handleWallChange(event) {
    const { name, value } = event.target;

    setWallObject((prevState) => {
      const current = {
        ...prevState,
        [name]: value,
      };
      wallRebarQtyCalc(rebarObject, current);
      handleConcreteChange(footingObject, current);
      return current;
    });
  }

  function handleConcreteChange(footingObject, wallObject) {
    setConcreteObject((prevState) => ({
      ...prevState,
      footingConcrete:
        (footingObject.depth * footingObject.width * footingObject.linear) /
        1000000,
      wallConcrete:
        (wallObject.height * wallObject.width * wallObject.linear) / 1000000,
      totalConcrete:
        (footingObject.depth * footingObject.width * footingObject.linear) /
          1000000 +
        (wallObject.height * wallObject.width * wallObject.linear) / 1000000,
    }));
  }

  const handleRebarChange = (event) => {
    const { name, value } = event.target;
    const keys = name.split(".");

    setRebarObject((prevState) => {
      let newState = { ...prevState };
      let current = newState;

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = value;

      current = newState;
      footingRebarQtyCalc(current, footingObject);
      wallRebarQtyCalc(current, wallObject);
      return newState;
    });
  };

  const handleAddItem = () => {
    dbAddItem(user, projectName, footingObject, wallObject, concreteObject, rebarObject);
  };

  useEffect(() => {
    window.footingObject = footingObject;
    window.concreteObject = concreteObject;
    window.rebarObject = rebarObject;
  }, [footingObject, concreteObject, rebarObject]);

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{
        backgroundImage: `url('./bgDashboard.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="text-4xl text-white font-bold p-2 border-solid border-2 border-white rounded-md">
        Formwork Estimator Dashboard
      </header>
      <span>
        <label className="text-white text-lg font-bold mx-2">
          Project Name:{" "}
        </label>
        <input
          type="string"
          name="projectName"
          value={projectName}
          onChange={handleProjectNameChange}
          className="m-2 rounded-sm bg-slate-700 text-white"
        />
      </span>
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
        <button
          className="bg-green-700 hover:bg-green-500 hover:underline rounded-md p-2 text-lg mb-14 border-solid border-2 border-black"
          onClick={handleAddItem}
        >
          Add Item
        </button>
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
