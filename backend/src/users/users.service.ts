import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.modal";


@Injectable()
export class userService {

  constructor(
    @InjectModel(User)
    private readonly usersModel: typeof User
  ) { }

  async createUser(user: User): Promise<User> {
    return this.usersModel.create({ ...user })
  }

  async getUser(email: string, password: string): Promise<User> {
    const data: any = await this.usersModel.findOne({
      where: {
        email: email,
        password: password

      },
    })
    console.log(data.dataValues);
    return data.dataValues
  }

  async fetchUser(): Promise<User[]> {
    return this.usersModel.findAll<User>();
  }


  getUserByName(name: User, password: User): Promise<User> {
    return this.usersModel.findOne({
      where: {
        name: name,
        password: password
      }
    });
  }

}