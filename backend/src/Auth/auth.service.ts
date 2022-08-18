import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/user.modal";
import { userService } from "src/users/users.service";


@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly userService: userService) {}

    async login(email: string, password: string): Promise<any> {

        const userData = await this.userService.getUser(email, password)
        return this.jwtService.signAsync(userData)
    }

}

