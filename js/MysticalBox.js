class MysticalBox extends CollisionBox{
	constructor(x,y,imgw,imgh,h,w,hp){
		super(x,y,imgw,imgh,h,w,'mysticalBox','closed',hp);
	}	
	takeHp(){
		hp--;
		if (hp == 0) {
			state = 'opened';
			//gift();
		}
	}
}
Images['mysticalBox'] = new Array();