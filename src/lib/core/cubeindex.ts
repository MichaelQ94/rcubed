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

export const FACES = [Face.U, Face.L, Face.F, Face.R, Face.B, Face.D];

/**
 * Represents the coordinates of a "slot" on a Rubik's cube which can be occupied by a facelet.
 */
export interface CubeIndex {
  // The face coordinate of a given facelet position.
  readonly face: number;

  // The row coordinatte of the facelet's current position.
  readonly row: number;

  // The column coordinate of the facelet's current position.
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
