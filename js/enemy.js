const enemyNum = 5;
//enemy配列[Image,x,y,move,speed,pattern]

var enemy = new Array(enemyNum);

//敵キャラ変数初期化
function ResetEnemy(){
for(var y = 0; y < enemyNum; y++) {
	enemy[y] = new Array(6);
  for(var x = 0; x < 6; x++) {
    enemy[y][x] = 0;
  }
}

for(var e = 0; e < enemyNum; e++){
	enemy[e][0] = new Image();
	enemy[e][0].src = EnemyImage.src;
}

for(var e = 0; e < enemyNum; e++){
	enemy[e][4] = 4;
}
}

//敵キャラ表示
function PrintEnemyImage(){
for(var e = 0; e < enemyNum; ){
	var enemy_x, enemy_y;
do {
	enemy_x = (Math.floor(Math.random() * (map[0].length - 2)) + 1);
	enemy_y = (Math.floor(Math.random() * (map.length - 2)) + 1);
	}while (map[enemy_y][enemy_x] !== 1);
	
	ctx.drawImage( enemy[e][0], 0, 0, 32, 32, 32 * enemy_x + ini.x, 32*enemy_y + ini.y, 32, 32 );
	map[enemy_y][enemy_x] = 5;
	enemy[e][1] = 32 * enemy_x;
	enemy[e][2] = 32 * enemy_y;
	e++;
	}
}

function RePrintEnemyImage(){
	for(var j = 0; j < enemyNum; j++){
		ctx.drawImage(enemy[j][0], 0, 0, 32, 32, enemy[j][1] + ini.x, enemy[j][2] + ini.y, 32, 32);
		}
	}

//敵キャラをランダムで動かす
function MoveEnemy(n) {

	if(enemy[n][3] === 0){
	var enemy_juge_x = (enemy[n][1]) / 32;
	var enemy_juge_y = (enemy[n][2]) / 32;
	var i = 0;
    while(i < 5){
		enemy[n][5] = Math.floor(Math.random() * 4);
		if (enemy[n][5] === 0 && enemy_juge_x > 1) enemy_juge_x -= 1; 
		if (enemy[n][5] === 1 && enemy_juge_x < map[0].length - 2) enemy_juge_x += 1;
		if (enemy[n][5] === 2 && enemy_juge_y > 1) enemy_juge_y -= 1;
		if (enemy[n][5] === 3 && enemy_juge_x < map.length - 2) enemy_juge_y += 1;

		if(map[enemy_juge_y][enemy_juge_x] === 2){
			enemy_juge_x = Math.floor(enemy[n][1] / 32);
			enemy_juge_y = Math.floor(enemy[n][2] / 32);
		}
        else{
		enemy[n][3] = 32;
		break;
	   }
	   i++;
	}
	}

	if(enemy[n][3] > 0){
		enemy[n][3] -= 4
		if(enemy[n][5] === 0){
		enemy[n][1] = enemy[n][1] - 4;
        enemy[n][2] = enemy[n][2];
		}
		if(enemy[n][5] === 1){
		enemy[n][1] = enemy[n][1] + 4;
		enemy[n][2] = enemy[n][2];
		}
		if(enemy[n][5] === 2){
		enemy[n][1] = enemy[n][1];
		enemy[n][2] = enemy[n][2] - 4;
		}
		if(enemy[n][5] === 3){
		enemy[n][1] = enemy[n][1];
		enemy[n][2] = enemy[n][2] + 4;
		}
	}
		}


