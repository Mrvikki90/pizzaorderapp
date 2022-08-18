import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { userService } from "src/users/users.service";


@Injectable()
export class PassportLocalStartgey extends PassportStrategy(Strategy){
constructor(private readonly userService:userService){
    super({ usernameField: 'email'});
}
    async validate(email:string, password:string) : Promise<any> {
    const result  = await this.userService.getUser(email,password)
    if (!result){
        throw new UnauthorizedException();
    }
      return result;
    }

}