export interface CubeIndex {
  readonly face: number;
  readonly row: number;
  readonly column: number;
}

export class IndexConverter {
  readonly dimension: number;

  static forDimension(dimension: number): IndexConverter {
    return new IndexConverter(dimension);
  }

  fromSlotNumber(slotNumber: number): CubeIndex {
    const dimSquared = this.dimension ** 2;
    return {
      face: Math.trunc(slotNumber / dimSquared),
      row: Math.trunc((slotNumber % dimSquared) / this.dimension),
      column: slotNumber % this.dimension,
    };
  }

  toSlotNumber(position: CubeIndex): number {
    return (
      this.dimension ** 2 * position.face +
      this.dimension * position.row +
      position.column
    );
  }

  private constructor(dimension: number) {
    this.dimension = dimension;
  }
}
