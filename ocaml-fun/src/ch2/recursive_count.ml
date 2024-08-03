(* 
count from 1 to n recursively
*)
let rec count n =
  if n = 0 then 0 else 1 + count(n-1)

let () =
  print_endline (string_of_int (count 10));
  print_endline (string_of_int (count 100_000));