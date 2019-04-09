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
	constructor(number, suit, value, suitSymbol) {
		this.number = number;
		this.suit = suit;
			//if statement for emojis
		this.value = value;
		this.suitSymbol = suitSymbol;
	}
}

class Deck {
	constructor() {
		this.deck = [];
		const suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
		const number = ['2' ,'3', '4', '5', '6', '7', '8','9', '10', 'Jack', 'Queen', 'King', 'Ace'];
		// const value == 2 -- 14

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

	// dealDeck () {

	// 	// deal to player 1
	// 	for(let i = 0; i < 25; i++){
	// 		player1Deck.push(d[i]);	
	// 		console.log(player1Deck);		
	// 	}
	// 	// deal to player 2 using another separate for loop 
	// 	for(let j = 26; i < 52; j++){
	// 		player2Deck.push(d[j]);
	// 		console.log(player2Deck);
	// 	}
	// }
}



const d = new Deck();

//console.log(d.deck);

d.shuffle(d.deck);

//console.log(d.deck);

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
	startGame() {
		if(game.gameOn === false){
			game.gameOn = true
		}
	},
	dealDeck () {

		// deal to player 1
		for(let i = 0; i < 25; i++){
			player1Deck.push(d[i]);	
			console.log(player1Deck);		
		}
		// deal to player 2 using another separate for loop 
		for(let j = 26; i < 52; j++){
			player2Deck.push(d[j]);
			console.log(player2Deck);
		}
	}

//moves card from game.player1Deck to game.player1Card
	// playCard() {
	// 	game.player1Card.push(player1Deck[0])
	// 	game.player2Card.push(player2Deck[0])

	// },

	// checkHandWinner(){
	// 	if(game.player1Card > game.player2Card){

	// 	}else if(game.player1Card < game.player2Card){


	// 	}else if(game.player1Card == game.player2Card){

	// 	}
	// },
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

