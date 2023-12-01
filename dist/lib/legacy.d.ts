/**
 * Creates a new vector object from an array in the form [i, j, k]. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {number[]} args
 * @returns {import("./vector.js").VectorObject | undefined}
 */
export function createVectorObj(args: number[]): import("./vector.js").VectorObject | undefined;
/**
 * Calculates the modulus/magnitude of a vector. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {import("./vector.js").VectorObject} vector
 * @returns {number | undefined}
 */
export function calcModulus(vector: import("./vector.js").VectorObject): number | undefined;
/**
 * Calculates and returns the unit vector. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {import("./vector.js").VectorObject} vector
 * @returns {vector | undefined}
 */
export function unitVector(vector: import("./vector.js").VectorObject): import("./vector.js").VectorObject | undefined;
/**
 * Takes in an array of vector objects and returns the sum. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {import("./vector.js").VectorObject[]} vectors
 * @returns {import("./vector.js").VectorObject | undefined}
 */
export function addVector(vectors: import("./vector.js").VectorObject[]): import("./vector.js").VectorObject | undefined;
/**
 * Calculates the difference (vector1 - vector2) between two vector objects. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {import("./vector.js").VectorObject} vA
 * @param {import("./vector.js").VectorObject} vB
 * @returns {import("./vector.js").VectorObject}
 */
export function subVector(vA: import("./vector.js").VectorObject, vB: import("./vector.js").VectorObject): import("./vector.js").VectorObject;
/**
 * Calculates the dot product of two vectors. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {import("./vector.js").VectorObject} vA
 * @param {import("./vector.js").VectorObject} vB
 * @returns {number}
 */
export function dotProduct(vA: import("./vector.js").VectorObject, vB: import("./vector.js").VectorObject): number;
/**
 * Calculates the cross product of two vectors. Use Vector class instead
 * @deprecated
 * @see Vector class for implementation details
 * @param {import("./vector.js").VectorObject} vA
 * @param {import("./vector.js").VectorObject} vB
 * @returns {import("./vector.js").VectorObject}
 */
export function crossProduct(vA: import("./vector.js").VectorObject, vB: import("./vector.js").VectorObject): import("./vector.js").VectorObject;
//# sourceMappingURL=legacy.d.ts.map