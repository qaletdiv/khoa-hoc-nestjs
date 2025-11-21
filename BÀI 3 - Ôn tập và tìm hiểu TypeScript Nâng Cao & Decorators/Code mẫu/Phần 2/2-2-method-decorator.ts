// 1. Định nghĩa Decorator (Cú pháp chuẩn TS 5.0+)
function Log(originalMethod: any, context: ClassMethodDecoratorContext) {
    const methodName = String(context.name);

    // 2. Trả về một hàm MỚI (hàm này sẽ thay thế hàm gốc)
    const newMethod = function (this: any, ...args: any[]) {
        console.log(`[LOG] Bắt đầu gọi method: ${methodName}`);
        console.log(`[LOG] Tham số: ${JSON.stringify(args)}`);

        // 3. Gọi hàm gốc (originalMethod) với đúng 'this' và tham số
        const result = originalMethod.call(this, ...args);

        console.log(`[LOG] Kết thúc method: ${methodName}`);
        console.log(`[LOG] Kết quả: ${JSON.stringify(result)}`);

        // 4. Trả về kết quả
        return result;
    };

    return newMethod; // Trả về hàm mới
}

// 2. Áp dụng Decorator
class Calculator {
    @Log
    add(a: number, b: number): number {
        console.log("... đang thực thi hàm add ...");
        return a + b;
    }
}

// 3. Sử dụng
console.log("--- Khởi tạo instance ---");
const calc = new Calculator();
console.log("--- Gọi method ---");
calc.add(5, 3);
