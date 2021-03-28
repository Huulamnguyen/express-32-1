// todo: find Mean
function mean(arr){
    if (arr.length > 0){
        const sum = arr.reduce((a,b) => a + b, 0);
        return sum / arr.length;
    }
    return 0;
};

// todo: find Median 
function median(arr){
    const arrSorted = arr.sort((a,b) => a - b);
    return arrSorted.length % 2 === 0 ? (arrSorted[arrSorted.length/2 - 1] + arrSorted[arrSorted.length/2]) / 2 : arrSorted[Math.floor(arrSorted.length/2)];
};

// todo: find Mode
function mode(arr){
    const freqTable = {};
    arr.forEach(el => freqTable[el] = freqTable[el] + 1 || 1);

    let modes = [];
    let maxFreq = 0;
    for (const key in freqTable){
        if(freqTable[key] > maxFreq){
            modes = [Number(key)];
            maxFreq = freqTable[key];
        }
        else if (freqTable[key] === maxFreq){
            modes.push(Number(key));
        }
    }
    if (modes.length === Object.keys(freqTable).length) modes = [];
    
    return modes;
}

// todo: check if any element of the array is a valid number. if not throw an error.
function checkArr(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        let isValidNumber = Number(arr[i]);
        if (Number.isNaN(isValidNumber)){
            return new Error(`The Value of ${isValidNumber} at index ${i} is not a valid number`)
        };
        result.push(isValidNumber);
    }
    return result;
}
module.exports = {mean, median, mode, checkArr}