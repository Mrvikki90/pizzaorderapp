import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { cartController } from "./cart.controller";
import { Cart } from "./cart.modal";
import { cartService } from "./cart.service";


@Module({
imports : [SequelizeModule.forFeature([Cart])],
providers : [cartService],
controllers :[cartController]
})


export class cartModule {}