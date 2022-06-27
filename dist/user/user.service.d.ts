import { UserDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    deleteById(dto: UserDto): Promise<string>;
}
