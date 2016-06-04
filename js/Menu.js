function pauseplay() {
	if (WON || GAMEOVER) return;
	PAUSED = !PAUSED;
}
function drawPause(){
	var cntx = (document.getElementById("canvas")).getContext("2d");
	cntx.drawImage(Images['menu']['pause'], 0, 0, world.map['canvasWidth'], world.map['canvasHeight']);
}
function drawFinal(){
	var cntx = (document.getElementById("canvas")).getContext("2d");
	if (WON){
		cntx.drawImage(Images['menu']['win'], 0, 0, world.map['canvasWidth'], world.map['canvasHeight']);
	}
	else{
		cntx.drawImage(Images['menu']['gameover'], 0, 0, world.map['canvasWidth'], world.map['canvasHeight']);
	}
}
function drawHUD(){
	var cntx = (document.getElementById("canvas")).getContext("2d");
	var space = 2;
	var startX = 5;
	var startY = 5;
	var x = 5,y = 5;
	var size = 20;
	var full = Player.currentLives;
	var empty = Player.lives - Player.currentLives;
	var coins = Player.coins.toString(); // 

	for(var i = 0; i < full; i++){
		cntx.drawImage(Images['hud']['heartFull'], x, y, size, size);
		x += size + 2;
	}
	for(var i = 0; i < empty; i++){
		cntx.drawImage(Images['hud']['heartEmpty'], x, y, size, size);
		x += size + 2;
	}
	x = 5; 
	y = 5 + size + 2;
	cntx.drawImage(Images['hud']['coins'], x, y, size, size);
	x += size + 2;

	for(var i = 0; i < coins.length; i++){
		cntx.drawImage(Images['hud'][coins[i]], x, y, size, size);
		x += size + 2;
	}

}

Images['menu'] = new Array();
Images['hud'] = new Array();
