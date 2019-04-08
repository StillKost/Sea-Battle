//по анализу данных!!!
//x - то что влияет y - незавсимая
$(document).ready(function (argument) {
	for (var i = 0; i < 10; i++){
		$(".field").append('<div class="field-row"><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div><div class="square"></div></div>');
	}
	//5 - 1p 4 - 2p 3 - 3p 2 - 4p 1 - 5p
	
	//раскидываю однопалубные юзеру

	//основное поле игрока
	var userSquares = $("#user-user").find(".square");
	//второе поле игрока
	var cpuUserSquares = $("#cpu-user").find(".square");
	//основное поле CPU
	var cpuSquares = $("#cpu-cpu").find(".square");
	//второе поле CPU
	var userCpuSquares = $("#user-cpu").find(".square");


	//основное поле игрока в виде матрицы
	var userMatrix = TenToTen(userSquares, 10);
	//основное поле CPU в виде матрицы
	var cpuMatrix = TenToTen(cpuSquares, 10);



	for(var i = 0; i < userMatrix.length; i++){
		for(var j = 0; j < userMatrix.length; j++){
			if(i % 2 == 0){
				var rand = RandomInt(0,11);
				$(userMatrix[i][rand]).addClass('ship');
				break;
			}
		}
	}








	//раскидываю однопалубные cpu
/*	var cpuSquares = $("#cpu-cpu").find(".square");
	var userCpuSquares = $("#user-cpu").find(".square");
	for (var i = 0; i < cpuSquares.length; i++) {
		if(i % 20 == 0){
			var rand = Math.floor(Math.random() * userSquares.length);
			$(cpuSquares[rand]).addClass('ship');
			$(userCpuSquares[rand]).addClass('ship-hidden');
		}
	}*/












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