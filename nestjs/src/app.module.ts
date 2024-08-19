import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { RoomController } from './room/room.controller';
import { TicketController } from './ticket/ticket.controller';
import { LoginController } from './login/login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule, HttpService } from '@nestjs/axios';

import {User} from './entities/User'
import {Room} from './entities/Room'
import {Ticket} from './entities/Ticket'

import {config} from './config/ormconfig'

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User,Ticket,Room]), HttpModule],
  controllers: [AppController, UserController, RoomController, TicketController, LoginController],
  providers: [AppService],
})
export class AppModule {}
