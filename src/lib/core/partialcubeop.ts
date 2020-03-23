import { CubeIndex } from "lib/core/cubeindex";

/**
 * Computes the new (row, column) coordinates of the input CubeIndex after a
 * clockwize rotation. Does not account for movements of indices on adjacent faces.
 *
 * {0, 0}, {0, 1}, {0, 2}      {2, 0}, {1, 0}, {0, 0}
 * {1, 0}, {1, 1}, {1, 2}  ->  {2, 1}, {1, 1}, {0, 1}
 * {2, 0}, {2, 1}, {2, 2}      {2, 2}, {1, 2}, {0, 2}
 *
 * @param cubeIndex The CubeIndex to be rotated
 * @param dimension The dimension of the cube being acted on
 */
export function rotateClockwize(
  cubeIndex: CubeIndex,
  dimension: number,
): CubeIndex {
  return {
    face: cubeIndex.face,
    row: cubeIndex.column,
    column: dimension - 1 - cubeIndex.row,
  };
}

/**
 * Computes the new (row, column) coordinates of the input CubeIndex after a
 * counterclockwize rotation. Does not account for movements of indices on adjacent faces.
 *
 * {0, 0}, {0, 1}, {0, 2}      {0, 2}, {1, 2}, {2, 2}
 * {1, 0}, {1, 1}, {1, 2}  ->  {0, 1}, {1, 1}, {2, 1}
 * {2, 0}, {2, 1}, {2, 2}      {0, 0}, {1, 0}, {2, 0}
 *
 * @param cubeIndex The CubeIndex to be rotated
 * @param dimension The dimension of the cube being acted on
 */
export function rotateCounterClockwize(
  cubeIndex: CubeIndex,
  dimension: number,
): CubeIndex {
  return {
    face: cubeIndex.face,
    row: dimension - 1 - cubeIndex.column,
    column: cubeIndex.row,
  };
}
