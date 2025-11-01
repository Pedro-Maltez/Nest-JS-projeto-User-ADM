
import { HelloEntity } from '../domain/hello.entity';

export class HelloRepository {
  async getGreeting(): Promise<HelloEntity> {
    // In a real app, fetch from DB or external service.
    return new HelloEntity('Hello World');
  }
}
