import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table
export class Orders extends Model{
@PrimaryKey
@AutoIncrement
@Column
id : number


@Column
user_id : string

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