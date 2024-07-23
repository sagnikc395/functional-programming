## Compilation in OCaml

- Unlike C or Java, OCaml programs do not need to have a special function names main that is invoked to start the program.

### Dune:

- In larger projects, we dont want to run the compiler or clean up manually. Instead we want to use a build system to automatically find and link the libraries.
- Legacy build system :
  ocamlbuild
- newer build system:
  dune

- similar systems include make, which has long been used in the Unix world.

- Dune project is a directory (and subdir) that contain OCaml code that we want to compile. The root of a project is the highest directory in its hierarchy. A project might rely on external packages providing additional code that is already compiled. Usually , packages are installed with OPAM -> OCaml Package Manager.

### Manually creating a Dune Project

- create a file name dune in the base of the repo and put the data:

```ocaml
(executable
(name hello))
```

- this will declare a executable whose main file is hello.ml

- also crete a file dune-project in the same level and define the version of dune in it.

- run dune build hello.exe ie the executable name ,.exe extension usied on all platforms by Dune , not just on Windows.

- dune will craet \_build dir and compile our program inside it.
- we can also execute the code using dune exec ./hello.exe file
- and to clean use dune clean to clean up all the compiled code.

### Creating a Dune Project Automatically

- in the termianl, we can do dune init \<project-name> to create a new project.

- we can also run dune build --watch , to view the changes. This means dune is running continuously and rebuilding our porject every time we save a file in the editor.
