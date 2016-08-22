'use strict'
var HashMap = require('./hash-exercise');
/* Write an algorithm to check whether any permutation of a string is a palindrome (a string which reads the same forwards and backwards). For example, "madam", "amadm" and "cllci" should all return true, whereas "caabl" and "aaxxis" should return false. */
let palinCheck = (string) => {
	let antMatches = string.length
	let matches = 0
	if (string.length % 2 !== 0) {
		antMatches = antMatches - 1;
	}
	antMatches = antMatches / 2
	for (var i = 0; i < string.length; i++) {
		for (var j = i + 1; j < string.length; j++) {
			if (string[i] === string[j]) {
				string = string.substring(0, j) + string.substring(j + 1, string.length)
				matches++
				break
			}
		}
	}
	console.log(antMatches + ' | ' + matches + ' (antMatches | matches)')
	return matches === antMatches
}

function demo(str) {
	console.log(str, palinCheck(str) ? "is palindromable" : "is not palindromable");
}

demo('o') 	// true	
demo('ppp')		// true
demo('pppaaa')	// false
demo('popopddplll')	// true
demo(Array(20).join())  // true


/* Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']]. */

let anagrams = (array) => {
	let anagramMap = new HashMap()
	let outputArr = []
	for (var i = 0; i < array.length; i++) {
		let sorted = array[i].split('').sort().join('')

		try {
			anagramMap.get(sorted).push(array[i])
		}
		catch (e) {
			anagramMap.set(sorted, [array[i]])
		}
	}
	let mapArr = anagramMap._slots
	for (var slot in mapArr) {
		if (slot) {
			outputArr.push(anagramMap._slots[slot].value)
		} 
	}
	return outputArr
}

console.log(anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))


/* Write a hash map implementation which uses separate chaining. */
