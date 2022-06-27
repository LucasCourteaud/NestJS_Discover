import { AuthService } from './user.service';
import { AuthDto } from '../dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<void>;
    signin(dto: AuthDto): Promise<{
        access_token: string;
    }>;
}
