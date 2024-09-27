
var MyCalendarTwo = function() {
    this.arr = [];
    this.overlap = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */

MyCalendarTwo.prototype.book = function(start, end) {
    for(let i=0;i<this.overlap.length;i++){
        if(start < this.overlap[i][1] && end > this.overlap[i][0]) return false;
    }
    for(let i=0;i<this.arr.length;i++){
        if(start < this.arr[i][1] && end > this.arr[i][0])
            this.overlap.push([Math.max(start,this.arr[i][0]), Math.min(end,this.arr[i][1])]);
    }
    this.arr.push([start,end]);
    return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */