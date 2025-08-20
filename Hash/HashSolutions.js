//Class with Hash Problem Solutions
class HashmapSolutions {

    /**
     * Group Anagrams
     *
     * @param {string[]} strs - Array of words
     * @returns {string[][]} - Grouped anagrams
     *
     * Logic:
     * - For each word, sort the characters to create a key
     * - Use the sorted key to group words in a hashmap
     * - Return all values from the hashmap
     */
    static groupAnagrams(strs) {
        //Object to hold grouped anagrams
        const map = {};

        for (let word of strs) {
            //Sort characters to use as key
            const sorted = word.split('').sort().join('');

            //Initialize key if not present
            if (!map[sorted]) {
                map[sorted] = [];
            }

            //Add word to the correct group
            map[sorted].push(word);
        }

        //Return all grouped anagrams
        return Object.values(map);
    } //Time Complexity: O(n * k log k), where n is number of words and k is max word length

    /**
     * Check Isomorphic Strings
     *
     * @param {string} s - First string
     * @param {string} t - Second string
     * @returns {boolean} - True if strings are isomorphic, else false
     *
     * Logic:
     * - Characters in s must map 1-to-1 to characters in t
     * - Use two hash maps to track mappings from s to t and t to s
     */
    static isIsomorphic(s, t) {
        if (s.length !== t.length) return false;

        //Track mapping from s to t and t to s
        const mapST = {};
        const mapTS = {};

        for (let i = 0; i < s.length; i++) {
            const charS = s[i];
            const charT = t[i];

            //If mapping exists, verify it's consistent
            if ((mapST[charS] && mapST[charS] !== charT) ||
                (mapTS[charT] && mapTS[charT] !== charS)) {
                return false;
            }

            //Add new mapping
            mapST[charS] = charT;
            mapTS[charT] = charS;
        }

        return true;
    } //Time Complexity: O(n), where n is the length of the strings

    /**
     * First Non-Repeating Character
     *
     * @param {string} str - Input string
     * @returns {string|null} - First non-repeating character or null if none
     *
     * Logic:
     * - Count frequency of each character using a hashmap
     * - Traverse string again to find first char with freq = 1
     */
    static firstNonRepeatingChar(str) {
        //Object to count frequency of each character
        const freq = {};

        for (let char of str) {
            //Increment count or start from 1
            freq[char] = (freq[char] || 0) + 1;
        }

        //Find the first character with frequency 1
        for (let char of str) {
            if (freq[char] === 1) {
                return char;
            }
        }

        //If no non-repeating char exists
        return null;
    } //Time Complexity: O(n), where n is the length of the string
}

