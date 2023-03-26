import {
  Entity,
  Column,
  JoinColumn,
  PrimaryColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Material } from "./Material";
import { User } from "./User";

/**
 * 勉強履歴テーブル
 */
@Entity()
export class StudyRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true, type: 'date'})
  date: Date

  @ManyToOne(() => User)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id",
  })
  user: User;

  @ManyToOne(() => Material, { nullable: true })
  @JoinColumn({
    name: "material_id",
    referencedColumnName: "id",
  })
  material?: Material;

  @Column()
  minutes: number;
}
