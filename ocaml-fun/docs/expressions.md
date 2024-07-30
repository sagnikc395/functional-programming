## Expressions

- Primary piece of OCaml syntax is the expression.Just like programs in
imperative languages are primarily built out of commands, programs in functional languages,
are primarily built out of expressions.
Eg: 2+2, increment 12
- Primary Task of computation in a functional language is to evaluate an expression to a value.
A value is an expression for which there is no computataion remaining to be performed.
- So all values will be expressions, but not all expressions will be values.
eg: 2, true, "yay"

### Primitive Types and Values:
#### Ints:
- Primitive types are the builtin and most basic types :integers, floating point numbers,
characters, strings and booleans. They will be recognizable as similar to primitive types
from other programming languages.
```ocaml

65/ 60

65 mod 60

65 / 0
(* throughts a runtime exception *)
```
- OCaml integers range in 64 bits machine words, i.e the size of a register on a64 bit processor.
- One of the bits is "stolen" by OCaml implementation leading to a 63bit repr.This stolen bit used at
runtime to distinugish integers from pointers.
- For applications needing true 64 bits-> Int64 module can be used.
- For applications needing arbitary precision, we can use the Zarith expression.

#### Float:
- OCaml floats are IEE754 floating points. Syntactically they must always contain a dot eg: 3.14, 3.0 ,or 3.
- Opeartors deliberately does not support operator overloading, arithmatic operations
on floats are written with a dot after them.
```ocaml

3.15 *. 2.
```
- to convert between floats and ints, we need to use 2 functions for that:
  - float_of_int <int-number> -> <float>
  - int_of_float <float_number> -> <int>

### Boolean:
- Boolean values are written true and false. Short circuit conjuction && , and disjunction || operators are
available.

### char:
- Characters are written in single quotes -> 'a','b','c'. They are repr
as bytes -> that is, 8bit integers -> Latin1 encoding.
- First half of the characters in that range are the standard ASCII characters.
- we can convert characters to and from integers from 2 methods:
    - char_of_int <int> -> <char>
    - int_of_char <char> -> <int>

### string:
- string are sequences of characters. they are written with double quotes, like "abc".
- string concatenation operator is ^.
```ocaml
"abc"^"def"
```
- OOP langs provide a override method for converting objects to string, but since
most OCaml values are not objects, so another means is required to convert to strings.
- These are :
  - string_of_int <int> -> <string>
  - string_of_float <float> -> <string>
  - string_of_bool <boolean> -> <string>

- no string_of_char , but String.make can be used to accomplish the same goal.
```ocaml
string_of_int 42

String.make 1 'z'
```
- likewise for the same three primitive types, there are built-in functions to covnert from a string if possible :
  - int_of_string <string> -> <int>
  - float_of_string <string> -> <float>
  - bool_of_string <string> -> <boolean>

- no char_of_string , but the individual characters of a string can be accessed
by a 0-based index.
```ocaml
"abc".[0]
```
