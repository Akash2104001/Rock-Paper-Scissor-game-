let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //Generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

























































































// for(let num=0;num<100;num++) {
//     if(num%2==0){
//         console.log("Even number",num);
//       }
      
//     }


// let gameNum = 25;
// let userNum = prompt("Guess a number :");

// while (userNum != gameNum){
//     userNum = prompt("Try again :");
// }
// console.log("You got it!");

// let fullName = prompt("Enter your name :");
// // fullName= str.length;

// let userName = "@" + fullName + fullName.length;

// console.log(userName);




// let marks = [85, 95, 90, 80, 100];
// let sum=0;

// for(let val of marks){
//     sum += val;
// }
//  let avg = sum/marks.length;
//  console.log(avg);





// let arr=[1,2,3,4,5,6,7,8,9,10];
// arr.splice(2,2,101,102);
// console.log(arr);




// function sum(a, b) {
//     sum = a + b;
//     return sum;
// }
// let result = sum(10, 20);
// console.log(result);

// const arrowsum = (a, b) => {
//     return a+b;
// }co






// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//             count++;
//         }
//     }
//     return count;
    
// }
// console.log(countVowels("apnacollage"));


// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = nums.map((num) => {
//     return num * 2;
    
// });

// console.log(result);



// let arr = [1, 2, 3, 4];

// let sum = arr.reduce((res, num) => {
//     return res + num;
// });

// console.log(sum);


// let n= prompt("Enter a number :");

// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i; 
// }

// console.log(arr);



// let newbtn= document.createElement("button");
// newbtn.innerText="click me";

// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";

// document.querySelector("body").prepend(newbtn);



// let btn1 = document.querySelector("#btn1");

// // btn1.onclick = (evt) => {

// //     console.log("evt");
// // };

// btn1.addEventListener("click", () => {
//     console.log("button clicked");
// });
// // let div= document.querySelector("div");

// div.onmouseover = () => {
//     console.log("mouse over");
// };

// let modebtn = document.querySelector("#mode");
// let currmode="light";

// modebtn.addEventListener("click", () => {
//     if(currmode=="light"){
//         currmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//       currmode="light";
//       document.querySelector("body").style.backgroundColor="white";
//     }

//     console.log(currmode);
// });
