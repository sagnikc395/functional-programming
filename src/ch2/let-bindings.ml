let x = 42 in
(* y is not meaning here *)
  x + (let y = "3110" in
    (* y is meeaningful here*)
    int_of_string y)

  (* possible to have overlapping bindings of the same name  *)
let x = 5 in
  ((let x = 6 in x) + x)
