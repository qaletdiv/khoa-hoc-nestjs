// Lỗi: Nhầm cú pháp 'experimental' cũ
function BadLog_OldSyntax(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Lỗi: Đây là cú pháp "experimental".
}

class GreeterCompileError {
    // Dòng @BadLog_OldSyntax dưới đây sẽ gây lỗi biên dịch:
    // "Unable to resolve signature of method decorator..."

    // @BadLog_OldSyntax
    greet(name: string): string {
        return `Hello, ${name}`;
    }
}
