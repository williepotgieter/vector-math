# vector-math

## Overview

Zero dependency `JavaScript` library for performing fommon vector calculations. The library can handle 2D/3D vectors.

[!NOTE]
The library was originally written back in 2018, but has since been re-written to make use of an ES6 class instead of separate functions. The original functions from `v1.0.1` have been included in the re-write to maintain backward compatibility, but they will be deprecated in a future release.

## Getting started

The package is very simple to use and ll vector operations are done using the `Vector` class, which will be detailed here.

### Installation

```bash
npm i vector-math
```

### Usage

The packace provides the following vector properties and operations:

- Modulus (class property)
- Unit vector (class property)
- Value (vector in object form {i, j, k} as a class property)
- Addition (method)
- Subtraction (method)
- Dot product (method)
- Cross product (method)

#### Creating vectors

```javascript
import { Vector } from "vector-path";

// Create vectors
const u = new Vector(1, 2, -3);
const v = new Vector(-4, 1);
const w = new Vector(1);
```

The above code will create the following vectors:
<br>
<br>
$\mathbf{\bar{u}}=\mathbf{i}\mathbf{+}\mathbf{2j}\mathbf{-}\mathbf{3k}$
<br>
$\mathbf{\bar{v}}=-\mathbf{4i}\mathbf{+}\mathbf{j}$
<br>
$\mathbf{\bar{w}}=\mathbf{i}$
<br>
<br>
Initializing a vector with no values will creat a `null vector`
<br>

```javascript
const q = new Vector();
```

Will create a `null vector`:
<br>
<br>
$\mathbf{\bar{q}}=\mathbf{0i}\mathbf{+}\mathbf{0j}\mathbf{+}\mathbf{0k}$
<br>

#### Vector properties

```javascript
// VECTORS

// u = i + 2j -3k
// v = -4i + j
// w = i

// MODULUS
let u_modulus = u.modulus; // modulus of u = 3.741657386773941
let v_modulus = v.modulus; // modulus of v = 4.123105625617661
let w_modulus = w.modulus; // modulus of w = 1

// UNIT VECTOR
let u_unitVector = u.unitVector; // unit vector as obj {i, j, k}
let v_unitVector = v.unitVector; // unit vector as obj {i, j, k}
let w_unitVector = w.unitVector; // unit vector as obj {i, j, k}

// VALUE
let u_value = u.value; // vector as obj {i, j, k}
let v_value = v.value; // vector as obj {i, j, k}
let w_value = w.value; // vector as obj {i, j, k}

// COMPONENTS
let u_i = u.i; // i component of vector u
let v_j = v.j; // j component of vector v
let w_k = w.k; // k component of vector w
```

#### Vector operations

```javascript
// VECTORS

// u = i + 2j -3k
// v = -4i + j
// w = i

// ADDITION
let sum_uv = u.Add(v); // u + v (result returned as Vector class)
let sum_uvw = u.Add(v, w); // u + v + w (result returned as Vector class)

// SUBTRACTION
let diff_uv = u.Subtract(v); // u - v (result returned as Vector class)
let diff_uvw = u.Subtract(v, w); // u - v - w (result returned as Vector class)

// DOT PRODUCT
let u_dot_v = u.Dot(v); // u (dot) v (result returned as number)

// CROSS PRODUCT
let u_cross_v = u.Cross(v); // u x v (result returned as Vector class)
```

### Examples

Given vectors
<br>
<br>
$\mathbf{\bar{u}}=\mathbf{i}\mathbf{+}\mathbf{2j}\mathbf{-}\mathbf{3k}$
<br>
$\mathbf{\bar{v}}=-\mathbf{4i}\mathbf{+}\mathbf{j}$
<br>
$\mathbf{\bar{w}}=\mathbf{i}$
<br>

#### Cross product

$\mathbf{\bar{a}}=\mathbf{\bar{u}}\times\mathbf{\bar{v}}$

```javascript
const u = new Vector(1, 2, -3);
const v = new Vector(-4, 1);

const a = u.Cross(v);
// a = i + 12j + 9k
// a.value = { i: 3, j: 12, k: 9 }
```

$\mathbf{\bar{a}}=\mathbf{3i}\mathbf{+}\mathbf{12j}\mathbf{+}\mathbf{9k}$

#### Combining operations

The library supports chaining of vector operations, so complex calculations can easily be expressed.

$\mathbf{b}=[(\mathbf{\bar{v}}\times\mathbf{\bar{u}})\mathbf{+}(\mathbf{\bar{w}}\times\mathbf{\bar{u}})]\bullet\mathbf{\bar{v}}$

```javascript
const u = new Vector(1, 2, -3);
const v = new Vector(-4, 1);
const w = new Vector(1);

const b = v.Cross(u).Add(w.Cross(u)).Dot(v);
// b = 0
```

$\mathbf{b}=\mathbf{0}$

## Feature roadmap

The following vector operations will be added in future releases

- [x] ~~Modulus~~
- [x] ~~Unit vector~~
- [x] ~~Addition~~
- [x] ~~Subtraction~~
- [x] ~~Dot product~~
- [x] ~~Cross product~~
- [x] ~~Scalar Triple product~~
- [ ] Angle between vectors
- [ ] Scalar projection
- [ ] Vector projection
- [ ] Scalar multiplication
- [ ] Basis
- [ ] Check linear independence
