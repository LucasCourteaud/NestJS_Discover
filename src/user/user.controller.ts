import { Controller, Get, UseGuards, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import { UserDto } from 'src/auth/dto';
import { JwtGuard } from 'src/auth/guard';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @UseGuards(JwtGuard)
    // GET /users/me
    @Get('me')
    getMe(@Req() req: Request) {
        return req.user
    }

    @Post('delete')
    delete(@Body() dto: UserDto) {
        return this.userService.deleteById(dto);
    }
}
