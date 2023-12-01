const { Vector } = require("./vector.js");

/**
 * Returns the triple product of three vectors
 * @param {Vector} a
 * @param {Vector} b
 * @param {Vector} c
 * @returns {number}
 */
const scalarTripleProduct = (a, b, c) => a.Dot(b.Cross(c));

module.exports = { scalarTripleProduct };
