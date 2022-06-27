/// <reference types="passport" />
import { Request } from 'express';
import { UserDto } from 'src/auth/dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getMe(req: Request): Express.User;
    delete(dto: UserDto): Promise<string>;
}
