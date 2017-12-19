	var numOfSquares = 6;
	var colors = [];
	var pickedColor;
	var squares = document.querySelectorAll('.square');
	var colorDisplay = document.getElementById('colorDisplay'); 
	var messageDisplay = document.querySelector('#message');
	var h1 = document.querySelector('h1');
	var resetButton = document.querySelector('#reset');
	var difficultyButtons = document.querySelectorAll('.mode');

	init();

	function init(){
		setUpModeButtons();
		setUpSquares();
		reset();
	}

	function setUpModeButtons(){
		for (var i = 0; i < difficultyButtons.length; i++) {
			difficultyButtons[i].addEventListener("click", function() {
				difficultyButtons[0].classList.remove('selected');
				difficultyButtons[1].classList.remove('selected');
				this.classList.add('selected');
				this.textContent == 'Easy' ? numOfSquares = 3: numOfSquares = 6;
				reset();
			});
		}
	}

	function setUpSquares() {
		for (var i = 0; i < squares.length; i++) {
			squares[i].addEventListener("click", function(){
				var clickedColor = this.style.background
				if (clickedColor === pickedColor){
					messageDisplay.textContent = 'Correct';
					resetButton.textContent = "Play Again?"
					changeColours(clickedColor);
					h1.style.background = clickedColor;
				} else {
					this.style.background = "#232323";
					messageDisplay.textContent = 'Try again';
				}
			});
		}
	}


	function reset(){
		colors = generateRandomColors(numOfSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = "New Colors";
		messageDisplay.textContent = "";
		for (var i = 0; i < squares.length; i++) {
			if (colors[i]) {
				squares[i].style.background = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
		h1.style.background = "steelblue";
	}


	resetButton.addEventListener("click", function(){
		reset();
	});
	
	function changeColours(color){
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.background = color;
		}
	}

	function pickColor(){
		var num = Math.floor(Math.random() * colors.length)
		return colors[num];
	}

	function generateRandomColors(num){
		var arr = []
		for (var i = 0; i < num ; i++) {
			arr.push(randomcolor())
		}
		return arr;
	}
	function randomcolor(){
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);

		return "rgb(" + red + ", " + green + ", " + blue + ")";

	}