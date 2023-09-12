function parseCount(itemCount) {
    let result = Number.parseFloat(itemCount);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(itemCount) {
    try {
        return parseCount(itemCount);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let perimeterHalf = this.perimeter / 2;
        const area = ((perimeterHalf * (perimeterHalf - this.a) * (perimeterHalf - this.b) * (perimeterHalf - this.c)) ** 0.5).toFixed(3);
        return Number(area);
    }
}

function getTriangle(a, b, c) {    
    try {
        return new Triangle(a, b, c);
    }
    catch {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}