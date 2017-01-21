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
    var tab = new Array;
    var j;
    var minimum;
    var indice;
    var mot;
        while(array.length != 0){
            minimum = array[0][array[0].length-1];
            for(var i =0; i<array.length; i++){
                j = array[i][array[i].length-1];
                if(j<=minimum){
                    minimum = j;
                    mot = array[i];
                    indice = i;
                }
        }
        tab.push(mot);
        array.splice(indice,1);
    }
    return tab;
}

var getFirstHalf = function(string) {
    tab = "";
   tab = string.slice(0,Math.round(string.length/2));

    return tab;
}

var makeNegative = function(number) {
    var nombre;
    if(Math.sign(number) == 1){
        nombre = number-(number*2);
    }
    else{
        nombre = number;
    }
    return nombre;
}

var numberOfPalindromes = function(array) {
    var mot_1 = "";
    var mot_2 = "";
    tab = new Array;
    for(var i = 0; i<array.length; i++){
        mot_1="";
        mot_2="";
        for(var j = array[i].length/2; j>=0; j--){
            mot_1 += array[i][j];
        }
        for(var k = array[i].length/2; k<array[i].length;k++){
            mot_2 += array[i][k];
        }
        // if (mot_1 == mot_2){
            tab.push(array[i]);
        // }
    }
    return tab;
}

var shortestWord = function(array) {
    var comptage = 0;
    var minimum = 0;
    var mot_mini;
    for(var k=0; k<array[0].length;k++){
        minimum ++;
    }
    for(var i =0; i<array.length;i++){
        comptage = 0;
        for(var j =0;j<array[i].length;j++){
            comptage ++;
        }
        if (comptage<minimum){
            minimum = comptage;
            mot_mini = array[i]
        }
    }
    return mot_mini;
}

var longestWord = function(array) {
    var comptage = 0;
    var maximum = 0;
    var mot_max;
    for(var k=0; k<array[0].length;k++){
        maximum++;
    }
    for(var i =0; i<array.length;i++){
        comptage = 0;
        for(var j =0;j<array[i].length;j++){
            comptage ++;
        }
        if (comptage>maximum){
            maximum = comptage;
            mot_max = array[i]
        }
    }
    return mot_max;
}

var sumNumbers = function(array) {
    var total = 0;
    for(var i = 0; i<array.length; i++){
        total = total + array[i];
    }
    return total;
}

var repeatElements = function(array) {
    var tab = new Array;
    for(j=0;j<array.length;j++){
        tab.push(array[j]);
    }
    for(var i = 0; i<array.length; i++){
        tab.push(array[i]);
    }
    return tab;
}

var stringToNumber = function(string) {
    var nombre = parseInt(string);
    return nombre;
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
