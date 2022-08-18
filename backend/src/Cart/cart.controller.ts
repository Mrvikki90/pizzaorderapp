import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Response} from "@nestjs/common";
import sequelize from "sequelize";
import { Cart } from "./cart.modal";
import { cartService } from "./cart.service";


@Controller('cart')

export class cartController{
    constructor(private readonly cartService : cartService){    
    }

@Post('/add')
async createing(@Response()  response, @Req() req ,@Body()body:any  ){
     console.log(body)
    try {
    const newIng = await this.cartService.createing(body);
    return response.status(HttpStatus.CREATED).json({
    newIng
    })
    }catch (error) {
     console.log(error);   
    }}

@Get('/get')
async fetchIng(){
    try {
        const allIng = await this.cartService.fetchIng();
        // console.log(allIng);
        return allIng;
        }catch (error) {
        console.log(error);
    } 
}

    @Delete('delete/:id')
    async deleteIng(@Param("id") id : Promise<Cart>){
        const deleteIng = await Cart.destroy({
            where : {
                id : id
            }
        })
        return deleteIng;
    }


   
}



