var MyCalendar = function() {
    this.arr = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */

MyCalendar.prototype.book = function(start, end) {
    for(let i=0;i<this.arr.length;i++){
        if(this.arr[i][1] > start && this.arr[i][0] < end) return false;
    }

    this.arr.push([start,end]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */