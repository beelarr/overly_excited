/**
 * Created by beelarr on 7/11/17.
 */

// Create an array that contains the words in the sentence
var sentence = ['The', 'walrus', 'danced', 'through', 'the', 'trees', 'in', 'the', 'light', 'of', 'the', 'moon'];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
   for (let i = 0; i < theWordArray.length; i++){
        let newString = '';
        newString += theWordArray[i]
       console.log(newString)

   }
}

// Invoke the function and pass in the array
addExcitement(sentence)

