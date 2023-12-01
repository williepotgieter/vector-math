const {
  createVectorObj,
  calcModulus,
  unitVector,
  addVector,
  subVector,
  dotProduct,
  crossProduct,
} = require("../lib/legacy.js");

describe("Legacy functions", () => {
  it("vector object", () => {
    const v = createVectorObj([1, 2, 3]);

    expect(v).toStrictEqual({ i: 1, j: 2, k: 3 });
  });

  it("vector properties", () => {
    const cases = [
      {
        vector: { i: 1, j: 2, k: 3 },
        modulus: 3.7416573867739413,
        unitV: {
          i: 0.2672612419124244,
          j: 0.5345224838248488,
          k: 0.8017837257372732,
        },
      },
      {
        vector: { i: 2, j: 3, k: 0 },
        modulus: 3.605551275463989,
        unitV: {
          i: 0.5547001962252291,
          j: 0.8320502943378437,
          k: 0,
        },
      },
      {
        vector: { i: 0, j: 0, k: 0 },
        modulus: 0,
        unitV: undefined,
      },
    ];

    cases.forEach(({ vector, modulus, unitV }) => {
      expect(calcModulus(vector)).toStrictEqual(modulus);
      expect(unitVector(vector)).toStrictEqual(unitV);
    });
  });

  it("vector operations", () => {
    const cases = [
      {
        vA: { i: 1, j: 2, k: 3 },
        vB: { i: 2, j: 3, k: 4 },
        vC: { i: 5, j: 0, k: 7 },
        sum: { i: 8, j: 5, k: 14 },
        difference: { i: -1, j: -1, k: -1 },
        vA_dot_vB: 20,
        vA_cross_vB: { i: -1, j: 2, k: -1 },
      },
      {
        vA: { i: 0, j: 0, k: 0 },
        vB: { i: 2, j: 3, k: 4 },
        vC: { i: 5, j: 0, k: -9 },
        sum: { i: 7, j: 3, k: -5 },
        difference: { i: -2, j: -3, k: -4 },
        vA_dot_vB: 0,
        vA_cross_vB: { i: 0, j: 0, k: 0 },
      },
    ];

    cases.forEach(({ vA, vB, vC, sum, difference, vA_dot_vB, vA_cross_vB }) => {
      expect(addVector([vA, vB, vC])).toStrictEqual(sum);
      expect(subVector(vA, vB)).toStrictEqual(difference);
      // dotproduct fails
      expect(dotProduct(vA, vB)).toStrictEqual(vA_dot_vB);
      expect(crossProduct(vA, vB)).toStrictEqual(vA_cross_vB);
    });
  });
});
