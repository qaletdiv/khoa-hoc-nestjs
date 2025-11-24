class PaymentService {
    process(amount: number): void {
        console.log(`Đang thanh toán: ${amount}`);
    }
}

class OrderService {
    private payment: PaymentService;

    // Dependency được "tiêm" vào qua constructor
    constructor(payment: PaymentService) {
        this.payment = payment;
    }

    createOrder(amount: number) {
        this.payment.process(amount);
    }
}

// Giải pháp: Chuyển việc khởi tạo PaymentService ra khỏi constructor, thay vào đó nhận nó qua tham số (Constructor Injection).

// Cách dùng bên ngoài (main.ts):
const paymentService = new PaymentService();
const orderService = new OrderService(paymentService);

orderService.createOrder(2);
