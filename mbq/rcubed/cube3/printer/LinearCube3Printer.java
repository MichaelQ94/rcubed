package mbq.rcubed.cube3.printer;

import mbq.rcubed.cube3.core.Cube3;

public final class LinearCube3Printer implements Cube3Printer {
  @Override
  public void print(Cube3 cube) {
    System.out.print("[");
    for (int i = 0; i < Cube3.NUM_FACELETS; ++i) {
      System.out.print(cube.occupantOf(i) + ", ");
    }
    System.out.println("]");
  }
}