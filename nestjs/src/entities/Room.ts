import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm"
import {Ticket} from './Ticket'

@Entity({name: 'Rooms'})
export class Room {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    name: string

    @Column({nullable: true})
    seats: number

    @OneToMany(() => Ticket, (ticket) => ticket.room)
    tickets: Ticket[];
}
