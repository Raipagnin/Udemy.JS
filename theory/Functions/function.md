It's a chunk of code that we define in order to use it once, or more times. In a way the methods we use to run any language they are functions. So for ex .toUpperCase(), is a built in "function" that we call it to make its job which is to put a string all in CAPS... In a useful way you can have for example a math equation that you're gonna use it a couple of times, or need to call it... it's easier to have it already this chunk of code written and defined and just "call" it than actually have to write it down every single time that u need it.
function on a die roll
>> function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled ${roll}`);
}
>> Rolled x
Let's say u wanna roll more than one... like yatzee:
>> function throwDice() {
   rollDie()
   rollDie()
   rollDie()
   rollDie()
   rollDie()
   rollDie()   # of course u can put it in a loop, but this way it's more clear to understand now
}
ARGUMENTS - when u want to change/customize an outcome of a function, like for ex creating a function to calculate avg, so when u call it, it will give specific and different outcomes depending on the data you input. in the sintax you put the arguments inside the () technically called parameters.Parameter is when u define (like numrolls) and the arument will be the value inside () that you will put in the console or where you're gonna run it...
>> function throwDice(numRolls) {
    for (let i = 0; i <numRolls; i++) {
        rollDie();
    }
}
then on the console u type throwDice() and inside the () put the number u wish to roll

MULTIPLE ARGUMENTS/PARAMETERS: ORDER MATTERS!!!!
Second, the function will do it's job even if you don't fill it correctly with the arguments, ex:
>> function divide(a, b) {
    console.log(a / b);
}
>> divide(5)
>> undefined        # a will be 5 and then b will be undefined, so the computer reads 5 / undefined
>> divide('s', 4)
>> NaN              #as well, the function doesn't know if it's an int, float, str the type to be used, it will run anyway
>> divide(1, 4)
>> 0.25
>> divide(4, 1)
>> 4                #order matters!

RETURN = so console.log is pretty much to print on screen, because he wasn't teaching already inside html, script, a web page per say he was using cosole.log a lot, but normally you use it when u wanna debug or just show something. Normally we use it return in order to store a value and be able to use it later.
Some rules for return >> only one value! you can get a string containing for example x, y and the sum, but it will be only one string returned. You can't get like x, and y, plus a string.
>> function sqr(x) {
    return x * x;
    console.log('ALL DONE');
}
>>sqr (4)
>> 16
JS will read just the return and be done with the whole function, thus, not printing console.log
