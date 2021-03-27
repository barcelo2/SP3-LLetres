"use stictly";
let nom = ["VERA"];

function letters(arr) {
  //convert  to string
  let s = nom.toString().toUpperCase();
  // run the loop
  for (var i = 0; i < s.length; i++) {
    //if contains a number
    if (!isNaN(s.charAt(i))) {
      console.log(`Els noms de persones no contenen el número: ${s.charAt(i)}`);
      //if contains a vowel
    } else if (
      s.charAt(i) == "A" ||
      s.charAt(i) == "E" ||
      s.charAt(i) == "I" ||
      s.charAt(i) == "O" ||
      s.charAt(i) == "U"
    ) {
      console.log(`He trobat la VOCAL: ${s.charAt(i)}`);
    } else {
      console.log(`He trobat la CONSONANT: ${s.charAt(i)}`);
    }
  }
}

letters(["VERA"]);
