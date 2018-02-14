

## Description

Module containing functions for basic vector calculations such as; addition, subtraction, dot product, cross product, modulus and unit vector.

The module also contains a function that converts an array to a vector object in the form:

```bash
{i: x, j: y, k: z}
```

All the functions contained in this module takes in vector objects in this format.

## Install

```bash
npm install vector-math
```

## Usage

Add the following line of code to your project:

```bash
var v = require('vector-math');
```

__*createVectorObj()*__
This is a utility function that takes an array as input and returns a vector object in the format:

_*Example:*_
```bash
var newVector = v.createVectorObj([1, 2, -3]);

//Creates the newVector object and assigns the object: {i: 1, j: 2, k: -3} => |v| = i + 2j - 3k
```

__*calcModulus()*__
Calculates the modulus/magnitude of a vector object.

_*Example*_
```bash
var vectorModulus = v.calcModulus({i: 6, j: 2, k: 3});

//Calculates the modulus of vector |v| = 6i + 2j + 3k and assigns the value (7) to vectorModulus
```

__*unitVector()*__
Calculates the unit vector of a vector object.

_*Example*_
```bash
var vector = v.unitVector({i: 12, j: -3, k: -4});

//Assigns the unit vector object calculated from |v| = 12i - 3j - 4k to vector as {i: 0.923, j: -0.231, k: -0.308}
```

__*addVector()*__
Function that takes in an array of vector objects and returns the sum.

_*Example*_
```bash
var vectorA = {i: 2, j: 4, k: 6};
var vectorB = {i: 3, j: 6, k: 9};
var vectorC = {i: -4, j: 5, k: -2};

var sum = v.addVector([vectorA, vectorB, vectorC]);

//Assigns the sum of vectors (vectorA, vectorB and vectorC) to sum => |s| = i + 15j + 13k
```

__*subVector()*__
Function that returns the difference between two vector objects.

_*Example*_
```bash
var vector1 = {i: 5, j: 12, k: 18};
var vector2 = {i: 2, j: 16, k: 3};

var dif = v.subVector(vector1, vector2);

//Assigns {i: 3, j: -4, k: 15} to diff
```

__*dotProduct()*__
Function that calculates the dot product of two vectors.

_*Example*_
```bash
var vector1 = {i: 1, j: 2, k: 3};
var vector2 = {i: 4, j: -5, k: 6};

var dot = v.dotProduct(vector1, vector2);

//Assigns the dot product of |vector1| and |vector2| to dot as (12)
```

__*crossProduct()*__
Function that calculates the cross product of two vectors.

_*Example*_
```bash
var vector1 = {i: 2, j: 1, k: -1};
var vector2 = {i: -3, j: 4, k: 1};

var cross = v.crossProduct(vector1, vector2);

//Calculates the cross product of |vector1| and |vector2| as cross = {i: 5, j: 1, k: 11}
```


## License

[MIT](http://vjpr.mit-license.org)
