import { Controller, HttpException, HttpStatus, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { userService } from "src/users/users.service";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController {

    constructor(private readonly authService : AuthService){

    }

    @Post('/login')
    @UseGuards(AuthGuard('local'))
    async findUser(@Req()req): Promise<string>{
      return  this.authService.login(req.user.email,req.user.password);
    }

}