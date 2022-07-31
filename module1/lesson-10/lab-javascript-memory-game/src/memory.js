class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  // shuffleCards() {
  //   // ... write your code here
  //   if (!this.cards) return undefined;
  //     let arrayLength = this.cards.length;
  //     let randomElement;
  //     let lastElement;  
  //   while (arrayLength) {     
  //     randomElement = Math.floor(Math.random() * arrayLength--);  // generate a random index number    
  //     lastElement = this.cards[arrayLength - 1];         
  //     this.cards[arrayLength - 1] = this.cards[randomElement]; //
  //     this.cards[randomElement] = lastElement;
  //   }

    shuffleCards() {
      let copyCards = [...this.cards]; // copy of the cards array
      let shuffled = []; // initialiasing the empty array "shuffled"
      for (let i = 0; i < this.cards.length; i++) {
        let randomIndex = Math.floor(Math.random() * copyCards.length); // generate a random number
        shuffled.push(copyCards[randomIndex]); // adding a random card to the "shuffled" array
        copyCards.splice(randomIndex, 1); // removing the random card from the non-shuffled array
      }

      this.cards = shuffled; // set this.cards to the "shuffled" array
    }
    //ALEJANDRA SOLUTION
    // checkIfPair(card1, card2) {
    //   this.pairsClicked += 1
    //   if(card1 === card2){
    //     this.pairsGuessed += 1
    //     return true
    //   } else {
    //     return false
    //   }
    // }

    // ADAM SOLUTION
    checkIfPair(card1, card2) {
      this.pairsClicked++; 
      if (card1 === card2){
        this.pairsGuessed++;
        return true;
      }
      return false;
    }
  
    checkIfFinished() {
      return this.pairsGuessed === (this.cards.length / 2);
    }
    // PAULINE SOLUTION
    // checkIfPair(card1, card2) {
    //   this.pairsClicked += 1;
    //   if (card1 === card2) {
    //     this.pairsGuessed += 1;
    //     return true;
    //   }
    //   return false;
    // }
  
    // checkIfFinished() {
    //   let numberOfPairs = this.cards.length / 2;
    //   return this.pairsGuessed === numberOfPairs ? true : false;
    // }
}
