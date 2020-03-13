import { CubeIndex } from "lib/core/cubeindex";

export interface CubeOp {
  readonly imageOf: (cubeIndex: CubeIndex, dimension: number) => CubeIndex;
  readonly inverse: () => CubeOp;
}
