import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { RoomController } from './room/room.controller';
import { TicketController } from './ticket/ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import {User} from './entities/User'
import {Room} from './entities/Room'
import {Ticket} from './entities/Ticket'

const DbModule = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user1',
  password: 'password',
  database: 'book_ticket_development',
  entities: [User, Room, Ticket],
  synchronize: true,
});

@Module({
  imports: [DbModule, TypeOrmModule.forFeature([User,Ticket,Room])],
  controllers: [AppController, UserController, RoomController, TicketController],
  providers: [AppService],
})
export class AppModule {}
