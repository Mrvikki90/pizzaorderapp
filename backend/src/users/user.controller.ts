import { Body, Controller, HttpStatus, Post, Response} from "@nestjs/common";
import { User } from "./user.modal";
import { userService } from "./users.service";


@Controller('user')

export class usersController{
    constructor(private readonly userService : userService){    
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

@Post('/login')
async findByLogin(@Response() response, @Body() user:User){
    try{
    const newUser = await this.userService.findOne(user);
    return response.json({
    newUser
    })
    }catch (error) {
     console.log(error);   
    }
    
}




}


