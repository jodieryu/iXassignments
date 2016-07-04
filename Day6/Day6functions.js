function average(numbers_list) {
    var sum = 0;
    for (var i = 0; i < numbers_list.length; i++) {
        sum += numbers_list[i];
    }
    var average = sum/numbers_list.length;
    return average;
}

function assignGrade(grade) {
    if (grade < 60) {
        return 'F';
    } else if (grade < 70) {
        return 'D';
    }
    else if (grade < 80) {
        return 'C';
    }
    else if (grade < 90) {
        return 'B';
    }
    else if (grade > 90) {
        return 'A';
    }
}

function pluralize(num, noun) {
    if (num === 1) {
        return num + " " + noun;
    } else if (num > 1) {
        return num + " " + noun + "s";
    }
}

function longestWord(sentence) {
    var splitSentence = sentence.split(" ");
    var currLongestWord = " ";
    var currLongestLength;
    for (var i = 0; i < splitSentence.length; i++) {
        var tempLength = splitSentence[i+1].length;
        if(tempLength >= currLongestLength) {
            tempLength = currLongestLength;
            currLongestWord = splitSentence[i+1];
        }
    }
    return currLongestWord;
}

function palindrome(word) {
    if (word == word.split('').reverse().join('')) {
        return 'yes';
    } else {
        return 'no';
    }
}

function letterCounter(phrase, letter) {
    var currCount = 0;
    for(var i = 0; i < phrase.length; i++) {
        if(phrase[i] === letter)
            currCount += 1;
    }
    return currCount;
}

function longestPalindrome(sentence) {
    // if (longest word in sentence is a palindrome) {
    //     return longest + " is a palindrome";
    // }
    // else {
    //     return longest + " is not a palindrome";
    // }
}

function areAnagrams (sentence1, sentence2) {
    // if (sentence1 and sentence2 are anagrams)
    //     return 'yes'
    // else
    //     return 'no'
}