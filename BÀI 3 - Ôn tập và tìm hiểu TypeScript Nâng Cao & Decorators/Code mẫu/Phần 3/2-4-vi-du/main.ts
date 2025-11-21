import { UserService } from './user.service';
import { MOCK_USERS } from './mock-data';

// 4. "Nơi" khởi tạo (Main.ts)
// Nơi này chịu trách nhiệm "lắp ráp" (Pure DI)

// Khởi tạo phụ thuộc (data)
const usersData = MOCK_USERS;

// Khởi tạo service và "tiêm" phụ thuộc vào
const userService = new UserService(usersData);

// 5. Chạy ứng dụng
console.log("Tìm kiếm bob@example.com:");
console.log(userService.getUserByEmail("bob@example.com"));

console.log("Tìm kiếm charlie@example.com:");
console.log(userService.getUserByEmail("charlie@example.com"));
