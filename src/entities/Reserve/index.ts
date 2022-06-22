import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Item } from "../Item";
import { User } from "../User";

@Entity("reserves")
export class Reserve {
  @PrimaryGeneratedColumn("uuid")
  reserveUuid: string;

  @Column({ type: "float" })
  value: number;

  @Column()
  startDate: Date;

  @Column()
  finishDate: Date;

  @ManyToOne(() => User, (user) => user.reserves)
  user: User;

  @ManyToOne(() => Item, (item) => item.reserves, { eager: true })
  item: Item;
}
