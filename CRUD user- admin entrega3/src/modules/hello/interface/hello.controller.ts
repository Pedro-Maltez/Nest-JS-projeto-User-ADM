
import { Controller, Get } from '@nestjs/common';
import { HelloService } from '../use-case/hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  async getHello() {
    const result = await this.helloService.execute();
    return { message: result };
  }
}
