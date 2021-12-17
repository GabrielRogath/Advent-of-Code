
const fs = require('fs');

///part One ///////
const input = fs
.readFileSync("input.txt", { encoding: "utf-8" })
.split("\n")
.filter((x) => Boolean(x))
.map((x) => parseInt(x));

function puzzle(){
    
  let count = 0;
  for(let i=1; i<input.length; i++){

    if(input[i]> input[i-1]){
        count++;
    }
  }

  console.log(count);
}

puzzle();


////part two /////
function two(){
let countIn = 0;

let previousSum = 0;
let currentSum = 0;

for(let i= 1; i<=input.length-3; i++){
    
    
    currentSum = input[i] + input[i + 1] + input[i + 2];

    if(currentSum > previousSum && previousSum > 0){
        countIn++;
       
    }


previousSum = currentSum;

}

console.log(countIn);

}

two();