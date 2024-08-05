//canvasの設定（せってい）
var canvas = document.getElementById( 'canvas' );
canvas.width = 830;		//canvasの横幅（よこはば）
canvas.height = 1000;	//canvasの縦幅（たてはば）

//コンテキストを取得（しゅとく）
var ctx = canvas.getContext( '2d' );

//Imageオブジェクト
//全体マップ
const mapchip = new Image();
mapchip.src = 'img/rich/pipo-map001.png';

//アイテム
const itemImage = new Image();
itemImage.src = 'img/rich/pipo-hikarimono007.png';

//ワープ
const warpImage = new Image();
warpImage.src = 'img/rich/pipo-hikarimono005.png';

//キャラ
const charImage = new Image();
charImage.src = "img/rich/pipo-halloweenchara2016_25.png";

const EnemyImage = new Image();
EnemyImage.src = "img/rich/pipo-halloweenchara2016_21.png";

