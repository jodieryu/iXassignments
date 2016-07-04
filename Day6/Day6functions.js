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
    var currLongestLength = currLongestWord.length;
    for (var i = 0; i < splitSentence.length; i++) {
        var tempLength = splitSentence[i].length;
        if(tempLength > currLongestLength) {
            currLongestLength = tempLength;     //left becomes right
            currLongestWord = splitSentence[i];
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
    if (palindrome(longestWord(sentence))) {
        sentence = longest;
        return longest + " is a palindrome";
    }
    else {
        return longest + " is not a palindrome";
    }
}

function areAnagrams (sentence1, sentence2) {
    var sorted1 = sentence1.split("").sort().join("").trim();
    var sorted2 = sentence2.split("").sort().join("").trim();
    if (sorted1 === sorted2) {
        return "yes";
    }
    else {
        return "no";
    }
}