var requestAnimFrame = (function(){
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function init(){// create world, load media, start main
	loadImages();
	initWorld();
	//loadSounds();
	// new world

}

function initWorld(){
	// Create a World object path to the file, that keeps the paths to all the levels.
	var world = new World("Config//configLevels.txt", 0);
	world.loadConfigFile();
	// TestFileReading
	/*
	fr = new TextReader();
	fr.readFile("Config//configLevels.txt");
	*/
	
}

var lastTime,a;
function main(){
	var now = Date.now();
	var dt = (now - lastTime) / 1000.0;
	
	document.getElementById("canvas").getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
	for(var i = 0; i < a.length; i++){
		a[i].update(dt);
		a[i].draw();
	}
// level - > load next lvl if curr completed
// menu ? 
/*	
	draw();
*/
	lastTime = now;
	input.clearKeys();
	requestAnimFrame(main);
}
function loadImages(){
	Images['nonCollidable']['background'] = new Image();
	Images['nonCollidable']['background'].src = 'Art/Art/backgrounds/cosmos.png';

	Images['player']['walk'][0] = new Image();
	Images['player']['walk'][0].src = 'Art/Art/character/walk/walk0001.png';

	Images['player']['dead'] = new Image();
	Images['player']['dead'].src = 'Art/Art/character/dead.png';

	Images['player']['jump'] = new Image();
	Images['player']['jump'].src = 'Art/Art/character/jump.png';

	Images['player']['still'] = new Image();
	Images['player']['still'].src = 'Art/Art/character/front.png';

	Images['platform']['ground'] = new Image();
	Images['platform']['ground'].src = 'Art/Art/tiles/ground.png';
	Images['platform']['grass'] = new Image();
	Images['platform']['grass'].src = 'Art/Art/tiles/ground_dirt.png';

	Images['slime'][0] = new Image();
	Images['slime'][0].src = 'Art/Art/enemies/slime_normal.png';

	Images['coin'][0] = new Image();
	Images['coin'][0].src = 'Art/Art/coin/1.png';
}



/*function loadImages(configFileName){
	var file = new File(configFileName);
	if (!file){
		console.log("Cannot open file: " + configFileName);
	}
	file.open("r"); // open file with read access
	var str = "";
	while (!file.eof) {
		// read each line of text
		str = file.readln();
		if (str == 'background'){
			Background.Images['background'] = new Image();
		str = file.readln();
		console.log(str);
			Background.Images['background'].src = str;
		}
		else if (str == 'player'){
			str = file.readln();
			var n = Number(str) - 2;
			for(i = 0; i < n; i++){
				Player.Images['walk'][i] = new Image();
				Player.Images['walk'][i].src = file.readln();
			}
			Player.Images['jump'] = new Image();
			Player.Images['jump'].src = file.readln();
			Player.Images['dead'] = new Image();
			Player.Images['dead'].src = file.readln();
			Player.Images['dead'].onload = function () {
		console.log("LOADED");
};

		}
		else if (str == 'tiles'){
			return;
		}
	}



	file.close();
} */