(** [even n] is whether [n] is even.
Requires: [n>=0].*)
let rec even n =
  n = 0 || odd (n-1)

(** [odd n] is whether [n] is odd.
Requires: [n>=0].*)
and odd n =
  n != 0 && even (n-1);;

let () =
  print_endline (string_of_bool(even 124)) in
  print_endline (string_of_bool(odd 245))
