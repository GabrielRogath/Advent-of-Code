
const fs = require('fs');

const input = fs
.readFileSync("input.txt", { encoding: "utf-8" })
.split("\n")
.filter((x) => Boolean(x))
.map((x) => parseInt(x));

function puzzle(){
  console.log(input);

  let count = 0;
  for(let i=1; i<input.length; i++){

    if(input[i]> input[i-1]){
        count++;
    }
  }

  console.log(count);
}

puzzle();