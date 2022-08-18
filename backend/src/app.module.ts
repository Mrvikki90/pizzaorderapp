import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { authModule } from './Auth/auth.module';
import { cartModule } from './Cart/cart.module';
import { Ingredents } from './ingredents/ing.modal';
import { ingredentsModule } from './ingredents/ing.module';
import { ordersModule } from './orders/orders.module';
import { usersModule } from './users/users.module';


@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5438,
    username: 'postgres',
    password: 'postgres',
    database: 'pizzaapp',
    autoLoadModels: true,
    synchronize: true
  }),usersModule,ingredentsModule,cartModule,ordersModule,authModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
