export interface CubeIndex {
  readonly face: number;
  readonly row: number;
  readonly column: number;
}

export namespace CubeIndex {
  export function fromSlotNumber(slotNumber: number, dimension: number): CubeIndex {
    const dimSquared = dimension ** 2;
    return {
      face: Math.trunc(slotNumber / dimSquared),
      row: Math.trunc((slotNumber % dimSquared) / dimension),
      column: slotNumber % dimension
    }
  }

  export function toSlotNumber(position: CubeIndex, dimension: number): number {
    return ((dimension ** 2) * position.face) + (dimension * position.row) + position.column;
  }
}
