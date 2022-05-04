import {StopWatch} from "./bai2";
let watch=new StopWatch();
watch.now();
console.log(watch.startTime);
watch.start();
console.log(watch.startTime);

function selectionSort(){
    let arr: number[]=[];
    for (let i = 0; i < 100000; i++) {
        let rand: number=Math.floor(Math.random()*100000);
        arr.push(rand);
    }
    // <lấy mảng số không trùng nhau>:
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr.length; k++) {
            if(k!==j){
                if(arr[k]==arr[j]){
                    arr.splice(k,1);
                }
            }
        }
    }
    // <sắp xếp mảng từ bé đến lớn>:
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(j!==i){
                if(arr[i]<arr[j]){
                    let temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
            }
        }
    }
    // console.log(arr);
}
selectionSort();

watch.stop();
console.log(watch.endTime);
watch.getElapsedTime();