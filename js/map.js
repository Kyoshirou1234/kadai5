//初期値ずれ
const ini = new Object();
ini.x = 30;
ini.y = 30;

var map;
var item = new Object();
var warp = new Object();

function ResetMap(){
//item
item.Num = 30;
item.complete = false;
item.get = 0;
item.x = 0;
item.y = 0;

//Warp
warp.x = 0;
warp.y = 0;

//マップの作成
map = [
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
	[2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2],
	[2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2],
	[2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2],
	[2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
	[2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
	[2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2],
	[2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
	];
}

//マップ表示
function PrintMapImage(){
	//map表示
	for (var y=0; y<map.length; y++) {
		for (var x=0; x<map[y].length; x++) {
			ctx.drawImage( mapchip, 0, 0, 32, 32, 32*x + ini.x, 32*y + ini.y, 32, 32 );
			if ( map[y][x] === 2 ) ctx.drawImage( mapchip, 64, 32, 32, 32, 32*x + ini.x, 32*y + ini.y, 32, 32 );
		}
	}

	for(var i = 0; i < item.Num; ){
		do {
			item.x = (Math.floor(Math.random() * (map[0].length - 2)) + 1);
			item.y = (Math.floor(Math.random() * (map.length - 2)) + 1);
		}while (map[item.y][item.x] !== 1);
	

	ctx.drawImage( itemImage, 32, 32, 32, 32, 32*item.x + ini.x, 32*item.y + ini.y, 32, 32 );
	map[item.y][item.x] = 3;
	i++;	
	}
}

function RePrintMapImage(){
	//map表示
	for (var y=0; y<map.length; y++) {
		for (var x=0; x<map[y].length; x++) {
			ctx.drawImage( mapchip, 0, 0, 32, 32, 32*x + ini.x, 32*y + ini.y, 32, 32 );
			if ( map[y][x] === 2 ) ctx.drawImage( mapchip, 64, 32, 32, 32, 32*x + ini.x, 32*y + ini.y, 32, 32 );
			if ( map[y][x] === 3 ) ctx.drawImage( itemImage, 32, 32, 32, 32, 32*x + ini.x, 32*y + ini.y, 32, 32 );
			if ( map[y][x] === 4 ) ctx.drawImage( warpImage, 64, 0, 32, 32, 32*x + ini.x, 32*y + ini.y, 32, 32 );
		}
	}
}

function ItemGet(y, x){
			map[y][x] = 1;
			RePrintMapImage();
			item.get += 1;
}

function PrintWarp(){
	do {
		warp.x = (Math.floor(Math.random() * (map[0].length - 2)) + 1);
		warp.y = (Math.floor(Math.random() * (map.length - 2)) + 1);
		}while (map[warp.y][warp.x] !== 1);
	
	map[warp.y][warp.x] = 4;
	RePrintMapImage();
	
	item.get += 1;
}

