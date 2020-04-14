import { CubeIndex, Face } from "lib/core/cubeindex";

/**
 * CubeIndex literals will be represented as {FRC} where:
 * F is the face coordinate
 * R is the row coordinate
 * C is the column coordinate
 */

/**
 * Computes the new position of the facelet occupying the input `CubeIndex` after a
 * clockwise rotation of the face specified by `faceToTurn`. Let F be the value of
 * `faceToTurn`, then this will apply the tranformation:
 *
 *    {F00} {F01} {F02}      {F20} {F10} {F00}
 *    {F10} {F11} {F12}  ->  {F21} {F11} {F01}
 *    {F20} {F21} {F22}      {F22} {F12} {F02}
 *
 * Facelets occupying all other positions will be unaffected, including those on faces
 * adjacent to `faceToTurn`.
 *
 * @param {CubeIndex} position The starting position of the facelet to be moved
 * @param {Face} faceToTurn The cube face to be rotated by this operation
 * @param {number} dimension The dimension of the cube being acted on
 */
export function clockwiseQuarterTurn(
  { face, row, column }: CubeIndex,
  faceToTurn: Face,
  dimension: number,
): CubeIndex {
  return face === faceToTurn
    ? {
        face,
        row: column,
        column: dimension - 1 - row,
      }
    : { face, row, column };
}

/**
 * Computes the new position of the facelet occupying the input `CubeIndex` after a
 * counterclockwise rotation of the face specified by `faceToTurn`. Let F be the value of
 * `faceToTurn`, then this will apply the tranformation:
 *
 *    {F00} {F01} {F02}      {F02} {F12} {F22}
 *    {F10} {F11} {F12}  ->  {F01} {F11} {F21}
 *    {F20} {F21} {F22}      {F00} {F10} {F20}
 *
 * Facelets occupying all other positions will unaffected, including those on faces
 * adjacent to `faceToTurn`.
 *
 * @param {CubeIndex} position The starting position of the facelet to be moved
 * @param {Face} faceToTurn The cube face to be rotated by this operation
 * @param dimension The dimension of the cube being acted on
 */
export function counterClockwiseQuarterTurn(
  { face, row, column }: CubeIndex,
  faceToTurn: Face,
  dimension: number,
): CubeIndex {
  return face === faceToTurn
    ? {
        face,
        row: dimension - 1 - column,
        column: row,
      }
    : { face, row, column };
}

/**
 * Equivalent to applying either of the quarter turn partial operations twice. Let F be the value of
 * `faceToTurn`, then this will apply the tranformation:
 *
 *    {F00} {F01} {F02}      {F22} {F21} {F20}
 *    {F10} {F11} {F12}  ->  {F12} {F11} {F10}
 *    {F20} {F21} {F22}      {F02} {F01} {F00}
 *
 * Facelets occupying all other positions will unaffected, including those on faces
 * adjacent to `faceToTurn`.
 *
 * @param {CubeIndex} position The starting position of the facelet to be moved
 * @param {Face} faceToTurn The cube face to be rotated by this operation
 * @param dimension The dimension of the cube being acted on
 */
export function halfTurn(
  { face, row, column }: CubeIndex,
  faceToTurn: Face,
  dimension: number,
): CubeIndex {
  return face === faceToTurn
    ? {
        face,
        row: dimension - 1 - row,
        column: dimension - 1 - column,
      }
    : { face, row, column };
}
