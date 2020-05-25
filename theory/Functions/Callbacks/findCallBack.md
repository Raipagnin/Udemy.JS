FIND = it's boolean and does pretty much what it says, it will find inside an array an element according with the function called back
>>let movies = [
    " The fantastic Mr. Fox",
    "Mr. and Mrs. Smith,
    "Mrs. Doubtfire",
    "Mr. Deeds"
>>]
>> const movie = movies.find(movie => {
    return movie.includes('Mrs.');
})
>>movie
>>"Mr. and Mrs. Smith"      //it will give only the first answer, even if there's more
It's used a lot, but remember that only gives you the first match.
