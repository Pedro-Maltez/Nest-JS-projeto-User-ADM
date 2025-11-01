
import { Injectable, Inject } from '@nestjs/common';
import { ClientEntity } from '../domain/client.entity';
import { CreateClientDto, UpdateClientDto } from '../interface/dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ClientService {
  constructor(@Inject('IClientRepository') private readonly repo: any) {}

  async create(dto: CreateClientDto): Promise<ClientEntity> {
    const entity = new ClientEntity(uuidv4(), dto.name, dto.document, dto.email ?? null);
    return await this.repo.create(entity);
  }

  async findAll(): Promise<ClientEntity[]> {
    return await this.repo.findAll();
  }

  async findById(id: string): Promise<ClientEntity | null> {
    return await this.repo.findById(id);
  }

  async update(id: string, dto: UpdateClientDto): Promise<ClientEntity | null> {
    const current = await this.repo.findById(id);
    if (!current) return null;
    current.name = dto.name ?? current.name;
    current.document = dto.document ?? current.document;
    current.email = dto.email ?? current.email;
    return await this.repo.update(current);
  }

  async delete(id: string): Promise<boolean> {
    return await this.repo.delete(id);
  }
}
