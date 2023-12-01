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
class Vector {
  /**
   * @private
   * @type {VectorObject}
   */
  vector = {
    i: 0,
    j: 0,
    k: 0,
  };

  /**
   * @private
   * @type {number}
   */
  vectorModulus = 0;

  /**
   * @private
   * @type {VectorObject | undefined}
   */
  directionVector;

  /**
   * Creates an instance of Vector
   * @constructor
   * @param {number} i - i component of vector
   * @param {number} j - j component of vector
   * @param {number} k - k component of vector
   */
  constructor(i = 0, j = 0, k = 0) {
    this.vector.i = i;
    this.vector.j = j;
    this.vector.k = k;

    if (!(i == 0 && j == 0 && k == 0)) {
      this.vectorModulus = Math.sqrt(
        Math.pow(i, 2) + Math.pow(j, 2) + Math.pow(k, 2)
      );

      if (this.vectorModulus != 0) {
        this.directionVector = {
          i: i / this.vectorModulus,
          j: j / this.vectorModulus,
          k: k / this.vectorModulus,
        };
      }
    }
  }

  /**
   * Returns the i component of vector
   * @returns {number}
   */
  get i() {
    return this.vector.i;
  }

  /**
   * Returns the j component of vector
   * @returns {number}
   */
  get j() {
    return this.vector.j;
  }

  /**
   * Returns the k component of vector
   * @returns {number}
   */
  get k() {
    return this.vector.k;
  }

  /**
   * Returns the vector object {i, j, k}
   * @returns {VectorObject}
   */
  get value() {
    return this.vector;
  }

  /**
   * Returns the modulus
   * @returns {number}
   */
  get modulus() {
    return this.vectorModulus;
  }

  /**
   * Returns the unit vector
   * @returns {VectorObject | undefined}
   */
  get unitVector() {
    return this.directionVector;
  }

  /**
   * Returns the sum of the vector and all specified vectors
   * @param {...Vector} vectors
   * @returns {Vector}
   */
  Add(...vectors) {
    let i = this.vector.i;
    let j = this.vector.j;
    let k = this.vector.k;

    vectors.forEach((vector) => {
      i += vector.i;
      j += vector.j;
      k += vector.k;
    });

    return new Vector(i, j, k);
  }

  /**
   * Returns the difference between one or more vectors
   * @param {...Vector} vectors
   * @returns {Vector}
   */
  Subtract(...vectors) {
    let i = this.vector.i;
    let j = this.vector.j;
    let k = this.vector.k;

    vectors.forEach((vector) => {
      i -= vector.i;
      j -= vector.j;
      k -= vector.k;
    });

    return new Vector(i, j, k);
  }

  /**
   * Returns the dot product of the vector
   * @param {Vector} vector
   * @returns {number}
   */
  Dot(vector) {
    return (
      this.vector.i * vector.i +
      this.vector.j * vector.j +
      this.vector.k * vector.k
    );
  }

  /**
   * Returns the cross product of the vector
   * @param {Vector} vector
   * @returns {Vector}
   */
  Cross(vector) {
    return new Vector(
      this.vector.j * vector.k - this.vector.k * vector.j,
      this.vector.k * vector.i - this.vector.i * vector.k,
      this.vector.i * vector.j - this.vector.j * vector.i
    );
  }
}

module.exports = { Vector };
