'use strict'
/* Write an algorithm to check whether any permutation of a string is a palindrome (a string which reads the same forwards and backwards). For example, "mad", "amadm" and "cllci" should all return true, whereas "caabl" and "aaxxis" should return false. */
let palinCheck = (string) => {
	let anticipatedMatches = string.length
	let matches = 0
	if (string.length % 2 !== 0) {
		anticipatedMatches = anticipatedMatches - 1;
	}
	anticipatedMatches = anticipatedMatches / 2
	for (var i = 0; i < string.length; i++) {
		for (var j = i + 1; j < string.length; j++) {
			if (string[i] === string[j]) {
				string = string.substring(0, j) + string.substring(j + 1, string.length)
				matches++
				break
			}
		}
	}
	console.log(anticipatedMatches, '<-- anticipatedMatches', matches, '<-- matches')
	return matches === anticipatedMatches
}

function demo(str) {
	console.log(str, palinCheck(str) ? "is palindromable" : "is not palindromable");
}
demo('o')
demo('ppp')
demo('pppaaa')
demo('popopooplll')

/* Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]. */
/* Write a hash map implementation which uses separate chaining. */
