import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Item } from "../Item";
import { User } from "../User";

@Entity("rents")
export class Rent {
  @PrimaryGeneratedColumn("uuid")
  rentUuid: string;

  @Column({ type: "float" })
  value: number;

  @Column()
  startDate: Date;

  @Column()
  finishDate: Date;

  @ManyToOne(() => User, (user) => user.rents)
  user: User;

  @ManyToOne(() => Item, (item) => item.rents, { eager: true })
  item: Item;
}
