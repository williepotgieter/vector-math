const { Vector } = require("../lib/vector.js");
const { scalarTripleProduct } = require("../lib/operations.js");

describe("Vector standard operations", () => {
  it("scalar triple product", () => {
    const a = new Vector(1, 2, 3);
    const b = new Vector(4, 5, -6);
    const c = new Vector(7, -1, 2);

    expect(scalarTripleProduct(a, b, c)).toStrictEqual(-213);
  });
});
