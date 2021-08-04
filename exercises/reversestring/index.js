// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const reversedArray = [];
    const stringArray = [...str];
    stringArray.slice().reverse()
    .forEach(item => {
        reversedArray.push(item);
        });
        return reversedArray.join("");
}

// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join();
// }

module.exports = reverse;
