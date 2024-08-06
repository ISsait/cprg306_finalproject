export function footingRebarQtyCalc(rebarObject, footingObject) {
  if (
    footingObject.depth === 0 ||
    footingObject.width === 0 ||
    footingObject.linear === 0
  ) {
    return;
  }
  const kgPerMeter10M = 0.785;
  const kgPerMeter15M = 1.57;
  const kgPerMeter20M = 2.355;

  let footingRebarObject = rebarObject.footingRebarObject;
  let continuous = footingRebarObject.continuous;
  let transverse = footingRebarObject.transverse;
  let dowels = footingRebarObject.dowels;

  let continuousMass =
    continuous.diameter === "10M"
      ? kgPerMeter10M
      : continuous.diameter === "15M"
      ? kgPerMeter15M
      : continuous.diameter === "20M"
      ? kgPerMeter20M
      : 0;
  let transverseMass =
    transverse.diameter === "10M"
      ? kgPerMeter10M
      : transverse.diameter === "15M"
      ? kgPerMeter15M
      : transverse.diameter === "20M"
      ? kgPerMeter20M
      : 0;
  let dowelsMass =
    dowels.diameter === "10M"
      ? kgPerMeter10M
      : dowels.diameter === "15M"
      ? kgPerMeter15M
      : dowels.diameter === "20M"
      ? kgPerMeter20M
      : 0;

  if (continuous.spacing != 0) {
    continuous.stockBarQty = Math.ceil(
      (footingObject.linear *
        1.1 *
        Math.ceil(footingObject.width / continuous.spacing)) /
        6
    );
    continuous.kg = Math.floor(continuous.stockBarQty * continuousMass * 6);
  } else {
    continuous.stockBarQty = 0;
    continuous.kg = 0;
    }

  if (transverse.spacing != 0) {
    transverse.fabBarQty = Math.ceil(
      footingObject.linear / (transverse.spacing / 1000)
    );
    transverse.kg = Math.floor(
      transverse.fabBarQty * transverseMass * (footingObject.width / 1000 - 0.1)
    );
  } else {
    transverse.fabBarQty = 0;
    transverse.kg = 0;
    }

  if (dowels.spacing != 0 && dowels.projection != 0) {
    dowels.fabBarQty = Math.ceil(
      footingObject.linear / (dowels.spacing / 1000)
    );
    dowels.kg = Math.floor(
      (dowels.fabBarQty * dowelsMass * dowels.projection) / 1000 + 0.6
    );
  } else {
    dowels.fabBarQty = 0;
    dowels.kg = 0;
  }
}

export function wallRebarQtyCalc(rebarObject, wallObject) {
  if (
    wallObject.height === 0 ||
    wallObject.width === 0 ||
    wallObject.linear === 0
  ) {
    return;
  }
  const kgPerMeter10M = 0.785;
  const kgPerMeter15M = 1.57;
  const kgPerMeter20M = 2.355;

  let wallRebarObject = rebarObject.wallRebarObject;
  let horizontal = wallRebarObject.horizontal;
  let vertical = wallRebarObject.vertical;

  let horizontalMass =
    horizontal.diameter === "10M"
      ? kgPerMeter10M
      : horizontal.diameter === "15M"
      ? kgPerMeter15M
      : horizontal.diameter === "20M"
      ? kgPerMeter20M
      : 0;
  let verticalMass =
    vertical.diameter === "10M"
      ? kgPerMeter10M
      : vertical.diameter === "15M"
      ? kgPerMeter15M
      : vertical.diameter === "20M"
      ? kgPerMeter20M
      : 0;

  if (horizontal.spacing != 0) {
    horizontal.stockBarQty = Math.ceil(
      (wallObject.linear *
        1.1 *
        Math.ceil(wallObject.height / horizontal.spacing)) /
        6
    );
    horizontal.kg = Math.floor(horizontal.stockBarQty * horizontalMass * 6);
  } else {
    horizontal.stockBarQty = 0;
    horizontal.kg = 0;
    }

  if (vertical.spacing != 0) {
    vertical.fabBarQty = Math.ceil(
      wallObject.linear / (vertical.spacing / 1000)
    );
    vertical.kg = Math.floor(
      vertical.fabBarQty * verticalMass * (wallObject.height / 1000 - 0.05)
    );
  } else {
    vertical.fabBarQty = 0;
    vertical.kg = 0;
    }
}
