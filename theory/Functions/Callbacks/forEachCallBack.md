ARRAY CALLBACK METHODS = 
A FEW OF THEM:forEach, map, filter, find, reduce, some, every... A way to use functions in order to collect data by calling back functions with arrays!?!?!
FOREACH = to use with arrays and call a function on every single element of an array
>>const numbers = [1,2,3,4]
>>numbers.forEach(function double(num) {
    console.log(num * 2);
})
>>2
>>4
>>6
>>8
I can have functions without names, functions outside, just like normally and call it back at any time. U can also call index if needed. On the same array up here ^
>>numbers.forEach(function(num, idx) {
    console.log(idx, num)
})
>> 0 1
>> 1 2
>> 2 3
>> 3 4
