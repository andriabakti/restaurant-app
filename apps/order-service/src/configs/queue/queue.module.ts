import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

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
            durable: false,
          },
        },
        {
          name: 'order.process',
          options: {
            durable: false,
          },
        },
      ],
    }),
  ],
})
export class QueueModule {}
