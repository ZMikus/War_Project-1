//- - - - - - - - - - - - - - - - - - - - - CLASSES
class Player {
	constructor() {
		name: name 
		hand: [Card]
		deck: []
		score: 0
	}
}

class Card {
	constructor(number, suit) {
		this.number = number;
		this.suit = suit;
	}
}

class Deck {
	constructor() {
		this.deck = [];

		const suit = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
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

	splitDeck() {
		for(let i = 0; i < d.length; i += 2){
			player1.deck.push(d[i]);
			player2.deck.push(d[i++]);
			console.log(d[i])
			console.log(d[i++])
		}
	}

	dealCards(){

	}


	beats(){
		if(player1Hand > player2Hand){

		}
	}
	
	
	winner(){
		
	}

	play()
		gameOn = true;

}

const d = new Deck();

console.log(d.deck);

d.shuffle(d.deck);

console.log(d.deck);

//- - - - - - - - - - - - - - - - - - - - - GAME
const game = {
	gameOn: false,
	player1Deck: [],
	player2Deck: [],
	turnNumber: 0,
	startGame() {
		if(this.gameOn === false){
			const player1 = new Player
			const player2 = new Player
		}
	}
}


//- - - - - - - - - - - - - - - - - - - - - LISTENERS

