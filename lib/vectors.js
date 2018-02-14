
module.exports = {
  //Function that creates vector objects from an array in the form [i, j, k]
  "createVectorObj": function(args){
    var temp = {i: args[0], j: args[1], k: args[2]};
    return temp;
  },

  //Function that calculates the modulus/magnitude of a vector
  "calcModulus": function(vector){
    var temp = Math.sqrt(Math.pow(vector.i, 2) + Math.pow(vector.j, 2) + Math.pow(vector.k, 2));
    return temp;
  },

  //Function that calculates and returns the unit vector
  "unitVector": function(vector){
    var size = module.exports.calcModulus(vector);
    var temp = {i: vector.i/size, j: vector.j/size, k: vector.k/size};
    return temp;
  },

  //Function that takes in an array of vector objects and returns the sum.
  "addVector": function(args){
    var temp = {i: 0, j: 0, k: 0};
    for(var n = 0; n < args.length; n++){
      temp.i += args[n].i;
      temp.j += args[n].j;
      temp.k += args[n].k;
    }
    return temp;
  },

  //Function that returns the difference (vector1 - vector2) between two vector objects.
  "subVector": function(vector1, vector2){
    var temp = {i: vector1.i - vector2.i, j: vector1.j - vector2.j, k: vector1.k - vector2.k};
    return temp;
  },

  //Function that calculates the dot product of two vectors
  "dotProduct": function(vector1, vector2){
    var temp = vector1.i*vector2.i + vector1.j*vector2.j + vector1.k*vector2.k;
    return temp;
  },

  //Function that calculates the cross product of two vectors
  "crossProduct": function(vector1, vector2){
    var temp = {i: vector1.j*vector2.k - vector1.k*vector2.j,
                j: vector1.k*vector2.i - vector1.i*vector2.k,
                k: vector1.i*vector2.j - vector1.j*vector2.i};
    return temp;
  }
  
}
