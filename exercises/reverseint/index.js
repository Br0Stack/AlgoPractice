// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const int = n.toString();
    let reversedInt = parseInt(int.split('').reverse().join(''), 10);
    return Math.sign(n) === -1 ? Math.sign(n) * reversedInt : Math.sign(n) * reversedInt;
}

module.exports = reverseInt;
