import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Item } from "../Item";

@Entity("rates")
export class Rate {
  @PrimaryGeneratedColumn("uuid")
  rateUuid: string;

  @Column({ type: "float" })
  rate: number;

  @Column({ length: 100 })
  comment: string;

  @ManyToOne(() => Item, (item) => item.rates)
  item: Item;
}
