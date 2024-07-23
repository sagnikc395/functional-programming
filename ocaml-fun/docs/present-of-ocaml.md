## Present of OCaml

- OCaml is functional programming language.
- Key linguistic abstraction of functional languages is of the mathematical funtion.

- A function maps an input to an output, for the same input, it will alwyas produce the same output.
- Mathmatical functions are stateless: they do not contain any extra info or state that persists between usages of the function.

- Functions are first-class: we can use them as input to other functions, and produce functions as output. Expressing everything in terms of functions enables a uniform and simple programming model that is easier to reason about than the procedures and methods founds in other families of languages.

- Imperative Programming Languages like C and Java involve mutable state that changes throughout execution. Commands specify how to compute by destructively changing the state.

- Fantasy of Immutability -> easy to reason about: the machine does this, then this etc.
- but
- Reality of Mutability -> machines are good at complicated manipulation of state, humans are not good understanding state. This is due to the fact that mutability breaks referential transparency: ability to replace an expression with its value without affecting the result of a computation.

- Immutability frees the programmer from these cocnerns of state. It provides powerful ways to build correct and concurrent programs. OCaml is primarily an immutable language, like most functional languages. It does support imperative programming with mutable state.

## OCaml Features:

- OCaml is a statically-typed and type-safe programming language. A statically-typed language detects type errors at compile times, if a type error is detected, the language wont allow the execution of the program.

- Type-safe language limits which kinds of operations can be performed on which kinds of data. In practice, this prevents a lot of silly errors , and also prevents a lot of security problems : over half of the reported break-ins at CERT were due to buffer overflows.

- C/C++ are statically typed but not type-safe -> they check for some type errors ,but don't gurantee the absence of all type errors.

- OCaml supports a number of advanced features:

  1. Algebraic Data Types -> To build sophisticated data structures in OCaml easily, without fussing with pointers and memory.
  2. Pattern Matching -> enables examining the shape of a data strutcure -> makes them even more convinient.
  3. Parametric Polymorphism -> functions and data structures can be parameterized over types. This is crucial for being able to re-use code.
  4. Garbage Collection -> Automatic memory management relives us from the burden of memory allocation and deallocation, a common source of bugs in langs like C.
  5. Modules -> OCaml makes it easy to structure large systems through the use of modules. Modules are used to encapsulate implementation behind interfaces. OCaml goes well beyond the functionality of most languages with modules by providing functions (called functors) that manipulate modules.
