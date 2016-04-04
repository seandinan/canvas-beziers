var img = document.getElementById('tester');
img.ondragstart = function(){return false};
var imgSelect = false;

var double = document.getElementById('double');
var half = document.getElementById('half');

double.addEventListener('click', function(){
	img.style.height = 2 * img.height + 'px';
})


half.addEventListener('click', function(){
	img.style.height = 0.5 * img.height + 'px';
})

document.addEventListener('mousedown', function(event){
	console.log(event)
	if (event.target.id == 'tester') {
		imgSelect = true;
	}
})

document.addEventListener('mouseup', function(){
	imgSelect = false;
})
document.addEventListener('mousemove', function(event){
	if (imgSelect == true){
		console.log(event)
		if (event.movementY != 0) {
			img.style.height = (1 + (0.003 * event.movementY)) * img.height + 'px';
		}
		if (event.movementX != 0) {
			img.style.width = (1 + (0.003 * event.movementX)) * img.width + 'px';
		}
		if (event.movementX < 0) {
			img.style.width = 0.97 * img.width + 'px';
		}
	}
})