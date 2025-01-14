/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let hm = [], ans = 0, res = [];

    for(let i=0;i<A.length;i++) hm.push(0);

    for(let i=0;i<A.length;i++){
        if(A[i] === B[i]) ans++;

        else{
            hm[A[i] - 1]++;
            hm[B[i] - 1]++;
        
            if(hm[A[i]-1] === 2) ans++;
            if(hm[B[i]-1] === 2) ans++;
        }

        res.push(ans);
    }

    return res;
};
