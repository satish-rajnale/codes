/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(choices, temp = [], permutations = []) {
    // Base case 
    if(choices.length === 0){
      permutations.push([...temp]);
    } 

    for(let i = 0; i < choices.length; i++){
        // Create new array without current letter
        let newChoices = choices.filter((choice, index) => index !== i)
        // Add current to the temp array which is our current permutation
        temp.push(choices[i])
        permute(newChoices, temp, permutations)
        // Once we have explored options remove the current letter from our current permuataion
        temp.pop()
    }

    return permutations
};