
import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { AdminService } from '../use-case/admin.service';
import { CreateAdminDto, UpdateAdminDto } from './dto';

@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async create(@Body() dto: CreateAdminDto) {
    const created = await this.adminService.create(dto);
    return created;
  }

  @Get()
  async findAll() {
    return await this.adminService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const found = await this.adminService.findById(id);
    if (!found) throw new NotFoundException('Admin not found');
    return found;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateAdminDto) {
    const updated = await this.adminService.update(id, dto);
    if (!updated) throw new NotFoundException('Admin not found');
    return updated;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removed = await this.adminService.delete(id);
    if (!removed) throw new NotFoundException('Admin not found');
    return { deleted: true };
  }
}
