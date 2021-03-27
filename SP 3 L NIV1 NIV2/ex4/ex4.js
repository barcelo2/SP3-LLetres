"use strictly";

//GET SURNAME FROM ARR
let nom = ["V", "E", "R", "A"];
let cognom = ["P", "U", "S", "H", "K", "A", "S", "H"];
function merge(arr1, arr2) {
  arr1.push(" ");
  let fullName = arr1.concat(arr2);

  console.log(fullName);
}

merge(["V", "E", "R", "A"], ["P", "U", "S", "H", "K", "A", "S", "H"]);
