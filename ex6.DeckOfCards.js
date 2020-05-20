//a deck of cards with more possibilities, such as shuffling, drawing one and multiples
function makeDeck() {
    const deck = [];
    const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';//could have done an array as well, i'll just have to split on the comma
    for(let value of values.split(',')) {
        for(let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;    //i have done the full deck and have the 52 cards

}
// With this approach you would have to make more variables in order to play it out, as the one below with the use of 'this'
//you can integrate it.
const myDeck = {
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
