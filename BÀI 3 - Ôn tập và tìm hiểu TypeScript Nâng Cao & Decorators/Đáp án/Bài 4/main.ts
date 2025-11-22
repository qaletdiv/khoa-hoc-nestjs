// 1. Định nghĩa interface cho ràng buộc (Constraint)
interface HasLength {
    length: number;
}

// 2. Viết hàm với ràng buộc: T phải có thuộc tính length
function getLength<T extends HasLength>(item: T): number {
    return item.length;
}

// 3. Kiểm tra
console.log(getLength("Hello World")); // Output: 11 (String có .length)
console.log(getLength([1, 2, 3, 4]));  // Output: 4 (Array có .length)

// console.log(getLength(123)); // Lỗi biên dịch vì number không có .length
