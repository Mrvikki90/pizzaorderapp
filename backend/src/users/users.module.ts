import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { SequelizeModule } from "@nestjs/sequelize";
import { PassportLocalStartgey } from "src/Auth/passport.local.startgey";
import { usersController } from "./user.controller";
import { User } from "./user.modal";
import { userService } from "./users.service";


@Module({
imports : [SequelizeModule.forFeature([User])],
providers : [userService],
exports:[userService],
controllers : [usersController]
})


export class usersModule {}