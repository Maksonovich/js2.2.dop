// напиши функцию, которая принимает на вход массив чисел, и возвращает новый, в котором все элементы возведены в куб, и те
//  числа, которые кратны и трём и пяти одновременно, заменить их на 0.


const input = [7,8,15,30,2]
const output = [343,512,0,0,8]

function SumOfTwoArray (input,output) {
    for (let sum of input) {
        if (sum % 3 === 0) {
            console.log(sum*0);
        }else if (sum % 5 === 0){
            console.log(sum**0);
        }else {
            console.log(sum**3);
        }
    }
    for (let nums of output) {
        if (nums % 3 === 0) {
            console.log(nums*0);
        }else if (nums % 5 === 0) {
            console.log(nums*0);
        }else {
            console.log(nums**3);
        }
    }
    //Result Output
    let summma = 0;
    for (let i = 0;i < input.length || i < output.length; i++) {
        if (input[i])
            summma += input[i]
        if (output[i])
            summma += output[i]
    }
    return summma
}
console.log("Result of Output: " + SumOfTwoArray(input,output));