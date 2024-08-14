import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../app.service'

@Controller('users')
export class UserController {
    constructor(
        private readonly appService: AppService
    ) {

    }

    @Get()
    async list(): Promise<any> {
        return this.appService.users();
    }

    @Get(':id')
    async user(@Param('id') id?: string): Promise<any> {
        return this.appService.users(id ? parseInt(id) : undefined);
    }
}
