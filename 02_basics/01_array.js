const myArr=[1,2,3,4,5]
const myHero=['Saktiman','yaya rana','mathab rana']

const myArr2= new Array(1,2,3,4,5,6,7)
// console.log(myArr);
// console.log(myHero);
// console.log(myArr2[1]);

// ***************Method*****************

// myArr.push(6)
// myArr.pop()

// myArr.unshift(10)
// myArr.shift()

// console.log(myArr.includes(12));
// console.log(myArr.indexOf(12));

// const newArr =myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// *********** Slice,Splice*********************

console.log('A ', myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log('B ',myArr);

const myn2=myArr.splice(1,3)
console.log('c',myn2);
console.log(myArr);