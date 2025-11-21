import type { User } from './user.interface';

// 2. Dữ liệu giả lập (phụ thuộc)
// Đây là module cung cấp data
export const MOCK_USERS: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
];
