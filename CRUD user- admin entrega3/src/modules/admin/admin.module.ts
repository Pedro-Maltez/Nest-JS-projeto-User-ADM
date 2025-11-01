
import { Module } from '@nestjs/common';
import { AdminController } from './interface/admin.controller';
import { AdminService } from './use-case/admin.service';
import { AdminRepository } from './infra/admin.repository';

@Module({
  controllers: [AdminController],
  providers: [
    AdminService,
    { provide: 'IAdminRepository', useClass: AdminRepository }
  ],
  exports: [AdminService]
})
export class AdminModule {}
