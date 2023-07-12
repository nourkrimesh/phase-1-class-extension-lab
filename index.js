// Your code here

class Polygon {
    constructor(intArr) {
        this.sides = intArr;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((acc, side) => acc + side, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            const [sideA, sideB, sideC] = this.sides;
            return sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA;
        }
        return false;
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            const [sideA, sideB, sideC, sideD] = this.sides;
            return sideA === sideB && sideB === sideC && sideC === sideD;
        }
        return false;
    }

    get area() {
        if (this.isValid) {
            const side = this.sides[0];
            return side * side;
        }
        return undefined;
    }
}