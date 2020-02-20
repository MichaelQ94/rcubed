package mbq.rcubed.cube3.core;

/**
 * Represents the state of a 3x3 Rubik's Cube. A cube consists of 54 slots numbered 0 through 53.
 * Each slot is occupied by a {@link Facelet}. Each Facelet is assigned a color and a unique number
 * from 0 through 53. A cube is considered solved when slot n is occupied by Facelet n for all 0 <= n <= 53.
*/
public final class Cube3 {
  public static final int FACELETS_PER_COLOR = 9;
  public static final int NUM_FACELETS = FACELETS_PER_COLOR * Facelet.NUM_COLORS;

  /** Returns the Facelet currently occupying slot {@code index}. */
  public Facelet faceletAt(int index) {
    return slots[index];
  }
 
  /** Returns a new Cube3 instance representing the result of applying {@code op} to the current cube state. */
  public Cube3 apply(Cube3Op op) {
    Facelet[] result = new Facelet[NUM_FACELETS];

    for(int i = 0; i < NUM_FACELETS; ++i) {
      result[op.imageOf(i)] = slots[i];
    }

    return new Cube3(result);
  }

  /** Constructs a Cube3 instance in the solved state. */
  public static Cube3 solved() {
    return new Cube3(SOLVED_STATE);
  }

  private static final Facelet[] SOLVED_STATE = solvedState();

  private final Facelet[] slots;

  private Cube3(Facelet[] slots) {
    this.slots = slots;
  }

  private static Facelet[] solvedState() {
    Facelet[] slots = new Facelet[NUM_FACELETS];

    for (Facelet.Color color : Facelet.Color.values()) {
      for (int i = 0; i < FACELETS_PER_COLOR; ++i) {
        int faceletNumber = (color.ordinal() * FACELETS_PER_COLOR) + i;
        slots[faceletNumber] = new Facelet(faceletNumber, color);
      }
    }

    return slots;
  }
}