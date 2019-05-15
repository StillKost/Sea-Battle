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
	var cpuField = TenToTen(cpuSquares, 10);

	var userCpuF = TenToTen(userCpuSquares, 10);
	var cpuUserSquaresF = TenToTen(cpuUserSquares, 10);


	//пятипаллубный
	$(userField[0][0]).addClass('ship-five').addClass('ship'); //$(userCpuF[0][0]).addClass('ship-hidden');
	$(userField[1][0]).addClass('ship-five').addClass('ship'); //$(userCpuF[1][0]).addClass('ship-hidden');
	$(userField[2][0]).addClass('ship-five').addClass('ship'); //$(userCpuF[2][0]).addClass('ship-hidden');
	$(userField[3][0]).addClass('ship-five').addClass('ship'); //$(userCpuF[3][0]).addClass('ship-hidden');
	$(userField[4][0]).addClass('ship-five').addClass('ship'); //$(userCpuF[4][0]).addClass('ship-hidden');
	//четырехпаллубные
	$(userField[0][5]).addClass('ship-four').addClass('ship'); //$(userCpuF[0][5]).addClass('ship-hidden');
	$(userField[0][4]).addClass('ship-four').addClass('ship'); //$(userCpuF[0][4]).addClass('ship-hidden');
	$(userField[0][2]).addClass('ship-four').addClass('ship'); //$(userCpuF[0][2]).addClass('ship-hidden');
	$(userField[0][3]).addClass('ship-four').addClass('ship'); //$(userCpuF[0][3]).addClass('ship-hidden');

	$(userField[5][5]).addClass('ship-four').addClass('ship'); //$(userCpuF[5][5]).addClass('ship-hidden');
	$(userField[6][5]).addClass('ship-four').addClass('ship'); //$(userCpuF[6][5]).addClass('ship-hidden');
	$(userField[7][5]).addClass('ship-four').addClass('ship'); //$(userCpuF[7][5]).addClass('ship-hidden');
	$(userField[8][5]).addClass('ship-four').addClass('ship'); //$(userCpuF[8][5]).addClass('ship-hidden');
	//трехпаллубные
	$(userField[4][2]).addClass('ship-triple').addClass('ship'); //$(userCpuF[4][2]).addClass('ship-hidden');
	$(userField[2][2]).addClass('ship-triple').addClass('ship'); //$(userCpuF[2][2]).addClass('ship-hidden');
	$(userField[3][2]).addClass('ship-triple').addClass('ship'); //$(userCpuF[3][2]).addClass('ship-hidden');

	$(userField[5][9]).addClass('ship-triple').addClass('ship').addClass('ship'); //$(userCpuF[5][9]).addClass('ship-hidden');
	$(userField[6][9]).addClass('ship-triple').addClass('ship').addClass('ship'); //$(userCpuF[6][9]).addClass('ship-hidden');
	$(userField[7][9]).addClass('ship-triple').addClass('ship').addClass('ship'); //$(userCpuF[7][9]).addClass('ship-hidden');

	$(userField[9][9]).addClass('ship-triple').addClass('ship').addClass('ship'); //$(userCpuF[9][9]).addClass('ship-hidden');
	$(userField[9][8]).addClass('ship-triple').addClass('ship').addClass('ship'); //$(userCpuF[9][8]).addClass('ship-hidden');
	$(userField[9][7]).addClass('ship-triple').addClass('ship').addClass('ship'); //$(userCpuF[9][7]).addClass('ship-hidden');

	//двухпаллубные
	$(userField[5][7]).addClass('ship-double').addClass('ship'); //$(userCpuF[5][7]).addClass('ship-hidden');
	$(userField[4][7]).addClass('ship-double').addClass('ship'); //$(userCpuF[4][7]).addClass('ship-hidden'); 

	$(userField[1][9]).addClass('ship-double').addClass('ship'); //$(userCpuF[1][9]).addClass('ship-hidden');
	$(userField[1][8]).addClass('ship-double').addClass('ship'); //$(userCpuF[1][8]).addClass('ship-hidden');

	$(userField[6][1]).addClass('ship-double').addClass('ship'); //$(userCpuF[5][7]).addClass('ship-hidden');
	$(userField[6][2]).addClass('ship-double').addClass('ship'); //$(userCpuF[5][7]).addClass('ship-hidden');

	$(userField[9][2]).addClass('ship-double').addClass('ship'); //$(userCpuF[9][2]).addClass('ship-hidden');
	$(userField[8][2]).addClass('ship-double').addClass('ship'); //$(userCpuF[8][2]).addClass('ship-hidden');
	//однопаллубные
	$(userField[7][7]).addClass('ship-single').addClass('ship'); //$(userCpuF[7][7]).addClass('ship-hidden');
	$(userField[3][9]).addClass('ship-single').addClass('ship'); //$(userCpuF[3][9]).addClass('ship-hidden');
	$(userField[8][0]).addClass('ship-single').addClass('ship'); //$(userCpuF[8][0]).addClass('ship-hidden');
	$(userField[2][6]).addClass('ship-single').addClass('ship'); //$(userCpuF[2][6]).addClass('ship-hidden');
	$(userField[3][4]).addClass('ship-single').addClass('ship'); //$(userCpuFaddClass('ship-hidden');


	////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////

	//пятипаллубный
	$(cpuField[9][0]).addClass('ship-five').addClass('ship');
	$(cpuField[8][0]).addClass('ship-five').addClass('ship');
	$(cpuField[7][0]).addClass('ship-five').addClass('ship');
	$(cpuField[6][0]).addClass('ship-five').addClass('ship');
	$(cpuField[5][0]).addClass('ship-five').addClass('ship');
	//четырехпаллубные
	$(cpuField[0][5]).addClass('ship-four').addClass('ship');
	$(cpuField[0][4]).addClass('ship-four').addClass('ship');
	$(cpuField[0][2]).addClass('ship-four').addClass('ship');
	$(cpuField[0][3]).addClass('ship-four').addClass('ship');

	$(cpuField[6][5]).addClass('ship-four').addClass('ship');
	$(cpuField[6][2]).addClass('ship-four').addClass('ship');
	$(cpuField[6][3]).addClass('ship-four').addClass('ship');
	$(cpuField[6][4]).addClass('ship-four').addClass('ship');
	//трехпаллубные
	$(cpuField[2][4]).addClass('ship-triple').addClass('ship');
	$(cpuField[2][3]).addClass('ship-triple').addClass('ship');
	$(cpuField[2][2]).addClass('ship-triple').addClass('ship');

	$(cpuField[3][9]).addClass('ship-triple').addClass('ship');
	$(cpuField[4][9]).addClass('ship-triple').addClass('ship');
	$(cpuField[5][9]).addClass('ship-triple').addClass('ship');

	$(cpuField[8][5]).addClass('ship-triple').addClass('ship');
	$(cpuField[8][6]).addClass('ship-triple').addClass('ship');
	$(cpuField[8][7]).addClass('ship-triple').addClass('ship');

	//двухпаллубные
	$(cpuField[5][7]).addClass('ship-double').addClass('ship');
	$(cpuField[4][7]).addClass('ship-double').addClass('ship');

	$(cpuField[0][9]).addClass('ship-double').addClass('ship');
	$(cpuField[0][8]).addClass('ship-double').addClass('ship');

	$(cpuField[4][2]).addClass('ship-double').addClass('ship');
	$(cpuField[4][3]).addClass('ship-double').addClass('ship');

	$(cpuField[9][2]).addClass('ship-double').addClass('ship');
	$(cpuField[8][2]).addClass('ship-double').addClass('ship');
	//однопаллубные
	$(cpuField[7][9]).addClass('ship-single').addClass('ship');
	$(cpuField[4][5]).addClass('ship-single').addClass('ship');
	$(cpuField[0][0]).addClass('ship-single').addClass('ship');
	$(cpuField[2][6]).addClass('ship-single').addClass('ship');
	$(cpuField[3][0]).addClass('ship-single').addClass('ship');

	$(cpuField[9][0]).addClass('ship-five').addClass('ship');
	$(cpuField[8][0]).addClass('ship-five').addClass('ship');
	$(cpuField[7][0]).addClass('ship-five').addClass('ship');
	$(cpuField[6][0]).addClass('ship-five').addClass('ship');
	$(cpuField[5][0]).addClass('ship-five').addClass('ship');
	//четырехпаллубные
	$(cpuField[0][5]).addClass('ship-four').addClass('ship');
	$(cpuField[0][4]).addClass('ship-four').addClass('ship');
	$(cpuField[0][2]).addClass('ship-four').addClass('ship');
	$(cpuField[0][3]).addClass('ship-four').addClass('ship');

	$(cpuField[6][5]).addClass('ship-four').addClass('ship');
	$(cpuField[6][2]).addClass('ship-four').addClass('ship');
	$(cpuField[6][3]).addClass('ship-four').addClass('ship');
	$(cpuField[6][4]).addClass('ship-four').addClass('ship');
	//трехпаллубные
	$(cpuField[2][4]).addClass('ship-triple').addClass('ship');
	$(cpuField[2][3]).addClass('ship-triple').addClass('ship');
	$(cpuField[2][2]).addClass('ship-triple').addClass('ship');

	$(cpuField[3][9]).addClass('ship-triple').addClass('ship');
	$(cpuField[4][9]).addClass('ship-triple').addClass('ship');
	$(cpuField[5][9]).addClass('ship-triple').addClass('ship');

	$(cpuField[8][5]).addClass('ship-triple').addClass('ship');
	$(cpuField[8][6]).addClass('ship-triple').addClass('ship');
	$(cpuField[8][7]).addClass('ship-triple').addClass('ship');

	////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////

	//пятипаллубный
	$(userCpuF[9][0]).addClass('ship-hidden').addClass('ship').attr('name','9-0');
	$(userCpuF[8][0]).addClass('ship-hidden').addClass('ship').attr('name','8-0');
	$(userCpuF[7][0]).addClass('ship-hidden').addClass('ship').attr('name','7-0');
	$(userCpuF[6][0]).addClass('ship-hidden').addClass('ship').attr('name','6-0');
	$(userCpuF[5][0]).addClass('ship-hidden').addClass('ship').attr('name','5-0');
	//четырехпаллубные
	$(userCpuF[0][5]).addClass('ship-hidden').addClass('ship').attr('name','0-5');
	$(userCpuF[0][4]).addClass('ship-hidden').addClass('ship').attr('name','0-4');
	$(userCpuF[0][2]).addClass('ship-hidden').addClass('ship').attr('name','0-3');
	$(userCpuF[0][3]).addClass('ship-hidden').addClass('ship').attr('name','0-2');

	$(userCpuF[6][5]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[6][2]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[6][3]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[6][4]).addClass('ship-hidden').addClass('ship');
	//трехпаллубные
	$(userCpuF[2][4]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[2][3]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[2][2]).addClass('ship-hidden').addClass('ship');

	$(userCpuF[3][9]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[4][9]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[5][9]).addClass('ship-hidden').addClass('ship');

	$(userCpuF[8][5]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[8][6]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[8][7]).addClass('ship-hidden').addClass('ship');

	//двухпаллубные
	$(userCpuF[5][7]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[4][7]).addClass('ship-hidden').addClass('ship');

	$(userCpuF[0][9]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[0][8]).addClass('ship-hidden').addClass('ship');

	$(userCpuF[4][2]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[4][3]).addClass('ship-hidden').addClass('ship');

	$(userCpuF[9][2]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[8][2]).addClass('ship-hidden').addClass('ship');
	//однопаллубные
	$(userCpuF[7][9]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[4][5]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[0][0]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[2][6]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[3][0]).addClass('ship-hidden').addClass('ship');

	$(userCpuF[9][0]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[8][0]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[7][0]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[6][0]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[5][0]).addClass('ship-hidden').addClass('ship');
	//четырехпаллубные
	$(userCpuF[0][5]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[0][4]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[0][2]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[0][3]).addClass('ship-hidden').addClass('ship');

	$(userCpuF[6][5]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[6][2]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[6][3]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[6][4]).addClass('ship-hidden').addClass('ship');
	//трехпаллубные
	$(userCpuF[2][4]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[2][3]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[2][2]).addClass('ship-hidden').addClass('ship');

	$(userCpuF[3][9]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[4][9]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[5][9]).addClass('ship-hidden').addClass('ship');

	$(userCpuF[8][5]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[8][6]).addClass('ship-hidden').addClass('ship');
	$(userCpuF[8][7]).addClass('ship-hidden').addClass('ship');




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