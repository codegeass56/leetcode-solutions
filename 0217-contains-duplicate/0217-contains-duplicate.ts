function containsDuplicate(nums: number[]): boolean {
    const set = new Set();
    for(const n of nums) {
        if(set.has(n)) return true;
        set.add(n);
    }
    return false;
};

//Brute force is checking every pair (O(n^2)). All you need to know is if you've seen a value before. You don't need counts, just a yes/no membership check. A set gives you O(1) lookup time on average for exactly that so you scan once: if it's already in the set, duplicate found; otherwise add it. O(n) time, O(n) space.

//[1] = false
//[0] = false
//[1, 2, 3] = false
//[1, 3, 3, 1] = true

//Approach
//Initialize set
//Traverse the array
//Check for current element existence in set
//If element exists then return true
//If element does not exist then add it to the set
//If loop ends then return false

//[1]
//set: {1}
//