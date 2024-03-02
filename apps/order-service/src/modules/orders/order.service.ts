import { DatabaseService } from '@/configs/database/database.service';
import { QueueService } from '@/configs/queue/queue.service';
import { Injectable } from '@nestjs/common';
import { OrderCreationDto } from './dto/order-creation.dto';

@Injectable()
export class OrderService {
  constructor(
    private readonly db: DatabaseService,
    private readonly queueSvc: QueueService,
  ) {}

  public async create(userEmail: string, payload: OrderCreationDto) {
    const newOrder = await this.db.order.create({
      data: {
        status: 'PENDING',
        userEmail: userEmail,
      },
      select: {
        id: true,
        status: true,
      },
    });

    for (const el of payload.items) {
      await this.db.orderItem.create({
        data: {
          orderId: newOrder.id,
          foodId: el.foodId,
          quantity: el.quantity,
        },
      });
    }

    await this.queueSvc.publish('ORDER_EXCHANGE', {
      orderId: newOrder.id,
      userEmail: userEmail,
    });
    return newOrder;
  }

  public async checkStatus(orderId: string) {
    const order = await this.db.order.findUnique({
      where: {
        id: orderId,
      },
      select: {
        status: true,
      },
    });

    return {
      currentStatus: order.status,
    };
  }
}
