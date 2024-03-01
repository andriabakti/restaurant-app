import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseConfigModule } from './configs/base-config.module';
import { DatabaseModule } from './configs/database/database.module';
import { QueueModule } from './configs/queue/queue.module';

@Module({
  imports: [BaseConfigModule, DatabaseModule, QueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
