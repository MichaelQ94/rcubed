import { CubeIndex } from "lib/core/cubeindex";

/**
 * Computes the new (row, column) coordinates of the input CubeIndex after a
 * clockwise rotation. Does not account for movements of indices on adjacent faces.
 *
 * {0, 0}, {0, 1}, {0, 2}      {2, 0}, {1, 0}, {0, 0}
 * {1, 0}, {1, 1}, {1, 2}  ->  {2, 1}, {1, 1}, {0, 1}
 * {2, 0}, {2, 1}, {2, 2}      {2, 2}, {1, 2}, {0, 2}
 *
 * @param cubeIndex The CubeIndex to be rotated
 * @param dimension The dimension of the cube being acted on
 */
export function rotateClockwise(
  { face, row, column }: CubeIndex,
  dimension: number,
): CubeIndex {
  return {
    face,
    row: column,
    column: dimension - 1 - row,
  };
}

/**
 * Computes the new (row, column) coordinates of the input CubeIndex after a
 * counterclockwise rotation. Does not account for movements of indices on adjacent faces.
 *
 * {0, 0}, {0, 1}, {0, 2}      {0, 2}, {1, 2}, {2, 2}
 * {1, 0}, {1, 1}, {1, 2}  ->  {0, 1}, {1, 1}, {2, 1}
 * {2, 0}, {2, 1}, {2, 2}      {0, 0}, {1, 0}, {2, 0}
 *
 * @param cubeIndex The CubeIndex to be rotated
 * @param dimension The dimension of the cube being acted on
 */
export function rotateCounterClockwise(
  { face, row, column }: CubeIndex,
  dimension: number,
): CubeIndex {
  return {
    face,
    row: dimension - 1 - column,
    column: row,
  };
}
