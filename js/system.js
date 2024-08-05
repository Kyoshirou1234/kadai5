let d = new Date();
const time_text = "経過時間　"
timer = document.getElementById('timer');

var time = 0;
var min = 0;
var sec = 0;
var text;

var text_min = "";
var text_sec = "";
var text_time = "";

var ScoreNum = 0;

function ResetTime(){
	time = 0;
    min = 0;
    sec = 0;
}

function Timer(now, last){
    time = Math.floor((now - last));

    // 分・秒・ミリ秒を計算
    CalTime(time);
    
    $("#timer").html("経過時間 " + text_time);

}

function CalTime(time){
    min = Math.floor((time / 1000) / 60);
    sec = Math.floor((time / 1000 ) % 60);

    if(sec < 10){text_sec = "0" + sec;}
    else{text_sec = sec;}

    if(min < 10){text_min = "0" + min;}
    else{text_min = min;}

    text_time = text_min +  ":" + text_sec;
}

function SavePopup() {
    Result();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game = false;
    
};

    function Finish(){

        SavePopup();
    }

//ポップアップ表示
function Result(){
    var day = new Date();
    var text_day = day.getFullYear() + "/" + (day.getMonth()+1) + "/" + day.getDate()  + " " + day.getHours() +":" + day.getMinutes();
    $("#date").html("登録日　" + text_day);
    $("#result").html("結果　" + text_time);
}

function Save(){
var day = new Date();
var ScoreNum = localStorage.length;
ScoreNum++;
var text_day = day.getFullYear() + "/" + (day.getMonth()+1) + "/" + day.getDate()  + " " + day.getHours() +":" + day.getMinutes();
var name = document.getElementById('nickname');
var text_name = name.value;
var text_strage = ScoreNum + "," + time + "," + text_day + "," + text_name;
localStorage.setItem(ScoreNum,text_strage);
}


function DisplayRanking(){
//3.ページ読み込み：保存データ取得表示
$("#list").html("");
var ranking = new Array(localStorage.length);
for(var i = 0; i < localStorage.length; i++) {
    ranking[i] = new Array(4);
    var key   = localStorage.key(i);
    var value = localStorage.getItem(key); 
    console.log(value);
	ranking[i] = value.split(',');
    ranking[i][1] = Number(ranking[i][1]);
    ranking.sort((a,b) => {
    return(a[1] - b[1])})
}
    console.log(ranking)
    var text = '<tr><th>'+"ランキング"+'</th><td>'+"日時"+'</th><td>'+"ニックネーム"+'</th><td>'+"結果"+'</td></tr>';
    $("#list").html(text);
    for(var i = 0; i < localStorage.length; i++) {
        var rank = "第" + (i + 1) + "位"
        CalTime(ranking[i][1]);
        display = '<tr><th>'+rank+'</th><td>'+ranking[i][2]+'</th><td>'+ranking[i][3]+'</th><td>'+text_time+'</td></tr>';
        $("#list").append(display);
    }
}