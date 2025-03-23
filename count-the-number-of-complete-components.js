/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

class UnionFind {
  constructor(size) {
    this.parent = new Array(size);
    this.size = new Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.size[rootX] < this.size[rootY]) {
      this.parent[rootX] = rootY;
      this.size[rootY] += this.size[rootX];
    } else {
      this.parent[rootY] = rootX;
      this.size[rootX] += this.size[rootY];
    }
    return true;
  }
}

var countCompleteComponents = function(n, edges) {
  const uf = new UnionFind(n);
  const edgeCount = new Map(); 

  for (let [u, v] of edges) 
    uf.union(u, v);
  
  for (let [u, v] of edges) {
    let root = uf.find(u); 
    edgeCount.set(root, (edgeCount.get(root) || 0) + 1);
  }

  let completeComponents = 0;

  for (let i = 0; i < n; i++) {
    let root = uf.find(i);
    if (root === i) {
      const nodes = uf.size[i];
      if ((edgeCount.get(i) || 0) === ((nodes * (nodes - 1)) / 2)) {
        completeComponents++;
      }
    }
  }

  return completeComponents;
};
