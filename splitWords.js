//JavaScript-C24.2.0 (SpiderMonkey)

function cutName(name){
	var word = "";
	var wordArray = [];
	for (var i = 0; i < name.length; i=i+1) {
        
		if(name.charAt(i) == ' ')
		{
			wordArray.push(word);
			word = "";
		}
		else {
			word = word + name.charAt(i);
		}
        
	}
    wordArray.push(word);
	return wordArray;
}

var result = cutName("Valerie Janise Don");
print(result)