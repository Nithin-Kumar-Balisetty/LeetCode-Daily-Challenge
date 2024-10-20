/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Generated MaxHeap class from ChatGPT 
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Method to get the parent index
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  // Method to get the left child index
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  // Method to get the right child index
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  // Method to swap two nodes
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // Method to insert a new element
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Method to heapify up (maintain max-heap property after insertion)
  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      if (this.heap[parentIndex] < this.heap[currentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  // Method to remove and return the maximum value (root of the heap)
  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  // Method to heapify down (maintain max-heap property after extraction)
  heapifyDown(index) {
    let largest = index;
    const left = this.getLeftChildIndex(index);
    const right = this.getRightChildIndex(index);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  // Method to get the maximum value without removing it
  getMax() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Method to check if the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Method to get the size of the heap
  size() {
    return this.heap.length;
  }
}

var maxKelements = function(nums, k) {
    let heap = new MaxHeap();
    for(let i=0;i<nums.length;i++)
        heap.insert(nums[i]);

    let score = 0;

    for(let i=0;i<k;i++){
        let last = heap.extractMax();
        score += last;
        heap.insert(Math.ceil(last/3));
    }

    return score;
};
