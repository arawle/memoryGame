var section = document.querySelectorAll('section')[0];
var firstCard = 0;

var cardPairsOne = ['dog', 'cat', 'cow', 'chicken', 'horse', 'rabbit', 'bird', 'ostrich', 'dog', 'cat', 'cow', 'chicken', 'horse', 'rabbit', 'bird', 'ostrich'];
var shuffleCards = function (array) {
  for (var i = 0; i < array.length * 100; i++){
    var randomNum = Math.round(Math.random() * (array.length - 1));
    var insert = array[randomNum];
    array.splice(randomNum, 1);
    array.unshift(insert);
  }
  return array;
}
var shuffledCards = shuffleCards(cardPairsOne);

function cardCreator (card) {
	var newCard = document.createElement('div');
		newCard.setAttribute('class', shuffledCards[j]);
		newCard.style.backgroundColor = 'blue';
		newCard.style.paddingBottom = '200px';
		newCard.style.width = '200px';
		newCard.style.borderStyle = 'solid';
		newCard.style.borderColor = '#c8c8c8';
		newCard.style.borderWidth = '1px';
		newCard.style.float = 'left';
		newCard.addEventListener('click', function () {
      if(firstCard === 0){
        newCard.innerHTML = "<p>" + newCard.className + "</p>";
        return firstCard = shuffledCards[j];

      }
      else if (firstCard = newCard.className){
        firstCard = 0;
        console.log('Correct');
      }
      else {
        firstCard = 0;
        console.log('Try Again!');
      }
			
		})
	section.appendChild(newCard);
}

	for(var j = 0; j < cardPairsOne.length; j++){
		cardCreator(shuffledCards[j]);
	}



	// All cards have the same background color to begin with.

	// Add even listener, on click, show image of the word. 

// style the paragraph 
// make the divs that are floating not break
// figure out flipping scenario
// score display for matches
//   once a user 8 matches- congratulate them
// reset button
// don't clount click of same div twice











