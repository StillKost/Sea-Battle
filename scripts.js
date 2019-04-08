$(document).ready(function (argument) {
	for (var i = 0; i < 10; i++){
		$(".field").append('<div class="field-row"><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div></div>');
	}
	//5 - 1p 4 - 2p 3 - 3p 2 - 4p 1 - 5p
	
	//раскидываю однопалубные юзеру
	var userSquares = $("#user-user").find(".square");
	var userMatrix = TenToTen(userSquares, 10)

	for(var i = 0; i < userSquares.length; i++){
		if(i % 20 == 0){
			var rand = Math.floor(Math.random() * userSquares.length);
			$(userSquares[rand]).addClass('ship');
		}
	}
	//раскидываю однопалубные cpu
	var cpuSquares = $("#cpu-cpu").find(".square");
	for (var i = 0; i < cpuSquares.length; i++) {
		if(i % 20 == 0){
			var rand = Math.floor(Math.random() * userSquares.length);
			$(cpuSquares[rand]).addClass('ship');
		}
	}










	function TenToTen(input, size){
	  for(var x, i = 0, c = -1, l = input.length, n = []; i < l; i++){  
	    (x = i % size) ? n[c][x] = input[i] : n[++c] = [input[i]];
	  }
	  return n;
	}
	
});