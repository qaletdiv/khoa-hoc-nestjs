function ObserverLog(originalMethod: any, context: ClassMethodDecoratorContext) {
    console.log(`[Observer] Method '${String(context.name)}' đã được định nghĩa.`);
    // Không trả về gì (void) -> Hoàn toàn hợp lệ
}

class GreeterObserved {
    @ObserverLog
    greet(name: string): string {
        return `Hello, ${name}`;
    }
}

const g = new GreeterObserved();
console.log(g.greet("World")); // "Hello, World"
