import { CubeIndex, Face, FACES } from "./cubeindex";
import * as partial from "./partialcubeop";

const CUBE_FACE_2X2 = {
  dimension: 2,
  positions: {
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
  },
};

const CUBE_FACE_3X3 = {
  dimension: 3,
  positions: {
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
  },
};

type CubeFace = typeof CUBE_FACE_2X2 | typeof CUBE_FACE_3X3;

function expectAllOtherFacesUnaffected(
  { dimension, positions }: CubeFace,
  operation: (cubeIndex: CubeIndex, face: Face, dimension: number) => CubeIndex,
): void {
  // For each position on the given cube face...
  Object.entries(positions).forEach(([name, { face, row, column }]) => {
    // For each face other than this one...
    FACES.filter(otherFace => otherFace !== face).forEach(otherFace => {
      // Compute the corresponding position on that face...
      const copyOnOtherFace = {
        face: otherFace,
        row,
        column,
      };

      // ...and expect it be unaffected when this face is turned.
      it(`leaves ${name} of face ${face} in place`, () => {
        expect(operation(copyOnOtherFace, face, dimension)).toEqual(
          copyOnOtherFace,
        );
      });
    });
  });
}

describe("2x2 clockwise quarter turn", () => {
  it("sends top left corner to top right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_2X2.positions.topLeft,
        CUBE_FACE_2X2.positions.topLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.positions.topRight);
  });

  it("sends top right corner to bottom right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_2X2.positions.topRight,
        CUBE_FACE_2X2.positions.topRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.positions.bottomRight);
  });

  it("sends bottom right corner to bottom left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_2X2.positions.bottomRight,
        CUBE_FACE_2X2.positions.bottomRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.positions.bottomLeft);
  });

  it("sends bottom left corner to top left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_2X2.positions.bottomLeft,
        CUBE_FACE_2X2.positions.bottomLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.positions.topLeft);
  });

  expectAllOtherFacesUnaffected(CUBE_FACE_2X2, partial.clockwiseQuarterTurn);
});

describe("2x2 counterclockwise quarter turn", () => {
  it("sends top left corner to bottom left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_2X2.positions.topLeft,
        CUBE_FACE_2X2.positions.topLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.positions.bottomLeft);
  });

  it("sends top right corner to top left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_2X2.positions.topRight,
        CUBE_FACE_2X2.positions.topRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.positions.topLeft);
  });

  it("sends bottom right corner to top right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_2X2.positions.bottomRight,
        CUBE_FACE_2X2.positions.bottomRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.positions.topRight);
  });

  it("sends bottom left corner to bottom right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_2X2.positions.bottomLeft,
        CUBE_FACE_2X2.positions.bottomLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.positions.bottomRight);
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
        CUBE_FACE_3X3.positions.center,
        CUBE_FACE_3X3.positions.center.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.center);
  });

  it("sends top left corner to top right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.topLeft,
        CUBE_FACE_3X3.positions.topLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.topRight);
  });

  it("sends top edge to right edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.top,
        CUBE_FACE_3X3.positions.top.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.right);
  });

  it("sends top right corner to bottom right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.topRight,
        CUBE_FACE_3X3.positions.topRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.bottomRight);
  });

  it("sends right edge to bottom edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.right,
        CUBE_FACE_3X3.positions.right.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.bottom);
  });

  it("sends bottom right corner to bottom left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.bottomRight,
        CUBE_FACE_3X3.positions.bottomRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.bottomLeft);
  });

  it("sends bottom edge to left edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.bottom,
        CUBE_FACE_3X3.positions.bottom.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.left);
  });

  it("sends bottom left corner to top left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.bottomLeft,
        CUBE_FACE_3X3.positions.bottomLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.topLeft);
  });

  it("sends left edge to top edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.left,
        CUBE_FACE_3X3.positions.left.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.top);
  });

  expectAllOtherFacesUnaffected(CUBE_FACE_3X3, partial.clockwiseQuarterTurn);
});

describe("3x3 counterclockwise quarter turn", () => {
  it("leaves center in place", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.center,
        CUBE_FACE_3X3.positions.center.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.center);
  });

  it("sends top left corner to bottom left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.topLeft,
        CUBE_FACE_3X3.positions.topLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.bottomLeft);
  });

  it("sends top edge to left edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.top,
        CUBE_FACE_3X3.positions.top.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.left);
  });

  it("sends top right corner to top left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.topRight,
        CUBE_FACE_3X3.positions.topRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.topLeft);
  });

  it("sends right edge to top edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.right,
        CUBE_FACE_3X3.positions.right.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.top);
  });

  it("sends bottom right corner to top right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.bottomRight,
        CUBE_FACE_3X3.positions.bottomRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.topRight);
  });

  it("sends bottom edge to right edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.bottom,
        CUBE_FACE_3X3.positions.bottom.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.right);
  });

  it("sends bottom left corner to bottom right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.bottomLeft,
        CUBE_FACE_3X3.positions.bottomLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.bottomRight);
  });

  it("sends left edge to bottom edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.positions.left,
        CUBE_FACE_3X3.positions.left.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.positions.bottom);
  });

  expectAllOtherFacesUnaffected(
    CUBE_FACE_3X3,
    partial.counterClockwiseQuarterTurn,
  );
});
