// Iteration 8: Making scoreboard functional
let params = new URLSearchParams(window.location.search);

let score = params.get("score")
let scoreboard = document.getElementById("score-board")
scoreboard.textContent = score;




let play_btn=document.getElementById("play-again-button")
play_btn.onclick= () =>{
    window.location.href = "game.html"
}

