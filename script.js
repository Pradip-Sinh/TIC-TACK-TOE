let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newBtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;//player x,player O

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if (turn0) {
            //player 0
            box.innerText = "O";
            turn0 = false;//have X ni turn aavse
        } else {
            box.innerText = "X";
            turn0 = true;//have O ni turn aavse
        }
        box.disabled = true;
        checkWinner();
    });
});
const resetgame= ()=>{
    turn0=true;
    enabledboxes ();
    msgcontainer.classList.add("hide");
}
const disabledbox = ()=>{
    for (let box of boxes){
        box.disabled= true;
    }
}
const enabledboxes= ()=>{
    for (let box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
}
const showWiner = (winner) => {
    msg.innerText = `Congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbox ();
}
const checkWinner = () => {
    for (let pattern of winPattern) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner",pos1Val);
                showWiner(pos1Val);
            }
        }
    }
}
resetBtn.addEventListener("click",resetgame);
newBtn.addEventListener("click",resetgame);


