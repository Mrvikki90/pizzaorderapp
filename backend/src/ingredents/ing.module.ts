import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ingredentsController } from "./ing.controller";
import { Ingredents } from "./ing.modal";
import { ingredentsService } from "./ing.service";


@Module({
imports : [SequelizeModule.forFeature([Ingredents])],
providers : [ingredentsService],
controllers :[ingredentsController]
})


export class ingredentsModule {}