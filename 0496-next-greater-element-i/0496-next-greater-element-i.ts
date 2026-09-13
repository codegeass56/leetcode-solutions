function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const stack = [];
    const map = new Map();
    for(let i = nums2.length - 1; i >= 0; i--) {
        while(stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }
        map.set(nums2[i], stack.length > 0 && stack[stack.length - 1] > nums2[i] ? stack[stack.length - 1] : -1);
        stack.push(nums2[i]);
    }

    return nums1.map(v => map.get(v));
};

//[3, 1, 2, 5]
//[3, 2, 5, 1]
//[5, -1, 5, -1]

//next = {1: -1, 5: -1, 2: 5, 3: 5}
//stack = [5, 3]

//[5, -1, 5, -1]