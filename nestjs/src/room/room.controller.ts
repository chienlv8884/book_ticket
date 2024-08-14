import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../app.service'

@Controller('rooms')
export class RoomController {
    constructor(
        private readonly appService: AppService
    ) {

    }

    @Get()
    async list(): Promise<any> {
        return this.appService.rooms();
    }

    @Get(':id')
    async user(@Param('id') id?: string): Promise<any> {
        return this.appService.rooms(id ? parseInt(id) : undefined);
    }
}
