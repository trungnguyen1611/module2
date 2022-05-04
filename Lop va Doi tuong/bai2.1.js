"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bai2_1 = require("./bai2");
var watch = new bai2_1.StopWatch();
watch.now();
console.log(watch.startTime);
watch.start();
console.log(watch.startTime);
function selectionSort() {
    var arr = [];
    for (var i = 0; i < 100000; i++) {
        var rand = Math.floor(Math.random() * 100000);
        arr.push(rand);
    }
    // <lấy mảng số không trùng nhau>:
    for (var j = 0; j < arr.length; j++) {
        for (var k = 0; k < arr.length; k++) {
            if (k !== j) {
                if (arr[k] == arr[j]) {
                    arr.splice(k, 1);
                }
            }
        }
    }
    // <sắp xếp mảng từ bé đến lớn>:
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (j !== i) {
                if (arr[i] < arr[j]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
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
