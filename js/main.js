//------------------------------------------------------------//
//        main.js : ゲームのメイン処理                      
//      canvas.js : canvasに関する処理                     
//   charactor.js : キャラクターに関する処理（キャラ操作）   
//       enemy.js : 敵キャラに関する処理                   
//         map.jp : マップ、アイテム表示に関する処理        
//      system.js : 時間計測などゲームシステムに関する処理  
//------------------------------------------------------------//

var game = false;
var last_time;
var button = new Object();
button.start = document.getElementById('start');
button.reset = document.getElementById('reset');
button.ranking = document.getElementById('ranking');
const timer = document.getElementById('timer');

//スコア登録画面
const popupWrapper = document.getElementById('popup_wrapper');
const popupclose = document.getElementById('popup_close');
const save = document.getElementById('save');
//ランキング表示
const rankingWrapper = document.getElementById('ranking_wrapper');
const rankingclose = document.getElementById('ranking_close');
//ゲームオーバー画面
const gameoverWrapper = document.getElementById('gameover_wrapper');
const restart = document.getElementById('restart');
const gameoverclose = document.getElementById('gameover_close');

var start_time = 0;
var last_time = 0;

//main関数
function main() {
	if(game === true){
		var now_time = performance.now();
		Timer(now_time, last_time);
		console.log(now_time)
		//  キーボードが押された時、keydownfunc関数（かんすう）を呼び出す
		addEventListener( "keydown", keydownfunc );
	
		// キーボードがはなされた時、keyupfunc関数（かんすう）を呼び出す
		addEventListener( "keyup", keyupfunc );
	
		//キャラの動き
		MoveCharactor();
	
		//敵の動き
		for(var e = 0; e < enemyNum; e++){MoveEnemy(e);}
		
		//更新後、敵とキャラの画面を再表示
		RePrintImage();
		
		//ワープの表示
		if(item.get === item.Num){PrintWarp();}

		if(fin === true){
			SavePopup();
			popupWrapper.style.display = 'block';
			fin = false;
		}

		//ゲームオーバー処理
		 CharaLife();
		 if(chara.life < 0){
			game = false;
			gameoverWrapper.style.display = 'block';
		 }
	
	}
		  requestAnimationFrame(main);
}
			
		requestAnimationFrame(main);

//ゲームスタート
button.start.onclick = function() {
game = true;

ResetEnemy();
ResetMap();
ResetCharactor();
ResetTime();
PrintImage();
last_time = performance.now();
};

button.reset.onclick = function() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
game = false;
Result();
$("#timer").html("");
};

restart.onclick = function() {
	game = true;
	ResetEnemy();
	ResetMap();
	ResetCharactor();
	ResetTime();
	PrintImage();
	last_time = performance.now();
	gameoverWrapper.style.display = 'none';
};


gameoverclose.onclick = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	game = false;
	Result();
	gameoverWrapper.style.display = 'none';
	$("#timer").html("");
};

	button.ranking.onclick = function() {
		DisplayRanking()
		rankingWrapper.style.display = 'block';
		};

	popupclose.onclick = function() {
		  popupWrapper.style.display = 'none';
	  };

	  rankingclose.onclick = function() {
		rankingWrapper.style.display = 'none';
	};

		save.onclick = function() {
			Save();
			popupWrapper.style.display = 'none';
		};

	function PrintImage(){
		PrintMapImage();
		PrintCharactorImage();
		PrintEnemyImage()
	}
	
	function RePrintImage(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		RePrintMapImage();
		PrintCharactorImage();
		RePrintEnemyImage();
	}