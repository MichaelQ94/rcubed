import { CubeIndex } from "./cubeindex";
import { CubeOp } from "./cubeop";

export interface Cube {
  readonly dimension: number;
  readonly positionOf: (facelet: number) => CubeIndex;
  readonly occupantOf: (position: CubeIndex) => number;
  readonly apply: (op: CubeOp) => Cube;
}
