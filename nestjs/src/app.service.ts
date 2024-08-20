import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/User';
import { Ticket } from './entities/Ticket';
import { Room } from './entities/Room';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
    @InjectRepository(Room) private roomRepository: Repository<Room>,
  ) {}

  async users(id?: number): Promise<User[]> {
    return await this.userRepository.find({ where: id ? { id: id } : {} });
  }

  async tickets(id?: number): Promise<Ticket[]> {
    return await this.ticketRepository.find({ where: id ? { id: id } : {} });
  }

  async rooms(id?: number): Promise<Room[]> {
    return await this.roomRepository.find({ where: id ? { id: id } : {} });
  }

  async findUser<K extends keyof {email:'',access_token:''}>(key: K, value: string): Promise<User> {
    const whereCond = {};
    whereCond[key.toString()] = value;
    console.log(whereCond)
    return await this.userRepository.findOne({
      where: whereCond,
    });
  }

  async createUser(
    name: string,
    email: string,
    code: string = null,
  ): Promise<any> {
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.access_token = code;
    return await this.userRepository.save(newUser);
  }

  getHello(): {} {
    return { ok: 1 };
  }
}
