import { DatabaseService } from '@/configs/database/database.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodService {
  constructor(private readonly db: DatabaseService) {}

  public async getFoodMenu() {
    const foods = await this.db.food.findMany();

    return {
      menu: foods,
      total: foods.length,
    };
  }
}
