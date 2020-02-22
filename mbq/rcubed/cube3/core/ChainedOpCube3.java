package mbq.rcubed.cube3.core;

/** Represents the state of a cube by capturing the chain of cube operations performed on a solved cube. */
public final class ChainedOpCube3 extends Cube3 {
  private final Cube3 prevState;
  private final Cube3Op prevOp;

  ChainedOpCube3(Cube3 prevState, Cube3Op prevOp) {
    this.prevState = prevState;
    this.prevOp = prevOp;
  }

  @Override
  public int locationOf(int faceletNumber) {
    return prevOp.imageOf(prevState.locationOf(faceletNumber));
  }

  @Override
  public int occupantOf(int slotNumber) {
    return prevState.occupantOf(prevOp.inverse().imageOf(slotNumber));
  }
}