import { compare } from "bcrypt";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Item } from "../Item";
import { Rent } from "../Rent";
import { Reserve } from "../Reserve";
// import { Cart } from "../Cart";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn('uuid')
    userUuid:string;

    @Column({length:50})
    name:string;
    
    @Column({unique:true, length: 50})
    email:string;

    @Column()
    password:string;

    @Column()
    phone:string;

    @Column({default:false})
    licenced?:boolean;

    @OneToMany(() => Rent, (rent) => rent.user)
    rents: Rent[]

    @OneToMany(() => Reserve, (reserve) => reserve.user)
    reserves: Reserve[]

    @OneToMany(()=> Item, (item)=>item.owner)
    items: Item[]

    comparePWD =async (pwdString:string): Promise<boolean> => {
        return await compare(pwdString, this.password)     
    }
}