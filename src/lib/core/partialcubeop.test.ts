import { CubeIndex, Face, FACES } from "./cubeindex";
import * as partial from "./partialcubeop";

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

function expectAllOtherFacesUnaffected(
  cubeFace: typeof CUBE_FACE_3X3 | typeof CUBE_FACE_2X2,
  operation: (cubeIndex: CubeIndex, face: Face, dimension: number) => CubeIndex,
): void {
  Object.entries(cubeFace)
    .filter(([key, _]) => key !== "dimension")
    // For each CubeIndex on the given cube face...
    .forEach(([key, value]) => {
      const cubeIndex = value as CubeIndex;

      // For each face other than this one...
      FACES.filter(face => face !== cubeIndex.face).forEach(face => {
        // Compute the corresponding CubeIndex on that face...
        const copyOnOtherFace = {
          face,
          row: cubeIndex.row,
          column: cubeIndex.column,
        };

        // ...and expect it to remain in place when this face is turned
        it(`leaves ${key} of face ${face} in place`, () => {
          expect(
            operation(copyOnOtherFace, cubeIndex.face, CUBE_FACE_3X3.dimension),
          ).toEqual(copyOnOtherFace);
        });
      });
    });
}

describe("2x2 clockwise quarter turn", () => {
  it("sends top left corner to top right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_2X2.topLeft,
        CUBE_FACE_2X2.topLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.topRight);
  });

  it("sends top right corner to bottom right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_2X2.topRight,
        CUBE_FACE_2X2.topRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.bottomRight);
  });

  it("sends bottom right corner to bottom left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_2X2.bottomRight,
        CUBE_FACE_2X2.bottomRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.bottomLeft);
  });

  it("sends bottom left corner to top left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_2X2.bottomLeft,
        CUBE_FACE_2X2.bottomLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.topLeft);
  });

  expectAllOtherFacesUnaffected(CUBE_FACE_2X2, partial.clockwiseQuarterTurn);
});

describe("2x2 counterclockwise quarter turn", () => {
  it("sends top left corner to bottom left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_2X2.topLeft,
        CUBE_FACE_2X2.topLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.bottomLeft);
  });

  it("sends top right corner to top left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_2X2.topRight,
        CUBE_FACE_2X2.topRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.topLeft);
  });

  it("sends bottom right corner to top right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_2X2.bottomRight,
        CUBE_FACE_2X2.bottomRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.topRight);
  });

  it("sends bottom left corner to bottom right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_2X2.bottomLeft,
        CUBE_FACE_2X2.bottomLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.bottomRight);
  });

  expectAllOtherFacesUnaffected(
    CUBE_FACE_2X2,
    partial.counterClockwiseQuarterTurn,
  );
});

describe("3x3 clockwise quarter turn", () => {
  it("leaves center in place", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.center,
        CUBE_FACE_3X3.center.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.center);
  });

  it("sends top left corner to top right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.topLeft,
        CUBE_FACE_3X3.topLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.topRight);
  });

  it("sends top edge to right edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.top,
        CUBE_FACE_3X3.top.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.right);
  });

  it("sends top right corner to bottom right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.topRight,
        CUBE_FACE_3X3.topRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.bottomRight);
  });

  it("sends right edge to bottom edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.right,
        CUBE_FACE_3X3.right.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.bottom);
  });

  it("sends bottom right corner to bottom left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.bottomRight,
        CUBE_FACE_3X3.bottomRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.bottomLeft);
  });

  it("sends bottom edge to left edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.bottom,
        CUBE_FACE_3X3.bottom.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.left);
  });

  it("sends bottom left corner to top left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.bottomLeft,
        CUBE_FACE_3X3.bottomLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.topLeft);
  });

  it("sends left edge to top edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.left,
        CUBE_FACE_3X3.left.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.top);
  });

  expectAllOtherFacesUnaffected(CUBE_FACE_3X3, partial.clockwiseQuarterTurn);
});

describe("3x3 counterclockwise quarter turn", () => {
  it("leaves center in place", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.center,
        CUBE_FACE_3X3.center.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.center);
  });

  it("sends top left corner to bottom left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.topLeft,
        CUBE_FACE_3X3.topLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.bottomLeft);
  });

  it("sends top edge to left edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.top,
        CUBE_FACE_3X3.top.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.left);
  });

  it("sends top right corner to top left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.topRight,
        CUBE_FACE_3X3.topRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.topLeft);
  });

  it("sends right edge to top edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.right,
        CUBE_FACE_3X3.right.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.top);
  });

  it("sends bottom right corner to top right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.bottomRight,
        CUBE_FACE_3X3.bottomRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.topRight);
  });

  it("sends bottom edge to right edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.bottom,
        CUBE_FACE_3X3.bottom.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.right);
  });

  it("sends bottom left corner to bottom right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.bottomLeft,
        CUBE_FACE_3X3.bottomLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.bottomRight);
  });

  it("sends left edge to bottom edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.left,
        CUBE_FACE_3X3.left.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.bottom);
  });

  expectAllOtherFacesUnaffected(
    CUBE_FACE_3X3,
    partial.counterClockwiseQuarterTurn,
  );
});
