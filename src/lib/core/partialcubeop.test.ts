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

describe("3x3 clockwise quarter turn", () => {
  const faceToTurn = 0;

  it("leaves center in place", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.center,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.center);
  });

  it("sends top left corner to top right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.topLeft,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.topRight);
  });

  it("sends top edge to right edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.top,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.right);
  });

  it("sends top right corner to bottom right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.topRight,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.bottomRight);
  });

  it("sends right edge to bottom edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.right,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.bottom);
  });

  it("sends bottom right corner to bottom left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.bottomRight,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.bottomLeft);
  });

  it("sends bottom edge to left edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.bottom,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.left);
  });

  it("sends bottom left corner to top left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.bottomLeft,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.topLeft);
  });

  it("sends left edge to top edge", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_3X3.left,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.top);
  });
});

describe("3x3 counterclockwise quarter turn", () => {
  const faceToTurn = 0;

  it("leaves center in place", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.center,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.center);
  });

  it("sends top left corner to bottom left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.topLeft,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.bottomLeft);
  });

  it("sends top edge to left edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.top,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.left);
  });

  it("sends top right corner to top left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.topRight,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.topLeft);
  });

  it("sends right edge to top edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.right,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.top);
  });

  it("sends bottom right corner to top right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.bottomRight,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.topRight);
  });

  it("sends bottom edge to right edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.bottom,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.right);
  });

  it("sends bottom left corner to bottom right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.bottomLeft,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.bottomRight);
  });

  it("sends left edge to bottom edge", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_3X3.left,
        faceToTurn,
        CUBE_FACE_3X3.dimension,
      ),
    ).toEqual(CUBE_FACE_3X3.bottom);
  });
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

describe("2x2 clockwise quarter turn", () => {
  const faceToTurn = 0;

  it("sends top left corner to top right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_2X2.topLeft,
        faceToTurn,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.topRight);
  });

  it("sends top right corner to bottom right corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_2X2.topRight,
        faceToTurn,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.bottomRight);
  });

  it("sends bottom right corner to bottom left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_2X2.bottomRight,
        faceToTurn,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.bottomLeft);
  });

  it("sends bottom left corner to top left corner", () => {
    expect(
      partial.clockwiseQuarterTurn(
        CUBE_FACE_2X2.bottomLeft,
        faceToTurn,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.topLeft);
  });
});

describe("2x2 counterclockwise quarter turn", () => {
  const faceToTurn = 0;

  it("sends top left corner to bottom left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_2X2.topLeft,
        faceToTurn,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.bottomLeft);
  });

  it("sends top right corner to top left corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_2X2.topRight,
        faceToTurn,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.topLeft);
  });

  it("sends bottom right corner to top right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_2X2.bottomRight,
        faceToTurn,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.topRight);
  });

  it("sends bottom left corner to bottom right corner", () => {
    expect(
      partial.counterClockwiseQuarterTurn(
        CUBE_FACE_2X2.bottomLeft,
        faceToTurn,
        CUBE_FACE_2X2.dimension,
      ),
    ).toEqual(CUBE_FACE_2X2.bottomRight);
  });
});
