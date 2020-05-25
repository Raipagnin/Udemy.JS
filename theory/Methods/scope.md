FUNCTION SCOPE = a variable inside the function only exists and can be acessed there.
>> let bird = 'pidgeon'
>> function brd(){
    let bird = 'goose'
}
>> bird
>> "pidgeon"
U can have both variables and outside of the function space/scope have access to pidgeon but not goose

BLOCK SCOPE = block is defined by {} and what's inside as long as it's not an object (like conditionals and loops), it would be for ex:

>> if (true) {
    let animal = rat   //this one only exists inside this block of code, if i call animal without putting this let outside
}                       // i'd have error cause it's not been defined
>> let animal = bull 
>> animal
>> bull

NOTE: if u use var instead of let or const then u can get out of the scope of blocks!!!
