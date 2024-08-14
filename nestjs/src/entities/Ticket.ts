import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import {Room} from './Room'

@Entity({name: 'Tickets'})
export class Ticket {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    room_id: number

    @Column({nullable: true})
    time_from: number

    @ManyToOne(() => Room, (room) => room.tickets)
    @JoinColumn({name: 'room_id'})
    room: Room
}
