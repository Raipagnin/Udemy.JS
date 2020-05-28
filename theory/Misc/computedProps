The sintax is [], where u can use it directly inside when defining an object to create/add/modify your object
let's say i have a few variables and i want to connect them in a object, like:
>> const role = 'host'
>> const person = 'Jools Holland'
>> const role2 = 'director'
>> const person2 = 'James Cameron'
connecting
>> const team = {};
>> team[role] = person;
>> team[role2] = person2;
This way I've created an object which has the key role to person, printing:
>> team
>> {
    host : 'Jools Holland',
    director : 'James Cameron'
}
Now with computed properties u can do it at once: 
>> const team = {
    [role] : person,
    [role2] : person2
}
this way u get the exact same object response on the console
>> team
>> {
    host : 'Jools Holland',
    director : 'James Cameron'
}
U can also add new info as creating this new object
>> const team = {
    [role] : person,
    [role2] : person2
    [1 + 5 + 4] : 'ten'
}
>> team
>> {
    host : 'Jools Holland',
    director : 'James Cameron',
    10 : 'ten'
}
let's try another example where we create a function that accepts and object and returns this object with extra/modified properties
ATTENTION this is not with computed props:
>> function addProp (obj, k, val) {
    const copy = {...obj}       //easiest way to copy 
    copy[k] = v;
    return copy;
}
>> const res = addProp(team, 'happy', ':D')
>> res
>> >> {
    host : 'Jools Holland',
    director : 'James Cameron',
    10 : 'ten',
    happy : ':D'
}
Now with computed props:
>> const addProp = (obj, k, v) => {
    return {
        ...obj, 
        [k] : v     //used a function arrow this time, to return an obj (spread it) and a computed [] key that will add the value
    }
}
remember u can always do it implicitly and do not use 'return' but for this purpose is good in order to understand when reading it again
