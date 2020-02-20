package mbq.rcubed.cube3.core;

/** Represents elementary cube operations in the form of clockwise face rotations. */
public enum ElemCube3Op implements Cube3Op {
  R {
    @Override
    public int imageOf(int index) {
      switch(index) {
        // R
        case 27: return 29;
        case 28: return 32;
        case 29: return 35;
        case 32: return 34;
        case 35: return 33;
        case 34: return 30;
        case 33: return 27;
        case 30: return 28;

        // U -> B
        case 2: return 42;
        case 5: return 39;
        case 8: return 36;

        // F -> U
        case 20: return 2;
        case 23: return 5;
        case 26: return 8;

        // D -> F
        case 47: return 20;
        case 50: return 23;
        case 53: return 26;

        // B -> D
        case 36: return 53;
        case 39: return 50;
        case 42: return 47;

        default: return index;
      }
    }
  },
  R2 {
    @Override
    public int imageOf(int index) {
      return R.imageOf(R.imageOf(index));
    }
  },
  R3 {
    @Override
    public int imageOf(int index) {
      return R.imageOf(R.imageOf(R.imageOf(index)));
    }
  };

  @Override
  public ElemCube3Op inverse() {
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