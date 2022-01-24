
const fs = require('fs');

const input = fs
.readFileSync("input.txt", { encoding: "utf-8" })
.split("\r\n");

let innerArr = input[0];
let splittedInnerArr = innerArr.split("");
let numbOfIndex = splittedInnerArr.length;

let gammaRateArr = [];
let epsilonRateArr = [];
function goInside(){
    
    for(let q= 0; q <numbOfIndex; q++){

        let bitZero = 0;
        let bitOne = 0;

       for(let i=0; i< input.length; i++ ){
            let ndaniArr = input[i];
            let ndaniSplitted = ndaniArr.split("");
            let ndaniIndex = parseInt(ndaniSplitted[q]);

            if( ndaniIndex== 1){
                bitOne++;      
            }else{
                bitZero++;
            }

            if(input.length-1 == i){
                if(bitOne > bitZero){
                    gammaRateArr.push(1);
                    epsilonRateArr.push(0);
                }
                else{
                    gammaRateArr.push(0);
                    epsilonRateArr.push(1);
                }
            }
       }
    }

  
    return (gammaRateArr,epsilonRateArr);
}

goInside();

function binaryToDecimal(arrBinary){
    arrBinary.reverse();
    let arr = [...arrBinary];
     let lastNumb = 0;
    
     for(let i=0; i< arr.length; i++){
        let firtsNum = 1;
        let nextNum = 1;

         if(arr[i]==1){
             for(let j =1; j <=i; j++){
               
                nextNum = firtsNum * 2;
                firtsNum = nextNum;
             }
             
             lastNumb = lastNumb + nextNum;

         }
     }

   return lastNumb;


}

function powerConsumption(gama, epsilon){
   
    let powerConsum =  binaryToDecimal(gama) * binaryToDecimal(epsilon);

    console.log(powerConsum);
    return powerConsum;
}

powerConsumption(gammaRateArr,epsilonRateArr);



/// part two

function oxygenGenerator(){
    let lastArr= [...input];
for(let q= 0; q <numbOfIndex; q++){
    let arrOnes = [];
    let arrZeros = [];
    let bitZero = 0;
    let bitOne = 0;

   for(let i=0; i< lastArr.length; i++ ){
        let ndaniArr = lastArr[i];
        let ndaniSplitted = ndaniArr.split("");
        let ndaniIndex = parseInt(ndaniSplitted[q]);
        
        if(ndaniIndex == 1 ){
           bitOne++;
           arrOnes.push(ndaniArr);
           //console.log(arrOnes);
        }else{
           bitZero++;
           arrZeros.push(ndaniArr);
           //console.log(arrZeros);
        }     
   }

   if(bitOne >= bitZero){
       lastArr = [];
       lastArr = [...arrOnes];
       arrOnes = [];
       bitOne = 0;
   }else {     //if(bitZero > bitOne)
        lastArr = [];
        lastArr = [...arrZeros];
        arrZeros = [];
        bitZero = 0;
   }

   if(lastArr.length == 1 ){
       break;
   }

}
let obj = lastArr[0];
let arrToBin = [];
 for(let z= 0; z<obj.length; z++){
    let num = parseInt(obj[z]);
    arrToBin.push(num);
 }
 return arrToBin;

}



function CO2Scrubbe(){
    let lastArr= [...input];
for(let q= 0; q <numbOfIndex; q++){
    let arrOnes = [];
    let arrZeros = [];
    let bitZero = 0;
    let bitOne = 0;

   for(let i=0; i< lastArr.length; i++ ){
        let ndaniArr = lastArr[i];
        let ndaniSplitted = ndaniArr.split("");
        let ndaniIndex = parseInt(ndaniSplitted[q]);
        
        if(ndaniIndex == 1 ){
           bitOne++;
           arrOnes.push(ndaniArr);
           //console.log(arrOnes);
        }else{
           bitZero++;
           arrZeros.push(ndaniArr);
           //console.log(arrZeros);
        }     
   }

   if(bitZero <= bitOne){
       lastArr = [];
       lastArr = [...arrZeros];
       arrZeros = [];
       bitZero = 0;
   }else {     //if(bitOne < bitZero)
        lastArr = [];
        lastArr = [...arrOnes];
        arrOnes = [];
        bitOne = 0;
   }

   if(lastArr.length == 1 ){
       break;
   }

}

let obj = lastArr[0];
let arrToBin = [];
 for(let z= 0; z<obj.length; z++){
    let num = parseInt(obj[z]);
    arrToBin.push(num);
 }
 return arrToBin;

}


function lifeSupportRating(){
   let carbon = CO2Scrubbe();
   let oxygen = oxygenGenerator();

  let valCarbon = binaryToDecimal(carbon);
  let valOxygen = binaryToDecimal(oxygen);


  console.log(valCarbon * valOxygen);
  return valCarbon * valOxygen;
}

lifeSupportRating();