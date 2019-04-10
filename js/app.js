//- - - - - - - - - - - - - - - - - - - - - CLASSES

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

			for(let i = array.length -1; i > 0; i -= 1) {
				j = Math.floor(Math.random() * (i + 1));
				temp = array [i];
				array[i] = array[j];
				array[j] = temp;
			}
			return array;
	}	
}

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
			this.fillGameDeck(gameDeck.deck)
			console.log(this.shuffledDeck, ' This is the shuffledDeck');
			this.dealDeck(this.shuffledDeck)
		}
	},
	fillGameDeck(array) {
		for(let i = 0; i < this.array.length; i++) {
			this.shuffledDeck.push(array[i])
		}
	},
	dealDeck (array) {
		for(let i = 0; i < this.array.length - 1; i + 2){
			this.player1Deck.push(array[i])
			this.player2Deck.push(array[i + 1])
			array.splice(i, 1)
			array.splice(i + 1, 1)
			console.log(this.player1Deck, ' This is player 1');
			console.log(this.player2Deck, ' This is player 2');
		}
	},


//moves card from game.player1Deck to game.player1Card
	playCard() {
		this.player1Card = this.player1Deck[0]
		console.log(player1Card + 'this is player1Card')
		this.player1Card.unshift(this.player1Deck[0])
		this.player2Card.unshift(this.player2Deck[0])
		console.log(this.player1Card);
 	},
 

	checkHandWinner() {
	 	if(this.player1Card.value > this.player2Card.value){
			this.player1Score = (this.player1Score += 2)
			this.player1Deck.push(this.player1Card)
			this.player1Deck.push(this.player2Card)

		}else if(player1Card.value < player2Card.value){
			this.player2Score = (this.player2Score += 2)
			this.player2Deck.push(this.player1Card)
			this.player2Deck.push(this.player2Card)

	 	}else{
	 		this.player1Score = (this.player1Score += 1)
	 		this.player1Deck.push(player1Card)
	 		this.player2Score = (this.player2Score += 1)
	 		this.player2Deck.push(this.player2Card)
	 	}
	},
	declareWinner(){
		if(this.player1Deck == 0 || this.player2Deck == 0){

		}
 
	},

}


//- - - - - - - - - - - - - - - - - - - - - LISTENERS

$('#begin-btn').on('click', () => {
	game.startGame()
});

$('.player1Deck').on('click', () => {

});

$('.player2Deck').on('click', () => {

});





// // values
// // beats -- verify -- sanity check
// // game play with divs
// 	//
// 	//
// 	//
// // win and lose 
// // consider adding W-A-R-Go
// // images

