function search (str, el) {
    const arr = str.split(''); 
    return arr;   
   /* const result = arr.filter((element) => (element) === (el));
    return result.length;*/
}

console.log(search(("Hello")));

function searchTwo (a, b) {
    const newArray =[];
    const array = a.split('');    
    for (i=0; i<array.length; i++) {
        if (array[i] === b) {
            newArray.push(array[i]);
        }
    }
    return newArray.length;
}
console.log(searchTwo("Hello", 'l'));

/*************ZADANIE 2***************************** */


function squareSum(numbers){
    const c = 0;
    const newArr = numbers.map((el) => (el)**2);
    const result = newArr.reduce((a,b) => a+b,c);
    return result;
}
console.log(squareSum([4,1,1]));

/****************ZADANIE 3***************** */

function nearestSq(n) {
    let x = Math.ceil(Math.sqrt(n));
    let y = Math.floor(Math.sqrt(n));
    if ( Math.abs(x**2 - n) > Math.abs(y**2 - n)){
        return y**2;
    }
    if(Math.abs(x**2 - n) <= Math.abs(y**2 - n)) {
        return x**2;
    }
    if (Math.abs(x**2 - n) === Math.abs(y**2 - n) && Math.abs(x**2 - n) === 0) {
        return n;
    }

}

console.log(nearestSq(111));

/***************************** */

function solution(str){
  const arr = str.split('');
  const newArr = arr.reverse();
  return newArr.join('');
}

console.log(solution('Fire'));

/******************************************* */

function addLength(str) {
    const arr = str.split(' ');
    const newArr = [];
    for (i = 0; i< arr.length; i++) {       
       a = arr[i].length;
       arr[i] = (arr[i] + ' ' + `${a}`);
       newArr.push(arr[i]);     
    };
    return newArr;      
}
console.log(addLength("you will win"));


/*************************************** */

function mango(quantity, price){
    let sum;
    if (quantity < 3) {
        sum = quantity * price;
    }
    else if (quantity == 3) {
        sum = (quantity - 1) * price;
    }
    else if (quantity > 3) {
        let s = quantity % 3;
        if (s == 0) {
            sum = (quantity - quantity/3) * price;
        } else if (s == 1) {
            sum = (quantity - ((quantity - 1) / 3)) * price;
        } else if ( s == 2) {
            sum = (quantity - ((quantity - 2) / 3)) * price;
        }
        
    }
return sum;
}

console.log(mango(5, 3));

/************* 7  */

function litres(time) {    
    return Math.floor(time*0.5);
  }

  console.log(litres(6));

  /*********************** 8 */

  function invert(array) {
    const result = array.map((el) => {
        if ((el) != 0) {
            return ((el)*(-1));
        } else {
            return ((el)*0);
        }
    });
    return result;
}
 console.log(invert([2, 4, 5, 7, 0, -1]));

 /***************** 9 ************ */

 function powersOfTwo(n){
    const result = [];
    let x;
    let i = 0;
    do {
        x = Math.pow(2,i);
        result.push(x);
        i++;        
    } while (i <= n);
    return result;
  }

  console.log(powersOfTwo(2));

  //******************* 10  */

  function grow(x){
    if (x.length <= 0) {
        return x;
    } else {
        
        const multi = x.reduce((a,b) => a*b);
        return multi;
    }
  }
  console.log(grow([1, 2, 3, 4]));

