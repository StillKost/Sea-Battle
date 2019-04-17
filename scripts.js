//по анализу данных!!!
//x - то что влияет y - незавсимая
$(document).ready(function (argument) {
	for (var i = 0; i < 10; i++){
		$(".field").append('<div class="field-row"><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div></div>');
	}


	//5 - 1p 4 - 2p 3 - 3p 2 - 4p 1 - 5p
	
	//раскидываю однопалубные юзеру

	//поле игрока по квадратам
	var userSquares = $("#user-user").find(".square");

	var cpuUserSquares = $("#cpu-user").find(".square");
	var cpuSquares = $("#cpu-cpu").find(".square");
	var userCpuSquares = $("#user-cpu").find(".square");

	//матрицы 10х10
	var userField = TenToTen(userSquares, 10);
	var userCpuField = TenToTen(userCpuSquares, 10);
	//раскидываю однопаллубные
	for(var i = 0; i < userField.length; i++){
		if(i % 2 == 0){
			var random = RandomInt(0,10);
			$(userField[i][random]).addClass('ship-single');
			$(userCpuField[i][random]).addClass('ship-hidden');
		}
	}
	var anySquares = $("#user-user").find('.square:not(.ship-single)');
	//раскидываю двухпаллубные
	for(var i = 0; i < anySquares.length; i++){
		for(var j = 0; j < anySquares.length; j++){
			var flag = RandomInt(0,100) % 2 ? true : false;
		}
	}






	function TenToTen(input, size){
	  for(var x, i = 0, c = -1, l = input.length, n = []; i < l; i++){  
	    (x = i % size) ? n[c][x] = input[i] : n[++c] = [input[i]];
	  }
	  return n;
	}

	function RandomInt(min, max) {
  		return Math.floor(Math.random() * (max - min)) + min;
	}
	
});