package mbq.rcubed.cube3;

import mbq.rcubed.cube3.core.Cube3;
import mbq.rcubed.cube3.printer.Cube3Printer;

public final class Main {
  public static final void main(String[] args) {
    Cube3 cube = Cube3.solved();
    Cube3Printer.DEFAULT.print(cube);
  }
}