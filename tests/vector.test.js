const { Vector } = require("../lib/vector.js");

describe("Vector class", () => {
  it("vector instance", () => {
    const v = new Vector(1, 2, 3);

    expect(v).toBeInstanceOf(Vector);
  });

  it("vector components", () => {
    const cases = [
      {
        vector: new Vector(1, 2, 3),
        i: 1,
        j: 2,
        k: 3,
      },
      {
        vector: new Vector(0, 2, 3),
        i: 0,
        j: 2,
        k: 3,
      },
      {
        vector: new Vector(1, 2),
        i: 1,
        j: 2,
        k: 0,
      },
      {
        vector: new Vector(1),
        i: 1,
        j: 0,
        k: 0,
      },
      {
        vector: new Vector(),
        i: 0,
        j: 0,
        k: 0,
      },
    ];

    cases.forEach(({ vector, i, j, k }) => {
      expect(vector.i).toStrictEqual(i);
      expect(vector.j).toStrictEqual(j);
      expect(vector.k).toStrictEqual(k);
    });
  });

  it("vector properties", () => {
    const cases = [
      {
        vector: new Vector(1, 2, 3),
        modulus: 3.7416573867739413,
        unitVector: {
          i: 0.2672612419124244,
          j: 0.5345224838248488,
          k: 0.8017837257372732,
        },
        value: { i: 1, j: 2, k: 3 },
      },
      {
        vector: new Vector(2, 3),
        modulus: 3.605551275463989,
        unitVector: {
          i: 0.5547001962252291,
          j: 0.8320502943378437,
          k: 0,
        },
        value: { i: 2, j: 3, k: 0 },
      },
      {
        vector: new Vector(),
        modulus: 0,
        unitVector: undefined,
        value: { i: 0, j: 0, k: 0 },
      },
    ];

    cases.forEach(({ vector, modulus, unitVector }) => {
      expect(vector.modulus).toStrictEqual(modulus);
      expect(vector.unitVector).toStrictEqual(unitVector);
    });
  });

  it("vector operations", () => {
    const cases = [
      {
        vA: new Vector(1, 2, 3),
        vB: new Vector(2, 3, 4),
        vC: new Vector(5, 0, 7),
        sum: new Vector(8, 5, 14),
        difference: new Vector(-6, -1, -8),
        vA_dot_vB: 20,
        vA_cross_vB: new Vector(-1, 2, -1),
        vA_cross_vB_add_vC_cross_vB_dot_vA: 12,
      },
      {
        vA: new Vector(),
        vB: new Vector(2, 3, 4),
        vC: new Vector(5, 0, -9),
        sum: new Vector(7, 3, -5),
        difference: new Vector(-7, -3, 5),
        vA_dot_vB: 0,
        vA_cross_vB: new Vector(),
        vA_cross_vB_add_vC_cross_vB_dot_vA: 0,
      },
    ];

    cases.forEach(
      ({
        vA,
        vB,
        vC,
        sum,
        difference,
        vA_dot_vB,
        vA_cross_vB,
        vA_cross_vB_add_vC_cross_vB_dot_vA,
      }) => {
        const sV = vA.Add(vB, vC);
        const dV = vA.Subtract(vB, vC);

        expect(sV).toBeInstanceOf(Vector);
        expect(sV.value).toStrictEqual(sum.value);

        expect(dV).toBeInstanceOf(Vector);
        expect(dV.value).toStrictEqual(difference.value);

        expect(vA.Dot(vB)).toStrictEqual(vA_dot_vB);

        expect(vA_cross_vB).toBeInstanceOf(Vector);
        expect(vA.Cross(vB).value).toStrictEqual(vA_cross_vB.value);

        // Chained operation
        expect(vA.Cross(vB).Add(vC.Cross(vB)).Dot(vA)).toStrictEqual(
          vA_cross_vB_add_vC_cross_vB_dot_vA
        );
      }
    );
  });
});
