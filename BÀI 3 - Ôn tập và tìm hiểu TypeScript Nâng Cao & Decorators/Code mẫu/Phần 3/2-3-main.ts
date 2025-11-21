// Trong file main.ts
import {LoggerService, UserService_Good} from "./2-2-good-code";

// 1. Khởi tạo các phụ thuộc
const logger = new LoggerService();

// 2. Khởi tạo service chính và "tiêm" phụ thuộc vào
const appService = new UserService_Good(logger);

// 3. Chạy ứng dụng
appService.getUser(2);
