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

#### Boolean:
- Boolean values are written true and false. Short circuit conjuction && , and disjunction || operators are
available.

#### char:
- Characters are written in single quotes -> 'a','b','c'. They are repr
as bytes -> that is, 8bit integers -> Latin1 encoding.
- First half of the characters in that range are the standard ASCII characters.
- we can convert characters to and from integers from 2 methods:
    - char_of_int <int> -> <char>
    - int_of_char <char> -> <int>

#### string:
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

### More Operators:

- 2 equality opertors in OCaml, = and == with corresponding inequality operators
<> and !=.
- operators = and <> examine structural equality whereas == and != examine physical equality.

#### Assertions :
- assert e evaluates e. If the result is true, nothing more happens, and the entire,
expression evaluates to a special value called unit.
- unit value is written () and its type is uint.
- but if the result is false,an exception is raised.
```ocaml

let () = assert (f input1 = output1)
```

#### if expressions:
```ocaml
if e1 then e2 else e3
```
- evalutes to e2 if e1 evaluates to true and to e3 otherwise.
- we call e1 the guard of the if expression.

- unlike if-then-else statements that we may have used in imperative languages,
if-then-else expressions in OCaml are just like any other expressions; they can be put anywhere an expression
can go.
- This makes them similar to the ternary operator ? : , that we might have used in other languages.

```ocaml
4 + (if 'a' = 'b' then 1 else 2)
```
- if expressions can also be nested in a other way:
```ocaml
if e1 then e2
else if e3 then e4
else if e5 then e6
...
else en
```
- the final else as mandatory, regardless of whether we are writing a single
if expression or a highly nested if expression.

#### dynamic semantics:
- if e1 evals to true, and if e2 evals to v , then if e1 then e2 else e3, evals to v
- if e1 evals to false, and if e3 evals to v , then if e1 then e2 else e3 evals to v.

- these are called as evaluation rules -> they define how to evaluate expressions.
  - it takes 2 rules to describe the evaluation of an if expression, one for when the guard is true,and one for when the guard is
  false.
  - v is used here to represent any OCaml value; its another example of a metavariable.

#### Static Semantics:
- if e1 has type bool and e2 has type t and e3 has type t then if e1 then e2 else e3 has type t.
- This is called as a typing rule -> this decribes how to type check an expression.
- At compile time, when type checking is done, it makes no difference whether the guard is true or false;
in fact there is no way for the compiler to know what values the guard will have at run time.
- t here is used to represent any OCaml type -> OCaml manual also has definitions of al types.

- e has type t -> e : t . colon pronounced here is "has type".

#### let expressions:

- let x = 42 ;; -> defines x to be 42,after which we can use x in future definitions
at the toplevel. we will call this as use of let of let definitions.
- another version
```ocaml
let x = 42 in x + 1
```
- here we are binding a value to the name x, then using that binding another
expression, x+1.
- since this it's an expression, it will eval to a value. That's different than definitions,
which themselves do not evaluate to any values.
```ocaml
(let x = 42 in x) + 1
```
- similarly , the series of let bindings is idiomatically how several variables can be bound inside a given block of code.
```ocaml
let x = e1 in e2
```

#### Dynamic Semantics:

- to evaluate let x = e1 in e2:
  - evaluate e1 to a value v1.
  - substitute v1 for x in e2 , yielding a new expression e2'.
  - evaluate e2' to a value v2.
  - the result of evaluting the let expression is v2.

- static semantics:
  - if e1 : t1 and if under the assumptions that x: t1 it holds that e2 : t2 , then
  (let x = e1 in e2) : t2.

#### Scope:
- let bindings are in effect only in the block of code in which they occur.
- This is exactly what we are used to from nearly any modern programming language.
- Principle of Name Irrelevance -> these 2 expressions should be identical:
  - new bindings of a variable shadows any old binding of the varibale name.
  - metaphorically, its as if the new binding temporarily casts a shadow over the old
  binding.
  - eventually the old binding could reappera as the shadow recedes.

- Shadowing is not mutable assignment.
```ocaml
let x = 5 in ((let x = 6 in x) + x)
let x = 5 in (x + (let x = 6 in x))
```
- Each let definition binds an entirely new variable. If that new variable happens
to have the same name as an old variable, the new variable temporarily shadows
the old one.

- The old varibale is still around, and its value is immutable -> it never , ever changes.
- so even though let expressions might superficially look like assignment statements from imperative languages,
they are actually quite different.

#### Type Annotations:
- OCaml automatically infers the type of every expressions -> with no need for the programmer
to write it manually.
- Nonetheless, it can sometimes can be useuful to manually specify the desired type of an expression.
- A type annotation does that.
```ocaml
(5: int)
```
- an incorrect annotation will produce a compile-time error.
- Syntax -> syntax of type annotation.
  - (e: t)
- note that the parentheses are required.
- Dynamic Semantics: there is no run-time meaning for a type annotation.
It goes away during compilation , because it indicates a compile-time check.
There is no run-time conversion.
- So if (e: t) compiled successfully, then at run-time it is simply e, and it evaluates
as e would.

- Static Semantics: If e has type t, then (e: t) has type t.
