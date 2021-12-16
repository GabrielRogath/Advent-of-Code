const fs = require('fs');
const fILE = fs
.readFileSync('input.txt', { encoding: "utf-8" });


const input = fs.readFileSync("input.txt", { encoding: "utf-8" }).split("\r\n");

let horizontal = 0;
let depth = 0;

//Part One
input.forEach(element => {
    kataArray(element);   
});

function kataArray(x){
    let jipya = x.split(" ");
    let num = parseInt(jipya[1]);

    if(jipya[0] === 'forward'){
        
        horizontal += num;
    }else if(jipya[0] === 'down'){
        
        depth += num;
    }else {

        depth -= num
    }

    console.log(jipya);
}

console.log(horizontal * depth);




//Part Two
let aim = 0;

input.forEach(element => {
    aiming(element);
});
function aiming(x){
    let jipya = x.split(" ");
    let num = parseInt(jipya[1]);

    if(jipya[0] === 'forward'){
        
        horizontal += num;
        var a = num * aim;
        depth += a;

    }else if(jipya[0] === 'down'){
    
        aim += num;

    }else {

        aim -= num;
    }

    console.log(jipya);
}

console.log(horizontal * depth);