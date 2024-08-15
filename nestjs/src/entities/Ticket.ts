import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import {Room} from './Room'

@Entity({schema: 'public',name: 'Tickets'})
export class Ticket {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    room_id: number

    @Column({nullable: true})
    time_from: Date

    @Column({nullable: true})
    time_end: Date

    @ManyToOne(() => Room, (room) => room.tickets)
    @JoinColumn({name: 'room_id'})
    room: Room
}
