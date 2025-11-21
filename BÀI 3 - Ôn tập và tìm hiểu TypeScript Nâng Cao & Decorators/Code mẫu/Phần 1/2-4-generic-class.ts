// Một class lưu trữ dữ liệu
class DataStorage<T> {
    private data: T;

    constructor(initialData: T) {
        this.data = initialData;
    }

    getData(): T {
        return this.data;
    }

    setData(newData: T): void {
        this.data = newData;
    }
}

// Sử dụng với string
const stringStore = new DataStorage<string>("Initial String");
console.log(stringStore.getData().toUpperCase());

// Sử dụng với User
interface User {
    id: number;
    name: string;
}

const userStore = new DataStorage<User>({ id: 1, name: "Alice" });
console.log(userStore.getData().name);

// const mixedStore = new DataStorage<string>(123); // !! Lỗi biên dịch
