package mbq.rcubed.cube3.core;

/** Represents a single facelet (sticker) on a Rubik's Cube. */
public final class Facelet {
  public enum Color { WHITE, ORANGE, GREEN, RED, BLUE, YELLOW }
  public static final int NUM_COLORS = Color.values().length;
  public static final int FACELETS_PER_COLOR = 9;
  public static final int NUM_FACELETS = NUM_COLORS * FACELETS_PER_COLOR;

  public Color colorOf(int faceletNumber) {
    return Color.values()[faceletNumber / FACELETS_PER_COLOR];
  }
}