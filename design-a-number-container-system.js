class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (this.hasParent(currentIndex) && this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  peek() {
      if (this.heap.length === 0) {
          return null;
      }
      return this.heap[0];
  }
  
  remove() {
      if (this.heap.length === 0) {
          return null;
      }
      if (this.heap.length === 1) {
          return this.heap.pop();
      }
  
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return root;
  }

  heapifyDown() {
      let currentIndex = 0;
      while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
          let smallerChildIndex = this.getLeftChildIndex(currentIndex);
          if (this.getRightChildIndex(currentIndex) < this.heap.length &&
              this.heap[this.getRightChildIndex(currentIndex)] < this.heap[smallerChildIndex]) {
              smallerChildIndex = this.getRightChildIndex(currentIndex);
          }
          if (this.heap[currentIndex] < this.heap[smallerChildIndex]) {
              break;
          }
          this.swap(currentIndex, smallerChildIndex);
          currentIndex = smallerChildIndex;
      }
  }

  size() {
    return this.heap.length;
  }
}


var NumberContainers = function() {
    this.hm = new Map();
    this.reverse_hm = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    
    if(!this.hm.has(number)){
        let new_heap = new MinHeap();
        new_heap.insert(index);
        this.hm.set(number,new_heap);
    }
    else this.hm.get(number).insert(index);

    this.reverse_hm.set(index,number);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    if (!this.hm.has(number) || this.hm.get(number).size === 0) return -1;

    let top = this.hm.get(number).peek();

    while(top && this.reverse_hm.get(top)!==number){
        this.hm.get(number).remove();
        top = this.hm.get(number).peek();
    }

    return top ? top : -1;
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
