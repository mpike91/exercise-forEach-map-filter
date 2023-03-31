// FOREACH EXERCISES
// FOREACH EXERCISES
// FOREACH EXERCISES

// Done
// function doubleValues(arr){
//     return arr.map(function(val){
//         return val * 2;
//     })
// }

// Done
function doubleValues(arr) {
    const doubleArr = [];
    arr.forEach(function(val, i, arr){
        doubleArr.push(val*2);
    })
    return doubleArr;
}

// Done
// function onlyEvenValues(arr){
//     return arr.filter(function(val){
//         return val % 2 === 0;
//     })
// }

// Done
function onlyEvenValues(arr) {
    const newArray = [];
    arr.forEach(function(val, i, arr){
        if (val%2===0) newArray.push(val);
    });
    return newArray;
}

// Done
// function showFirstAndLast(arr){
//     return arr.map(function(str) {
//         return str[0] + str[str.length-1];
//     })
// }

// Done
function showFirstAndLast(arr){
    const newArray = [];
    arr.forEach(function(str, i, arr){
        newArray.push(str[0]+str[str.length-1]);
    })
    return newArray;
}

// Done
// function addKeyAndValue(arr,key,value){
//     return arr.map(function(obj) {
//         obj[key] = value;
//         return obj;
//     })
// }

// Done
function addKeyAndValue(arr,key,value){
    arr.forEach(function(obj){
        obj[key] = value;
    })
    return arr;
}

// Done
// function vowelCount(str){
//     const objVowels = {};
//     const arrString = str.toLowerCase().split("");
//     const arrVowels = arrString.filter(function(char) {
//         return ['a','e','i','o','u'].includes(char);
//     });
//     for (let vowel of arrVowels) {
//         objVowels[vowel] ? objVowels[vowel]++ : objVowels[vowel] = 1;
//     }
//     return objVowels;
// }

// Done
function vowelCount(str){
    const objVowels = {};
    const arrString = str.toLowerCase().split("")
    arrString.forEach(function(char, i, arr){
        if (['a','e','i','o','u'].includes(char)) {
            objVowels[char] ? objVowels[char]++ : objVowels[char] = 1;
        }
    })
    return objVowels;
}

// MAP EXERCISES
// MAP EXERCISES
// MAP EXERCISES

// Done
function doubleValuesWithMap(arr) {
    return arr.map(function(val, i, arr) {
        return val * 2;
    })
}

// Done
function valTimesIndex(arr){
    return arr.map(function(val, i, arr){
        return val * i;
    })
}

// Done
function extractKey(arr, key){
    return arr.map(function(obj, i, arr){
        return obj[key];
    })
}

// Done
function extractFullName(arr){
    return arr.map(function(obj, i, arr){
        return `${obj.first} ${obj.last}`;
    })
}

// FILTER EXERCISES
// FILTER EXERCISES
// FILTER EXERCISES

// Done
function filterByValue(arr, key) {
    return arr.filter(function(obj, i, arr){
        return obj[key] !== undefined;
    })
}

// Done
function find(arr, searchValue) {
    return arr.filter(function(val, i, arr){
        return val === searchValue;
    })[0];
}

// Done
function findInObj(arr, key, searchValue) {
    return arr.filter(function(obj){
        return obj[key] === searchValue;
    })[0];
}

// Done
function removeVowels(str) {
    return str
        .toLowerCase()
        .split("")
        .filter(function(char){
            return !['a','e','i','o','u'].includes(char);
        })
        .join("")
}

// Done
function doubleOddNumbers(arr) {
    return arr.filter(function(num){
        return num % 2 === 1;
    }).map(function(num){
        return num * 2;
    })
}