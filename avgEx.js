//Write a function to calculate the average in a array of numbers
//avg([0,50])//25
//avg([75,76,80,95,100])//85.2
//keep in check that only using basics of arrays and functions

//we can loop it to add all the nums inside the array and then divide by it's length
function avg(arr) {
    total = 0;
    for(let n of arr) {
        total += n;
    }
    let result = total / arr.length; //u can return without the variable result (unless you wanna use it later)
}
