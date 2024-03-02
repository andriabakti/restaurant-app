import { Controller, Get } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller('foods')
export class FoodController {
  constructor(private readonly foodSvc: FoodService) {}

  @Get('menu')
  public async getMenu() {
    return await this.foodSvc.getFoodMenu();
  }
}
