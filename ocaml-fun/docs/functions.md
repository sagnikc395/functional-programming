## Functions

### Function Definitions

- let x = 42 ; has an expression in it but is not itself an expression.
- It is rather a definition.
- Definitions bind values to names, in this case, the value 42 being bound to name x.

- non recursive function definitions:
  let f x = ...

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
- We have 2 ways we could write an increment function now

```ocaml

let inc x = x + 1;;
let inc = fun x -> x + 1;;
```

- In lambda calculas, fun x -> e , would be writtern as \lambda x.e . The \lambda denotes an anonymous function.
- Used in higher order programming -> will often create anonymous functions and pass them as input to other functions.

```ocaml
fun x1 ... xn -> e
```

### Function Application:

- ```ocaml
  e0 e1 e2 ... en
  ```

- The first expression e0 is the function and it is applied to args e1 to en.
- Static Semantics:
- if e0: t1 -> ... tn -> u and e1: t1 and ... and en : tn then e0 e1 ... en : u.
- To eval e0 e1 ... en:

  - Eval e0 to a function. Also evaluate the argument expression e1 through en to values v1 through vn.
  - Substitute each value vi for the corresponding argument name xi in the body e of the function. That substitution results in a new expression e'
  - Evaluate e' to a value v, which is the result of evaluating e0 e1 ... en.

- let x = e1 in e2, appears in a program , we could replace it with (fun x -> e2) e1. Thay are syntactically different but semantically equivalent. In essence, let expression are just syntactic sugar for anonymous function application.

### Pipeline:

- values are sent through the pipeline from left to right and does some transformation.

```ocaml
let square  x = x * x;

square (inc 5);;
5 |> inc |> square ;;
```

- This is a nice, idiomatic way of expresing the computations in OCaml -> former way is arguably not as elegant -> involves writing extra parenthesis and requires the reader's eyes to jump around, rather than move linearly from left to right.

```ocaml
let inc x = x + 1 ;;
let square x = x * x ;;
5 |> inc |> square |> inc |> inc |> square ;;
```

- Since e1 |> e2 is just another way of writing e2 e1 , we dont need to state the semantics for |> , it is just the same as function application.

### Polymorphic Function:

- Identity function is the function that simply returns its input.

```ocaml
let id x = x;;
```

- Or equivalently as an anonymos function:

```ocaml
let id = fun x -> x;;
```

- 'a is a type variable -> it stands for an unknown type, just like a regular variable stands for an unknown value. Type variables always begin with a single quote. Can get the type using the id operator in OCaml.

```ocaml
id 42;;
id true;;
id "bigred";;
```

- since we can appky id to many types of alues -> it is a polymorphus functions -> it can be applied to many forms.

- with manula type annotations, we can give a more restictive type to a polymoprhic function as:

```ocaml
let id_int (x: int): int = x
```

- Type of id_int specifies one aspect of its behaviour -> given an int as input , it promises to produce an int as output. It turns out that id also makes the same promise -> given an int as input, it too will return an int as output.

```ocaml
let first x y = x ;;
let first_int : int -> 'b -> int = first;;
let bad_first : int -> 'b -> string = first;;
```

### Labelled and Optional Arguments:

- The type and name of a function usually gives us a pretty good idea of what the arguments should be.
- However, for functions with many arguments (especially arguments of the same type), it can be useful to lable them.

```ocaml
String.sub;;
```

- Ocaml supports labelled arguments to functions. We can declare this kind of function using the following :

```ocaml
let f ~name1: arg1 ~name2: arg2 = arg1 + arg2 ;;
```

- Labels for arguments are often the same as the variable names for them. OCaml provides a shorthand for this case.

```ocaml
let f ~name1:name1 ~name2:name2 = name1 + name2;;
let f ~name1 ~name2 = name1 + name2;
```

- Possible to make some arguments optional. When called without an optional argument, a default value will be provided. To declare such a function, we can use the following syntax:

```ocaml
let f ?name:(arg1=8) arg2 = arg1 + arg2;;
```

- we can then called a function with or without the arguments:

```ocaml
f ~name:2 7
f 7
```

### Partial Application:

- addx function takes an integer x as input and returns a function of type int -> int , that will add x to whatever is passed to it.
- The type of addx is int -> int -> int. The type of add is also int -> int -> int. So from the perspective of their types, they are the same function. But from the form of addx suggests something interesting: we can apply it to just a single argument.

```ocaml
let add x y = x +y ;;
let addx x = fun y -> x + y;;

let add5 = addx 5;;
add5 2;;
```

- This is called as partial application -> we partially applied the function add to one argument, even though we would normally think of it as multi-argument function.
- This works because the following three functions aresyntactially different but semantically equivalent. That is , they are different ways of expressing the same computation:

```ocaml

let add x y = x + y;;
let add x = fun y -> x + y;;
let add = fun x -> (fun y -> x + y);;
```

### Function Associativity:

- Every OCaml function takes exactly one argument i.e currying.
- Why:
  - cause let add x = x + y ;; -> which is know that's semantically equivalent to let add = fun x -> (fun y -> x +y).

```ocaml
let f =
  fun x1 ->
    (fun x2 ->
      (...
      (fun xn -> e)...))
```

- so even though we think of f as a function that tkaes n arguments, in reality it is a function that takes 1 argument and returns a function.
- i.e t1 -> t2 -> t3 -> t4 means t1 -> (t2 -> (t3 -> t4))

- Function types are right associative -> there are implicit parentheses around function types -> from right to left. The intuition here is that a function takes a single argument and returns a new function that expects the remaining arguments.

### Operators as Functions:

- Addition operator + has type int -> int -> int. It's is normally written infix 3+4. By putting parenthese around, we can make it prefix operator.

```ocaml
( + );;
( + ) 3 4;;
let add3 = ( + ) 3;;
add3 2;;
```

- The same technique works for any built-in operator.
- spaces are not required, but be aware of multiplication: ( \* ) , which must be written as like that , otherwise it would be parsed as beginning a comment.
- We can also define our own infix operators like:

```ocaml
let ( ^^ ) x y =  max x y ;;
```

### Tail Recursion:

- Call stack has a limited size -> each element stores info like the values of the local variables and which instruction in the function is currently being executed.
- When the eval of one function body calls another, a new element is pushed onto the call stack and popped off when the called function completes.

- Size of the stack is limited by the OS. So if the stack runs out of space, it becomes impossible to make another function call. Normally this wouldnt happend, because there is no reason to make that many successive function calls before returning.
- In cases, where it does happen, there is a good reason for the OS to make that program stop: it might be in the process of eating up all the memory available on the entire computer, thus harming other programs running on the same computer.

- A solution to this issue -> Tail Call Optimization, requires some cooperation between the programmer and the compiler. The programmer does a little rewriting of the function, which the compiler then notices and applies an optimization over.
- After the recurisve call count( n - 1) , there is computation remaining: the computer still needs to add 1 to the result of that call.
- But we as programmers could rewrite the count function so that it does not need to do any additional computation after the recursive calls. The trick is to create a helper function with an extra param.

- The TCO optimized version, adds an extra parameter named acc, which is idiomatic and stands for "accumulator".The idea is that the value we want to return from the function is slowly, with each recursive call, being accumulated in it.
- The "remaining" computation-> i.e adding 1 -> now happens before the recurisve call not after. When the abse case of the recursion finally arrives, the function now returns acc, where the answer has been accumulated.

- A good compiler (i.e OCaml compiler) can notice when a recursive call is in a tail position, which is a technical way of saying that there is "no more computation to be done after it returns". The recursive call to count_aux is in tail position, the recursive call to count is not.

**_Why Tail Position Matters_**

- A recurisve call in tail position does not need a new stack frame. It can just reuse the exisiting stack frame.
- This is because there is nothing left of use in the existing stack frame.
- No computation left to be done, so none of the local variables, or next instruction to execute etc. matter any more.
- None of that memory space ever needs to be read again, because that call is effectively already finished. So instead of wasting space by allocating another stack frame, the compiler "recycles" the space used by the previous frame.
- TC goes down from O(n) stack frames to O(1) stack frames.

### Importance and Recipes for Tail Recursion:

- Important that the compiler support the optimization. Otherwise, the transformation we do at the code as a programmer makes no difference. Indeed, most compilers do support it, at least as an option.

#### Recipe for Tail Recursion:

1. Change the function into a helper function -> add an extra argument: the accumulator,often named acc.
2. Write a new "main" version of the function that calls the helper. It passed the original base case's return value as the initial value of the accumulator.
3. Change the helper function to return the accumulator in the base case.
4. Change the helper function's recursive case. It now needs to do the extra work on the accumulator argument,before the recursive call.

