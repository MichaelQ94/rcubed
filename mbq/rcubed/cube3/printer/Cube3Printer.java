package mbq.rcubed.cube3.printer;

import mbq.rcubed.cube3.core.Cube3;

public interface Cube3Printer {
  void print(Cube3 cube);

  static final Cube3Printer DEFAULT = new LinearCube3Printer();
}