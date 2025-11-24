class DataStorage<T> {
    // Khởi tạo mảng rỗng
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    getItems(): T[] {
        // Nên trả về bản copy để an toàn (optional)
        return [...this.data];
    }
}

// --- Kiểm thử ---

// Instance 1: Chỉ chứa String
const textStorage = new DataStorage<string>();
textStorage.addItem("Học");
textStorage.addItem("TypeScript");
console.log(textStorage.getItems()); // ["Học", "TypeScript"]

// Instance 2: Chỉ chứa Number
const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
console.log(numberStorage.getItems()); // [10, 20]
