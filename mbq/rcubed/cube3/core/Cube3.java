package mbq.rcubed.cube3.core;

/**
 * Represents the state of a 3x3 Rubik's Cube. A cube consists of 54 slots numbered 0 through 53.
 * Each slot is occupied by a facelet (i.e. sticker). Each facelet has a unique number from 0 through 53.
 * A cube is considered solved when slot n is occupied by Facelet n for all 0 <= n <= 53.
*/
public abstract class Cube3 {
  /** Returns the slot occupied by facelet #{@code faceletNumber}. */
  public abstract int locationOf(int faceletNumber);

  /** Returns the facelet occupying slot #{@code slotNumber}. */
  public abstract int occupantOf(int slotNumber);

  public final Cube3 apply(Cube3Op op) {
    return new ChainedOpCube3(this, op);
  }

  public static Cube3 solved() {
    return SOLVED;
  }

  private static final Cube3 SOLVED = new Cube3() {
    /** In the solved state, facelet n is located in slot n. */
    @Override
    public int locationOf(int faceletNumber) {
      return faceletNumber;
    }

    /** In the solved state, slot n is occupied by facelet n. */
    @Override
    public int occupantOf(int slotNumber) {
      return slotNumber;
    }
  };
}