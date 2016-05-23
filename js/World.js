class World {

	constructor(levelsPath, currLevel) {
		this.levelsPath = "Config//configLevels.txt";
		this.currLevel = currLevel;
		this.maxLevel = 0;
		this.scaleFactor = 0.6;
		this.arrayOfLevelPaths = "";
		//console.log(levelsPath);

	}

	loadConfigFile(){
		this.arrayOfLevelPaths = readFile(this.levelsPath, "arrayOfLines");
		
		this.maxLevel = this.arrayOfLevelPaths.length;
		if(this.currLevel >= this.maxLevel){
			alert("ERROR s01: currLevel >= maxLevel");
		}
		console.log(this.arrayOfLevelPaths);
	}

	loadLevel(level){
		
		var parser = new DOMParser();

		var doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
		
	}

	nextLevel(level){

	}





}

// Needs static images
