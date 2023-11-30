/**
 *  Represents a matrix
 *  @class
 */
class Matrix {
  /** @type {number[][]} */
  #matrix;
  /**
   * Creates an instance of Matrix
   * @constructor
   * @param {...number[]} rows - Each row will add a new row to the matrix
   */
  constructor(...rows) {
    // Get the length (number of columns) of the longest row
    const columns = rows.reduce((max, arr) => Math.max(max, arr.length), 0);

    // Create matrix
    this.#matrix = rows.map((row) =>
      row.length < columns ? addPadding(row, columns) : row
    );
  }

  /**
   * Returns the number of rows (m) in a matrix
   * @returns {number}
   */
  get m() {
    return this.#matrix.length;
  }

  /**
   * Returns the number of columns (n) in a matrix
   * @returns {number}
   */
  get n() {
    if (this.#matrix.length > 0) {
      return this.#matrix[0].length;
    }

    return 0;
  }

  /**
   * Returns the transposed matrix
   * @returns {Matrix | undefined}
   */
  get T() {
    if (this.#matrix.length == 0) return undefined;

    const columnCount = this.#matrix[0].length;

    /**@type {number[][]} */
    let transposedMatrix = [];

    for (let col = 0; col < columnCount; col++) {
      /**@type {number[]} */
      let transposedRow = [];
      for (let row = 0; row < this.#matrix.length; row++) {
        transposedRow.push(this.#matrix[row][col]);
      }

      transposedMatrix.push(transposedRow);
    }

    return new Matrix(...transposedMatrix);
  }

  print() {
    this.#matrix.forEach((row) => {
      let temp = "";
      row.forEach((entry) => (temp += `${entry}\t`));
      console.log(temp);
    });
  }
}

/**
 *
 * @param {number[]} row
 * @param {number} columns
 * @returns {number[] | undefined}
 */
const addPadding = (row, columns) => {
  if (row.length >= columns) return undefined;

  /** @type {number[]} */
  let padding = [];
  let paddingLength = columns - row.length;
  for (let i = 0; i < paddingLength; i++) {
    padding.push(0);
  }

  return [...row, ...padding];
};

export { Matrix };
