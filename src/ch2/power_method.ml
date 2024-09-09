let rec pow x y = if y = 0 then 1 else x * pow x (y-1)

let () =
  print_endline(string_of_int(pow 2 4))
