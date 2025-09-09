1. What is the difference between var, let, and const?

var → Function-scoped, can be redeclared & updated, hoisted with undefined.
let → Block-scoped, can be updated but not redeclared, hoisted but in Temporal Dead Zone until defined.
const → Block-scoped, cannot be reassigned (but objects/arrays can be mutated), also hoisted but in Temporal Dead Zone.



2. What is the difference between map(), forEach(), and filter()?

map() → Transforms each element, returns a new array.
forEach() → Iterates over elements, does not return anything (used for side effects).
filter() → Tests elements with a condition, returns a new array with passing elements.



3. What are arrow functions in ES6?

A shorter way to write functions introduced in ES6.
Use lexical this (no own this, arguments, or super).
Not hoisted (must be declared before use).
For single expressions, {} and return can be omitted.


4. How does destructuring assignment work in ES6?

Extracts values from arrays/objects into separate variables.
Arrays match by position, objects match by property name.
Supports defaults, renaming, skipping, rest operator, and nesting.



5. Explain template literals in ES6. How are they different from string concatenation?

Strings enclosed in backticks (`).
Allow expression interpolation (${}) and multi-line strings.
Cleaner and more readable than traditional string concatenation.
