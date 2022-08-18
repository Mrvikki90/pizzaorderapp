import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, Response, UseGuards} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { User } from "./user.modal";
import { userService } from "./users.service";


@Controller('user')

export class usersController{
    constructor(
        private readonly userService : userService,
        ){    
    }

@Post('/create')
async createUser(@Response() response, @Body() user:User){
    try {
    const newUser = await this.userService.createUser(user);
    return response.status(HttpStatus.CREATED).json({
    newUser
    })
    }catch (error) {
     console.log(error);   
    }
    
}

// @Post('/login')
// @UseGuards(AuthGuard('local'))
// async findUser(@Req()req): Promise<string>{
//         const loginUser = await this.userService.loginUser(req.user.email,req.user.password);
//         if (!loginUser){
//             throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
//         }else{
//             return "hello";
//         }
// }


@Get('/get')
@UseGuards(AuthGuard('local'))
async fetchIng(): Promise<User[]>{
    try {
        const allUser = await this.userService.fetchUser();
        // console.log(allIng);
        return allUser;
        }catch (error) {
        console.log(error);
    }
}


}


