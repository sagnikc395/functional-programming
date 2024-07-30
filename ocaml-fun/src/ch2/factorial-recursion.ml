(*factorial function in ocaml *)

let rec fact n = if n = 0 then 1 else n *fact(n-1)

let () =
  print_endline(string_of_int(fact 5))
