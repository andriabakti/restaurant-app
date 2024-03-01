import { DatabaseService } from '@/configs/database/database.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SeederService {
  constructor(private readonly db: DatabaseService) {}

  public async seedFoods() {
    const foodData = await this.db.food.count();
    if (!foodData) {
      await this.db.food.createMany({
        data: [
          {
            name: 'Bibimbap',
            price: 30000,
          },
          {
            name: 'Takoyaki',
            price: 15000,
          },
          {
            name: 'Parfait',
            price: 20000,
          },
        ],
      });
    }
    return false;
  }
}
