//Pangram exercise (a sentence that covers all letter of the alphabet), ex:
//The quick brown fox jumps over the lazy dog
//write a function Pangram that checks if it has all the letters of the alphabet, ignoring casing

function isPangram(sentence) {
    let lowerC = sentence.toLowerCase(); //change char to lower case so includes whatever casing is typed
    for(let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(lowerC.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}
//in another way u could use .includes(), but IE doesn't support it

function pangram(sentence) {
    let lowerC = sentence.toLowerCase(); //change char to lower case so includes whatever casing is typed
    for(let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(!lowerC.includes(char)) {        //because .includes() is boolean you don't need to compare to anything like === -1
            return false;
        }
    }
    return true;
}
