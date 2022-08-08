import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
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
  }),usersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
