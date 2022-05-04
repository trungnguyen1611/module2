class Rectangle {
    static logNbSides() {
        return 'I have 4 sides';
    }
}

class Square extends Rectangle {
    static logDescription() {
        return Rectangle.logNbSides() + ' which are all equal';
    }
}
console.log(Square.logDescription());