let a: number=0;
let b:number=1;
let sum:number=1;
let arr:number[]=[0,1];
let i=0;
while(i<10){
    let c:number=a+b;
    sum+=c;
    a=b;
    b=c;
    arr.push(c);
    i++;
}
console.log(sum);
console.log(arr);