import { DatabaseModule } from '@/configs/database/database.module';
import { QueueModule } from '@/configs/queue/queue.module';
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [DatabaseModule, QueueModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
