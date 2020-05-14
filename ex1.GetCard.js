//write a function playCard(), where u pick from //2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
// pick from a suit// clubs, spades, hearts, diamonds
//  {
//    value: 'K'
//    suit: 'clubs'
//  }
// return a object with both values

function playCard() {
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const idx = Math.floor(Math.random() * values.length);
    const value = values[idx];
   
    let suits = ['clubs', 'diamonds', 'spades', 'hearts'];
    const idxx = Math.floor(Math.random() * suits.length);
    const suit = suits[idxx];
    return {value: value, suit: suit}   //there's a shorter way to write same key and values names
}
// whenever u see in your code that you are repeating lines (for example for the random picking lines), try to shorten it
//and get another function, in this case, just for the random picking part

function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
function pickCard() {
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const value = pick(values);
   
    let suits = ['clubs', 'diamonds', 'spades', 'hearts'];
    const suit = pick(suits);
    return {value: value, suit: suit} 
}
//another way to make it even simpler
function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
function getCard() {
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['clubs', 'diamonds', 'spades', 'hearts'];
    return {value: pick(values), suit: pick(suits)} 
}
