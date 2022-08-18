import { Body, Controller, Get, HttpStatus, Post, Response } from "@nestjs/common";
import { Ingredents } from "./ing.modal";
import { ingredentsService } from "./ing.service";


@Controller('ing')
export class ingredentsController {
    constructor(private readonly ingredentsService: ingredentsService) {
    }

    @Post('/add')
    async createing(@Response() response, @Body() ing: Ingredents) {
        try {
            const newIng = await this.ingredentsService.createing(ing);
            return response.status(HttpStatus.CREATED).json({
                newIng
            })
        } catch (error) {
            console.log(error);
        }
    }

    @Get('/get')
    async fetchIng() {
        try {
            const allIng = await this.ingredentsService.fetchIng();
            // console.log(allIng);
            return allIng;
        } catch (error) {
            console.log(error);
        }
    }

}