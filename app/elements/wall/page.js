

export default function Wall({
    handleWallHeightChange,
    wallHeight,
    handleWallWidthChange,
    WallWidth,
    handleWallLinearChange,
    WallLinear,
    handleIsWall,
    isWall,
  }) {
    return (
      <main>
        <h1 className="text-xl font-bold underline text-center" onClick={handleIsWall}>
          {isWall ? 'Wall' : 'Show Wall'}
        </h1>
        {isWall && (
          <div className="flex flex-col">
            <span>
              <label className="text-white text-lg font-bold mx-2">
                Wall Depth (mm):{" "}
              </label>
              <input
                type="number"
                value={wallHeight}
                onChange={handleWallHeightChange}
                className="m-2 rounded-sm bg-slate-700 text-white"
              />
            </span>
            <span>
              <label className="text-white text-lg font-bold mx-2">
                Wall Width (mm):{" "}
              </label>
              <input
                type="number"
                value={WallWidth}
                onChange={handleWallWidthChange}
                className="m-2 rounded-sm bg-slate-700 text-white"
              />
            </span>
            <span>
              <label className="text-white text-lg font-bold mx-2">
                Wall Linear (m):{" "}
              </label>
              <input
                type="number"
                value={WallLinear}
                onChange={handleWallLinearChange}
                className="m-2 rounded-sm bg-slate-700 text-white"
              />
            </span>
          </div>
        )}
      </main>
    );
  }
  