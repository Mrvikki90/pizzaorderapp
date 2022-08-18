import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Ingredents } from "./ing.modal";



@Injectable()
export class ingredentsService{
    

    constructor(
        @InjectModel(Ingredents)
        private ingredentsModel: typeof Ingredents
    ){}

   async createing(ing:Ingredents):Promise<Ingredents>{
    return this.ingredentsModel.create({...ing})
   }

   async fetchIng():Promise<Ingredents[]>{
    return this.ingredentsModel.findAll<Ingredents>();
   }

 

}  

