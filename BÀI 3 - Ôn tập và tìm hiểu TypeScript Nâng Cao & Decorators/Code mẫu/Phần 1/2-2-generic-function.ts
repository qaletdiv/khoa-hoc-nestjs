// 'T' là biến kiểu. Bất cứ kiểu gì được truyền vào, T sẽ là kiểu đó.
function identity<T>(item: T): T {
    return item;
}

// 1. Trình biên dịch tự suy luận kiểu
let outputString = identity("hello"); // T được suy luận là string
console.log(outputString.length); // OK, trình biên dịch biết outputString là string

let outputNumber = identity(123); // T được suy luận là number
// console.log(outputNumber.length); // !! Lỗi biên dịch (Compile Error)

// 2. Chỉ định kiểu rõ ràng
let outputBoolean = identity<boolean>(true); // Chỉ định T là boolean
