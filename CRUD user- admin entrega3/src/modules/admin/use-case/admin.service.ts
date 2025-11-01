
import { Injectable, Inject } from '@nestjs/common';
import { AdminEntity } from '../domain/admin.entity';
import { CreateAdminDto, UpdateAdminDto } from '../interface/dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AdminService {
  constructor(@Inject('IAdminRepository') private readonly repo: any) {}

  async create(dto: CreateAdminDto): Promise<AdminEntity> {
    const entity = new AdminEntity(uuidv4(), dto.name, dto.email, dto.role || 'admin');
    return await this.repo.create(entity);
  }

  async findAll(): Promise<AdminEntity[]> {
    return await this.repo.findAll();
  }

  async findById(id: string): Promise<AdminEntity | null> {
    return await this.repo.findById(id);
  }

  async update(id: string, dto: UpdateAdminDto): Promise<AdminEntity | null> {
    const current = await this.repo.findById(id);
    if (!current) return null;
    current.name = dto.name ?? current.name;
    current.email = dto.email ?? current.email;
    current.role = dto.role ?? current.role;
    return await this.repo.update(current);
  }

  async delete(id: string): Promise<boolean> {
    return await this.repo.delete(id);
  }
}
