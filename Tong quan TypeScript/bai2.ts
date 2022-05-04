let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let arr: number[]=[];
let i:number=0;
while(i<11){
    if(numbers.indexOf(i)==-1){
        arr.push(i);
    }
    i++;
}
console.log(arr)