import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

/**
 * 教材テーブル
 */
@Entity()
export class Material {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

}
