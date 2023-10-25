// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

let play_btn = document.getElementById("play-button");
// console.log(play_btn)

play_btn.onclick= () =>{
    window.location.href = "game.html"
}

