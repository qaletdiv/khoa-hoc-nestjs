// 1. Định nghĩa Decorator Factory
function Controller(path: string) {

    // Trả về hàm Decorator thực sự
    return function (originalClass: any, context: ClassDecoratorContext) {

        // Kiểm tra xem có đúng là đang áp dụng lên Class không
        if (context.kind === 'class') {

            // context.addInitializer: Chạy logic bổ sung khi class được định nghĩa
            context.addInitializer(function (this: any) {
                // Trong addInitializer của Class, 'this' chính là Class Constructor
                this.basePath = path;

                console.log(`[System] Đã đăng ký Controller: ${String(context.name)}`);
                console.log(`[System] Base Path: ${path}`);
            });
        }
    };
}

// 2. Áp dụng (Giống NestJS)
@Controller('/api/users')
class UserController {
    // Khai báo static property để TypeScript hiểu (optional)
    static basePath?: string;

    getUsers() {
        return "Danh sách User...";
    }
}

// 3. Kiểm tra
console.log("--- Kiểm tra Metadata ---");
// Khi class được định nghĩa, decorator đã chạy và gắn 'basePath'
console.log(`Đường dẫn của UserController: ${UserController.basePath}`);
// Output: /api/users
