
var ProductOfNumbers = function() {
    this.products = [];
    this.latest_zero = -1;
    this.length = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if(this.products.length) this.products.push(Math.max(this.products[this.products.length-1],1)*num);
    else this.products.push(num);

    this.length++;

    if(num === 0) this.latest_zero = this.products.length-1;
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {

    if(this.latest_zero > -1 && this.latest_zero >= (this.length - k)) return 0;
    if(k===1 && this.length === 1) return this.products[this.length-1];
    if(k === this.products.length) return this.products[this.length-1];
    
    if(this.latest_zero > -1 && this.latest_zero === (this.length-1-k)) return this.products[this.length-1];

    return parseInt(this.products[this.length-1] / this.products[this.length-1-k]);
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
