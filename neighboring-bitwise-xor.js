/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    let ans = 0;
    for(let i=0;i<derived.length;i++) ans ^= derived[i];
    return !ans;
};
