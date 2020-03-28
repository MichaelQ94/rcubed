import { IndexConverter } from "./cubeindex";

describe("IndexConverter.fromSlotNumber followed by IndexConverter.toSlotNumber", () => {
  const maxDimension = 10;
  for (let dimension = 2; dimension <= maxDimension; dimension += 1) {
    const convert = IndexConverter.forDimension(dimension);
    const numSlots = 6 * dimension ** 2;

    describe(`on ${dimension}x${dimension} cube`, () => {
      for (let slot = 0; slot < numSlots; slot += 1) {
        it(`sends slot ${slot} back to itself`, () => {
          expect(convert.toSlotNumber(convert.fromSlotNumber(slot))).toEqual(
            slot,
          );
        });
      }
    });
  }
});
