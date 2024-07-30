export default function Concrete({
  footingObject,
  wallObject,
  handleIsConcrete,
  isConcrete,
}) {
  const footingConcrete = 
    (((footingObject.depth / 1000) * footingObject.width) / 1000) *
    footingObject.linear;
  const wallConcrete = 
    (((wallObject.height / 1000) * wallObject.width) / 1000) *
    wallObject.linear;
  const totalConcrete = footingConcrete + wallConcrete;

  return (
    <main className="m-4">
      <h1
        className="text-xl font-bold underline text-center"
        onClick={handleIsConcrete}
      >
        {isConcrete ? "Concrete Volume" : "Show Concrete Volume"}
      </h1>
      {isConcrete && (
        <div className="flex flex-col">
          <span className="m-2">
            <label className="text-white text-lg font-bold mx-2">
              Footing Concrete Volume m3:
            </label>
            <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2"
            style={{ minWidth: '100px' }}>
              {footingConcrete !== null ? footingConcrete : 'N/A'}
            </output>
          </span>
          <span className="m-2">
            <label className="text-white text-lg font-bold mx-2">
              Wall Concrete Volume m3:
            </label>
            <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2">
              {wallConcrete}
            </output>
          </span>
          <span className="m-2">
            <label className="text-white text-lg font-bold mx-2">
              Total Concrete Volume m3:
            </label>
            <output className="m-2 rounded-sm bg-slate-700 text-white p-1 border-solid border-white border-2">
              {totalConcrete}
            </output>
          </span>
        </div>
      )}
    </main>
  );
}
