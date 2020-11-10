// 1. Write a program to construct the following pattern:  

function stars(a, x) {
    let stars = " * ";
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            console.log(stars, " ");     
            stars += a;    
        }
    }
    return stars;
}

stars(" * ", 4);

// *
// * *  
// * * *  
// * * * *  usw..

// 2. Write a program which prints the elements of the following array: 

function prArr(arr) {  // output needs improvement
    let row = 0;
    let res = [];
    console.log(arr);
    for (let i = 0; i < 3; i++) { 
        for (let j = 0; j < 1; j++) {
            res = "row " + row + " ";
            console.log(res + "\n" + arr[i] + "\n");
            row += 1;
       }
    }
    return res;
}

console.log(prArr([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));

// let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// row 0 
//  1 
//  2 
//  1
//  24
// row 1

console.log("--------------");

// 3. Write a program that will output the following using loops: 

function folge() {
    folge = "";
    for (let triple = 1; triple < 5; triple++) { 
        for(let again = 1; again < 4; again++) { 
            folge += triple + " ";
        }
    }
    return folge;
}

console.log(folge());  // 1 1 1 2 2 2 3 3 3 4 4 4

console.log("-----------");

function single() {
    folge = "";
    for (let toFour = 0; toFour < 6; toFour++) {
        for(let again = 0; again < 5; again++) {
            folge += again + " ";    
        }
    }
    return folge;
}
console.log(single());  // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
