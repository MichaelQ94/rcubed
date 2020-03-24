export type SlotNumber = number;

/**
 * Numbering scheme for faces:
 *
 *       {U/0}
 * {L/1} {F/2} {R/3} {B/4}
 *       {D/5}
 */
export const enum Face {
  U,
  L,
  F,
  R,
  B,
  D,
}

export interface CubeIndex {
  readonly face: Face;
  readonly row: number;
  readonly column: number;
}

export class IndexConverter {
  readonly dimension: number;

  static forDimension(dimension: number): IndexConverter {
    return new IndexConverter(dimension);
  }

  fromSlotNumber(slotNumber: SlotNumber): CubeIndex {
    const dimSquared = this.dimension ** 2;
    return {
      face: Math.trunc(slotNumber / dimSquared),
      row: Math.trunc((slotNumber % dimSquared) / this.dimension),
      column: slotNumber % this.dimension,
    };
  }

  toSlotNumber(position: CubeIndex): SlotNumber {
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
