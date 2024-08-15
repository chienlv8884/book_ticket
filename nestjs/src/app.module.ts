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

import {config} from './config/ormconfig'

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User,Ticket,Room])],
  controllers: [AppController, UserController, RoomController, TicketController],
  providers: [AppService],
})
export class AppModule {}
