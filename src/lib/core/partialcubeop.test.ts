import * as partial from "./partialcubeop";

const CUBE_FACE_3X3 = {
  dimension: 3,
  topLeft: {
    face: 0,
    row: 0,
    column: 0,
  },
  top: {
    face: 0,
    row: 0,
    column: 1,
  },
  topRight: {
    face: 0,
    row: 0,
    column: 2,
  },
  left: {
    face: 0,
    row: 1,
    column: 0,
  },
  center: {
    face: 0,
    row: 1,
    column: 1,
  },
  right: {
    face: 0,
    row: 1,
    column: 2,
  },
  bottomLeft: {
    face: 0,
    row: 2,
    column: 0,
  },
  bottom: {
    face: 0,
    row: 2,
    column: 1,
  },
  bottomRight: {
    face: 0,
    row: 2,
    column: 2,
  },
};

test("3x3 clockwise rotations", () => {
  expect(
    partial.rotateClockwise(CUBE_FACE_3X3.center, CUBE_FACE_3X3.dimension),
  ).toEqual(CUBE_FACE_3X3.center);
  expect(
    partial.rotateClockwise(CUBE_FACE_3X3.topLeft, CUBE_FACE_3X3.dimension),
  ).toEqual(CUBE_FACE_3X3.topRight);
  expect(
    partial.rotateClockwise(CUBE_FACE_3X3.top, CUBE_FACE_3X3.dimension),
  ).toEqual(CUBE_FACE_3X3.right);
  expect(
    partial.rotateClockwise(CUBE_FACE_3X3.topRight, CUBE_FACE_3X3.dimension),
  ).toEqual(CUBE_FACE_3X3.bottomRight);
  expect(
    partial.rotateClockwise(CUBE_FACE_3X3.right, CUBE_FACE_3X3.dimension),
  ).toEqual(CUBE_FACE_3X3.bottom);
  expect(
    partial.rotateClockwise(CUBE_FACE_3X3.bottomRight, CUBE_FACE_3X3.dimension),
  ).toEqual(CUBE_FACE_3X3.bottomLeft);
  expect(
    partial.rotateClockwise(CUBE_FACE_3X3.bottom, CUBE_FACE_3X3.dimension),
  ).toEqual(CUBE_FACE_3X3.left);
  expect(
    partial.rotateClockwise(CUBE_FACE_3X3.bottomLeft, CUBE_FACE_3X3.dimension),
  ).toEqual(CUBE_FACE_3X3.topLeft);
  expect(
    partial.rotateClockwise(CUBE_FACE_3X3.left, CUBE_FACE_3X3.dimension),
  ).toEqual(CUBE_FACE_3X3.top);
});

test("3x3 counterclockwise rotations", () => {
  expect(
    partial.rotateCounterClockwise(
      CUBE_FACE_3X3.center,
      CUBE_FACE_3X3.dimension,
    ),
  ).toEqual(CUBE_FACE_3X3.center);
  expect(
    partial.rotateCounterClockwise(
      CUBE_FACE_3X3.topLeft,
      CUBE_FACE_3X3.dimension,
    ),
  ).toEqual(CUBE_FACE_3X3.bottomLeft);
  expect(
    partial.rotateCounterClockwise(CUBE_FACE_3X3.top, CUBE_FACE_3X3.dimension),
  ).toEqual(CUBE_FACE_3X3.left);
  expect(
    partial.rotateCounterClockwise(
      CUBE_FACE_3X3.topRight,
      CUBE_FACE_3X3.dimension,
    ),
  ).toEqual(CUBE_FACE_3X3.topLeft);
  expect(
    partial.rotateCounterClockwise(
      CUBE_FACE_3X3.right,
      CUBE_FACE_3X3.dimension,
    ),
  ).toEqual(CUBE_FACE_3X3.top);
  expect(
    partial.rotateCounterClockwise(
      CUBE_FACE_3X3.bottomRight,
      CUBE_FACE_3X3.dimension,
    ),
  ).toEqual(CUBE_FACE_3X3.topRight);
  expect(
    partial.rotateCounterClockwise(
      CUBE_FACE_3X3.bottom,
      CUBE_FACE_3X3.dimension,
    ),
  ).toEqual(CUBE_FACE_3X3.right);
  expect(
    partial.rotateCounterClockwise(
      CUBE_FACE_3X3.bottomLeft,
      CUBE_FACE_3X3.dimension,
    ),
  ).toEqual(CUBE_FACE_3X3.bottomRight);
  expect(
    partial.rotateCounterClockwise(CUBE_FACE_3X3.left, CUBE_FACE_3X3.dimension),
  ).toEqual(CUBE_FACE_3X3.bottom);
});

const CUBE_FACE_2X2 = {
  dimension: 2,
  topLeft: {
    face: 0,
    row: 0,
    column: 0,
  },
  topRight: {
    face: 0,
    row: 0,
    column: 1,
  },
  bottomLeft: {
    face: 0,
    row: 1,
    column: 0,
  },
  bottomRight: {
    face: 0,
    row: 1,
    column: 1,
  },
};

test("2x2 clockwise rotations", () => {
  expect(
    partial.rotateClockwise(CUBE_FACE_2X2.topLeft, CUBE_FACE_2X2.dimension),
  ).toEqual(CUBE_FACE_2X2.topRight);
  expect(
    partial.rotateClockwise(CUBE_FACE_2X2.topRight, CUBE_FACE_2X2.dimension),
  ).toEqual(CUBE_FACE_2X2.bottomRight);
  expect(
    partial.rotateClockwise(CUBE_FACE_2X2.bottomRight, CUBE_FACE_2X2.dimension),
  ).toEqual(CUBE_FACE_2X2.bottomLeft);
  expect(
    partial.rotateClockwise(CUBE_FACE_2X2.bottomLeft, CUBE_FACE_2X2.dimension),
  ).toEqual(CUBE_FACE_2X2.topLeft);
});

test("2x2 counterclockwise rotations", () => {
  expect(
    partial.rotateCounterClockwise(
      CUBE_FACE_2X2.topLeft,
      CUBE_FACE_2X2.dimension,
    ),
  ).toEqual(CUBE_FACE_2X2.bottomLeft);
  expect(
    partial.rotateCounterClockwise(
      CUBE_FACE_2X2.topRight,
      CUBE_FACE_2X2.dimension,
    ),
  ).toEqual(CUBE_FACE_2X2.topLeft);
  expect(
    partial.rotateCounterClockwise(
      CUBE_FACE_2X2.bottomRight,
      CUBE_FACE_2X2.dimension,
    ),
  ).toEqual(CUBE_FACE_2X2.topRight);
  expect(
    partial.rotateCounterClockwise(
      CUBE_FACE_2X2.bottomLeft,
      CUBE_FACE_2X2.dimension,
    ),
  ).toEqual(CUBE_FACE_2X2.bottomRight);
});
