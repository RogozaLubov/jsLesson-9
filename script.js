//task 1
let arr = [1,2,3];

function func (elem){
    
     console.log(elem.splice(0,1)[0]);
     if(elem.length !== 0) func(elem);
}

func(arr);
//task2

function getSum (arr, sum){

    sum = sum + arr.splice(0,1)[0];

    if(arr.length !== 0) getSum(arr, sum);
    else console.log (sum);
}

let h = [1, 2, 3];
let s = 0;
getSum(h, s);
//task 3

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);
