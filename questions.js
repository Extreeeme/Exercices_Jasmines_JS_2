var selectElementsStartingWithA = function(array) {
	var tab = new Array;
	for(i=0; i<array.length; i++){
		if(array[i][0]=="a") {
			tab.push(array[i]);
		}
	}
    return tab ;

}

var selectElementsStartingWithVowel = function(array) {
	var vowel = ["a","e","i","o","u","y"];
    var tab = new Array;
	for(i=0; i<array.length; i++){
		for(x=0; x<vowel.length; x++)
		if(array[i][0]==vowel[x]) {
			tab.push(array[i]);

		}
		
	}
    return tab ;

}


var removeNullElements = function(array) {
    var tab = new Array;
    for (i=0; i < array.length; i++) {
    	if (array[i]!= null){
    	tab.push(array[i]);
    }
    }


    return tab;
}

var removeNullAndFalseElements = function(array) {
    var tab = new Array;
    for (i=0; i < array.length; i++) {
    	if (parseInt(array[i]) == 0){
    		tab.push(array[i]);

    	}
    	if (array[i]!= null && array[i] != false) {
    	tab.push(array[i]);
    }
    }


    return tab;
}

var reverseWordsInArray = function(array) {
	var tab = new Array;
	var word ='';

    for (i=0; i < array.length; i++) {
    	word='';
    	for (x=array[i].length-1; x>=0; x--){
    		word+=(array[i][x]);
    	}
    		
    	tab.push(word);
    }

    return tab;
    

}

var everyPossiblePair = function(array) {
	var tab = new Array;
	for(i=0;i<array.length;i++){
		for(j=array.length-1;j>=0;j--){
		
			if(array[i]>array[j]){
				tab.push([array[j],array[i]]);
			}
		}
	}	
    return tab;
}

var allElementsExceptFirstThree = function(array) {
    var tab = new Array;
    for(var i = 0; i<array.length; i++){
        if(i >2){
            tab.push(array[i]);
        }
    }
    return tab;
}

var addElementToBeginning = function(array, element) {
    var tab = new Array;
    tab.push(element);
    for(var i = 0; i<array.length; i++){
        tab.push(array[i]);
    }
    return tab;
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}