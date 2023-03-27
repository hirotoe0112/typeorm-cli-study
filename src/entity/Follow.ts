import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

/**
 * フォローテーブル
 */
@Entity()
export class Follow {
  @ManyToOne(() => User)
  @PrimaryColumn()
  @JoinColumn({
    name: "from",
    referencedColumnName: "id",
  })
  from: User;

  @ManyToOne(() => User)
  @PrimaryColumn()
  @JoinColumn({
    name: "to",
    referencedColumnName: "id",
  })
  to: User;

  @Column()
  date: Date;
}
