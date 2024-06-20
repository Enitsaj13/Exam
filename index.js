// "Given an array of elements, 
// return the length of the longest 
// subarray where all its elements are distinct. 
// For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], 
// return 5 as the longest subarray of distinct elements is [5, 2, 3, 4, 1]."

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

const longestSubArray = (arr) => {
    let maxLength = 0;
    let left = 0;
    const lastIndexMap = {};

    for (let right = 0; right < arr.length; right++) {
        const currentElement = arr[right];

        if (currentElement in lastIndexMap) {
            left = Math.max(lastIndexMap[currentElement] + 1, left)
        }

        lastIndexMap[currentElement] = right;
        maxLength = Math.max(maxLength, right - left + 1);

    }
    return maxLength;
}

const array = [5, 1, 3, 5, 2, 3, 4, 1];
console.log(longestSubArray(array));

// Test 13: FAILED (Expected 5, got 4)
// Test 14: FAILED (Expected 5, got 6)

function runTests() {
    const tests = [
        { input: [5, 1, 3, 5, 2, 3, 4, 1], expected: 5 },
        { input: [1, 2, 3, 4, 5], expected: 5 },
        { input: [1, 1, 1, 1], expected: 1 },
        { input: [1, 2, 3, 2, 1], expected: 3 },
        { input: [], expected: 0 },
        { input: [5, 5, 5, 5, 5], expected: 1 },
        { input: [2, 1, 2, 1, 2, 1], expected: 2 },
        { input: [2, 3, 4, 5, 2, 3, 4, 5], expected: 4 },
        { input: [1, 2, 3, 1, 2, 3, 4, 5, 6, 7], expected: 7 },
        { input: [7, 3, 3, 1, 2, 4, 5, 6, 7, 8], expected: 8 },
        // Additional test cases
        { input: [2, 7, 9, 2, 1, 7, 8, 3, 2], expected: 6 },
        { input: [8, 6, 7, 8, 6, 7, 8], expected: 3 },
        { input: [1, 2, 1, 3, 2, 3, 4, 5], expected: 5 },
        { input: [10, 20, 10, 30, 40, 50, 60], expected: 5 },
        { input: [4, 4, 4, 4, 4, 4, 4, 4, 4], expected: 1 },
        {
            input: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
            expected: 5
        },
        { input: [10, 20, 30, 40, 50, 60, 70, 80], expected: 8 },
        { input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], expected: 10 },
        { input: [1, 2, 3, 4, 1, 2, 3, 4, 5], expected: 5 },
        { input: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4], expected: 2 }
    ];
    tests.forEach((test, index) => {
        const result = longestSubArray(test.input);
        console.log(`Test ${index + 1}:`, result === test.expected ? 'PASSED' : `FAILED (Expected ${test.expected}, got ${result})`);
    });
}

runTests();