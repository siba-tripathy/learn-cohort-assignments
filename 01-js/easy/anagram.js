/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

console.log(isAnagram("munop", "numo"))
function isAnagram(str1, str2) {
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	let map1 = new Map(); 
	let map2 = new Map();
	/**
	 * Learning: using map1[str[i]] is not the right way, it wont give correct size and element value assignment
	 * always use get and set with Map
	 */
	for (let i=0; i<str1.length; i++) {
		if (map1.get(str1[i]) === undefined) {
			map1.set(str1[i], 1);
		} else {
			map1.set(str1[i], map1.get(str1[i]) + 1);
		}
	}

	for (let i=0; i<str2.length; i++) {
		if (map2.get(str2[i]) === undefined) {
			map2.set(str2[i], 1);
		} else {
			map2.set(str2[i], map2.get(str2[i]) + 1);
		}
	}

	// console.log(map1);
	// console.log(map2);
	// console.log(map1.size);
	// console.log(map2.size);
	if (map1.size !== map2.size) {
		return false;
	}
	/**
	 * Learning: using map2.get(key) gives undefined if that key is not found.
	 * === for equality and !== for inequality check
	 */
	for (let [key, val] of map1) {
		if (map2.get(key) === undefined || val !== map2.get(key)) {
			return false;
		}
	}
	return true;
}

module.exports = isAnagram;
