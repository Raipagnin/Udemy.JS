Assim como no python, vc tem os dicionarios, qdo quer colocar blocos de info: key > data
You have a property, inside you have a key and a value. ex:
let alphabet = {
    a: 1, 
    b: 2, 
    c: 3,
}
U can get to this info just using the key. ex:
>> alphabet.a
>> 1
>> alphabet.c
>> 3
but you cannot use it all the time, let's say u do a key that is a number. ex:
>> let alphabet = {
    1: 'one',
    2: 'two', 
    3: 'three' # the last term doesn't need a coma BUT REMEMBER THE FREAKING COMA
}
>> alphabet.2
>> ERROR
Because JS has transformed the number into a string. Another way to use this key. ex:
>> alphabet[2] // alphabet['2']
>> 'two'
You use it when your key has a name that JS would be confused when asked on the console, so ex: if you put a key '76 trombones', 'my cat', the use of spaces, numbers and other values that JS cannot recognise and giving a sintax error. PUT IT IN [].

ADDING/UPDATING
You can do it just like when you wanna view the property, with '='. ex:
>> const userReview = {}
>> userReview['queenBee46'] = 4
>> userReview.mrSmith78 = 3.5
Gonna show both results added to the object. Not just that, if u wanna update them, u can use just like in a variable ++, +=1 etc. ex:
>> userReview['queenBee46'] += 2
>> userReview.mrSmith78 ++
It's gonna update these results, so queenBee was 4, now is 6, and mrSmith was 3.5 now is 4.5

NESTED OBJETCS = The same way u can do it with arrays, u can do it with objetcs. ex:
>> const students = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Arts'], #and array inside a object
    exams: {
        midterm: 92,
        final: 88         # an object inside the object students
    }
}
So let's say u wanna give the average to this student, so:
>> const avg = (students.exams.midterm + students.exams.final) / 2;
>> avg
>> 90

Let's say u wanna access the array inside, for ex 'Arts':
>> students.strengths[1]
>> "Arts"

NESTING OBJECTS IN ARRAYS = Let's say u're gonna go shopping online, and u have a few info u need on something u wanna buy. An array (list on python cause python is amazing and so much more simple) can hold clumps of data (a dictionary just like in python) that on JS are the objects. ex:
>> const shoppcart: [   #brackets are LIST/ARRAY - remember
    {
        product: 'Jenga Classic',
        price: 6.88,                #these are objects (clumps of info) inside the array shoppCart
        quantity: 1
    },
    {
        product: 'Echo Dot', 
        price: 29.99, 
        quantity: 3
    }, 
    {
        product: 'Fire Stick', 
        price: 39.99,
        quantity: 2
    }
]
Just like an array, they're not exactly variables. They're a reference to the info, to the variable created within the object, array. So, normmally that's why it's used 'const' and not let, because u normally don't want to change that object that gives reference to info. Contents/info can come and go, you can update, add, subtract, make it whole different in it's on rule, but for ex const students you don't want to give it a 'let' and give reference to something completely different

EQUALITY ON ARRAYS AND OBJECTS = NOT FREAKING EQUAL. ex:
>> let nums = [1, 2, 3];
>> let mystery = [1, 2, 3];
>> nums === mystery
>> false
>> nums == mystery
>> false
WHY? cause JS wants to screw with me.... So, imagining that an array/object are just giving reference to an value, when u ask nums, in the memory of your computer you're not gonna see the values, but the reference so nums would have like a number 1735382646 to show as an address in memory where you can find the reference that nums is giving you... and the same with mystery that would show a number/address in memory like 64627467859 which is completely !==/!=== than nums. BECAUSE WHAT? CAUSE THEY'RE REFERENCES AND DO NOT STORE THE ACTUAL VALUE
BBBUUUUTTTT.... u can do it like this
>> let moreNums = nums;
This way you're gonna have both nums and moreNums to have the same reference address
>> moreNums === nums
>> true
>> moreNums == nums
>> true
And if u change for ex moreNums, you're going to be changing the value and not reference, therefore, both will be changed
>> moreNums.push(4)
>> morenums
>>(4) [1, 2, 3, 4]
>> nums
>>(4) [1, 2, 3, 4]
therefore, ==/=== just checks for equality of reference and not equality of content