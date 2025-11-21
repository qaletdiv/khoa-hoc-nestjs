// 1. Lặp lại code cho từng kiểu
function identityNumber(item: number): number {
    return item;
}

function identityString(item: string): string {
    return item;
}

// 2. Dùng 'any' (Mất an toàn kiểu)
// - Vấn đề: Trình biên dịch không biết kiểu trả về là gì.
// - Nếu item là number, nhưng ta lại gọi hàm .length(), code vẫn biên dịch
//   nhưng sẽ gây lỗi lúc chạy (runtime error).
function identityAny(item: any): any {
    return item;
}

let output = identityAny("myString");
console.log(output.length); // OK

let output2 = identityAny(123);
// console.log(output2.length); // !! Lỗi lúc chạy (Runtime Error)
