FOR = 'for' loops are limited ones, since u have to know what's the running condition for the loop. ex: If u wanna say 'hello!' 10 times (SO U KNOW up till when this loop will run)
>> for(let i = 1; i <= 10; i++>) {
    console.log(i);
}
Now in this ex above, u have a variable(i = 1), then u put the condition which is till i reaches 10, then you will run console.log with the counter i++ (adding a number after the other), if u wanted to show every 3, then:
>> for (let i = 1; i <= 10; i+=3) {
    console.log(i)
}
>> 1
>> 4
>> 7
>> 10 # after 10 it would be 13 but we've reached our condition limit which is <= 10
so. ex:
>> for(let i = 1; i <=10; i++) {
    console.log('Hello!', i);
}
>> Hello! 1
>> Hello! 2
>> Hello! 3
>> Hello! 4
>> Hello! 5
>> Hello! 6
>> Hello! 7
>> Hello! 8
>> Hello! 9
>> Hello! 10
Then reached i <= 10 and stops
U can also go negative, backwards, like i = 200, i >= 0, i -= 25 
>> for (let i = 200; i >= 0; i -= 25) {
    console.log(i)
}
>> 200
>> 175
>> 150
>> 125
>> 100
>> 75
>> 50
>> 25
>> 0

FOR in ARRAYS = 
>> const students = [
    {
        firstName: 'Art',
        grade: 86
    },
    {
        firstName: 'Joe',
        grade: 97
    },
    {
        firstName: 'Pam',
        grade: 90
    }
]
>> for (let i = 0; i < students.length; i++) {
    let studentinfo = students[i];
    console.log(`${studentinfo.firstName} scored ${studentinfo.grade}`);
}
I've created the studentinfo because if I had printed students[i] i'd print every element inside the arrays, which would give me the name + grade together. In this case I want to print a more elaborated print of Name has scored grade, so i can take every element inside the OBJECT and not the complete element inside the ARRAY
If i didn't have created studentinfo, i could do it in a longer way
Let's do an average:

>> let total = 0
>> for (let i = 0; i < students.length; i++) {
    let studentinfo = students[i];
    let total += studentinfo.grade  #just like python, create a variable outside = 0, don't put in the loop otherwise it will always 
    console.log(total / students.length);     # be 0, make it change at every single turn of the loop 
}
WHILE = let's compare with a FOR to read 1-5 numbers
>> for (let i = 0; i <= 10; i++) {
    console.log(i);
}
>> let i = 0
>> while (i <= 10){
    console.log(i)
    i++
}
NOT THE BEST WAY TO DO IT, PUT A VARIABLE OUTSIDE STARTING WITH 0... LET'S LEARN BREAK IN A SEC
Just like amazing python, 'while' loop is good for when u don't know the limit, when u don't have a range. the sintax may be different but still u use "while true", "while not true" to follow a condition.
A good example of While loop:

>>const target = Math.floor(Math.random() * 10); # remember how to random a number on JS? math.random gives u a decimal from 0 to 0,9
>> let guess = Math.floor(Math.random() * 10);   # *10 to transform into an integer 0-10 in this case, and floor it so it wont be float
>>while(guess !== target) {
    console.log(guess)
    guess = Math.floor(Math.random() * 10);
}
>> console.log(`Target: ${target} and Guess ${guess}`)

It can happen rlly fast in a few tries, and as well hundreds

BREAK = the best one... so trying to do the example above

>> const target = Math.floor(Math.random() * 10); 
>> let guess = Math.floor(Math.random() * 10);
>> while(true) {
    if (target === guess) break;
    guess = Math.floor(Math.random() * 10);
}
>> console.log(`Target: ${target} and Guess ${guess}`)

Even though it's simple and in short lines, normally it's not other's favourite because is easy to make infinite loops, and it's nor that informational, so for other ppl to read it and get the logic straight away, might not be best to do it

FOR .. OF = easier, newer way to get access to elements inside an array for ex...

>>let subreddits = ['soccer', 'books', 'aita', 'secret', 'cringe'];
>> for(let i = 0; i < subreddits.length; i++) {
    console.log(subreddits[i]);
} and this will return every single inside item with the index... but let's say u just wants the element inside and not index

>> let subreddits = ['soccer', 'books', 'aita', 'secret', 'cringe'];
>> for(let sub of subreddits) {
    console.log(sub);
} # this way you will just have the inside elements. See that i have created a variable sub just for the elements within and not the full array
You can use for example to "read" a string for you... no index attached

>> for (let char of 'cook'){
    console.log(char.toUpperCase());
}
>> C
>> O
>> O
>> K

Now let's say u have to arrays and u want to correlate them, so in this case it would be best to use the traditional FOR, since u will want the index with it, whilst FOR ..OF would need extra like indexOf.
And towards object??? Good Lord, so objects are not iterable, so u can't rlly use FOR and length, or FOR...OF EXCEPT when u use the method Object.keys() and Object.values() which is pretty much just for looping.

FOR ... IN = easier then OF when accessing the keys in a object, this way u don't actually need the method Obejct.keys(). ex:
>> const colors = {
    green: 30f,
    red: 31g,
    blue: 32m,
    grey: 37i
};
>> for (let info in colors) {
    console.log(info);
}
>> green
>> red
>> blue
>> grey    # access to the keys
If i wanted the values, then:
>> for (let info in colors) {
    console.log(info);
    console.log(colors[info]); # to get the values pertaining the keys = info
}
IN a way arrays are also objects, so you can use as well FOR...IN with arrays, even though is not recommended 
