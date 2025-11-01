
import { Module } from '@nestjs/common';
import { HelloController } from './interface/hello.controller';
import { HelloService } from './use-case/hello.service';
import { HelloRepository } from './infra/hello.repository';

@Module({
  controllers: [HelloController],
  providers: [
    HelloService,
    { provide: 'IHelloRepository', useClass: HelloRepository }
  ],
  exports: [HelloService]
})
export class HelloModule {}
