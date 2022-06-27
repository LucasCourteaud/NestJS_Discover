import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async deleteById(dto: UserDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: dto.id
            }
        });
        if (!user) {
            throw new ForbiddenException('id ' + dto.id + ' does not exist')
        }
        await this.prisma.user.delete({
            where: {
                id: user.id
            }
        })
        return 'user ' + user.id + ' has been successfully deleted'
    }
}
