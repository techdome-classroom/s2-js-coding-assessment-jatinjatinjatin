/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = {')':'(',']':'[','}':'{'};

    for (let char of s){
        if (mapping[char]){
            if (stack.length === 0 || stack.pop() !== mapping[char]) return false;
            } else {
        stack.push(char);
    }
 }
    return stack.length === 0;
};

module.exports = { isValid };


