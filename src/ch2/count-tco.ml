(*
tail call optimized recusrive calls
*)

let rec count_aux n acc = 
  if n = 0 then acc else count_aux (n - 1) (acc + 1)

let count_r n = count_aux n 0 

let () =
  print_endline (string_of_int (count_r 100_000))

  