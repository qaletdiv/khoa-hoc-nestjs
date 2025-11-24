// 1. Định nghĩa một cấu trúc chung (Interface/Type)
// (Trong TS, ta có thể dùng Interface để quy định 'hình dạng' của class)
interface MessageSender {
    send(msg: string): void;
}

class EmailSender implements MessageSender {
    send(msg: string) { console.log("Email sent: " + msg); }
}

class SmsSender implements MessageSender {
    send(msg: string) { console.log("SMS sent: " + msg); }
}

// 2. Viết lại Service sử dụng DI
class NotificationService {
    private sender: MessageSender; // Chỉ phụ thuộc vào Interface chung

    // Nhận implement từ bên ngoài (DI)
    constructor(senderImpl: MessageSender) {
        this.sender = senderImpl;
    }

    notifyUser(msg: string) {
        this.sender.send(msg);
    }
}

// --- File main.ts (Nơi cấu hình) ---

// Trường hợp 1: Dùng Email
const emailProvider = new EmailSender();
const service1 = new NotificationService(emailProvider);
service1.notifyUser("Hello via Email");

// Trường hợp 2: Đổi sang SMS (Không cần sửa code class NotificationService)
const smsProvider = new SmsSender();
const service2 = new NotificationService(smsProvider);
service2.notifyUser("Hello via SMS");
