
import { AdminEntity } from '../domain/admin.entity';

export class AdminRepository {
  private items: AdminEntity[] = [];

  async create(entity: AdminEntity): Promise<AdminEntity> {
    this.items.push(entity);
    return entity;
  }

  async findAll(): Promise<AdminEntity[]> {
    return [...this.items];
  }

  async findById(id: string): Promise<AdminEntity | null> {
    return this.items.find(i => i.id === id) ?? null;
  }

  async update(entity: AdminEntity): Promise<AdminEntity> {
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
