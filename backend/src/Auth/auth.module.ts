import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ordersModule } from "src/orders/orders.module";
import { usersModule } from "src/users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.stratgey";
import { LocalAuthGuard } from "./local-auth.guard";
import { PassportLocalStartgey } from "./passport.local.startgey";


@Module({
imports : [usersModule,JwtModule.register({
    secret: "secret",
    signOptions: { expiresIn: '1d' },
  }),],
providers : [PassportLocalStartgey,JwtStrategy,AuthService],
exports :[AuthService],
controllers :[AuthController]
})

export class authModule {}