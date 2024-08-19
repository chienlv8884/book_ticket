import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({schema: 'public',name: 'Users'})
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({nullable: true})
    name: string

    @Column({nullable: true})
    email: string

    @Column({nullable: true})
    code: string

    @Column({nullable: true})
    access_token: string
}
