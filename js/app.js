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
	constructor(number, suit, value) {
		this.number = number;
		this.suit = suit;
		this.value = value;
	}
}

class Deck {
	constructor() {
		this.deck = [];
		const suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
		const number = ['2' ,'3', '4', '5', '6', '7', '8','9', '10', 'Jack', 'Queen', 'King', 'Ace'];

			let x = 0;
			for(let i = 0; i < suit.length; i++) {
				let currentSuit = suit[i]
				for(let j = 0; j < number.length; j++) {
					const newCard = new Card(number[j], currentSuit, (j + 2))
					x++
					this.deck.push(newCard);
				}
			}
		}
		

	shuffle (array) {
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
}



const d = new Deck();

d.shuffle(d.deck);

console.log(d.deck);

//- - - - - - - - - - - - - - - - - - - - - GAME
const game = {
	gameOn: false,
	player1Card: [],
	player2Card: [],
	player1Deck: [],
	player2Deck: [],
	player1Score: 0,
	player2Score: 0,
	turnNumber: 0,
	shuffledDeck: [],
	startGame() {
		if(game.gameOn === false){
			game.gameOn = true
			const gameDeck = new Deck
			gameDeck.shuffle(gameDeck.deck)
			this.shuffledDeck.push(gameDeck)
			this.dealDeck(this.shuffledDeck)
		}
	},
	dealDeck (array) {

		// deal to player 1
		for(let i = 0; i <= array.length - 26; i++){
			this.player1Deck.push(this.shuffledDeck[i]);	
			console.log(this.shuffledDeck[i]);		
		}
		// deal to player 2 using another separate for loop 
		// for(let j = 0; j <= 26; j++){
		// 	this.player2Deck.push(this.shuffledDeck[j]);
		// 	console.log(this.shuffledDeck[j]);
		// }
	},

//moves card from game.player1Deck to game.player1Card
	playCard() {
		this.player1Card.unshift(player1Deck[0])
		this.player2Card.unshift(player2Deck[0])
 	},

	checkHandWinner() {
	 	if(this.player1Card.value > this.player2Card.value){
			this.player1Score = (player1Score += 2)
			this.player1Deck.push(this.player1Card)
			this.player1Deck.push(this.player2Card)

		}else if(this.player1Card.value < this.player2Card.value){
			this.player2Score = (player2Score += 2)
			this.player2Deck.push(this.player1Card)
			this.player2Deck.push(this.player2Card)

	 	}else{
	 		this.player1Score = (player1Score += 1)
	 		this.player1Deck.push(this.player1Card)
	 		this.player2Score = (player2Score += 1)
	 		this.player2Deck.push(this.player2Card)
	 	}
	},
	// declareWinner(){
	// 	// if 
	// }
}



//- - - - - - - - - - - - - - - - - - - - - LISTENERS
$('#begin-btn').on('click', () => {
	game.startGame()
});

$('.player1Deck').on('click', () => {

});

$('.player2').on('click', () => {

});





// values
// beats -- verify -- sanity check
// game play with divs
	//
	//
	//
// win and lose 
// consider adding W-A-R-Go
// images

