import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @RabbitSubscribe({
    exchange: 'ORDER_EXCHANGE',
    routingKey: '',
    queue: 'order.confirmation',
  })
  public async sendConfirmEmail(msg: { userEmail: string }) {
    // console.log(msg, '< here');
  }
}
