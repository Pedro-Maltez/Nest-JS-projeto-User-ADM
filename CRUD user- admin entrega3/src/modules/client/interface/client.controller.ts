
import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { ClientService } from '../use-case/client.service';
import { CreateClientDto, UpdateClientDto } from './dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() dto: CreateClientDto) {
    return await this.clientService.create(dto);
  }

  @Get()
  async findAll() {
    return await this.clientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const found = await this.clientService.findById(id);
    if (!found) throw new NotFoundException('Client not found');
    return found;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateClientDto) {
    const updated = await this.clientService.update(id, dto);
    if (!updated) throw new NotFoundException('Client not found');
    return updated;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removed = await this.clientService.delete(id);
    if (!removed) throw new NotFoundException('Client not found');
    return { deleted: true };
  }
}
