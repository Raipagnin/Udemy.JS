just as it says... 
>> const raceResults = [
    'Jon Jones',
    'Tim Smith',
    'Liam Brian',
    'Fergus Mcdowel',
    'Oli Oliver',
    'Michael Michaels'
];
 regular way we do it for ex if we wanted the top 3
>> const gold = raceResults[0]
>> const silver = raceResults[1]
>> const bronze = raceResults[2]
Now destructuring
>> const [gold, silver, bronze] = raceResults;
It follows the order inside raceResults... ORDER MATTERS
now let's say u want the 1st and the 4th and skip the other 
>> const [first, , , fourth] = raceResults      //that's right, u add commas, such a mess...
>> const [winner, ...others] = raceResults
>> winner 
>> 'Jon Jones'
>> others
>> (5) ['Tim Smith', 'Liam Brian', 'Fergus Mcdowel', 'Oli Oliver', 'Michael Michaels']
>> const [winner, , ...others] // i'd be skipping the 2nd and it wouldn't be in any array

NOW WITH OBJECTS = in a array we use position, index... on objects we use based on the name of the property
>> const runner {
    first : 'Jon',
    last : 'Jones',
    country : 'USA', 
    title : 'American dream'
}
>> const {first, country} = runner      // in this case order doesn't matter, just the name of the property
>> const {country : nation} = runner    // i'm creating a variable called nation that has the value of key country, so
>> nation
>> USA
>> const {country : nation, title : honorific} = runner     //u can add more than 1
>> honorific 
>> 'American dream'

NOW IN NESTED ARRAYS

>> const results = [{
    first : 'Eliud',
    last : 'Kipchoge',
    country : 'Kenya'
},
{
    first : 'Feyisa',
    last : 'Lilesa',
    country : 'Ethiopia'
},
{
    first : 'Galen',
    last : 'Rupp',
    country : 'USA'
}
]
if i wanted the country of the second object (Ethiopia)
>> const [, {country}] = results;       //the comma is to skip the first object
I can add more than one
>> const [{first: goldWinner}, {country}] = results     //created a new variable called goldWinner with the 1st name in the 1st object
>> goldWinner
>> 'Eliud'
>> country
>> Ethiopia     // even though is property inside an object, but also created a new variable called country

DESTRUCTURING INSIDE A FUNCTION = PARAM DESTRUCTURING
>> const runner = {
    first : 'Eliud',
    last : 'Kipchoge',
    country : 'Kenya'
    title : 'Golden Heart Of Kenya'
},
let's say i wanna a function that will give me full name plus title, skipping country
>> function print (person) {
    const {first, last, title} = person,
    console.log(`${first} ${last}, ${title}`)
}
We can make it shorter:
>> function print({first, last, title}) {
    console.log(`${first} ${last}, ${title}`)
}

