### Printing

- OCaml has built-in printing functions for a few of the built-in primitive types:
  print_char
  print_string
  print_int
  print_float
- print_endline which is like print_string , also output as newline.

- print_endline and print_string both take a string as input and returns a value of type unit -> type as (). Unit is like bool, expect there is one fewer values of type unit than there is of bool.

- Unit is used when we need to take an argument or return a value, but there is no interesting value to pass or return. Like void / None in python.
- Unit s often used when we are writing or using code that has side effects.

### Semicolon

- if we want to print one thing after another, we could sequence some print functions using nested let expressions.

```ocaml

let _ = print_endline "Camles" in
let _ = print_endline "are" in
print_endline "bae"
```

- let \_ = e , is a way of evaluatin e but not binding its value to any name.
- Indeed, we know the value of each of these print_endline functions will return -> it will alwyas be (), the unit value.

### Ignore:

- if e1 does not have type unit, then e1; e2 will give a warning, because we are discarding a potentially useful value. If that is truly our intent, we can call the built-in function ignore: 'a -> uint to convert any valye to ().

```ocaml
(ignore 3);5
```

- basically ignore is like this:

```ocaml
let ignore _ = ()
```

### Printf:

- OCaml values are not objects, and they do not have a toString() method they inherit from some root Object class. Nor does OCaml permit overloading of operators.

- Idea is to use a format specifier to -> specify how to format output. The name this idea is best known under is probably "printf", which refers to the name of the C library function that implemented it.

- It's actually understood by the OCaml compiler in quite a deep way. Inside the format specifier there are:

  - plain characters
  - converion specifiers,begin with %.

- conversion specifier %! -> means to flush the output buffer. -> output is buffered , meaning that it doesnt all happend at once or right away.
- Flushing the buffer ensures that anything still sitting in the buffer gets output immediately. This specifier is special in the sense that it doesn't actually need another argument to printf.

- Another very useful variant of printf -> sprintf , which collects the output in string instead of printing it:

```ocaml
let string_of_stat name num = 
    Printf.printf "%s: %F" name num 
```

