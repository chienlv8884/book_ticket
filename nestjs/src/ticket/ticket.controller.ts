import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../app.service'

@Controller('tickets')
export class TicketController {
    constructor(
        private readonly appService: AppService
    ) {

    }

    @Get()
    async list(): Promise<any> {
        return this.appService.tickets();
    }

    @Get(':id')
    async user(@Param('id') id?: string): Promise<any> {
        return this.appService.tickets(id ? parseInt(id) : undefined);
    }
}
