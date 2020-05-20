//using the previous exercise find a way to create new decks withint this obj, but only using basics of 'this' learned so far
// const myDeck = {
//     deck: [],
//     drawnCards: [],
//     suits: ['hearts', 'spades', 'diamonds', 'clubs'],
//     values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//     startDeck() {
//         const{suits, values, deck} = this; //destructuring 
//         for(let value of values.split(',')) {
//             for(let suit of suits) {
//                 deck.push({
//                     value,
//                     suit
//                 })
//             }

//         }
//     },
//     drawCard() {
//         const card = this.deck.pop();
//         this.drawnCards.push(card);
//         return card;
//     },
//     drawMultiple(numCards) {
//         const cards = [];
//         for (let i = 0; i < numCards; i++) {
//             cards.push(this.drawCard());
//         }
//         return cards
//     },
//     shuffle() {                         
//         const {deck} = this;
//         //loop over array backwards
//          for(let i = deck.length - 1; i > 0; i--) {
//             //pick random index before current element
//             let j = Math.floor(Math.random() * (i + 1));
//             //swap
//             [deck[i], deck[j]] = [deck[j], deck[i]];
//         }
//     }
// }
//our previous exercise above and starting with a new const for the making of new decks with a arrow function and our whole exercise 
//inside it being returned.
const makeDeck = () => {
    return {        //you can do it implicitly, taking return and adding ()
        deck: [],
        drawnCards: [],
        suits: ['hearts', 'spades', 'diamonds', 'clubs'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        startDeck() {
            const{suits, values, deck} = this; //destructuring 
            for(let value of values.split(',')) {
                for(let suit of suits) {
                    deck.push({
                        value,
                        suit
                    })
                }
    
            }
        },
        drawCard() {
            const card = this.deck.pop();
            this.drawnCards.push(card);
            return card;
        },
        drawMultiple(numCards) {
            const cards = [];
            for (let i = 0; i < numCards; i++) {
                cards.push(this.drawCard());
            }
            return cards
        },
        shuffle() {                         
            const {deck} = this;
            //loop over array backwards
             for(let i = deck.length - 1; i > 0; i--) {
                //pick random index before current element
                let j = Math.floor(Math.random() * (i + 1));
                //swap
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        }
    }
}
//creating one
const myDeck = makeDeck();
myDeck.startDeck();
myDeck.shuffle();
const hand1 = myDeck.drawMultiple(2);
const hand2 = myDeck.drawMultiple(3);
const hand3 = myDeck.drawMultiple(5);
// another one
const deck2 = makeDeck();
myDeck.startDeck();
myDeck.shuffle();
//if you check on the console mydeck and deck2 u can see different ones
//again, not the best way of doing it, but to the proposed exercise it works
