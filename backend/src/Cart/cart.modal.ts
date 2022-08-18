import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Cart extends Model{
@PrimaryKey
@AutoIncrement
@Column
id : number

@Column
pizzaSize : string

@Column
pizzaPrice :number

@Column
oregano : boolean

@Column
cheese : boolean

@Column
mozzarella : boolean


}