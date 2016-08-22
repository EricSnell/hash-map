'use strict'
/* Write an algorithm to check whether any permutation of a string is a palindrome (a string which reads the same forwards and backwards). For example, "madam", "amadm" and "cllci" should all return true, whereas "caabl" and "aaxxis" should return false. */
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
demo('o') 	// true	
demo('ppp')		// true
demo('pppaaa')	// false
demo('popopddplll')	// true
demo(Array(50).join())  // true


/* Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]. */

let anagrams = (array) => {
	let anagramMap = {};
	let outputArr = [];
	for (var i = 0; i < array.length; i++) {
		console.log(array[i]);
		let sorted = array[i].split('').sort().join('');

		if (!anagramMap[sorted]) {
			anagramMap[sorted] = [array[i]]
		} else{
			anagramMap[sorted].push(array[i])
		}
	}

	for (var key in anagramMap) {
		outputArr.push(anagramMap[key]);
	}

	return outputArr;
}

console.log(anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));


/* Write a hash map implementation which uses separate chaining. */
