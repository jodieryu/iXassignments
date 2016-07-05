// Return 'yes' if the sentence contains only unique characters, 'no' otherwise
function allUniqueCharacters(sentence) {
	var new_sentence = sentence.split(" ").sort().join("").trim();
	for (var i = 0; i < new_sentence.length; i++ ) {
		for (var j = i+1; j < new_sentence.length; j++) {
			if (new_sentence[i] === new_sentence[j]) {
				return 'no';
			}
		}
	}
	return 'yes';
}

// One number 1-10 is missing. Return it!
function missingNum(numbers) {
	var num_list = [1,2,3,4,5,6,7,8,9,10];
	var sorted_numbers = numbers.sort(function(a,b){return a-b})
	
	for (var i = 0; i < numbers.length; i++) {
		if (numbers[i] !== num_list[i]) {
			return i+1;
		}
	}
}

// Return 'yes' if array1 and array2 are rotated versions of each other, 'no' otherwise
// e.g. [1,2,3,6,7,8] and [3,6,7,8,1,2] are rotated versions of each other
function areRotatedVersions(array1, array2) {
	var sorted1 = array1.sort(function(a,b){return a-b});
	var sorted2 = array2.sort(function(a,b){return a-b});

	if (sorted1.length === sorted2.length) {
		return 'yes';
	}
	else {
		return 'no';
	}
}

// Return a string of the first n prime numbers, separated by commas
// e.g. "1,2,3,4"
function nPrimeNums(n) {
	var counter = 0;
	var num = 2;
	var str = "";
	while (n > counter) {
		if (isPrime(num)) {
			str+=num + ","; // string = string + num
			counter++;
		}
		num++;
	}
	return str.substring(0,str.length-1);
}

function isPrime(n) {
    for(var i=2;i<n;i++) {
        if(n % i == 0)
            return false;
    }
    return true;
}

function doItTwice(f) {
	var a = f();
	return a + a;
}

// Return an object that has the properties: first name, last name, age, email, and favorite color
function objectFun(first, last, age, email, color) {
    var person = {
    	first_name: first,
    	last_name: last,
    	age: age,
    	email: email,
    	fav_color: color
    }
    return person;
}

// Return the number of "children" obj has
function numChildren(obj) {
	return obj.children.length;
}

function greeting(name) {
    return "Hello, " + name + "!";
}

// Say hello! This function takes a function as a parameter (greet should be a function)
function sayHello(first, last, greet) {
	return greet(first + " " + last);
}