## Basics of OCaml

- before jumping to the basics of OCaml programming language, there are some essential components to learning a programming language: syntax, semantics, idioms, libraries and tools.

### Semantics ->

- we mean the rules that define the beahviour of programs.
- semantics is about the meaning of a program -> what computation a particular piece of syntax represents.
- although "semantics" is plural in form, we use it as singular.
- 2 pieces of semantics ->

  1. Dynamic Semantics of a language
  2. Static semantics of a language.

- Dynamic semantics define the run-time beahviour of a program as it is executed or evaluated.
- Static semantics define the compile-time checking that is done to ensure that a program is legal, beyond any syntactic requirements.

  - Type checking is one of the most important kind of static semantics -> the rules that define whether a program is well-typed or not.
  - we need to understand semantics to say what we mean to the computer, and we need to say what we mean so that our program performs the right computation.

### Idioms :

- By idioms, we mean the common approached to using language features to express computations.
- Given that we might express one computation in many ways inside a language, which one do we choose ?
- Programmers who are fluent in the language will prefer certain modes of expression over others -> can think of them in terms of dominant paradigms in the language effectively, whether they are imperative , functional and object-oriented.

### Libraries:

- Libraries are bundles of code that have already been written for us and can make us a more productive programmer, since we wont have to write the code ourself.

- Language usually provides a standard library that gives us access to a core set of functionality, much of which we would be unable to code up in the language itself, like file I/O.

### Tools:

- Language implementation provides either a compiler or interpreter as a tool for interacting with the computer using the language.
- But then there are other kinds of tools: debuggers; IDE and analysis tools for things like performance,memory usage and correctness.
