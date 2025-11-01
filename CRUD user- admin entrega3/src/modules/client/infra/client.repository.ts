
import { ClientEntity } from '../domain/client.entity';

export class ClientRepository {
  private items: ClientEntity[] = [];

  async create(entity: ClientEntity): Promise<ClientEntity> {
    this.items.push(entity);
    return entity;
  }

  async findAll(): Promise<ClientEntity[]> {
    return [...this.items];
  }

  async findById(id: string): Promise<ClientEntity | null> {
    return this.items.find(i => i.id === id) ?? null;
  }

  async update(entity: ClientEntity): Promise<ClientEntity> {
    const idx = this.items.findIndex(i => i.id === entity.id);
    if (idx === -1) return null as any;
    this.items[idx] = entity;
    return entity;
  }

  async delete(id: string): Promise<boolean> {
    const idx = this.items.findIndex(i => i.id === id);
    if (idx === -1) return false;
    this.items.splice(idx, 1);
    return true;
  }
}
