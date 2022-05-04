"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopWatch = void 0;
var StopWatch = /** @class */ (function () {
    function StopWatch(start, end) {
        this.startTime = start;
        this.endTime = end;
    }
    StopWatch.prototype.now = function () {
        this.startTime = new Date();
        console.log(this.startTime.toLocaleTimeString());
    };
    StopWatch.prototype.start = function () {
        this.startTime = new Date();
        console.log(this.startTime.toLocaleTimeString());
    };
    StopWatch.prototype.stop = function () {
        this.endTime = new Date();
        console.log(this.endTime.toLocaleTimeString());
    };
    StopWatch.prototype.getElapsedTime = function () {
        console.log("".concat((this.endTime.getTime() -
            this.startTime.getTime()) / 1000, " gi\u00E2y"));
    };
    return StopWatch;
}());
exports.StopWatch = StopWatch;
