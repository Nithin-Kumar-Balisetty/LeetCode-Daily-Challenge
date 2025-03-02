/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let ans = [], ptr1 = 0 , ptr2 = 0;

    while(ptr1 < nums1.length && ptr2 < nums2.length){
        if(nums1[ptr1][0] === nums2[ptr2][0]){
            ans.push([nums1[ptr1][0] , nums1[ptr1][1] + nums2[ptr2][1]]);
            ptr1++;
            ptr2++;
        }
        else if(nums1[ptr1][0] > nums2[ptr2][0]){
            ans.push(nums2[ptr2]);
            ptr2++;
        }
        else{
            ans.push(nums1[ptr1]);
            ptr1++;
        }
    }

    while(ptr1 < nums1.length){
        ans.push(nums1[ptr1]);
        ptr1++;
    }

    while(ptr2 < nums2.length){
        ans.push(nums2[ptr2]);
        ptr2++;
    }

    return ans;
};
