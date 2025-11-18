function BadLog_Runtime(originalMethod: any, context: ClassMethodDecoratorContext) {
    const methodName = String(context.name);

    // Trả về hàm mới
    return function(this: any, ...args: any[]) {
        console.log(`[BadLog] Method ${methodName} đang chạy...`);

        // Gọi hàm gốc
        originalMethod.call(this, ...args);

        // Lỗi: Quên 'return' kết quả của hàm gốc!
        // return result;
    }
}

class CalculatorRuntimeError {
    // @BadLog_Runtime // mở comment dòng này sẽ bị lỗi do không cùng kiểu
    add(a: number, b: number): number {
        return a + b;
    }
}

console.log("--- Ví dụ lỗi Runtime ---");
const calcRuntime = new CalculatorRuntimeError();
const result = calcRuntime.add(5, 3);

// Sẽ in ra 'undefined' thay vì 8
console.log("Kết quả nhận được:", result);
