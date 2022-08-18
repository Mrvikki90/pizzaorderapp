import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Op } from "sequelize";
import { Cart } from "src/Cart/cart.modal";
import { Orders } from "./orders.modal";



@Injectable()
export class OrdersService{


    constructor(
        @InjectModel(Orders)
        private OrdersModel: typeof Orders,
        @InjectModel(Cart)
        private CartModel : typeof Cart

    ){}

   async createorder(order:any,_user_id:any):Promise<any[]>{
    console.log(order);
        const data = Promise.all(order.map((order:any)=>{
            const newData = {pizzaSize:order.pizzaSize,pizzaPrice:order.pizzaPrice,
             oregano:order.oregano,cheese:order.cheese, mozzarella:order.mozzarella} 
            return  this.OrdersModel.create({...newData,user_id:_user_id})
    })) 

    await this.CartModel.destroy({
        truncate : true
    });
    return data;
   }


         
    async fetchorder(_user_id:string):Promise<Orders[]>{
        console.log(_user_id)
        const user_id = String(_user_id)
    return this.OrdersModel.findAll<Orders>({
        where : { 
            user_id : user_id 
        }
    });
    }

 

}  

