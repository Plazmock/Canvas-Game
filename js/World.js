class World {

	constructor(levelsPath, currLevel) {
		this.levelsPath = "Config//configLevels.txt";
		this.currLevel = currLevel;
		this.maxLevel = 0;
		this.scaleFactor = 0.6;
		this.arrayOfLevelPaths = "";
		//console.log(levelsPath);
		this.map = {
			
		};

	}

	loadConfigFile(){
		this.arrayOfLevelPaths = readFile(this.levelsPath, "arrayOfLines");
		
		this.maxLevel = this.arrayOfLevelPaths.length;
		if(this.currLevel >= this.maxLevel){
			alert("ERROR s01: currLevel >= maxLevel");
		}
		console.log(this.arrayOfLevelPaths);
	}

	loadLevel(){
		
		var parser = new DOMParser();
		if(this.currLevel >= this.maxLevel){
			alert("ERROR s01: currLevel >= maxLevel");
		}else{
			var nextLevelPath = this.arrayOfLevelPaths[this.currLevel];
			//console.log(readFile(nextLevelPath, "text"));
			var doc = parser.parseFromString(readFile(nextLevelPath, "text"), "application/xml");
			//console.log(doc.getElementsByTagName("map")[0].attributes);
			var x = doc.getElementsByTagName("map")[0].attributes;
			console.log(x.version.value);

			//console.log(doc.documentElement);
		}
		
	}

	nextLevel(){
		this.currLevel += 1;
		if(this.currLevel >= this.maxLevel){
			alert("This was the final level, you win");
		}else{
			loadLevel();
		}
	}	





}

// Needs static images
