import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  public async publish(exchange: string, payload: any): Promise<boolean> {
    return await this.amqpConnection.publish(exchange, '', payload);
  }
}
