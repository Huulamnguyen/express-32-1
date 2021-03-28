const { mean, median, mode, checkArr } = require("./operations");

// todo: test Mean
describe("#findMean", function () {
    test("finds the mean of an empty array", function () {
    const arr = []; 
    expect(mean(arr)).toEqual(0);
    });
    test("finds the mean of an array of numbers", function () {
    const arr = [1,-1,4,2]; 
    expect(mean(arr)).toEqual(1.5);
    });
});

// todo: test Median
describe("#findMedian", function(){
    test("finds the median of an even set", function(){
    const arr = [1, -1, 4, 2]; 
    expect(median(arr)).toEqual(1.5);
    });
    test("finds the median of an odd set", function () {
    const arr = [1, -1, 4];
    expect(median(arr)).toEqual(1);
    });
});

// todo: test mode
describe("#findMode", function () {
    test("finds the mode 1", function () {
    const arr = [1,1,1,2,2,3]; 
    expect(mode(arr)).toEqual([1]);
    });
    test("finds the mode 2", function () {
    const arr = [1,1,1,2,2,2,3]; 
    expect(mode(arr)).toEqual([1,2]);
    });
});

// todo: test to validate values of an array is a valid number
describe("#validateNumbers", function () {
    test("All elemements are valid numbers", function (){
        const arr = [1,2,3,4,5,6,7,8,9];
        expect(checkArr(arr)).toEqual([1,2,3,4,5,6,7,8,9]);
    });
});