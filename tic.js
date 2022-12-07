
debugger;
    const cellElements = document.querySelectorAll('[data-cell]')
    const winningMessageElement = document.getElementById('winningMessage')
    const winningMessageTextElement = document.querySelector('[data-winning-message-text]')

 
    let count = 0;
    let txtVal = "";

   function gameCheck(){
    var f1, f2, f3, f4, f5, f6, f7, f8, f9;
        f1 = document.getElementById("f1").value;
        f2 = document.getElementById("f2").value;
        f3 = document.getElementById("f3").value;
        f4 = document.getElementById("f4").value;
        f5 = document.getElementById("f5").value;
        f6 = document.getElementById("f6").value;
        f7 = document.getElementById("f7").value;
        f8 = document.getElementById("f8").value;
        f9 = document.getElementById("f9").value;
    
    //     let team = "";

    // if(f1 == 'X' && f2 == 'X' && f3 == 'X' || f1 == 'O' && f2 == 'O' && f3 == 'O'){
    //     f1 == 'X' && f2 == 'X' && f3 == 'X' ? team = "X" : team = "O"
    //     alert(`Player ${team} Won`);
    //     f4 = document.getElementById("f4").disabled=true;
    //     f5 = document.getElementById("f5").disabled=true;
    //     f6 = document.getElementById("f6").disabled=true;
    //     f7 = document.getElementById("f7").disabled=true;
    //     f8 = document.getElementById("f8").disabled=true;
    //     f9 = document.getElementById("f9").disabled=true;
    // }else if(f4 == 'X' && f5 == 'X' && f6 == 'X' || f4 == 'O' && f5 == 'O' && f6 == 'O'){
    //          f4 == 'X' && f5 == 'X' && f6 == 'X' ? team = "X" : team = "O"
    //     alert(`Player ${team} Won`);
    //     f1 = document.getElementById("f1").disabled=true;
    //     f2 = document.getElementById("f2").disabled=true;
    //     f3 = document.getElementById("f3").disabled=true;
    //     f7 = document.getElementById("f7").disabled=true;
    //     f8 = document.getElementById("f8").disabled=true;
    //     f9 = document.getElementById("f9").disabled=true; 
    // }else if(f7 == 'X' && f8 == 'X' && f9 == 'X' || f7 == 'O' && f8 == 'O' && f9 == 'O'){
    //          f7 == 'X' && f8 == 'X' && f9 == 'X' ? team = "X" : team = "O"
    //     alert(`Player ${team} Won`);
    //     f1 = document.getElementById("f1").disabled=true;
    //     f2 = document.getElementById("f2").disabled=true;
    //     f3 = document.getElementById("f3").disabled=true;
    //     f4 = document.getElementById("f4").disabled=true;
    //     f5 = document.getElementById("f5").disabled=true;
    //     f6 = document.getElementById("f6").disabled=true; 
    // }else if(f1 == 'X' && f4 == 'X' && f7 == 'X' || f1 == 'O' && f4 == 'O' && f7 == 'O'){
    //          f1 == 'X' && f4 == 'X' && f7 == 'X' ? team = "X" : team = "O"
    //     alert(`Player ${team} Won`);
    //     f2 = document.getElementById("f2").disabled=true;
    //     f3 = document.getElementById("f3").disabled=true;
    //     f5 = document.getElementById("f5").disabled=true;
    //     f6 = document.getElementById("f6").disabled=true; 
    //     f8 = document.getElementById("f8").disabled=true;
    //     f9 = document.getElementById("f9").disabled=true; 
    // }else if(f2 == 'X' && f5 == 'X' && f8 == 'X' || f2 == 'O' && f5 == 'O' && f8 == 'O'){
    //          f2 == 'X' && f5 == 'X' && f8 == 'X' ? team = "X" : team = "O"
    //     alert(`Player ${team} Won`);
    //     f1 = document.getElementById("f1").disabled=true;
    //     f3 = document.getElementById("f3").disabled=true;
    //     f4 = document.getElementById("f4").disabled=true;
    //     f6 = document.getElementById("f6").disabled=true; 
    //     f7 = document.getElementById("f7").disabled=true;
    //     f9 = document.getElementById("f9").disabled=true; 
    // }else if(f3 == 'X' && f6 == 'X' && f9 == 'X' || f3 == 'O' && f6 == 'O' && f9 == 'O'){
    //          f3 == 'X' && f6 == 'X' && f9 == 'X' ? team = "X" : team = "O"
    //     alert(`Player ${team} Won`);
    //     f1 = document.getElementById("f1").disabled=true;
    //     f2 = document.getElementById("f2").disabled=true;
    //     f4 = document.getElementById("f4").disabled=true;
    //     f5 = document.getElementById("f5").disabled=true; 
    //     f7 = document.getElementById("f7").disabled=true;
    //     f8 = document.getElementById("f8").disabled=true; 
    // }else if(f1 == 'X' && f5 == 'X' && f9 == 'X' || f1 == 'O' && f5 == 'O' && f9 == 'O'){
    //          f1 == 'X' && f5 == 'X' && f9 == 'X' ? team = "X" : team = "O"
    //     alert(`Player ${team} Won`);
    //     f2 = document.getElementById("f2").disabled=true;
    //     f3 = document.getElementById("f3").disabled=true;
    //     f4 = document.getElementById("f4").disabled=true;
    //     f6 = document.getElementById("f6").disabled=true; 
    //     f7 = document.getElementById("f7").disabled=true;
    //     f8 = document.getElementById("f8").disabled=true; 
    // }else if(f3 == 'X' && f5 == 'X' && f7 == 'X' || f3 == 'O' && f5 == 'O' && f7 == 'O'){
    //          f3 == 'X' && f5 == 'X' && f7 == 'X' ? team = "X" : team = "O"
    //     alert(`Player ${team} Won`);
    //     f1 = document.getElementById("f1").disabled=true;
    //     f2 = document.getElementById("f2").disabled=true;
    //     f4 = document.getElementById("f4").disabled=true;
    //     f6 = document.getElementById("f6").disabled=true; 
    //     f8 = document.getElementById("f8").disabled=true;
    //     f9 = document.getElementById("f9").disabled=true; 
    // }else 
    if((f1 == 'X' || f1 == 'O')&&(f2 == 'X' || f2 == 'O')
    &&(f3 == 'X' || f3 == 'O')&&(f4 == 'X' || f4 == 'O')
    &&(f5 == 'X' || f5 == 'O')&&(f6 == 'X' || f6 == 'O')
    &&(f7 == 'X' || f7 == 'O')&&(f8 == 'X' || f8 == 'O')
    &&(f9 == 'X' || f9 == 'O'))
            {winningMessageElement.classList.add('show')
            winningMessageTextElement.innerText = "Match Draw"}

   


// for(let i = 0; i < WINNING_COMBINATIONS.length; i++){
//     let win = WINNING_COMBINATIONS[i];
//     for (let j = 0; j<win.length; j++){
//         let IntWin = win[j];
//         console.log(IntWin)
//     }
// }
   } 
   const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

   function checkWin(txtVal, event) {
    debugger
    const cell = event.target
    debugger;
    txtVal == "X" ? "X" : "O";
    cell.classList.add(txtVal);
    return WINNING_COMBINATIONS.some(combination => {
      return combination.every(index => {
        return cellElements[index].classList.contains(txtVal)
      })
    })
  }

  
  function Clicked(event){
    let target = event.target.id;
    counter();
    document.getElementById(`${target}`).value=txtVal;
    document.getElementById(`${target}`).disabled=true;
    if(checkWin(txtVal, event)){
    winningMessageElement.classList.add('show')
    winningMessageTextElement.innerText = `${txtVal == "X" ? "X's" : "O's"} Wins!`
    }
}
  


  

// function f1Clicked(event){
//     console.log(event.target.id)
//     counter();
// document.getElementById("f1").value=txtVal;
// document.getElementById("f1").disabled=true;
// if(checkWin(txtVal, event)){
//   winningMessageElement.classList.add('show')
//   winningMessageTextElement.innerText = `${txtVal == "X" ? "X's" : "O's"} Wins!`
// }
// }

// function f2Clicked(event){
//     console.log(event.target.id)

//     counter();
// document.getElementById("f2").value=txtVal;
// document.getElementById("f2").disabled=true;
// if(checkWin(txtVal, event)){
//   winningMessageElement.classList.add('show')
//   winningMessageTextElement.innerText = `${txtVal == "X" ? "X's" : "O's"} Wins!`
// }

// }

// function f3Clicked(event){
//     counter();
// document.getElementById("f3").value=txtVal;
// document.getElementById("f3").disabled=true;
// if(checkWin(txtVal, event)){
//   winningMessageElement.classList.add('show')
//   winningMessageTextElement.innerText = `${txtVal == "X" ? "X's" : "O's"} Wins!`
// }

// }

// function f4Clicked(event){
//     counter();
// document.getElementById("f4").value=txtVal;
// document.getElementById("f4").disabled=true;
// if(checkWin(txtVal, event)){
//   winningMessageElement.classList.add('show')
//   winningMessageTextElement.innerText = `${txtVal == "X" ? "X's" : "O's"} Wins!`
// }
// }

// function f5Clicked(event){
//     counter();
// document.getElementById("f5").value=txtVal;
// document.getElementById("f5").disabled=true;
// if(checkWin(txtVal, event)){
//   winningMessageElement.classList.add('show')
//   winningMessageTextElement.innerText = `${txtVal == "X" ? "X's" : "O's"} Wins!`
// }
// }

// function f6Clicked(event){
//     counter();
// document.getElementById("f6").value=txtVal;
// document.getElementById("f6").disabled=true;
// if(checkWin(txtVal, event)){
//   winningMessageElement.classList.add('show')
//   winningMessageTextElement.innerText = `${txtVal == "X" ? "X's" : "O's"} Wins!`
// }
// }

// function f7Clicked(event){
//     counter();
// document.getElementById("f7").value=txtVal;
// document.getElementById("f7").disabled=true;
// if(checkWin(txtVal, event)){
//   winningMessageElement.classList.add('show')
//   winningMessageTextElement.innerText = `${txtVal == "X" ? "X's" : "O's"} Wins!`
// }
// }

// function f8Clicked(event){
//     counter();
// document.getElementById("f8").value=txtVal;
// document.getElementById("f8").disabled=true;
// if(checkWin(txtVal, event)){
//   winningMessageElement.classList.add('show')
//   winningMessageTextElement.innerText = `${txtVal == "X" ? "X's" : "O's"} Wins!`
// }
// }

// function f9Clicked(event){
//     counter();
// document.getElementById("f9").value=txtVal;
// document.getElementById("f9").disabled=true;
// if(checkWin(txtVal, event)){
//   winningMessageElement.classList.add('show')
//   winningMessageTextElement.innerText = `${txtVal == "X" ? "X's" : "O's"} Wins!`
// }
// }

function counter(){
    count++;
    console.log(count);
if(count % 2 == 0){
    txtVal = "O";
}else{
    txtVal = "X";
}

}

function reset(){
      winningMessageElement.classList.remove('show')

    count = 0;
document.getElementById("f1").value=" ";
document.getElementById("f2").value=" ";
document.getElementById("f3").value=" ";
document.getElementById("f4").value=" ";
document.getElementById("f5").value=" ";
document.getElementById("f6").value=" ";
document.getElementById("f7").value=" ";
document.getElementById("f8").value=" ";
document.getElementById("f9").value=" ";

document.getElementById("f1").disabled=false;
document.getElementById("f2").disabled=false;
document.getElementById("f3").disabled=false;
document.getElementById("f4").disabled=false;
document.getElementById("f5").disabled=false;
document.getElementById("f6").disabled=false;
document.getElementById("f7").disabled=false;
document.getElementById("f8").disabled=false;
document.getElementById("f9").disabled=false;
//loopCheck();
}


// function loopCheck(){
// let star = "";
// debugger;
// for(let i = 0; i < 5; i++){
// for(let j = 0; j < 5; j++){
//     star+="* ";
// }
// star += "\n";
// }
// console.log(star)
// }

// function loopCheck(){
// let star = "";
// let n = 5;
// for(let i=0; i<n; i++){
// for(let j=0; j<n; j++){
//     if(i === 0 || i === n - 1){
//         star += "* ";
//     }else{
//         if(j === 0 || j === n - 1){        
//         star += "*";
//         }else{
//         star += " ";
//         }
//     }
// }
// star += "\n";
// }
// console.log(star)
// }