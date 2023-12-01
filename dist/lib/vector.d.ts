export type VectorObject = {
    /**
     * - i component of vector
     */
    i: number;
    /**
     * - j component of vector
     */
    j: number;
    /**
     * - k component of vector
     */
    k: number;
};
/**
 * @typedef {Object} VectorObject
 * @property {number} i - i component of vector
 * @property {number} j - j component of vector
 * @property {number} k - k component of vector
 */
/**
 *  Represents a vector
 *  @class
 */
export class Vector {
    /**
     * Creates an instance of Vector
     * @constructor
     * @param {number} i - i component of vector
     * @param {number} j - j component of vector
     * @param {number} k - k component of vector
     */
    constructor(i?: number, j?: number, k?: number);
    /**
     * @private
     * @type {VectorObject}
     */
    private vector;
    /**
     * @private
     * @type {number}
     */
    private vectorModulus;
    /**
     * @private
     * @type {VectorObject | undefined}
     */
    private directionVector;
    /**
     * Returns the i component of vector
     * @returns {number}
     */
    get i(): number;
    /**
     * Returns the j component of vector
     * @returns {number}
     */
    get j(): number;
    /**
     * Returns the k component of vector
     * @returns {number}
     */
    get k(): number;
    /**
     * Returns the vector object {i, j, k}
     * @returns {VectorObject}
     */
    get value(): VectorObject;
    /**
     * Returns the modulus
     * @returns {number}
     */
    get modulus(): number;
    /**
     * Returns the unit vector
     * @returns {VectorObject | undefined}
     */
    get unitVector(): VectorObject | undefined;
    /**
     * Returns the sum of the vector and all specified vectors
     * @param {...Vector} vectors
     * @returns {Vector}
     */
    Add(...vectors: Vector[]): Vector;
    /**
     * Returns the difference between one or more vectors
     * @param {...Vector} vectors
     * @returns {Vector}
     */
    Subtract(...vectors: Vector[]): Vector;
    /**
     * Returns the dot product of the vector
     * @param {Vector} vector
     * @returns {number}
     */
    Dot(vector: Vector): number;
    /**
     * Returns the cross product of the vector
     * @param {Vector} vector
     * @returns {Vector}
     */
    Cross(vector: Vector): Vector;
}
//# sourceMappingURL=vector.d.ts.map