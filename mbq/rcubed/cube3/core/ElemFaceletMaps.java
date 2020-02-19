package mbq.rcubed.cube3.core;

/** Precomputed facelet mappings for clockwise face rotations. */
final class ElemFaceletMaps {
  // Facelet mapping corresponding to clockwize rotation of the R face.
  static final int[] R = {
    0, 1, 42, 3, 4, 39, 6, 7, 36,
    9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 2, 21, 22, 5, 24, 25, 8,
    22, 32, 35, 28, 31, 34, 27, 30, 33,
    53, 37, 38, 50, 40, 41, 47, 43, 44,
    45, 46, 20, 48, 49, 23, 51, 52, 26
  };
  static final int[] R2 = repeat(R, 2);
  static final int[] R3 = repeat(R, 3);

  private static int[] repeat(int[] faceletMap, int times) {
    int[] resultMap = new int[Cube3.NUM_FACELETS];

    for(int i = 0; i < Cube3.NUM_FACELETS; ++i) {
      resultMap[i] = repeat(faceletMap, times, i);
    }

    return resultMap;
  }

  private static int repeat(int[] faceletMap, int times, int index) {
    for (; times > 0; --times) {
      index = faceletMap[index];
    }
    return index;
  }
}