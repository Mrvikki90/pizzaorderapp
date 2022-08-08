import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { usersController } from "./user.controller";
import { User } from "./user.modal";
import { userService } from "./users.service";


@Module({
imports : [SequelizeModule.forFeature([User])],
providers : [userService],
controllers : [usersController]
})


export class usersModule {}