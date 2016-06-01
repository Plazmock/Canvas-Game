class World {

	constructor(levelsPath, currLevel) {
		this.levelsPath = "Config//configLevels.txt";
		this.currLevel = currLevel;
		this.maxLevel = 0;
		this.scaleFactor = 0.6;
		this.arrayOfLevelPaths = "";
		//console.log(levelsPath);
		this.map = {
			// example attribute after the map has been loaded
			// version= 1.0, orientation=orthogonal, renderorder=right-down, width=25, height=13",
			// tilewidth=42, tileheight=42, nextobjectid=1, canvasWidth=1050, canvasHeight=546, scaleFactor=0.6 
		};
		this.tiles = null;
		// level is [][][];
		this.level = null;
	}

	loadConfigFile(){
		this.arrayOfLevelPaths = readFile(this.levelsPath, "arrayOfLines");
		
		this.maxLevel = this.arrayOfLevelPaths.length - 1;
		if(this.currLevel > this.maxLevel){
			console.log("maxLevel: " + this.maxLevel + " currLevel " + this.currLevel);
			alert("ERROR s01: currLevel > maxLevel. in world.loadConfigFile");
		}
		//console.log(this.arrayOfLevelPaths);
	}

	loadLevel(){
		
		var parser = new DOMParser();
		if(this.currLevel > this.maxLevel){
			alert("ERROR s02: currLevel > maxLevel. in world.loadLevel");
		}else{
			var nextLevelPath = this.arrayOfLevelPaths[this.currLevel];
			//console.log(readFile(nextLevelPath, "text"));
			var mapFileAsXML = parser.parseFromString(readFile(nextLevelPath, "text"), "application/xml");
			//console.log(doc.getElementsByTagName("map")[0].attributes);
			
			this.loadMapInfo(mapFileAsXML);
			//console.log(this.map);
			this.loadTilesetInfo(mapFileAsXML);
			this.loadLayerInfo(mapFileAsXML);


			//console.log(x.version.name);		
			//this.map[x.version.name] = x.version.value;
			//console.log(this.map.version);
			//console.log(this.map.version);


			//console.log(doc.documentElement);
		}
		
	}


	loadMapInfo(mapFileAsXML){
		// x is the map element
		var x = mapFileAsXML.getElementsByTagName("map")[0].attributes;
		//console.log(x);

		for (var i = 0; i < x.length; i++ ){
			this.map[x[i].name] = x[i].value;
		} 
		this.map.tilewidth *= this.scaleFactor;
		this.map.tileheight *= this.scaleFactor;
		TILE = this.map.tilewidth;
		this.map['canvasWidth'] = this.map.width * this.map.tilewidth;
		this.map['canvasHeight'] = this.map.height * this.map.tileheight;

	}
	loadTilesetInfo(mapFileAsXML){
		this.tiles = mapFileAsXML.getElementsByTagName("tileset");
		for (var i = 0; i < this.tiles.length; i++ ){
			//console.log(this.tiles[i]);
		}
	}


	loadLayerInfo(mapFileAsXML){
		this.level = new Array();	
		for(var i = 0; i < this.map.height; i++ ) {
			this.level[i] = new Array();
			for(var j = 0; j < this.map.width; j++){
				this.level[i][j] = new Array();
			}
		}
		//console.log(this.level);

		var layerByLines = mapFileAsXML.getElementsByTagName("data")[0].firstChild.textContent.split(/\r?\n/);
		layerByLines.splice(0,1);


		var sf = this.scaleFactor;
		for(var i = 0; i < this.map.height; i++ ) {
			var currLine = layerByLines[i].match(/\d+/g);
			for(var j = 0; j < this.map.width; j++){
				//document.write(currLine[j] + " ");
				
				var obj = currLine[j];
				if(obj != 0){
					// the width and height of the object, both image and collisionbox since they are the same in the map
					var width = this.tiles[obj-1].attributes[2].value * sf;
					var height = this.tiles[obj-1].attributes[3].value * sf; 
				}

				switch(obj){
					case '0':
						//this.level[i][j][0] = null;
						break;
					case '1':							
						this.level[i][j][0] = new Platform(j*TILE, i*TILE, width, height, height, width, "ground", 0);
						break;
					case '2':
						this.level[i][j][0] = new Platform(j*TILE, i*TILE, width, height, height, width, "dirt", 0);
						break;
					case '3':
						this.level[i][j][0] = new Player(j*TILE, i*TILE, width, height, height, width,0,1000,1250,300,700,630);;
						break;
					case '4':
						this.level[i][j][0] = new Slime(j*TILE, (i+1)*TILE - height - 1, width, height, height, width,0, 500, 1250, 150, 600);
						break;
					case '5':
						this.level[i][j][0] = new Coin(j*TILE, i*TILE, width, height, height, width, 0);
						break;
					case '6':
						//this.level[i][j][0] = null;
						break;
					case '7':
						this.level[i][j][0] = new Fly(j*TILE, i*TILE, width, height, height, width,0, 500, 1250, 150, 600);
						break;
				}
			}
		}

		/*
		document.write("<br>");
		console.log(this.level);
		for(var i = 0; i < this.map.height; i++ ) {
			for(var j = 0; j < this.map.width; j++){
				if(this.level[i][j][0] === null){
					document.write(0 + " ");	
				} else {
					document.write(this.level[i][j][0] + " ");
				}
			}
			document.write("<br>");
		}
		*/
	}

	nextLevel(){
		this.currLevel += 1;
		if(this.currLevel > this.maxLevel){
			alert("This was the final level, you win");
		}else{
			loadLevel();
		}
	}	
}

