import { UserData } from '@/commons/decorators/user-data.decorator';
import { Body, Controller, Post } from '@nestjs/common';
import { OrderCreationDto } from './dto/order-creation.dto';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderSvc: OrderService) {}

  @Post('create')
  public async createOrder(
    @UserData() userData: { email: string },
    @Body() payload: OrderCreationDto,
  ) {
    return await this.orderSvc.create(userData.email, payload);
  }
}
