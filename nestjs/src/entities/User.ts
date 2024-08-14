import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: 'Users'})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    name: string

    @Column({nullable: true})
    email: string
}
