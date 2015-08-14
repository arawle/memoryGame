var cardPairsOne= ['dog', 'cat', 'cow', 'chicken', 'horse', 'rabbit', 'bird', 'ostrich'];
var cardPairsTwo= ['dog', 'cat', 'cow', 'chicken', 'horse', 'rabbit', 'bird', 'ostrich'];


function cardCreator (color) {
		var newCard = document.createElement('div');
		newCard.setAttribute('class', 'colorsToChooseFrom');
		newCard.style.backgroundColor = color;
		newCard.style.paddingBottom = '20px';
		newCard.style.width = '20px';
		newCard.style.borderStyle = 'solid';
		newCard.style.borderColor = '#c8c8c8';
		newCard.style.borderWidth = '1px';
		newCard.style.float = 'left';
		newCard.addEventListener('click', function() {
			colorPicked = color;
			console.log(color);
		})
		var list = document.querySelector('div');
		list.appendChild(newCard);
	}

	for(var j = 0; j < colorArray.length; j++){
		colorRow(colorArray[j]);
	}


	// All cards have the same background color to begin with.

	// Add even listener, on click, show image of the word. 

	// 