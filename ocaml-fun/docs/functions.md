## Functions

### Function Definitions

- let x = 42 ;  has an expression in it but is not itself an expression.
- It is rather a definition.
- Definitions bind values to names, in this case, the value 42 being bound to name x.

- non recursive function definitions:
  let f x  = ...

- recrusive function definitions:
  let rec f x = ...

- OCaml integers are not the "mathematical" integers but are limited to a fixed number
of bits. In current implementations , due to architecture size, is 63 bits.

- The OCaml compiler infers them for us automatically. The compiler solved this type inference problem
algorithmically, but we could it ourselves, too.
- It's like a mystery that can be solved by our mental power of deduction.

- we can define mutualy recursive functions can be defined with the and keyword:
```ocaml
let rec f x1 ... xn = e1
and g y1 ... y2 = e2
```

#### Type Semantics for function types:
- t -> u
- t1 -> t2 -> u
- t1 -> ... -> tn -> u

- t and u are metavariables indicating types.
- t -> u is the type of a function that takes an input of type t and returns a
output of type u.
- it takes 2 inputs , the first of type t1 and the second type as t2, and returns the output
of type u.
- The type checking rule for recursive function assumes that the function identifier
f has a particular type, then checks to see whether the body of the function is well-typed
that assumption.
- f is in scope inside the function body itself.

#### Anonymous Functions:
- OCaml functions do not have to have names -> they may be anonymous.
