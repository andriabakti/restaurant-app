import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { DatabaseService } from './configs/database/database.service';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  constructor(
    private readonly db: DatabaseService,
    private readonly mailerSvc: MailerService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  @RabbitSubscribe({
    exchange: 'ORDER_EXCHANGE',
    routingKey: '',
    queue: 'order.confirmation',
  })
  public async sendConfirmEmail(msg: { orderId: string; userEmail: string }) {
    const result = await this.db.orderItem.findMany({
      where: {
        orderId: msg.orderId,
      },
      include: {
        food: true,
      },
    });

    const itemList = result.map((el: any) => {
      return {
        foodName: el.food.name,
        basePrice: this.toCurrency(el.food.price),
        qty: el.quantity,
        subTotal: el.food.price * el.quantity,
      };
    });
    const total = itemList.reduce((acc: any, el: any) => {
      return acc + el.subTotal;
    }, 0);

    const emailData = {
      to: msg.userEmail,
      subject: 'Order Confirmation',
      template: 'order-confirmation.html',
      context: { itemList, totalAmount: this.toCurrency(total) },
    };
    await this.mailerSvc
      .sendMail(emailData)
      .catch((err: any) => console.log(err, '< err sent email'));
    return;
  }

  private toCurrency(amount: number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount);
  }
}
