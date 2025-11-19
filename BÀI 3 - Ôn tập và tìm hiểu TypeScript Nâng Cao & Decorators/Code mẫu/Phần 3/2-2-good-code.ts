// LoggerService (Giữ nguyên)
export class LoggerService {
    log(message: string) {
        console.log(`[LOG]: ${message}`);
    }
}

// Dịch vụ User
export class UserService_Good {
    // Chỉ khai báo sự phụ thuộc, không khởi tạo
    private logger: LoggerService;

    // Phụ thuộc được "tiêm" (injected) vào qua constructor
    constructor(logger: LoggerService) { // <-- DI
        this.logger = logger;
    }

    getUser(id: number) {
        this.logger.log(`Fetching user ${id}`);
        // ... logic tìm user
        return { id: id, name: "Good User" };
    }
}

// --- MINH HỌA ƯU ĐIỂM: LINH HOẠT & DỄ THAY THẾ ---

// 1. Tạo một Logger khác (ví dụ: ghi log vào File giả lập)
// Lưu ý: FileLoggerService chỉ cần có cấu trúc giống LoggerService (duck typing)
class FileLoggerService {
    log(message: string) {
        console.log(`[FILE SYSTEM] Ghi vào file log.txt: ${message}`);
    }
}

// 2. Chạy với Logger thông thường
const consoleLogger = new LoggerService();
const serviceDefault = new UserService_Good(consoleLogger);
serviceDefault.getUser(1); // Output: [LOG]: Fetching user 1

// 3. Thay thế bằng FileLogger mà KHÔNG cần sửa 1 dòng code nào trong UserService_Good
const fileLogger = new FileLoggerService();
const serviceFile = new UserService_Good(fileLogger);
serviceFile.getUser(2); // Output: [FILE SYSTEM] Ghi vào file log.txt: Fetching user 2

// 4. Dễ test (Dễ giả lập):
// class MockLoggerService implements Pick<LoggerService, 'log'> {
//     log(message: string) {
//         // Không làm gì cả (hoặc ghi vào 1 mảng để kiểm tra)
//     }
// }
// const mockLogger = new MockLoggerService();
// const testService = new UserService_Good(mockLogger); // Rất dễ test
// testService.getUser(3);
