package mbq.rcubed.cube3.core;

public final class Cube3 {
  public static final int NUM_FACELETS = 54;
  private final int[] facelets;

  private Cube3(int[] facelets) {
    this.facelets = facelets;
  }

  public int faceletAt(int index) {
    return facelets[index];
  }
 
  public Cube3 apply(Cube3Op op) {
    int[] result = new int[NUM_FACELETS];

    for(int i = 0; i < NUM_FACELETS; ++i) {
      result[op.imageOf(i)] = facelets[i];
    }

    return new Cube3(result);
  }

  public static Cube3 solved() {
    int[] facelets = new int[NUM_FACELETS];
    for (int i = 0; i < NUM_FACELETS; ++i) {
      facelets[i] = i;
    }
    return new Cube3(facelets);
  }
}