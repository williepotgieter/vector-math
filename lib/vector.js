/**
 * @typedef {Object} vector
 * @property {number} i - i component
 * @property {number} j - j component
 * @property {number} k - k component
 */

/**
 *  Represents a vector
 *  @class
 */
class Vector {
  /** @type {vector} */
  #vector;
  /**
   * Creates an instance of Vector
   * @constructor
   * @param {number} i - i component
   * @param {number} j - j component
   * @param {number} k - k component
   */
  constructor(i, j, k) {
    this.#vector.i = i ? i : 0;
    this.#vector.j = j ? j : 0;
    this.#vector.k = k ? k : 0;
  }

  /**
   * Returns the i component
   * @returns {number}
   */
  get i() {
    return this.#vector.i;
  }

  /**
   * Returns the j component
   * @returns {number}
   */
  get j() {
    return this.#vector.j;
  }

  /**
   * Returns the k component
   * @returns {number}
   */
  get k() {
    return this.#vector.k;
  }

  /**
   * Returns the modulus
   * @returns {number}
   */
  get modulus() {
    return Math.sqrt(
      Math.pow(this.#vector.i, 2),
      Math.pow(this.#vector.j, 2),
      Math.pow(this.#vector.k, 2)
    );
  }

  /**
   * Returns the unit vector
   * @returns {vector | undefined}
   */
  get unitVector() {
    if (this.modulus <= 0) return undefined;

    const size = this.modulus;
    return {
      i: this.#vector.i / size,
      j: this.#vector.j / size,
      k: this.#vector.k / size,
    };
  }

  /**
   * Returns the sum of the vector with all specified vectors
   * @param {...vector} vectors
   * @returns {vector}
   */
  Add(...vectors) {
    let i = this.#vector.i;
    let j = this.#vector.j;
    let k = this.#vector.k;

    vectors.forEach((vector) => {
      i += vector.i;
      j += vector.j;
      k += vector.k;
    });

    return { i, j, k };
  }

  /**
   * Returns the difference of one or more vectors
   * @param {...vector} vectors
   * @returns {vector}
   */
  Subtract(...vectors) {
    const negativeVector = vectors.map((vector) => -1 * vector);
    return this.Add(...negativeVector);
  }

  /**
   * Returns the dot product of the vector
   * @param {vector} vector
   * @returns {vector}
   */
  DotProduct(vector) {
    return {
      i: this.#vector.i * vector.i,
      j: this.#vector.j * vector.j,
      k: this.#vector.k * vector.k,
    };
  }

  /**
   * Returns the cross product of the vector
   * @param {vector} vector
   * @returns {vector}
   */
  CrossProduct(vector) {
    return {
      i: this.#vector.j * vector.k - this.#vector.k * vector.j,
      j: this.#vector.k * vector.i - this.#vector.i * vector.k,
      k: this.#vector.i * vector.j - this.#vector.j * vector.i,
    };
  }
}

export { Vector };
