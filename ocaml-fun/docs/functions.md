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
