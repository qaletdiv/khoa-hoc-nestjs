function Logger(originalMethod: any, context: ClassMethodDecoratorContext) {
    const methodName = String(context.name);

    return function(this: any, ...args: any[]) {
        console.log(`[LOG] Đang gọi method: ${methodName}`);

        // --- CODE CẦN ĐIỀN ---
        // 1. Gọi hàm gốc và lưu kết quả
        const result = originalMethod.call(this, ...args);

        // 2. Trả về kết quả để bên ngoài nhận được giá trị
        return result;
        // ---------------------
    };
}

class Calculator {
    @Logger
    sum(a: number, b: number): number {
        return a + b;
    }
}

const calculator = new Calculator();
console.log(`Sum: ${calculator.sum(1, 2)}`)
