
import { Injectable, Inject } from '@nestjs/common';
import { HelloEntity } from '../domain/hello.entity';

@Injectable()
export class HelloService {
  constructor(@Inject('IHelloRepository') private readonly repo: any) {}

  async execute(): Promise<string> {
    // Use-case logic: fetch greeting from repository and apply domain rules if needed
    const entity: HelloEntity = await this.repo.getGreeting();
    // Domain rule example: ensure non-empty
    if (!entity.greeting || entity.greeting.trim() === '') {
      return 'Hello World';
    }
    return entity.greeting;
  }
}
