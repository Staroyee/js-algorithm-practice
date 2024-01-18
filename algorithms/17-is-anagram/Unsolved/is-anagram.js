// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    strA = strA.replace(/\s/g, '').toLowerCase();
    strB = strB.replace(/\s/g, '').toLowerCase();

    if (strA.length !== strB.length) {
        return false;
    }
    strA = strA.split('').sort().join('');
    strB = strB.split('').sort().join('');

    return strA === strB
};