package mbq.rcubed.cube3.core;

/** Represents a permutation to be applied to a 3x3 Rubik's Cube. May or may not correspond to an elementary operation. */
public interface Cube3Op {

  /** Returns the index to which the facelet currently at {@code index} will be sent.*/
  int imageOf(int index);

  /** Returns the Cube3Op which would undo this Cube3Op. */
  Cube3Op inverse();
}