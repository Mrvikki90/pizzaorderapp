import { Body, Controller, Get, HttpStatus, Post, Req, Response, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { OrdersService } from "./orders.service";


@Controller('order')

export class ordersController {
    constructor(private readonly OrdersService: OrdersService) {

    }

    @Post('/add')
    @UseGuards(AuthGuard('jwt'))
    async createing(@Response() response, @Req() req, @Body() order: any) {
        try {
            const newOrder = await this.OrdersService.createorder(order, req.user.id);
            console.log(newOrder);
            return response.status(HttpStatus.CREATED).json({
                newOrder
            })
        } catch (error) {
            console.log(error);
        }
    }


    @Get('/get')
    @UseGuards(AuthGuard('jwt'))
    async fetchorder(@Req() req) {
        try {
            const allOrders = await this.OrdersService.fetchorder(req.user.id);
            console.log(allOrders);
            return allOrders;
        } catch (error) {
            console.log(error);
        }
    }






}