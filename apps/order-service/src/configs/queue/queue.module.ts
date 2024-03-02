import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: process.env.RMQ_URL,
      exchanges: [
        {
          name: 'ORDER_EXCHANGE',
          type: 'fanout',
        },
      ],
      queues: [
        {
          name: 'order.confirmation',
          options: {
            durable: true,
          },
        },
        {
          name: 'order.process',
          options: {
            durable: true,
          },
        },
      ],
    }),
  ],
  providers: [QueueService],
  exports: [QueueService],
})
export class QueueModule {}
