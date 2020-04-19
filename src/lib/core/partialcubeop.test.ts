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
  const { positions } = CUBE_FACE_2X2;

  it("sends top left corner to top right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.topLeft,
        positions.topLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(positions.topRight);
  });

  it("sends top right corner to bottom right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.topRight,
        positions.topRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(positions.bottomRight);
  });

  it("sends bottom right corner to bottom left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.bottomRight,
        positions.bottomRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(positions.bottomLeft);
  });

  it("sends bottom left corner to top left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.bottomLeft,
        positions.bottomLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(positions.topLeft);
  });

  expectAllOtherFacesUnaffected(CUBE_FACE_2X2, partial.clockwiseQuarterTurn);
});

describe("2x2 counterclockwise quarter turn", () => {
  const { positions } = CUBE_FACE_2X2;

  it("sends top left corner to bottom left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.topLeft,
        positions.topLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(positions.bottomLeft);
  });

  it("sends top right corner to top left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.topRight,
        positions.topRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(positions.topLeft);
  });

  it("sends bottom right corner to top right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.bottomRight,
        positions.bottomRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(positions.topRight);
  });

  it("sends bottom left corner to bottom right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.bottomLeft,
        positions.bottomLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(positions.bottomRight);
  });

  expectAllOtherFacesUnaffected(
    CUBE_FACE_2X2,
    partial.counterClockwiseQuarterTurn,
  );
});

describe("2x2 half turn", () => {
  const { positions } = CUBE_FACE_2X2;

  it("sends top left corner to bottom right corner", () => {
    expect(
      partial.halfTurn(
        positions.topLeft,
        positions.topLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(positions.bottomRight);
  });

  it("sends top right corner to bottom left corner", () => {
    expect(
      partial.halfTurn(
        positions.topRight,
        positions.topRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(positions.bottomLeft);
  });

  it("sends bottom right corner to top left corner", () => {
    expect(
      partial.halfTurn(
        positions.bottomRight,
        positions.bottomRight.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(positions.topLeft);
  });

  it("sends bottom left corner to top right corner", () => {
    expect(
      partial.halfTurn(
        positions.bottomLeft,
        positions.bottomLeft.face,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(positions.topRight);
  });

  expectAllOtherFacesUnaffected(CUBE_FACE_2X2, partial.halfTurn);
});

describe("3x3 clockwise quarter turn", () => {
  const { positions } = CUBE_FACE_3X3;

  it("leaves center in place", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.center,
        positions.center.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.center);
  });

  it("sends top left corner to top right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.topLeft,
        positions.topLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.topRight);
  });

  it("sends top edge to right edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.top,
        positions.top.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.right);
  });

  it("sends top right corner to bottom right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.topRight,
        positions.topRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.bottomRight);
  });

  it("sends right edge to bottom edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.right,
        positions.right.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.bottom);
  });

  it("sends bottom right corner to bottom left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.bottomRight,
        positions.bottomRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.bottomLeft);
  });

  it("sends bottom edge to left edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.bottom,
        positions.bottom.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.left);
  });

  it("sends bottom left corner to top left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.bottomLeft,
        positions.bottomLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.topLeft);
  });

  it("sends left edge to top edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        positions.left,
        positions.left.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.top);
  });

  expectAllOtherFacesUnaffected(CUBE_FACE_3X3, partial.clockwiseQuarterTurn);
});

describe("3x3 counterclockwise quarter turn", () => {
  const { positions } = CUBE_FACE_3X3;

  it("leaves center in place", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.center,
        positions.center.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.center);
  });

  it("sends top left corner to bottom left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.topLeft,
        positions.topLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.bottomLeft);
  });

  it("sends top edge to left edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.top,
        positions.top.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.left);
  });

  it("sends top right corner to top left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.topRight,
        positions.topRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.topLeft);
  });

  it("sends right edge to top edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.right,
        positions.right.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.top);
  });

  it("sends bottom right corner to top right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.bottomRight,
        positions.bottomRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.topRight);
  });

  it("sends bottom edge to right edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.bottom,
        positions.bottom.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.right);
  });

  it("sends bottom left corner to bottom right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.bottomLeft,
        positions.bottomLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.bottomRight);
  });

  it("sends left edge to bottom edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        positions.left,
        positions.left.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.bottom);
  });

  expectAllOtherFacesUnaffected(
    CUBE_FACE_3X3,
    partial.counterClockwiseQuarterTurn,
  );
});

describe("3x3 half turn", () => {
  const { positions } = CUBE_FACE_3X3;

  it("leaves center in place", () => {
    expect(
      partial.halfTurn(
        positions.center,
        positions.center.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.center);
  });

  it("sends top left corner to bottom right corner", () => {
    expect(
      partial.halfTurn(
        positions.topLeft,
        positions.topLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.bottomRight);
  });

  it("sends top edge to bottom edge", () => {
    expect(
      partial.halfTurn(
        positions.top,
        positions.top.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.bottom);
  });

  it("sends top right corner to bottom left corner", () => {
    expect(
      partial.halfTurn(
        positions.topRight,
        positions.topRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.bottomLeft);
  });

  it("sends right edge to left edge", () => {
    expect(
      partial.halfTurn(
        positions.right,
        positions.right.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.left);
  });

  it("sends bottom right corner to top left corner", () => {
    expect(
      partial.halfTurn(
        positions.bottomRight,
        positions.bottomRight.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.topLeft);
  });

  it("sends bottom edge to top edge", () => {
    expect(
      partial.halfTurn(
        positions.bottom,
        positions.bottom.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.top);
  });

  it("sends bottom left corner to top right corner", () => {
    expect(
      partial.halfTurn(
        positions.bottomLeft,
        positions.bottomLeft.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.topRight);
  });

  it("sends left edge to right edge", () => {
    expect(
      partial.halfTurn(
        positions.left,
        positions.left.face,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(positions.right);
  });

  expectAllOtherFacesUnaffected(CUBE_FACE_3X3, partial.halfTurn);
});

const CUBE_M_LAYER_2X2 = {
  dimension: 2,
  layer: 0,
  columns: {
    U: [
      {
        face: Face.U,
        row: 0,
        column: 0,
      },
      {
        face: Face.U,
        row: 1,
        column: 0,
      },
    ],
    F: [
      {
        face: Face.F,
        row: 0,
        column: 0,
      },
      {
        face: Face.F,
        row: 1,
        column: 0,
      },
    ],
    D: [
      {
        face: Face.D,
        row: 0,
        column: 0,
      },
      {
        face: Face.D,
        row: 1,
        column: 0,
      },
    ],
    B: [
      {
        face: Face.B,
        row: 1,
        column: 1,
      },
      {
        face: Face.B,
        row: 0,
        column: 1,
      },
    ],
  },
};

const CUBE_M_LAYER_3X3 = {
  dimension: 3,
  layer: 2,
  columns: {
    U: [
      {
        face: Face.U,
        row: 0,
        column: 2,
      },
      {
        face: Face.U,
        row: 1,
        column: 2,
      },
      {
        face: Face.U,
        row: 2,
        column: 2,
      },
    ],
    F: [
      {
        face: Face.F,
        row: 0,
        column: 2,
      },
      {
        face: Face.F,
        row: 1,
        column: 2,
      },
      {
        face: Face.F,
        row: 2,
        column: 2,
      },
    ],
    D: [
      {
        face: Face.D,
        row: 0,
        column: 2,
      },
      {
        face: Face.D,
        row: 1,
        column: 2,
      },
      {
        face: Face.D,
        row: 2,
        column: 2,
      },
    ],
    B: [
      {
        face: Face.B,
        row: 2,
        column: 0,
      },
      {
        face: Face.B,
        row: 1,
        column: 0,
      },
      {
        face: Face.B,
        row: 0,
        column: 0,
      },
    ],
  },
};

type UnaryOp<T> = (_: T) => T;

function expectUnaffected(
  { face, row, column }: CubeIndex,
  operation: UnaryOp<CubeIndex>,
): void {
  const position = { face, row, column };
  it(`{${face}${row}${column}} -> {${face}${row}${column}}`, () =>
    expect(operation(position)).toEqual(position));
}

function expectFaceUnaffected(
  face: Face,
  dimension: number,
  operation: UnaryOp<CubeIndex>,
): void {
  describe(`does not affect face ${face}`, () => {
    for (let row = 0; row < dimension; row += 1) {
      for (let column = 0; column < dimension; column += 1) {
        expectUnaffected({ face, row, column }, operation);
      }
    }
  });
}

function expectColumnUnaffected(
  face: Face,
  column: number,
  dimension: number,
  operation: UnaryOp<CubeIndex>,
): void {
  describe(`does not affect column ${column} of face ${face}`, () => {
    for (let row = 0; row < dimension; row += 1) {
      expectUnaffected({ face, row, column }, operation);
    }
  });
}

function expectColumnMapsToColumn(
  description: string,
  input: CubeIndex[],
  expectedOutput: CubeIndex[],
  operation: UnaryOp<CubeIndex>,
): void {
  describe(description, () =>
    input.forEach(({ face, row, column }, index) => {
      const image = expectedOutput[index];
      it(`{${face}${row}${column}} -> {${image.face}${image.row}${image.column}}`, () =>
        expect(operation({ face, row, column })).toEqual(image));
    }),
  );
}

describe("2x2 M slice of layer 0", () => {
  const { dimension, layer, columns } = CUBE_M_LAYER_2X2;
  const operation = (position: CubeIndex): CubeIndex =>
    partial.mSlice(position, layer, dimension);

  expectColumnUnaffected(Face.U, 1, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 0 of face U to column 0 of face F",
    columns.U,
    columns.F,
    operation,
  );

  expectColumnUnaffected(Face.F, 1, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 0 of face F to column 0 of face D",
    columns.F,
    columns.D,
    operation,
  );

  expectColumnUnaffected(Face.D, 1, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 0 of face D to column 1 of face B and reverses orientation",
    columns.D,
    columns.B,
    operation,
  );

  expectColumnUnaffected(Face.B, 0, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 1 of face B to column 0 of face U and reverses orientation",
    columns.B,
    columns.U,
    operation,
  );

  expectFaceUnaffected(Face.R, dimension, operation);
  expectFaceUnaffected(Face.L, dimension, operation);
});

describe("2x2 reverse M slice of layer 0", () => {
  const { dimension, layer, columns } = CUBE_M_LAYER_2X2;
  const operation = (position: CubeIndex): CubeIndex =>
    partial.reverseMSlice(position, layer, dimension);

  expectColumnUnaffected(Face.U, 1, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 0 of face U to column 1 of face B and reverses orientation",
    columns.U,
    columns.B,
    operation,
  );

  expectColumnUnaffected(Face.F, 1, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 0 of face F to column 0 of face U",
    columns.F,
    columns.U,
    operation,
  );

  expectColumnUnaffected(Face.D, 1, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 0 of face D to column 1 of face F",
    columns.D,
    columns.F,
    operation,
  );

  expectColumnUnaffected(Face.B, 0, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 1 of face B to column 0 of face D and reverses orientation",
    columns.B,
    columns.D,
    operation,
  );

  expectFaceUnaffected(Face.R, dimension, operation);
  expectFaceUnaffected(Face.L, dimension, operation);
});

describe("3x3 M slice of layer 2", () => {
  const { dimension, layer, columns } = CUBE_M_LAYER_3X3;
  const operation = (position: CubeIndex): CubeIndex =>
    partial.mSlice(position, layer, dimension);

  expectColumnUnaffected(Face.U, 0, dimension, operation);
  expectColumnUnaffected(Face.U, 1, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 2 of face U to column 2 of face F",
    columns.U,
    columns.F,
    operation,
  );

  expectColumnUnaffected(Face.F, 0, dimension, operation);
  expectColumnUnaffected(Face.F, 1, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 2 of face F to column 2 of face D",
    columns.F,
    columns.D,
    operation,
  );

  expectColumnUnaffected(Face.D, 0, dimension, operation);
  expectColumnUnaffected(Face.D, 1, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 2 of face D to column 0 of face B and reverses orientation",
    columns.D,
    columns.B,
    operation,
  );

  expectColumnUnaffected(Face.B, 1, dimension, operation);
  expectColumnUnaffected(Face.B, 2, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 0 of face B to column 2 of face U and reverses orientation",
    columns.B,
    columns.U,
    operation,
  );

  expectFaceUnaffected(Face.R, dimension, operation);
  expectFaceUnaffected(Face.L, dimension, operation);
});

describe("3x3 reverse M slice of layer 2", () => {
  const { dimension, layer, columns } = CUBE_M_LAYER_3X3;
  const operation = (position: CubeIndex): CubeIndex =>
    partial.reverseMSlice(position, layer, dimension);

  expectColumnUnaffected(Face.U, 0, dimension, operation);
  expectColumnUnaffected(Face.U, 1, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 2 of face U to column 0 of face B and reverses orientation",
    columns.U,
    columns.B,
    operation,
  );

  expectColumnUnaffected(Face.F, 0, dimension, operation);
  expectColumnUnaffected(Face.F, 1, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 2 of face F to column 2 of face U",
    columns.F,
    columns.U,
    operation,
  );

  expectColumnUnaffected(Face.D, 0, dimension, operation);
  expectColumnUnaffected(Face.D, 1, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 2 of face D to column 0 of face F",
    columns.D,
    columns.F,
    operation,
  );

  expectColumnUnaffected(Face.B, 1, dimension, operation);
  expectColumnUnaffected(Face.B, 2, dimension, operation);
  expectColumnMapsToColumn(
    "sends column 0 of face B to column 2 of face D and reverses orientation",
    columns.B,
    columns.D,
    operation,
  );

  expectFaceUnaffected(Face.R, dimension, operation);
  expectFaceUnaffected(Face.L, dimension, operation);
});
