## Data and Types

- OCaml's built-in data types, including lists, variants, records, tuples and options. Many of those are likely to feel familiar from other programming languages:

  - like lists and tuples -> might feel like Python
  - records and variants -> might feel similar to structs and enum types from C or Java.

- Since they are present in many programming languages, we call them as standard data types.
- Another important part is pattern matching in OCaml.

- More datatypes that are found in OCaml and less likely to be found in other mainstream programming languages :
  - options -> loosely translated to null in Java.
  - association lists -> which are amazingly simple implementation of maps (aka dictionaries) based on lists and tupels
  - Algebraic Data Types -> most important type in OCaml and indeed are the power behind many of the other built-in types
  - Exceptions -> special kind of algebraic data type.

### Lists

- List is a sequence of values all of which have the same type.
- They are implemented as singly-linked-lists.
- These lists enjoy a first-class status in the language: there is a special support for easily creating and working with lists.

#### Building Lists:

- Empty list written as [] and pronounced nil.
- Given a list lst and element elt, we can prepend elt to lst by writing elt :: lst .
- Double colon operator is pronounced "cons".
- Cons can also be used as a verb.
- First element of a list is usually called its head and the rest of the elements(if any) are called its tail.
- Square bracket is convinient but unnecessary. They can easily be written with the more primitive nil and cons syntax: e1 :: e2 :: .... :: en :: [].
- When a pleasent syntax can be defined in terms of a more primitive syntax within the language, we call the pleasent syntax as syntactic sugar :- it makes the language "sweeter".

- Since the elements of the list can be arbitary expressions, lists can be nested as deeply as we like :

```ocaml
[[[]]]; [[1;2;3]]
```

- if e1 ==> v1, and if e2 ==> v2 , then e1 :: e2 ==> v1 :: v2.
- if e1 ==> v1 for all i in 1..n,then [e1;...;en] ==> [v1;...;vn]

- The word list itself here is not a type: there is no way to build an OCaml value that has type simply list. rather list is a type constructor: given a type,it produces a new type.
- Type constructors are like functions that operate on types, instead of functions that operate on values.

- Empty list is a list whose elements have an unknown type. If we cons an inst onto it, say 2:: [] , then the compiler infers that for that particular list, 'a must be int.
- But if in another place we cons a bool onto it, say true :: [], then the compiler infers that for that particular list, 'a must be a bool.
