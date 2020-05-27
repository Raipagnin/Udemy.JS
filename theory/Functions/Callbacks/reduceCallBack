REDUCE = takes an array of values and reduces it to a single value
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

CallBack            accumulator         currentValue            returnValue
1st call                3                     5                      8
2nd call                8                     7                      15
3rd call               15                     9                      24
4th call               24                    11                      35

another example:
>> const nums = [3, 4, 5, 6, 7]
>>const product = nums.reduce((total, curValue) => {
    return total * curValue;
});
>> product 
>> 2520
You don't need to use it just for adding, u can use for lots of other different stuff, like finding the highest value in an array or the opposite:
>> const nums = [87, 64, 98, 78, 56, 41, 91]
>> const maxValue = nums.reduce((max, currentValue) => {
    if (currentValue > max) return currentValue;
    return max;
});
>>maxValue
>> 98
Of course there are other ways to do it, it's just an example, there are also many libs... like Math.max
>> const maxValue = nums.reduce((max, currentValue) => {
    return Math.max(max, currentValue);
}
You can also do the opposite with minimal, and use Math.min(), etc etc
ALSO, you can use a starting value with reduce.
>> const sum = [10, 20, 30, 40, 50].reduce((sum, curVal) => {
    return sum + curVal;
});
>> sum
>> 150
NOW:
>> const sum = [10, 20, 30, 40, 50].reduce((sum, curVal) => {
    return sum + curVal;
}, 100);        //note that after defining the call back >> ,100... that's the initial value to start
>> sum
>> 250

TALLYING = 
>>const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'y', 'n', 'y', 'n', 'n']
>> const voting = votes.reduce((tally, value) => {
    if (tally[value]) {
        tally[value] ++
    } else {
        tally[value] = 1
    }
    return tally;
}, {})
So you start with an empty {}, starting with undefined || 0, so tally being zero, if it encounters y, is gonna add 1 more to it... but because it's zero the first time for both y and n, it's gonna become 1 (goona run 'else'), then goes back to next tally which is also y, so it's gonna run this time the add ++, so y:2... then comes next tally n, which ill not run ++, and what was undefined || 0, is gonna become = 1 (gonna run else), from there on is gonna continue adding to y or n
now in a one line way:
>> const voting = votes.reduce((tally, value) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
})
Which pretty much shows in one line that, if the value of tally is either 1 or 0, add one more and return this value
