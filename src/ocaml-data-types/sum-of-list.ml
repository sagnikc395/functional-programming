let rec sum lst = 
  match lst with 
  | [] -> 0 
  q| h :: t -> h + sum t 

let () =
  Printf.printf (sum [[1::2::3::4::5]])

