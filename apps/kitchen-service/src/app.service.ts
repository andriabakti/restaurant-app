import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from './configs/database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly db: DatabaseService) {}
  getHello(): string {
    return 'Hello World!';
  }

  @RabbitSubscribe({
    exchange: 'ORDER_EXCHANGE',
    routingKey: '',
    queue: 'order.process',
  })
  public async updateOrderStatus(msg: { orderId: string }) {
    return await this.db.order.update({
      where: {
        id: msg.orderId,
      },
      data: {
        status: 'PROCESSED',
      },
      select: {
        status: true,
      },
    });
  }
}
