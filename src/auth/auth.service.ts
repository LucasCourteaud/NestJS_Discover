import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() {
        return 'SignUp'
    }
    signin() {
        return 'SignIn'
    }
}