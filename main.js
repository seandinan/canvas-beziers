var img = document.getElementById('tester');
var teeth = document.getElementsByClassName('tooth');
console.log(teeth);
img.ondragover = function(){return false};
for (var i in teeth){
	teeth[i].ondragstart = function(){return false};
}
// tooth.ondragstart = function(){return false};

var imgSelect = false;
var delHeight = false;
var delWidth = false;
var imgAngle = 0;
var mouseClick = {};
var currentTooth;

var topDot = document.getElementById('topDot');
// TopDot is positioning OK
topDot.style.left = 0.5 * (topDot.parentNode.scrollWidth - topDot.offsetWidth) + 'px';
topDot.style.top = -0.5 * topDot.offsetWidth + 'px';
topDot.style.backgroundColor = 'yellow';

// RightDot is position OK
var rightDot = document.getElementById('rightDot');
rightDot.style.left = (rightDot.parentNode.scrollWidth - 0.5 * rightDot.offsetWidth) + 'px';
rightDot.style.top = 0.5 * (rightDot.parentNode.scrollHeight - rightDot.offsetHeight) + 'px';
rightDot.style.backgroundColor = 'pink';

// BotDot has no clue what its doing
var botDot = document.getElementById('botDot');
console.log(botDot.parentNode.scrollWidth)
botDot.style.left = botDot.parentNode.scrollWidth + 'px';
botDot.style.bottom = - botDot.parentNode.scrollHeight - 0.5 * botDot.offsetHeight + 'px';
botDot.style.backgroundColor = 'blue';

// LeftDot seems to be affected by botDot
var leftDot = document.getElementById('leftDot');
leftDot.style.left = -0.5 * leftDot.offsetWidth + 'px';
leftDot.style.top = 0.5 * (leftDot.parentNode.scrollWidth - leftDot.offsetHeight) + 'px';
leftDot.style.backgroundColor = 'green';


document.addEventListener('mousedown', function(event){
	mouseClick.x = event.clientX;
	mouseClick.y = event.clientY;
	if (event.target.className == 'tooth') {
		imgSelect = true;
		currentTooth = document.getElementById(event.target.parentNode.id);
	}
	if (event.target.id == 'topDot' || event.target.id == 'botDot'){
		delHeight = true;
	}
	if (event.target.id == 'leftDot' || event.target.id == 'rightDot'){
		delWidth = true;
	}
})

document.addEventListener('mouseup', function(){
	imgSelect = false;
	delWidth = false;
	delHeight = false;
})

document.addEventListener('mousemove', function(event){
	if (imgSelect == true){
		currentTooth.style.top = currentTooth.offsetTop + event.movementY + 'px';
		currentTooth.style.left = currentTooth.offsetLeft + event.movementX + 'px';
	}
	if (delHeight == true){
		if (event.movementY != 0){
			console.log(event.target)
			img.style.height = (1 + (0.005 * event.movementY)) * img.height + 'px';
			rightDot.style.left = (tooth.offsetWidth - 0.5 * rightDot.offsetWidth) + 'px';
			rightDot.style.top = 0.5 * (tooth.offsetHeight - rightDot.offsetHeight) + 'px';
			leftDot.style.left = -0.5 * leftDot.offsetWidth + 'px';
			leftDot.style.top = 0.5 * (tooth.offsetHeight - leftDot.offsetHeight) + 'px';
		}
	}
	if (delWidth == true){
	 	if (event.movementX != 0) {
			img.style.width = (1 + (0.005 * event.movementX)) * img.width + 'px';
			topDot.style.left = 0.5 * (tooth.offsetWidth - topDot.offsetWidth) + 'px';
			topDot.style.top = -0.5 * topDot.offsetWidth + 'px'; 
			botDot.style.left = 0.5 * (tooth.offsetWidth - botDot.offsetWidth) + 'px';
			botDot.style.bottom = -5 + 'px';
			rightDot.style.left = (tooth.offsetWidth - 0.5 * rightDot.offsetWidth) + 'px';
			rightDot.style.top = 0.5 * (tooth.offsetHeight - rightDot.offsetHeight) + 'px';
			leftDot.style.left = -0.5 * leftDot.offsetWidth + 'px';
			leftDot.style.top = 0.5 * (tooth.offsetHeight - leftDot.offsetHeight) + 'px';
		}
	}
})