import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.modal";


@Injectable()
export class userService{
    findOne(user: User) {
        throw new Error("Method not implemented.");
    }

    constructor(
        @InjectModel(User)
        private usersModel: typeof User
    ){}

   async createUser(user:User):Promise<User>{
    return this.usersModel.create({...user})
   }

   async findByLogin({ email, password }: User): Promise<User> {    
    const user = await this.usersModel.findOne({ where: { email } });
    if (!user) {
        throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
    }
    return user;  
}

}