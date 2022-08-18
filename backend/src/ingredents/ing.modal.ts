import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class Ingredents extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @Column
    ingredents: string

    @Column
    ingPrice: number
}