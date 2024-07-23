## OCaml Toplevel

- Toplevel is like a caluclator or CLI to OCaml.

### Types and Values

```ocaml
42 ;;
```

- 42 is the value
- int is the type of the value
- the value was not given a name, hence the symbol -

- can bind values to names with a let definition, as follows:
  ```ocaml
      let x = 42;
      (* or *)
      val x: int  = 42;
  ```
- this is x has a type int and equals 42.

### Functions

- A function can defined using let itself as

```ocaml
let incrementFunc x = x+1;
```

- where increment is the identifier to which the value was bound.
- int -> int is the type of the value. This is the type of functions that take an int as input and produce as int as output.
- value is a function , which the toplevel chooses not to prin (as it has now been compiled and has a repr in memory that isn't easily amenable to pretty printing).
- instead, the toplevel prints \<fun> which is just a placeholder.

```ocaml
let result = incrementFunc 0;

let anotherResult = incrementFunc(incrementFunc 5);
```

- OCaml is flexible about whether we write the parenthesis or not, and whether we write whitespace or not.

### Loading code in the Toplevel

- Toplevel will also accept directives that are not OCaml code but rahter tell the toplevel itself to do something.
- All directives begin with the # character. One of the most common directive is #use, which will load all the code from a file into the toplevel, just as if we havd typed the code from that file into the toplevel.

### Workflow in the Toplevel

1. Edit the code in the file.
2. Load the code in the toplevel with #use.
3. Interactively test the code.
4. Exit the toplevel.
