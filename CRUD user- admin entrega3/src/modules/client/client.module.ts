
import { Module } from '@nestjs/common';
import { ClientController } from './interface/client.controller';
import { ClientService } from './use-case/client.service';
import { ClientRepository } from './infra/client.repository';

@Module({
  controllers: [ClientController],
  providers: [
    ClientService,
    { provide: 'IClientRepository', useClass: ClientRepository }
  ],
  exports: [ClientService]
})
export class ClientModule {}
