"use client";

import Link from "next/link";
import { useState } from "react";
import Footing from "../elements/footing/page";
import Wall from "../elements/wall/page";

export default function Dashboard() {
  const [footingDepth, setFootingDepth] = useState(0);
  const [footingWidth, setFootingWidth] = useState(0);
  const [footingLinear, setFootingLinear] = useState(0);
  const [isFooting, setIsFootings] = useState(false);

  function handleFootingDepthChange(event) {
    setFootingDepth(event.target.value);
    console.log(footingDepth);
  }
  function handleFootingWidthChange(event) {
    setFootingWidth(event.target.value);
    console.log(footingWidth);
  }
  function handleFootingLinearChange(event) {
    setFootingLinear(event.target.value);
    console.log(footingLinear);
  }
  function handleIsFooting() {
    let showFooting = isFooting;
    if (!showFooting) {
      setIsFootings(true);
    } else {
      setIsFootings(false);
    }
  }

  const [wallHeight, setWallHeight] = useState(0);
  const [wallWidth, setWallWidth] = useState(0);
  const [wallLinear, setWallLinear] = useState(0);
  const [isWall, setIsWall] = useState(false);

  function handleWallHeightChange(event) {
    setWallHeight(event.target.value);
  }
  function handleWallWidthChange(event) {
    setWallWidth(event.target.value);
  }
  function handleWallLinearChange(event) {
    setWallLinear(event.target.value);
  }
  function handleIsWall() {
    let showWall = isWall;
    if (!showWall) {
      setIsWall(true);
    } else {
      setIsWall(false);
    }
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="text-4xl text-white font-bold p-2 border-solid border-2 border-white rounded-md">
        Formwork Estimator Dashboard
      </header>
      <div>
        <Footing
          handleFootingDepthChange={handleFootingDepthChange}
          footingDepth={footingDepth}
          handleFootingWidthChange={handleFootingWidthChange}
          footingWidth={footingWidth}
          handleFootingLinearChange={handleFootingLinearChange}
          footingLinear={footingLinear}
          handleIsFooting={handleIsFooting}
          isFooting={isFooting}
        />
      </div>
      <div>
        <Wall
          handleWallHeightChange={handleWallHeightChange}
          wallHeight={wallHeight}
          handleWallWidthChange={handleWallWidthChange}
          WallWidth={wallWidth}
          handleWallLinearChange={handleWallLinearChange}
          WallLinear={wallLinear}
          handleIsWall={handleIsWall}
          isWall={isWall}
        />
      </div>
      <div className="flex flex-col items-center justify-between p-2">
        <button className="bg-green-700 hover:bg-green-500 hover:underline rounded-md p-2 text-lg mb-14 border-solid border-2 border-black">
          <Link href="/">Go To Home</Link>
        </button>
      </div>
    </section>
  );
}
