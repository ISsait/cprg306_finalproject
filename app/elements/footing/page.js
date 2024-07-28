

export default function Footing({
  handleFootingDepthChange,
  footingDepth,
  handleFootingWidthChange,
  footingWidth,
  handleFootingLinearChange,
  footingLinear,
  handleIsFooting,
  isFooting,
}) {
  return (
    <main>
      <h1 className="text-xl font-bold underline text-center" onClick={handleIsFooting}>
        {isFooting ? 'Footing' : 'Show Footing'}
      </h1>
      {isFooting && (
        <div className="flex flex-col">
          <span>
            <label className="text-white text-lg font-bold mx-2">
              Footing Depth (mm):{" "}
            </label>
            <input
              type="number"
              value={footingDepth}
              onChange={handleFootingDepthChange}
              className="m-2 rounded-sm bg-slate-700 text-white"
            />
          </span>
          <span>
            <label className="text-white text-lg font-bold mx-2">
              Footing Width (mm):{" "}
            </label>
            <input
              type="number"
              value={footingWidth}
              onChange={handleFootingWidthChange}
              className="m-2 rounded-sm bg-slate-700 text-white"
            />
          </span>
          <span>
            <label className="text-white text-lg font-bold mx-2">
              Footing Linear (m):{" "}
            </label>
            <input
              type="number"
              value={footingLinear}
              onChange={handleFootingLinearChange}
              className="m-2 rounded-sm bg-slate-700 text-white"
            />
          </span>
        </div>
      )}
    </main>
  );
}
