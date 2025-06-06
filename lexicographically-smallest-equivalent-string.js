/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */

class UnionFind{
    constructor(){
        this.parent = new Map();
    }
    add(char){
        this.parent.set(char, char);
    }
    findParent(char){
        if(char === this.parent.get(char)) return char;
        return this.findParent(this.parent.get(char));
    }
    union(char1, char2){
        let p1 = this.findParent(char1), p2 = this.findParent(char2);
        if(p1 <= p2){
            this.parent.set(char2,p1);
            this.parent.set(p2,p1);
        } 
        else{
            this.parent.set(char1,p2);
            this.parent.set(p1,p2);
        }
    }
    checkMember(char){
        return this.parent.get(char);
    }
}

var smallestEquivalentString = function(s1, s2, baseStr) {
    let uf = new UnionFind();

    for(let i=0;i<s1.length;i++){
        uf.add(s1[i]);
        uf.add(s2[i]);
    }

    for(let i=0;i<s1.length;i++){
        uf.union(s1[i],s2[i]);
    }

    let str = '';
    for(let i=0;i<baseStr.length;i++){
        if(uf.checkMember(baseStr[i]))
            str += uf.findParent(baseStr[i]);
        else str += baseStr[i];
    }
    
    return str;
};
