let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".rest-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO= true;

const winpatterns =[ 
          [0,1,2],
          [0,3,6],
          [0,4,8],
          [1,4,7],
          [2,5,8],
          [2,4,6],
          [3,4,5],
          [6,7,8],
        ];

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
      if (turnO){
        box.innerText="O";
        turnO=false;
      }else{
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;
      checkWinner();
    });
   
}
);


const disablebtn =()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}

const enablebtn =()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText ="";
  }
}

const showwinner = (winner)=>{
    msg.innerText=`congratulation winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disablebtn();
}

const checkWinner=()=>{
    for(let patterns of winpatterns){
     
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

      if (pos1val != "" && pos2val != "" && pos3val!= "" ){
        if (pos1val === pos2val && pos2val === pos3val){ 
         console.log("winner",pos1val);
         showwinner(pos1val);

        }
      }
    }

}

const resetgame =()=>{
   turnO=true;
   enablebtn();
   msgcontainer.classList.add("hide");
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

const showdraw = () => {
   msg.innerText = "It's a draw!"; 
   msgcontainer.classList.remove("hide");
    disablebtn();}


   