import { CubeIndex } from "./cubeindex";
import { CubeOp } from "./cubeop";

export type FaceletNumber = number;

export interface Cube {
  readonly dimension: number;
  readonly positionOf: (FaceletNumber: number) => CubeIndex;
  readonly occupantOf: (position: CubeIndex) => number;
  readonly apply: (op: CubeOp) => Cube;
}
