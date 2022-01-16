console.log("Badhiya Game aaj Hi finish Karenge")
const musicTurn=new Audio('ting.mp3');
let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
let flag=false;
const checkWin = () => {
    let boxtext=document.getElementsByClassName("boxtext");
 let posibility=[
     [0,1,2,-0.3,4,0],
     [3,4,5,-0.3,12,0],
     [6,7,8,-0.3,20,0],
     [0,3,6,-8.3,12,90],
     [1,4,7,-0.3,12,90],
     [2,5,8,7.7,12,90],
     [0,4,8,-0.3,12,45],
     [2,4,6,-0.3,12,135],
 ]
 posibility.forEach(e=>{
     if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText===boxtext[e[1]].innerText) && boxtext[e[0]].innerText!==''){
         document.querySelector(".chance").innerText=boxtext[e[0]].innerText+ "  Wins";
         document.querySelector(".turn").getElementsByTagName("img")[0].style.width="10vw";
         document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
         document.querySelector(".line").style.width="25vw";

         flag= true;
     }
 })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let ele = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if (ele.innerText === '') {
            ele.innerText = turn;
            turn = changeTurn();
            musicTurn.play();
            checkWin();
            if(!flag){
                document.getElementsByClassName("chance")[0].innerText = "turn of " + turn;
            }
            
        }
    })
})
reset.addEventListener("click",()=>{
    let ele = document.querySelectorAll(".boxtext");
    Array.from(ele).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    flag=false;
    if(!flag){
        document.querySelector(".turn").getElementsByTagName("img")[0].style.width="0vw";
        document.getElementsByClassName("chance")[0].innerText = "turn of " + turn;
        document.querySelector(".line").style.width="0vw";
    }
})