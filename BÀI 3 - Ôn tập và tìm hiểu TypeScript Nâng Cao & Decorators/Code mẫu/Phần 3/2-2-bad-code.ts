// Dịch vụ ghi log
class LoggerService {
    log(message: string) {
        console.log(`[LOG]: ${message}`);
    }
}

// Dịch vụ User
class UserService_Bad {
    // UserService phụ thuộc LoggerService
    private logger: LoggerService;

    constructor() {
        // VẤN ĐỀ: UserService *tự tạo* (khởi tạo cứng) LoggerService.
        // Đây là "Hard-coding dependency".
        this.logger = new LoggerService(); // <-- KHỚP NỐI CHẶT
    }

    getUser(id: number) {
        this.logger.log(`Fetching user ${id}`);
        // ... logic tìm user
        return { id: id, name: "Bad User" };
    }
}

// Hạn chế:
// 1. Khó thay thế: Nếu muốn đổi LoggerService thành FileLoggerService?
//    -> Phải sửa code bên trong class UserService_Bad.
// 2. Khó test: Khi test UserService_Bad, chúng ta cũng test luôn LoggerService.
//    Làm sao để "giả lập" (mock) LoggerService? Rất khó.

const badService = new UserService_Bad();
badService.getUser(1);
