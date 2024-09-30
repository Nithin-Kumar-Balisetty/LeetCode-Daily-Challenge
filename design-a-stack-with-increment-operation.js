/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.arr = Array(maxSize).fill(0);
    this.increment_arr = Array(maxSize).fill(0);
    this.size = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.arr.length === this.size) return ;
    this.arr[this.size++] = x;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.size === 0) return -1;
    let res = this.arr[this.size-1] + this.increment_arr[this.size-1];
    if(this.size > 1) this.increment_arr[this.size -2] += this.increment_arr[this.size -1];
    this.increment_arr[this.size -1] =0;
    this.size--;
    return res;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    if(this.size >=1) this.increment_arr[Math.min(k-1,this.size-1)] += val;
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */