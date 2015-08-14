var section = document.querySelectorAll('section')[0];
var firstClass = null;
var firstId = null;
var pairCounter = 0;

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

function cardCreator (cardId) {
	var newCard = document.createElement('div');
		newCard.setAttribute('class', shuffledCards[cardId]);
    newCard.setAttribute('id', cardId);
		newCard.style.backgroundColor = 'blue';
		newCard.style.height = '200px';
		newCard.style.width = '200px';
		newCard.style.borderStyle = 'solid';
		newCard.style.borderColor = '#c8c8c8';
		newCard.style.borderWidth = '1px';
		newCard.style.float = 'left';
		newCard.addEventListener('click', function () {
      var eventId = this.getAttribute('id');
      if(firstClass === null){
        newCard.innerHTML = newCard.className;
        firstId = eventId
        return firstClass = this.className;
      }
      else if (firstClass === newCard.className && firstId !== eventId) {
        newCard.innerHTML = newCard.className;
        firstClass = null;
        firstId = null;
        pairCounter += 1;
        if (pairCounter === 8){
          alert('You WIN!!!')
        }
        console.log('Correct');
      }
      else {
        newCard.innerHTML = newCard.className;
        console.log('Try Again!');
        var firstElement = document.getElementById(firstId);
        var secondElement = document.getElementById(eventId);
          
          window.setTimeout(function(){
            firstElement.innerHTML = '';
            secondElement.innerHTML = '';
          }, 500);
          console.log(firstId.innerHTML)

          firstClass = null;
          firstId = null;
        }
			
		})
	section.appendChild(newCard);
}

	for(var j = 0; j < cardPairsOne.length; j++){
		cardCreator(j);
	}



// change event listener to show picture of the class instead
    // the word.
// style the paragraph 
// make the divs that are floating not break
// figure out flipping scenario
// score display for matches
// once a user 8 matches- congratulate them
// don't clount click of same div twice

//add reset button
var button = document.createElement('button')
button.innerHTML = 'click to reset';
button.addEventListener('click', function(){
  location.reload('div');
})
document.querySelector('body').appendChild(button);









