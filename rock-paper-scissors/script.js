Math.random();
var landing = document.querySelector("body > div.container.landing");
var score = "0";
function start_game() {
    var Game_html = `
    <div class="row scoreboard-cont">
    <div class="col">
        <h2>Rock</h2>
        <h2>Paper</h2>
        <h2>Scissors</h2>
    </div>
    <div class="col score-cont">
        <div class = "col scoreboard">
            <div class="row">
                <div class="col">
                        Score
                    </div>
                </div>
                <div class="row">
                    <div class="col score-num">
                        ${score}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row picks">
    <div class="row rock-paper">
        <div class="col">
            <img src="./images/rock-removebg-preview.png" alt="" class="img-fluid pick-element" onclick="pick_rock(); game();">
        </div>
        <div class="col">
            <img src="./images/paper-removebg-preview.png" alt="" class="img-fluid pick-element" onclick="pick_paper(); game();">
        </div>
    </div>
    <div class="row scissors">
        <div class="col">
            <img src="./images/scissor-removebg-preview.png" alt="" class="img-fluid pick-element" onclick="pick_scissors(); game();">
        </div>
    </div>
</div>
</div>
    `;
    landing.innerHTML = Game_html;
}
var img_pick = "";
var img_house = "";
var picked = 0;
var result = "";
function rule(picked, enemy){
    if (picked == 2 & enemy == 1) {
        score++;
        result = "YOU WIN";
    } else if (picked == 1 & enemy == 3) {
        score++;
        result = "YOU WIN";
    } else if (picked == 3 & enemy == 2) {
        score++;
        result = "YOU WIN";
    } else if(picked == enemy){
        result = "DRAW";
    } else {
        result = "YOU LOST";
    };
}

function house_img(enemy){
    if (enemy == 1){
        img_house = `<img src="./images/rock-removebg-preview.png" alt="" class="img-fluid enemy-pick">`;
    } else if (enemy == 2){
        img_house = `<img src="./images/paper-removebg-preview.png" alt="" class="img-fluid enemy-pick">`;
    } else if (enemy == 3){
        img_house = `<img src="./images/scissor-removebg-preview.png" alt="" class="img-fluid enemy-pick">`;
    }
}
function pick_rock() {
    picked = 1;
    img_pick = `<img src="./images/rock-removebg-preview.png" alt="" class="img-fluid">`;
}
function pick_paper() {
    picked = 2;
    img_pick = `<img src="./images/paper-removebg-preview.png" alt="" class="img-fluid">`;
}
function pick_scissors() {
    picked = 3;
    img_pick = `<img src="./images/scissor-removebg-preview.png" alt="" class="img-fluid">`;
}
var choose = ['rock', 'paper', 'scissors'];
function game(){
    
    var enemy = Math.floor(Math.random() * 3) + 1;
    house_img(enemy);
    rule(picked, enemy);
    var battle = `
    <div class="row scoreboard-cont">
        <div class="col">
            <h2>Rock</h2>
            <h2>Paper</h2>
            <h2>Scissors</h2>
        </div>
        <div class="col score-cont">
            <div class = "col scoreboard">
                <div class="row">
                        <div class="col">
                            Score
                        </div>
                    </div>
                    <div class="row">
                        <div class="col score-num">
                            ${score}
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="row game">
        <div class="col">
            <h3>YOU PICKED</h3>
            ${img_pick}
        </div>
        <div class="col play-ig">
            <h4>${result}</h4>
            <button class="Play-btn" id="play-again" onclick="start_game()">PLAY AGAIN</button>
        </div>
        <div class="col">
            <h3>THE HOUSE PICKED</h3>
            ${img_house}
        </div>
    </div>
    <div class="row game-phone">
        <div class="col">
            <h3>YOU PICKED</h3>
            ${img_pick}
        </div>
        <div class="col">
            <h3>THE HOUSE PICKED</h3>
            ${img_house}
        </div>
        <div class="row">
            <div class="col play-ig">
                <h4>${result}</h4>
            <button class="Play-btn" id="play-again" onclick="start_game()">PLAY AGAIN</button>
        </div>
    </div>
    </div>
    `;
    landing.innerHTML = battle;
}
