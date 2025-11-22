function DoubleValue(originalMethod: any, context: ClassMethodDecoratorContext) {
    return function(this: any, ...args: any[]) {
        const val = originalMethod.call(this, ...args);
        const doubled = val * 2;

        // FIX: Phải trả về giá trị đã tính toán
        return doubled;
    };
}

class TestClass {
    @DoubleValue
    getNum(): number {
        return 10;
    }
}

const t = new TestClass();
console.log(t.getNum());
