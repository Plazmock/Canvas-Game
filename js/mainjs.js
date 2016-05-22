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
	loadSounds();
	// new world

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

