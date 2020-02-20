package mbq.rcubed.cube3.core;

/** Represents a single facelet (sticker) on a Rubik's Cube. */
public final class Facelet {
  public enum Color { WHITE, ORANGE, GREEN, RED, BLUE, YELLOW }
  public static final int NUM_COLORS = Color.values().length;

  public int number() {
    return number;
  }

  public Color color() {
    return color;
  }

  private final int number;
  private final Color color;
  
  Facelet(int number, Color color) {
    this.number = number;
    this.color = color;
  }
}