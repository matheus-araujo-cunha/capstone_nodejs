import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Rate } from "../Rate";
import { Rent } from "../Rent";
import { Reserve } from "../Reserve";
import { User } from "../User";

@Entity("itens")
export class Item {
  @PrimaryGeneratedColumn("uuid")
  itemUuid: string;

  @Column({ length: 120 })
  model: string;

  @Column({ length: 100 })
  brand: string;

  @Column()
  year: number;

  @Column()
  capacity: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ length: 50 })
  location: string;

  @ManyToOne(() => User, (user) => user.items, { eager: true })
  owner: User;

  @Column({ type: "float" })
  dailyPrice: number;

  @Column({ default: true })
  service: boolean;

  @Column()
  image: string;

  @Column({default:0.0,type:"float"})
  average:number

  @OneToMany(() => Rent, (rent) => rent.item)
  rents: Rent[];

  @OneToMany(() => Reserve, (reserve) => reserve.item)
  reserves: Reserve[];

  @OneToMany(() => Rate,(rate)=>rate.item,{
    eager:true
  })
  rates: Rate[];
}
