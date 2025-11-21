import { User } from './user.interface';

// 3. Class UserService
// Module này chứa logic nghiệp vụ, phụ thuộc vào User[]
export class UserService {
    private users: User[];

    // Phụ thuộc (User[]) được tiêm vào qua constructor
    constructor(usersData: User[]) {
        this.users = usersData;
    }

    // Phương thức nghiệp vụ
    getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }
}
