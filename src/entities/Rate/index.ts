import { PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToMany } from "typeorm";
import { Item } from "../Item";

@Entity('rates')
export class Rate{
    @PrimaryGeneratedColumn('uuid')
    rateUuid:string;

    @Column({type:"float"})
    rate:number;
    
    @Column({length:100})
    comment:string;

    @ManyToMany(() => Item, (item)=>item.rates)
    item:Item
    

}