// Remove Blanks
function removeBlanks(str) {
    var stringLength = str.length;
    updatedString = '';
    for (var i = 0; i < stringLength; i++) {
        if (str[i] === ' ') {
            continue
        }
        updatedString += str[i];
    }
    console.log(updatedString);
}
removeBlanks('Pl ayTha tF u nkyM usi c');
removeBlanks("I can not BELIEVE it's not BUTTER")

// Get Digits
function getDigits(str) {
    var compare = ['0', '1', '2', '3','4', '5', '6', '7', '8', '9'];
    var stringLength = str.length;
    var updatedString = '';
    for (var x = 0; x < stringLength; x++){
        for (var i = 0; i < compare.length; i++) {
            if (str[x] === compare[i]) {
                updatedString += compare[i];
            }
        }
    }
    console.log(updatedString);
}
getDigits("abc8c0d1ngd0j0!8")
getDigits("0s1a3y5w7h9a2t4?6!8?0")

// Acronyms
function acronym(str) {
    str = str.split(' ');
    var stringLength = str.length;
    var updatedString = '';
    for (var i = 0; i < stringLength; i++) {
        updatedString += str[i][0];
    }
    console.log(updatedString.toUpperCase());
}
acronym("there's no free lunch - gotta pay yer way.")
acronym("Live from New York, it's Saturday Night!")

// Count Non-Spaces
function countNonSpaces(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            count++;
        }
    }
    console.log(count);
}
countNonSpaces("Honey pie, you are driving me crazy");
countNonSpaces("Hello world !");

// Remove Shorter Strings
function removeShorterStrings(arr, val) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= val) {
            index = newArr.length;
            newArr[index] = arr[i];
        }
    }
    console.log(newArr);
}
removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4);
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3);