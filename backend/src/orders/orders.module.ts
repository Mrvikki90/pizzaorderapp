import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Cart } from "src/Cart/cart.modal";
import { ordersController } from "./orders.controller";
import { Orders } from "./orders.modal";
import { OrdersService } from "./orders.service";


@Module({
imports : [SequelizeModule.forFeature([Orders]),SequelizeModule.forFeature([Cart])],
providers : [OrdersService],
controllers :[ordersController]
})


export class ordersModule {}