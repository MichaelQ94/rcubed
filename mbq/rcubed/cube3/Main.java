package mbq.rcubed.cube3;

import mbq.rcubed.cube3.core.Cube3;
import mbq.rcubed.cube3.core.ElemCube3Op;
import mbq.rcubed.cube3.printer.Cube3Printer;

public final class Main {
  public static final void main(String[] args) {
    Cube3 cube = Cube3.solved();
    print(cube);
    
    Cube3 cubeR = cube.apply(ElemCube3Op.R);
    print(cubeR);

    Cube3 cubeR2 = cubeR.apply(ElemCube3Op.R);
    print(cubeR2);

    Cube3 cubeR5 = cubeR2.apply(ElemCube3Op.R.inverse());
    print(cubeR5);
  }

  private static void print(Cube3 cube) {
    Cube3Printer.DEFAULT.print(cube);
  }
}