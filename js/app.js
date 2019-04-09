//- - - - - - - - - - - - - - - - - - - - - CLASSES
// class Player {
// 	constructor() {
// 		name: name 
// 		hand: [Card]
// 		deck: []
// 		score: 0
// 	}
// }

class Card {
	constructor(number, suit) {
		this.number = number;
		this.suit = suit;
	}
}

class Deck {
	constructor() {
		this.deck = [];

		const suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
		const number = ['2' ,'3', '4', '5', '6', '7', '8','9', '10', 'Jack', 'Queen', 'King', 'Ace'];
		
		for(let j = 0; j < number.length; j++) {
			for(let i = 0; i < suit.length; i++) {
					const newCard = new Card(number[j], suit[i])
					this.deck.push(newCard);
			}
		}
	}

	shuffle = (array) => {
		let i = array.length
		let j = 0
		let temp = null

			for (let i = array.length - 1; i > 0; i -= 1) {
				j = Math.floor(Math.random() * (i +1));
				temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}	
			return array;
	}

	dealDeck() {
		for(let i = 0; i < 25; i++){
			for(let j = 26; i < 52; j++)
			player1Deck.push(d[i]);

			player2Deck.push(d[j]);
			}
		}

	}



const d = new Deck();

console.log(d.deck);

d.shuffle(d.deck);

console.log(d.deck);

//- - - - - - - - - - - - - - - - - - - - - GAME
const game = {
	gameOn: false,
	player1Card: [].
	player2Card: [],
	player1Deck: [],
	player2Deck: [],
	player1Score: 0,
	player2Score: 0,
	turnNumber: 0,
	startGame() {
		if(game.gameOn === false){
			game.gameOn = true
		}
	}
		checkWinner(){

		}
	}



//- - - - - - - - - - - - - - - - - - - - - LISTENERS
$('#begin-btn').on('click', () => {
	game.startGame()
});

$('.player1Deck').on('click', () => {

});

$('.player2').on('click', () => {

});







