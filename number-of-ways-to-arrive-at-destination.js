/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  enqueue(node, priority) {
    this.heap.push({ node, priority });
    this._bubbleUp();
  }

  dequeue() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this._sinkDown();
    }
    return min;
  }

  _bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];
      if (element.priority >= parent.priority) break;
      this.heap[idx] = parent;
      this.heap[parentIdx] = element;
      idx = parentIdx;
    }
  }

  _sinkDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx].priority < element.priority) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          (swapIdx === null && this.heap[rightIdx].priority < element.priority) ||
          (swapIdx !== null && this.heap[rightIdx].priority < this.heap[leftIdx].priority)
        ) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx === null) break;

      this.heap[idx] = this.heap[swapIdx];
      this.heap[swapIdx] = element;
      idx = swapIdx;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

var countPaths = function(n, roads) {
    let graph = new Array(n), mod = Math.pow(10,9) + 7;
    
    for(let i=0;i<n;i++) graph[i] = [];
    
    for(let i=0;i<roads.length;i++){
        graph[roads[i][0]].push([roads[i][1], roads[i][2]]);
        graph[roads[i][1]].push([roads[i][0], roads[i][2]]);
    };
    
    let heap = new MinHeap();
    let distances = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    let path_count = new Array(n).fill(0);

    distances[0] = 0;
    path_count[0] = 1;
    
   heap.enqueue(0, 0);

    while (!heap.isEmpty()) {
        const { node: currentNode, priority: currentDistance } = heap.dequeue();
        
        if (currentDistance > distances[currentNode])
            continue;
            
        for (let [neighbor, weight] of graph[currentNode]) {
            const newDist = currentDistance + weight;
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                path_count[neighbor] = path_count[currentNode];
                heap.enqueue(neighbor, newDist);
            }
            else if(newDist === distances[neighbor]){
                path_count[neighbor] = (path_count[neighbor] + path_count[currentNode]) % mod;
            }
        }
    }

    return path_count[n-1];
};


