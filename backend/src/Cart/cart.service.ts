import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { where } from "sequelize/types";
import { Cart } from "./cart.modal";




@Injectable()
export class cartService{
    

    constructor(
        @InjectModel(Cart)
        private cartModel: typeof Cart
    ){}


   async createing(ing:any):Promise<Cart>{
    console.log(ing);
    const newData = {pizzaSize:ing.pizzaSize,pizzaPrice:ing.pizzaPrice,
        oregano:ing.pizzaItem.oregano,cheese:ing.pizzaItem.cheese, mozzarella:ing.pizzaItem.mozzarella  
    }
    return this.cartModel.create(newData)
   }

   async fetchIng():Promise<Cart[]>{
    return this.cartModel.findAll<Cart>();
   }


}  

