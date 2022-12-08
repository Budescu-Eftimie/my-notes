// Count Change	        Cards
//     +1	         2, 3, 4, 5, 6
//      0	         7, 8, 9
//     -1	         10, 'J', 'Q', 'K', 'A'

let count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) return count + " " + "Bet";
    if (count < 1) return count + " " + "Hold";
}

console.log(cc(10));
console.log(cc("J"));
console.log(cc("Q"));
console.log(cc("K"));
console.log(cc("A"));
