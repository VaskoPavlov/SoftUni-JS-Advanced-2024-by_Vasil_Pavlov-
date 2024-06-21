/**
 * Task: Write a function that takes a deck of cards as an array of strings and prints 
 * them as a sequence of cards (space separated). Use the solution from the previous task 
 * to generate the cards. 
Print `Invalid card: ${card}` when an invalid card definition is passed as input. 

Input / Output
The function takes an array of strings as a parameter. Print the list of cards as string, 
separated by space.
deckOfCards.js
function printDeckOfCards(cards) {
  function createCard (){
     // Use the solution from the previous task 
  }
    // TODO
}
Examples
Sample Input	            Sample Output
['AS', '10D', 'KH', '2C']	A♠ 10♦ K♥ 2♣
['5S', '3D', 'QD', '1C']	Invalid card: 1C
 */
/**
 * @param {string[]} cards 
 */
function printDeckOfCards(cards) {
    const suits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' };

    // Create a helper function to check if a face is valid
    function isValidFace(face) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        return validFaces.includes(face);
    }

    // Create a helper function to check if a suit is valid
    function isValidSuit(suit) {
        const validSuits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' };
        return validSuits.hasOwnProperty(suit);
    }

    // Initialize an empty result array to store card representations
    const result = [];

    // Loop through each card in the input array
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];

        // Extract the face and suit from the card string
        const face = card.slice(0, -1);
        const suit = card.slice(-1);

        // Check if the face and suit are valid
        if (!isValidFace(face) || !isValidSuit(suit)) {
            // If invalid, push the error message to the result array
            result.push(`Invalid card: ${card}`);
        } else {
            // If valid, push the card representation to the result array
            result.push(face + suits[suit]);
        }
    }

    // Join the result array with space and print the cards
    console.log(result.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);