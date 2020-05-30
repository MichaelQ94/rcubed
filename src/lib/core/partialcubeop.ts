import { CubeIndex, Face } from "lib/core/cubeindex";

/**
 * CubeIndex literals will be represented as {XYZ} where:
 * X is the face coordinate
 * Y is the row coordinate
 * Z is the column coordinate
 */

/**
 * Computes the new position of the facelet occupying the input `CubeIndex` after a
 * clockwise rotation of the face specified by `faceToTurn`. Let X be the value of
 * `faceToTurn`, then this will apply the tranformation:
 *
 *    {X00} {X01} {X02}      {X20} {X10} {X00}
 *    {X10} {X11} {X12}  ->  {X21} {X11} {X01}
 *    {X20} {X21} {X22}      {X22} {X12} {X02}
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
 * counterclockwise rotation of the face specified by `faceToTurn`. Let X be the value of
 * `faceToTurn`, then this will apply the tranformation:
 *
 *    {X00} {X01} {X02}      {X02} {X12} {X22}
 *    {X10} {X11} {X12}  ->  {X01} {X11} {X21}
 *    {X20} {X21} {X22}      {X00} {X10} {X20}
 *
 * Facelets occupying all other positions will unaffected, including those on faces
 * adjacent to `faceToTurn`.
 *
 * @param {CubeIndex} position The starting position of the facelet to be moved
 * @param {Face} faceToTurn The cube face to be rotated by this operation
 * @param {number} dimension The dimension of the cube being acted on
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
 * Equivalent to applying either of the quarter turn partial operations twice. Let X be the value of
 * `faceToTurn`, then this will apply the tranformation:
 *
 *    {X00} {X01} {X02}      {X22} {X21} {X20}
 *    {X10} {X11} {X12}  ->  {X12} {X11} {X10}
 *    {X20} {X21} {X22}      {X02} {X01} {X00}
 *
 * Facelets occupying all other positions will unaffected, including those on faces
 * adjacent to `faceToTurn`.
 *
 * @param {CubeIndex} position The starting position of the facelet to be moved
 * @param {Face} faceToTurn The cube face to be rotated by this operation
 * @param {number} dimension The dimension of the cube being acted on
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

/**
 * Moves the input CubeIndex to the specified Face while retaining the row and column coordinates.
 */
function changeFace({ row, column }: CubeIndex, face: Face): CubeIndex {
  return {
    face,
    row,
    column,
  };
}

/**
 * Computes the new CubeIndex to which the facelet occupying the input CubeIndex would be sent by
 * an M slice. Only the U, F, D, and B faces are ever affected by M slices. Calling mSlice
 * on a 3x3 cube with `layer == 2` has this effect (affected indices are highlighed using square
 * brackets):
 *
 *                     {000} {001} [002]
 *                     {010} {011} [012]
 *                     {020} {021} [022]
 *
 * {100} {101} {102}   {200} {201} [202]   {300} {301} {302}   [400] {401} {402}
 * {110} {111} {112}   {210} {211} [212]   {310} {311} {312}   [410] {411} {412}
 * {120} {121} {122}   {220} {221} [222]   {320} {321} {322}   [420] {421} {422}
 *
 *                     {500} {501} [502]
 *                     {510} {511} [512]
 *                     {520} {521} [522]
 *
 *                                       |
 *                                       v
 *
 *                     {000} {001} [420]
 *                     {010} {011} [410]
 *                     {020} {021} [400]
 *
 * {100} {101} {102}   {200} {201} [002]   {300} {301} {302}   [522] {401} {402}
 * {110} {111} {112}   {210} {211} [012]   {310} {311} {312}   [512] {411} {412}
 * {120} {121} {122}   {220} {221} [022]   {320} {321} {322}   [502] {421} {422}
 *
 *                     {500} {501} [202]
 *                     {510} {511} [212]
 *                     {520} {521} [222]
 *
 * @param {CubeIndex} position The starting position of the facelet to be moved
 * @param {number} layer The column on the U face which should be affected by this operation
 * @param {number} dimension The dimension of the cube being acted on
 */
export function mSlice(
  position: CubeIndex,
  layer: number,
  dimension: number,
): CubeIndex {
  if (position.column === layer) {
    switch (position.face) {
      case Face.U:
        return changeFace(position, Face.F);
      case Face.F:
        return changeFace(position, Face.D);
      case Face.D:
        return halfTurn(changeFace(position, Face.B), Face.B, dimension);
      default:
        break;
    }
  } else if (
    position.column === dimension - 1 - layer &&
    position.face === Face.B
  ) {
    return halfTurn(changeFace(position, Face.U), Face.U, dimension);
  }
  return position;
}

/**
 * Computes the new CubeIndex to which the facelet occupying the input CubeIndex would be sent by
 * an M slice. Only the U, F, D, and B faces are ever affected by M slices. Calling mSlice
 * on a 3x3 cube with `layer == 2` has this effect (affected indices are highlighed using square
 * brackets):
 *
 *                     {000} {001} [002]
 *                     {010} {011} [012]
 *                     {020} {021} [022]
 *
 * {100} {101} {102}   {200} {201} [202]   {300} {301} {302}   [400] {401} {402}
 * {110} {111} {112}   {210} {211} [212]   {310} {311} {312}   [410] {411} {412}
 * {120} {121} {122}   {220} {221} [222]   {320} {321} {322}   [420] {421} {422}
 *
 *                     {500} {501} [502]
 *                     {510} {511} [512]
 *                     {520} {521} [522]
 *
 *                                       |
 *                                       v
 *
 *                     {000} {001} [202]
 *                     {010} {011} [212]
 *                     {020} {021} [222]
 *
 * {100} {101} {102}   {200} {201} [502]   {300} {301} {302}   [022] {401} {402}
 * {110} {111} {112}   {210} {211} [512]   {310} {311} {312}   [012] {411} {412}
 * {120} {121} {122}   {220} {221} [522]   {320} {321} {322}   [002] {421} {422}
 *
 *                     {500} {501} [420]
 *                     {510} {511} [410]
 *                     {520} {521} [400]
 *
 * @param {CubeIndex} position The starting position of the facelet to be moved
 * @param {number} layer The column on the U face which should be affected by this operation
 * @param {number} dimension The dimension of the cube being acted on
 */
export function reverseMSlice(
  position: CubeIndex,
  layer: number,
  dimension: number,
): CubeIndex {
  if (position.column === layer) {
    switch (position.face) {
      case Face.U:
        return halfTurn(changeFace(position, Face.B), Face.B, dimension);
      case Face.F:
        return changeFace(position, Face.U);
      case Face.D:
        return changeFace(position, Face.F);
      default:
        break;
    }
  } else if (
    position.column === dimension - 1 - layer &&
    position.face === Face.B
  ) {
    return halfTurn(changeFace(position, Face.D), Face.D, dimension);
  }
  return position;
}
