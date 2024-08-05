var chara = new Object();
var key = new Object();
var fin = false;

function ResetCharactor(){
chara.x = 32;
chara.y = 32;
chara.move = 0;
chara.Width = 32; // キャラクターの幅
chara.Height = 32; // キャラクターの高さ
chara.speed = 4;
chara.life = 3;

// キー入力

key.up = false;
key.down = false;
key.left = false;
key.right = false;


}

//キャラ表示
function PrintCharactorImage(){
	ctx.drawImage( charImage, 0, 0, 32, 32, chara.x + ini.x, chara.y + ini.y, 32, 32 );
}

// キーボードが押されたときに呼び出される関数（かんすう）
function keydownfunc( event ) {
	var key_code = event.keyCode;
	if( key_code === 37 ) key.left = true;		 //「左ボタン」が押されたとき、key.leftをtrueにする
	if( key_code === 38 ) key.up = true;		 //「上ボタン」が押されたとき、key.upをtrueにする
	if( key_code === 39 ) key.right = true;		// 「右ボタン」が押されたとき、key.rightをtrueにする
	if( key_code === 40 ) key.down = true;		// 「下ボタン」が押されたとき、key.downをtrueにする
}
	
// キーボードがはなされたときに呼び出される関数
function keyupfunc( event ) {
	var key_code = event.keyCode;
	if( key_code === 37 ) key.left = false;		 //「左ボタン」がはなされたとき、key.leftをfalseにする
	if( key_code === 38 ) key.up = false;  		// 「上ボタン」がはなされたとき、key.upをfalseにする
	if( key_code === 39 ) key.right = false		// 「右ボタン」がはなされたとき、key.rightをfalseにする;
	if( key_code === 40 ) key.down = false;		// 「下ボタン」がはなされたとき、key.downをfalseにする
}

function MoveCharactor(){
if ( chara.move === 0 ) {
	var chara_juge_x = (chara.x)/32;
	var chara_juge_y = (chara.y)/32;

	if ( key.left === true) {
		chara_juge_x -= 1;
		if(map[chara_juge_y][chara_juge_x]  !== 2){
		chara.move = 32;
		pressed_key = 'left';
		}
		if(map[chara_juge_y][chara_juge_x] === 3){ItemGet(chara_juge_y, chara_juge_x);}
		if(map[chara_juge_y][chara_juge_x] === 4){fin = true;}
	}

	if ( key.up == true ) {
		chara_juge_y -= 1;
		if(map[chara_juge_y][chara_juge_x]  !== 2){
			chara.move = 32;
			pressed_key = 'up';
		}
		if(map[chara_juge_y][chara_juge_x] === 3){ItemGet(chara_juge_y, chara_juge_x)}
		if(map[chara_juge_y][chara_juge_x] === 4){fin = true;}
	}

	if ( key.right === true ) {
		chara_juge_x += 1;
		if(map[chara_juge_y][chara_juge_x]  !== 2){
			chara.move = 32;
			pressed_key = 'right';
		}
		if(map[chara_juge_y][chara_juge_x] === 3){ItemGet(chara_juge_y, chara_juge_x)}
		if(map[chara_juge_y][chara_juge_x] === 4){fin = true;}
		}
		
	if ( key.down == true ) {
		chara_juge_y += 1;
		if(map[chara_juge_y][chara_juge_x]  !== 2){
			chara.move = 32;
			pressed_key = 'down';
		}
		if(map[chara_juge_y][chara_juge_x] === 3){ItemGet(chara_juge_y, chara_juge_x)}
		if(map[chara_juge_y][chara_juge_x] === 4){fin = true;}
		}
	}
			
if (chara.move > 0) {
	chara.move -= chara.speed;
	if ( pressed_key == 'left' ) chara.x -= chara.speed;
	if ( pressed_key == 'up' ) chara.y -= chara.speed;
	if ( pressed_key === 'right' ) chara.x += chara.speed;
	if ( pressed_key == 'down' ) chara.y += chara.speed;
}
}

//キャラクターとワープのあたり判定
async function CharaLife(){
	for(var n = 0; n < enemyNum; n++){
		if(Math.abs(chara.x - enemy[n][1]) < 32){
		if(Math.abs(chara.y - enemy[n][2]) < 32){chara.life -= 1;}
		}	
	}
}

//敵キャラとのあたり判定
async function CharaLife(){
	for(var n = 0; n < enemyNum; n++){
		if(Math.abs(chara.x - enemy[n][1]) < 32){
		if(Math.abs(chara.y - enemy[n][2]) < 32){chara.life -= 1;}
		}	
	}
}
