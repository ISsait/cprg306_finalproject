import { useState } from "react";

export default function Rebar({
  footingObject,
  wallObject,
  isRebar,
  handleIsRebar,
}) {
  const [continuousFootingR, setContinuousFootingR] = useState({
    barDia: 0,
    spacing: 0,
    is: false,
  });
  const [transverseFootingR, setTransverseFootingR] = useState({
    barDia: 0,
    spacing: 0,
    is: false,
  });
  const [dowelFootingR, setDowelFootingR] = useState({
    barDia: 0,
    spacing: 0,
    is: false,
  });

  function handleChangeContinuousFootingR(event) {
    setContinuousFootingR({
      ...continuousFootingR,
      [event.target.name]: event.target.value,
    });
    console.log(continuousFootingR);
  }

  function handleChangeTransverseFootingR(event) {
    setTransverseFootingR({
      ...transverseFootingR,
      [event.target.name]: event.target.value,
    });
    console.log(transverseFootingR);
  }

  function handleChangeDowelFootingR(event) {
    setDowelFootingR({
      ...dowelFootingR,
      [event.target.name]: event.target.value,
    });
    console.log(dowelFootingR);
  }

  return (
    <main className="m-4">
      <h1
        className="text-xl font-bold underline text-center"
        onClick={handleIsRebar}
      >
        {isRebar ? "Rebar Quantities" : "Show Rebar Quantities"}
      </h1>
      {isRebar && (
        <div>
          <form className="flex flex-col items-start">
            <label className="m-2">
              <input
                type="checkbox"
                name="is"
                checked={continuousFootingR.is}
                onChange= { (e) => setContinuousFootingR({...continuousFootingR, is: !continuousFootingR.is})} 
                className="m-2 w-4 h-4 rounded-sm"
              />
              Continuous Footing Rebar
            </label>
            <label className="m-2">
              <input
                type="checkbox"
                name="is"
                checked={transverseFootingR.is}
                onChange={ () => setTransverseFootingR({...transverseFootingR, is: !transverseFootingR.is})}
                className="m-2 w-4 h-4 rounded-sm"
              />
              Transverse Footing Rebar
            </label>
            <label className="m-2">
              <input
                type="checkbox"
                name="is"
                checked={dowelFootingR.is}
                onChange={ () => setDowelFootingR({...dowelFootingR, is: !dowelFootingR.is})}
                className="m-2 w-4 h-4 rounded-sm"
              />
              Dowel Footing Rebar
            </label>
          </form>
            {continuousFootingR.is && (
                <div className="flex flex-col">
                <label className="m-2">
                    Continuous Footing Rebar Diameter (mm):
                    <input
                    type="number"
                    name="barDia"
                    value={continuousFootingR.barDia}
                    onChange={handleChangeContinuousFootingR}
                    className="m-2 rounded-sm"
                    />
                </label>
                <label className="m-2">
                    Continuous Footing Rebar Spacing (mm):
                    <input
                    type="number"
                    name="spacing"
                    value={continuousFootingR.spacing}
                    onChange={handleChangeContinuousFootingR}
                    className="m-2 rounded-sm"
                    />
                </label>
                </div>
            )}
        </div>
      )}
    </main>
  );
}
