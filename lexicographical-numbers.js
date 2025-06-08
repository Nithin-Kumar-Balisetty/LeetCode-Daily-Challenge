/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let ans = [];

    function dfs(i){
        if(i > n) return ;
        ans.push(i);
        for(let j=0;j<10;j++)
            dfs(10*i+j);
    }

    for(let i=1;i<10;i++)
        dfs(i);

    return ans;
};
