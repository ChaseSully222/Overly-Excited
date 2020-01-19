// Create an array that contains the words in the sentence
let sentence = [
  "The",
  "walrus",
  "danced",
  "through",
  "the",
  "trees",
  "in",
  "the",
  "light",
  "of",
  "the",
  "moon"
];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray, addChar) {
  // Each time the for loop executes, you're going to add one more word to this string
  let buildMeUp = "";
  console.log(addChar)
  for (let i = 0; i < theWordArray.length; i++) {
   
    // Concatenate the new word onto buildMeUp
    // Print buildMeUp to the console
    currentWord = i + 1
    if (currentWord % 3 === 0){
    buildMeUp = buildMeUp.concat(sentence[i], addChar)
    }
    else {
      buildMeUp = buildMeUp.concat(sentence[i], " ")
    }
    console.log(buildMeUp)
  }
}

// Invoke the function and pass in the array
addExcitement(sentence, "? " );
