
import { Module } from '@nestjs/common';
import { HelloModule } from './modules/hello/hello.module';
import { AdminModule } from './modules/admin/admin.module';
import { ClientModule } from './modules/client/client.module';

@Module({
  imports: [HelloModule, AdminModule, ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
