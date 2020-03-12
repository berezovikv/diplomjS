
auto ();

var timer;

function auto (){
	timer = setTimeout(function (){
		var sl = document.getElementById('sl');
		left = left - 700;
		if (left <= -2800) {
			left = 0;
			clearTimeout(timer);
		}
		sl.style.left = left +'px';
		auto ();
	}, 3000);
}
document.getElementById('left').onclick = Left;
var left = 0;
function Left () {
  var sl = document.getElementById('sl');
  left = left - 700;
  if (left <= -2800) {
	left = 0;
	
  }
  sl.style.left= left+'px';
  clearTimeout(timer);
  auto ();
};

document.getElementById('right').onclick = Right;

function Right () {
  var sl = document.getElementById('sl');
  left = left + 700;
  if (left > 0) {
	left = -2100;
		
  }
  sl.style.left = left +'px';
  clearTimeout(timer);
  auto();
};