package mbq.rcubed.cube3.core;

/** Represents elementary cube operations in the form of clockwise face rotations. */
public enum ElemCube3Op implements Cube3Op {
  R(ElemFaceletMaps.R),
  R2(ElemFaceletMaps.R2),
  R3(ElemFaceletMaps.R3);

  private final int[] faceletMap;

  private ElemCube3Op(int[] faceletMap) {
    this.faceletMap = faceletMap;
  }

  @Override
  public int imageOf(int index) {
    return faceletMap[index];
  }

  @Override
  public Cube3Op inverse() {
    return inverseOf(this);
  }

  private static ElemCube3Op inverseOf(ElemCube3Op op) {
    switch(op) {
      case R: return R3;
      case R2: return R2;
      case R3: return R;
      default: throw new IllegalArgumentException("Unrecognized elementary operation: " + op);
    }
  }
}