// 1. Định nghĩa interface cho ràng buộc
interface HasId {
    id: number | string; // Cho phép id là số hoặc chuỗi
}

// 2. Dùng 'extends' để thêm ràng buộc: T phải tuân thủ interface HasId
function findById<T extends HasId>(items: T[], id: number | string): T | undefined {
    return items.find(item => item.id === id);
}

// 3. Sử dụng
interface User {
    id: number;
    name: string;
}

interface Product {
    id: string;
    productName: string;
}

const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

const products: Product[] = [
    { id: "p1", productName: "Laptop" },
    { id: "p2", productName: "Mouse" },
];

console.log(findById(users, 2)); // { id: 2, name: 'Bob' }
console.log(findById(products, "p1")); // { id: 'p1', productName: 'Laptop' }

// const strings = ["a", "b", "c"];
// findById(strings, 1); // !! Lỗi biên dịch: 'string' không 'extends HasId'.
