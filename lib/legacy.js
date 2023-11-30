import { Vector } from "./vector.js";

/**
 * @typedef {Object} vector
 * @property {number} i - i component
 * @property {number} j - j component
 * @property {number} k - k component
 */

// The following are legacy functions and will be deprecated in a future release!

/**
 * [Deprecated] Creates a new vector object from an array in the form [i, j, k]. Use Vector class instead
 * @param {number[]} args
 * @returns {vector | undefined}
 */
const createVectorObj = (args) => {
  if (args.length > 3) return undefined;
  return {
    i: args[0] ? args[0] : 0,
    j: args[1] ? args[1] : 0,
    k: args[2] ? args[2] : 0,
  };
};

/**
 * [Deprecated] Calculates the modulus/magnitude of a vector. Use Vector class instead
 * @param {vector} vector
 * @returns {number | undefined}
 */
const calcModulus = (vector) => {
  const v = new Vector(vector.i, vector.j, vector.k);
  return v.modulus;
};

/**
 * [Deprecated] Calculates and returns the unit vector. Use Vector class instead
 * @param {vector} vector
 * @returns {vector | undefined}
 */
const unitVector = (vector) => {
  const v = new Vector(vector.i, vector.j, vector.k);
  return v.unitVector;
};

/**
 * [Deprecated] Takes in an array of vector objects and returns the sum. Use Vector class instead
 * @param {vector[]} vectors
 * @returns {vector | undefined}
 */
const addVector = (vectors) => {
  if (vectors.length == 0) {
    return undefined;
  } else if (vectors.length == 1) {
    return vectors[0];
  }

  const transformedVectors = vectors.map(({ i, j, k }) => new Vector(i, j, k));
  const firstVector = transformedVectors.shift();

  return firstVector.Add(...transformedVectors).value;
};

/**
 * [Deprecated] Calculates the difference (vector1 - vector2) between two vector objects. Use Vector class instead
 * @param {vector} vectorA
 * @param {vector} vectorB
 * @returns {vector}
 */
const subVector = (vectorA, vectorB) => {
  const vA = new Vector(vectorA.i, vectorA.j, vectorA.k);
  const vB = new Vector(vectorB.i, vectorB.j, vectorB.k);

  return vA.Add(
    vB.Dot({
      i: -1,
      k: -1,
      j: -1,
    })
  ).value;
};

/**
 * [Deprecated] Calculates the dot product of two vectors. Use Vector class instead
 * @param {vector} vectorA
 * @param {vector} vectorB
 * @returns {vector}
 */
const dotProduct = (vectorA, vectorB) => {
  const vA = new Vector(vectorA.i, vectorA.j, vectorA.k);
  const vB = new Vector(vectorB.i, vectorB.j, vectorB.k);

  return vA.Dot(vB).value;
};

/**
 * [Deprecated] Calculates the cross product of two vectors. Use Vector class instead
 * @param {vector} vectorA
 * @param {vector} vectorB
 * @returns {vector}
 */
const crossProduct = (vectorA, vectorB) => {
  const vA = new Vector(vectorA.i, vectorA.j, vectorA.k);
  const vB = new Vector(vectorB.i, vectorB.j, vectorB.k);

  return vA.Cross(vB).value;
};

export {
  createVectorObj,
  calcModulus,
  unitVector,
  addVector,
  subVector,
  dotProduct,
  crossProduct,
};
