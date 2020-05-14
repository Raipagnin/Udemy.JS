MAP = Creates a new array out of an existing array working with every element.
>> const numbers = [1, 2, 3, 4]
>> const words = ['hi', 'bruv', 'brb', 'lol']
>> const dbl = numbers.map(function double(num) {        //usually uses an anonymous function, i just wrote double so we can read easily
    return num * 2;
}                                                       //it will return double as espected but it created a new const dbl with an array with the values doubled, but the numbers array still exist.

>>const evenOdd = numbers.map(function(n) {
    return {
        value: n,               //i'm returning an object with {} that has 2 keys and 2 values, so map will run every single element    isEven: n % 2 === 0     // and create a new array with objects, returning the numbers 1, 2, 3, 4 and telling me if it's true
    }                           // or false that they're even
})

now with the str array, i want to take every element and capitalize and split with dot, like 'B.R.U.V'
>> const abrev = words.map(function(w) {
    return w.toUpperCase().split('').join('.');     //in this example i slip the every element on an empty space '', so every letter
})                                                  // will become a different str, and then I join them all with '.' dots
>>abrev
>>(4) ["H.I", "B.R.U.V", "B.R.B", "L.O.L"]
